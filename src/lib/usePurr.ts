"use client";

import { useCallback, useEffect, useRef } from "react";

interface PurrNodes {
  ctx: AudioContext;
  master: GainNode;
  sources: AudioScheduledSourceNode[];
}

const PURR_RATE = 26; // Hz: the "rattle" of a real purr
const BREATH_RATE = 0.7; // Hz: slow inhale/exhale swell

/** Brown noise: a deep, soft rumble that sounds much more like a purr than white noise. */
function brownNoise(ctx: AudioContext, seconds = 2) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.5;
  }
  return buffer;
}

function build(): PurrNodes | null {
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  const ctx = new Ctor();

  const noise = ctx.createBufferSource();
  noise.buffer = brownNoise(ctx);
  noise.loop = true;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 380;
  lowpass.Q.value = 0.7;

  // Rattle: amplitude-modulate the rumble at ~26 Hz.
  const rattle = ctx.createGain();
  rattle.gain.value = 0.55;
  const rattleLfo = ctx.createOscillator();
  rattleLfo.frequency.value = PURR_RATE;
  const rattleDepth = ctx.createGain();
  rattleDepth.gain.value = 0.45;
  rattleLfo.connect(rattleDepth).connect(rattle.gain);

  // Breathing: slower swell on top.
  const breath = ctx.createGain();
  breath.gain.value = 0.65;
  const breathLfo = ctx.createOscillator();
  breathLfo.frequency.value = BREATH_RATE;
  const breathDepth = ctx.createGain();
  breathDepth.gain.value = 0.35;
  breathLfo.connect(breathDepth).connect(breath.gain);

  const master = ctx.createGain();
  master.gain.value = 0;

  noise.connect(lowpass).connect(rattle).connect(breath).connect(master).connect(ctx.destination);

  const sources = [noise, rattleLfo, breathLfo];
  for (const s of sources) s.start();
  return { ctx, master, sources };
}

/**
 * A synthesized cat purr (Web Audio API, no audio files).
 * `purr(intensity)` starts it or makes it louder; `stop(fadeSeconds)` fades it out.
 * Audio only starts from a user gesture (the pet click), as browsers require.
 */
export function usePurr() {
  const nodes = useRef<PurrNodes | null>(null);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const purr = useCallback((intensity: number) => {
    clearTimeout(stopTimer.current);
    if (!nodes.current) nodes.current = build();
    const n = nodes.current;
    if (!n) return;
    if (n.ctx.state === "suspended") void n.ctx.resume();
    const now = n.ctx.currentTime;
    const target = Math.min(0.55, 0.16 + intensity * 0.08);
    n.master.gain.cancelScheduledValues(now);
    n.master.gain.setValueAtTime(n.master.gain.value, now);
    n.master.gain.linearRampToValueAtTime(target, now + 0.35);
  }, []);

  const stop = useCallback((fadeSeconds = 1.2) => {
    const n = nodes.current;
    if (!n) return;
    const now = n.ctx.currentTime;
    n.master.gain.cancelScheduledValues(now);
    n.master.gain.setValueAtTime(n.master.gain.value, now);
    n.master.gain.linearRampToValueAtTime(0, now + fadeSeconds);
    clearTimeout(stopTimer.current);
    // Pause the audio graph once silent so it costs nothing while idle.
    stopTimer.current = setTimeout(() => void n.ctx.suspend(), fadeSeconds * 1000 + 100);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(stopTimer.current);
      const n = nodes.current;
      if (!n) return;
      for (const s of n.sources) s.stop();
      void n.ctx.close();
      nodes.current = null;
    },
    [],
  );

  return { purr, stop };
}
