import alcoexpressImge from '@/assets/images/alcoexpress.png'
import axiosImage from '@/assets/images/axios.png'
import cardGameImage from '@/assets/images/cardGame.jpg'
import cssImage from '@/assets/images/css.png'
import expressImage from '@/assets/images/express.png'
import htmlImage from '@/assets/images/html.png'
import jsImage from '@/assets/images/js.png'
import marketImage from '@/assets/images/market.jpg'
import mongoImage from '@/assets/images/mongo.png'
import mongooseImage from '@/assets/images/mongoose.png'
import musicAppImage from '@/assets/images/musicAppImage.jpg'
import nestImage from '@/assets/images/nest.png'
import nextImage from '@/assets/images/next.png'
import nodeImage from '@/assets/images/node.png'
import portfolioImage from '@/assets/images/portfolio.png'
import reactImage from '@/assets/images/react.png'
import reduxImage from '@/assets/images/redux.png'
import scssImage from '@/assets/images/scss.png'
import tanstackImage from '@/assets/images/tanstack.png'
import tgAppImage from '@/assets/images/TelegramImage.jpg'
import tsImage from '@/assets/images/ts.png'
import viteImage from '@/assets/images/vite.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface iUsedTechnologiesIcons {
	react?: StaticImport
	vite?: StaticImport
	redux?: StaticImport
	tanstack?: StaticImport
	node?: StaticImport
	express?: StaticImport
	mongodb?: StaticImport
	javaScript?: StaticImport
	css?: StaticImport
	next?: StaticImport
	nest?: StaticImport
}

export interface iportfolioPageProjects {
	image: StaticImport
	descriprion: string
	usedTechnologiesIcons: iUsedTechnologiesIcons[]
	liveLink: string
	githubLink: string
}

export const portfolioPageProjects: iportfolioPageProjects[] = [
	{
		image: tgAppImage,
		descriprion:
			'Coin Farming Telegram Mini App powered by Telegram Bot. It allows users to auto register, manage progress, and farm coins via a user-friendly  interface.The backend processes data and tracks user activities.',
		usedTechnologiesIcons: [
			{
				react: reactImage,

				redux: reduxImage,
				tanstack: tanstackImage,
				node: nodeImage,

				mongodb: mongoImage,
			},
		],
		liveLink: 'https://t.me/Coinalize_bot',
		githubLink: '',
	},

	{
		image: musicAppImage,
		descriprion:
			'A website built on an API that provides music streaming. Users can search, play, and explore a wide range of tracks.',
		usedTechnologiesIcons: [
			{
				react: reactImage,

				redux: reduxImage,
				tanstack: tanstackImage,
			},
		],
		liveLink: '',
		githubLink: 'https://github.com/ixt13/musicPage',
	},
	{
		image: marketImage,
		descriprion: `Classified Ads Platform is a marketplace where users can register, post ads with photos, and browse listings.  it supports user authentication, ad management, and efficient data handling.`,
		usedTechnologiesIcons: [
			{
				react: reactImage,

				redux: reduxImage,
				tanstack: tanstackImage,
				node: nodeImage,
				mongodb: mongoImage,
			},
		],
		liveLink: '',
		githubLink: 'https://github.com/ixt13/market',
	},
	{
		image: cardGameImage,
		descriprion:
			'This is a Memory Card Game built with Vanilla JavaScript. Players flip shuffled cards to find matching pairs.',
		usedTechnologiesIcons: [
			{
				javaScript: jsImage,
				css: cssImage,
			},
		],
		liveLink: '',
		githubLink: 'https://github.com/ixt13/CardGame',
	},
	{
		image: portfolioImage,
		descriprion: `This is a personal portfolio website highlighting the user's skills, projects, and experience, serving as a digital resume for potential clients or employers.
		`,
		usedTechnologiesIcons: [
			{
				next: nextImage,
			},
		],
		liveLink: 'https://portfolio-v2-henna-one.vercel.app/',
		githubLink: 'https://github.com/ixt13/Portfolio-v2',
	},
	{
		image: alcoexpressImge,
		descriprion: `Web application that allows users to browse and purchase products online. It features product listings, a shopping cart, and user authentication.
		In Progress...`,
		usedTechnologiesIcons: [
			{
				next: nextImage,
				nest: nestImage,
			},
		],
		liveLink: 'https://alco-express.vercel.app/',
		githubLink: 'https://github.com/ixt13/alco-express',
	},
]

