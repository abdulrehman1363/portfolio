
import React from "react";
import teachingly from '../assets/teachingly.png'
import coachingly from '../assets/coachingly.png'
import databot from '../assets/databot.png'
import udeo from '../assets/udeo.jpg'
import ScreenBackground from "./ScreenBackground";
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Teachingly' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={teachingly} alt="" />
            </a>}
            {title=='Databot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={databot} alt="" />
            </a>}
            {title=='UDEO Globe' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={udeo} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <ScreenBackground />
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Teachingly',
        description:`At Teachingly, I've played a key role as the lead developer. Our eLearning platform is up and running,
                    making good money. I've built important features like payment processing, certification management, drip-feeding
                    content, and assessment tools e.g, Quiz, Survey, Worksheet and Poll. These features help teachers and students
                    connect smoothly, handle payments, issue certificates, release content gradually, and assess student progress. With
                    dedication and creative solutions, I've helped Teachingly become a successful hub for online education, benefiting
                    oth teachers and learner`,
        image: {teachingly},
        links: 'https://teachingly.com',
        technologies:['Laravel' , 'nodeJs' , 'mysql' , 'Stripe' , 'git' , 'jira' , 'ReactJS']
    },
    {
        title:'Databot',
        description: `a comprehensive CRM platform designed for tracking clients, managing purchase history,
                providing helpdesk support, and organizing contacts. The platform also includes functionality for creating and
                optimizing sales funnels.`,
        image: {databot},
        technologies:[ 'ReactJS' , 'nodeJs' , 'laravel' , 'mysql' , 'git' , 'Agile' , 'Scrum' , 'clickup']
    },
    {
        title:'UDEO Globe',
        description: `UDEO Globe is an innovative e-commerce platform designed for mobile-to-mobile sales, streamlining
            the buying and selling processes to enhance user convenience. As a key member of a dynamic 5-member team, I
            played a pivotal role in developing the platform's backend infrastructure, focusing on creating robust and efficient
            RESTful APIs using Express.js.`,
        image: {udeo},
        git:"https://github.com/nithingooud/vpn_studios",
        technologies:[ 'Laravel' , 'nodeJs' , 'mysql' , 'Stripe' , 'git' , 'jira']
    }

]

export default Projects