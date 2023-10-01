import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mansi Gupta',
  title: "Hi all, I'm Mansi",
  description:
    "I'm a passionate frontend developer with expertise in React.js, Next.js, and React Native. I specialize in creating dynamic web applications and intuitive cross-platform mobile experiences. My focus is on delivering seamless, visually appealing interfaces tailored to meet specific requirements.",
  resumeLink:
    'https://drive.google.com/file/d/15GEN54xfvBYS6Kxd8trNg5FPT3IqJr_d/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'isnam01',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://manc.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/mansi-gupta-898321163/',
  github: 'https://github.com/isnam01',
  instagram: 'https://www.instagram.com/__hanzla100',
  facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/whymansii',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building multi platform apps using React Native'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
           {
          skillName: 'React Native',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'ReactJs', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'NextJs',
    progressPercentage: '70',
  },
  {
    Stack: 'React Native',
    progressPercentage: '80',
  },
  {
    Stack: 'Html',
    progressPercentage: '90',
  },
  {
    Stack: 'Css',
    progressPercentage: '80',
  },
  {
    Stack: 'Grphql',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'SKIT, Jaipur',
    subHeader: 'B.Tech in Computer Science',
    duration: 'August 2017 - April 2023',
    grade: 'Grade A',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'Bigstep Technologies',
    companyLogo: '/img/icons/common/bigstep-logo.png',
    date: 'Mar 2021 –  Current',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using React. Apart from this worked on creatig multi platform support apps using react native. Actively worked with cross-functional teams, including designers, backend developers, and testers, to ensure the timely delivery of projects.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Qwerty - A social app',
    desc: 'This project is a social media platform where in user can connect/follow their loved ones. They can create posts. Comment/like feature is also available. It uses mern stack technology.',
    github: 'https://github.com/isnam01/instaclient',
    link: 'https://qwertians.netlify.app/',
  },
  {
    name: 'Portfolio generator',
    desc: 'Backend for the portfolio generator made with nodejs and rest apis. This is collaborative project wherein I created the backend for a portfolio generator where user only had to fill in his details.Tech used is nodejs.',
    github: 'https://github.com/isnam01/portfoliogenerator',
  },
  {
    name: 'Attendance Manager',
    desc: 'This is an attendance management project. User has the ability to mark their attendance and also apply for attendance correction. This uses ejs technology.',
    github: 'https://github.com/isnam01/hr-one',
  },

];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mansi Gupta',
  description:
    'A passionate Full Stack Web and App Developer.',
  author: 'Mansi Gupta',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Mansi',
    'Mansi Gupta',
    '@isnma01',
    'manc',
    'Portfolio',
    'Mansi Portfolio ',
    'Mansi Gupta Portfolio',
  ],
};
