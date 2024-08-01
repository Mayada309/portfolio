import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import mixmaster from './assets/mixmaster.png';
import chefbotVed from './assets/chefbot.mp4';
import unsplash from './assets/unsplash.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-pink-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-pink-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-pink-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: chefbotVed,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/AdhamMagdy1/graduation-project-demo',
    title: 'chefbot',
    text:
      `Food ordering service, where restaurants could register,
      upload their data, and receive real-time order updates, made 
      by customers through our chatbot that talks in egyptian arabic!
      `,
  },
  {
    id: nanoid(),
    img: mixmaster,
    url: 'https://mixxmaster.netlify.app/',
    github: 'https://github.com/Mayada309/mixmaster',
    title: 'mixmaster',
    text: 'mixmster is a web application where you can search for drinks recipes. It provides some detials for each drink and instructions guiding you how to make it!',
  },
  {
    id: nanoid(),
    img: unsplash,
    url: 'https://monumental-pie-d2ba6d.netlify.app/',
    github: 'https://github.com/Mayada309/temp-vite-images',
    title: 'unsplash template',
    text: 'created a template using unsplash api, featuring searching and displaying results.',
  },
];