export const abotMeTextContent = `Hi there! I’m  Ceban Octavian, born April 27, '97 a passionate web developer with two years of experience in creating beautiful and functional websites. \n  
My journey in web development began in 2022 when I started learning the basics of HTML, CSS, and JavaScript. Since then, I’ve delved into more complex frameworks and technologies, such as React.js, Next.js and various libraries, including TanStack , Axios and another. I also develop basic APIs for working with MongoDB using Node.js, Express, and Mongoose.\n 
 For me, every project is not just a task, but an opportunity to express my creativity and solve real user problems. I strive to create intuitive interfaces and optimized server solutions to ensure that every website is not only visually appealing but also effective.\n        
I love exploring new technologies and applying them to my projects to stay in tune with modern web development trends. My goal is not just to build websites, but to create  user experiences.`

export interface iTechnologies {
	name: string
	image: StaticImport
}

export const technologies: iTechnologies[] = [
	{
		name: 'html',
		image: htmlImage,
	},
	{
		name: 'css',
		image: cssImage,
	},
	{
		name: 'scss',
		image: scssImage,
	},
	{
		name: 'javaScript',
		image: jsImage,
	},
	{
		name: 'typeScript',
		image: tsImage,
	},
	{
		name: 'react',
		image: reactImage,
	},
	{
		name: 'vite',
		image: viteImage,
	},
	{
		name: 'redux',
		image: reduxImage,
	},
	{
		name: 'axios',
		image: axiosImage,
	},
	{
		name: 'mongo',
		image: mongoImage,
	},
	{
		name: 'mongoose',
		image: mongooseImage,
	},
	{
		name: 'tanstack',
		image: tanstackImage,
	},
	{
		name: 'express',
		image: expressImage,
	},
	{
		name: 'node.js',
		image: nodeImage,
	},
	{
		name: 'vite',
		image: viteImage,
	},
	{
		name: 'Next.js',
		image: nextImage,
	},
	{
		name: 'Nest.js',
		image: nestImage,
	},
]

export interface iParagraph {
	paragraph: string
	description: string
}

export interface iTextContent {
	title: string
	textContent: iParagraph[]
}
export const studies: iTextContent = {
	title: 'Studies',
	textContent: [
		{
			paragraph:
				'College of Microelectronics and Computerized Engineering 2013-2017 - Telecommunication',
			description: '',
		},
		{
			paragraph:
				'Web Development in Online School - SkyPro, 2022-2023 (12 month) - HTML, CSS, JavaScript, React.js',
			description: '',
		},
	],
}

export const languages: iTextContent = {
	title: 'Languages',
	textContent: [
		{
			paragraph: 'Deutsch - A1 Proficiency',
			description: '',
		},
		{
			paragraph: 'English -  A2 Proficiency',
			description: '',
		},
		{
			paragraph: 'Russian - Bilingual Proficiency',
			description: '',
		},
		{
			paragraph: 'Romanian - Native Proficiency',
			description: '',
		},
	],
}

export const workExperience: iTextContent = {
	title: 'Work Experience',
	textContent: [
		{
			paragraph: 'Orange Store, B2C Sales Administrator/Consultant 2018-2021',
			description:
				'Responsibilities - Consultation on IT, GSM products, and Orange services, motivate and assessed subordinates knowledge within the store, maintained and arranged products according to standards.',
		},
		{
			paragraph:
				'Dita Estfarm, PC Operator (1C , Emails, MsOffice) 2021-11.2024',
			description:
				'Responsibilities - Operated using the 1C program, invoiced, maintained records, and dispensed medications to legal entities.',
		},
	],
}

export const devSkills: iTextContent = {
	title: 'Web Development Skills',
	textContent: [
		{
			paragraph: 'HTML, CSS/SCSS, JavaScript, TypeScript - basic knowledge',
			description: '',
		},
		{
			paragraph:
				'React.js with ReduxToolkit, Tanstack Query/Router, React Router and other modules, Next.js - basic knowledge',
			description: '',
		},
		{
			paragraph:
				'Node.JS, Express.js, MongoDB and other libraries  - basic knowledge',
			description: '',
		},
	],
}
