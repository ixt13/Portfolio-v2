import axiosImage from '@/assets/images/axios.png'
import cssImage from '@/assets/images/css.png'
import expressImage from '@/assets/images/express.png'
import htmlImage from '@/assets/images/html.png'
import jsImage from '@/assets/images/js.png'
import mongoImage from '@/assets/images/mongo.png'
import mongooseImage from '@/assets/images/mongoose.png'
import nodeImage from '@/assets/images/node.png'
import reactImage from '@/assets/images/react.png'
import reduxImage from '@/assets/images/redux.png'
import scssImage from '@/assets/images/scss.png'
import tanstackImage from '@/assets/images/tanstack.png'
import tsImage from '@/assets/images/ts.png'
import viteImage from '@/assets/images/vite.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
export const abotMeTextContent = `Hi there! I’m  Ceban Octavian, born April 27, '97 a passionate web developer with two years of experience in creating beautiful and functional websites. \n  
My journey in web development began in 2022 when I started learning the basics of HTML, CSS, and JavaScript. Since then, I’ve delved into more complex frameworks and technologies, such as React.js and various libraries, including TanStack , Axios and another. I also develop basic APIs for working with MongoDB using Node.js, Express, and Mongoose.\n 
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
		name: 'vite',
		image: viteImage,
	},
	{
		name: 'express',
		image: expressImage,
	},
	{
		name: 'node.js',
		image: nodeImage,
	},
]
