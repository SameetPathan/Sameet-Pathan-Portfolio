
import React from "react";
import Footer from './Footer'

const ProjectCard = ({  title, description, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
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
                <a href="https://github.com/sameetpathan" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
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
        title: 'Cab Booking System',
        description: 'Developed a web application for cab booking services.',
        image: {}, // Add image link if available
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL']
    },
    {
        title: 'PCMC Pune Android App',
        description: 'Developed an Android app for PCMC Pune to expedite the processing of legal documents.',
        image: {}, // Add image link if available
        technologies: ['Android', 'Java', 'XML']
    },
    {
        title: 'MSBTE Marksheet Data Extraction',
        description: 'Desktop application used by colleges for mark sheet extraction, developed using Python and BeautifulSoup for automation.',
        image: {}, // Add image link if available
        technologies: ['Python', 'BeautifulSoup']
    },
    {
        title: 'Farmers Sugarcane Management',
        description: 'Freelance project for final year students, developed using HTML, CSS, JavaScript, Bootstrap, Git, GitHub, PHP, and SQL.',
        image: {}, // Add image link if available
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'SQL']
    },
    {
        title: 'Staff Appraisal Management System',
        description: 'Freelance project for final year students, developed using HTML, CSS, JavaScript, Bootstrap, Git, GitHub, PHP, and SQL.',
        image: {}, // Add image link if available
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'SQL']
    },
    {
        title: 'IOT Based Agriculture',
        description: 'Freelance project for final year students, developed using Embedded C, Arduino UNO, and sensors.',
        image: {}, // Add image link if available
        technologies: ['Embedded C', 'Arduino UNO', 'Sensors']
    },
    {
        title: 'UNI Blockchain Project',
        description: 'Freelance project for final year students, developed using DAO, NFT, Blockchain, and Web3.',
        image: {}, // Add image link if available
        technologies: ['DAO', 'NFT', 'Blockchain', 'Web3']
    },
    {
        title: 'Farmer and Dealer Direct Communication',
        description: 'Freelance project for final year students, developed using React Native, Bootstrap, HTML, JavaScript, and Firebase.',
        image: {}, // Add image link if available
        technologies: ['React Native', 'Bootstrap', 'HTML', 'JavaScript', 'Firebase']
    },
    {
        title: 'Smart Care DApp in Blockchain',
        description: 'Built a decentralized web application for doctors, patients, medicals, and pharma companies to build trust. Utilized skills such as ReactJS, Bootstrap, Netlify, Blockchain, Solidity, Ethereum, MetaMask, HTML, CSS, JavaScript, and smart contracts.',
        image: {}, // Add image link if available
        technologies: ['ReactJS', 'Bootstrap', 'Blockchain', 'Solidity', 'Ethereum', 'MetaMask', 'HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Meswa Company Website',
        description: 'Developed a web application to help COVID-affected individuals.',
        image: {}, // Add image link if available
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Location Based Feature Analysis Project',
        description: 'A React application focused on analyzing features based on geographical locations.',
        image: {}, // Add image link if available
        technologies: ['React', 'JavaScript']
    },
    {
        title: 'Twitter Sentiment Analysis',
        description: 'A React application for analyzing sentiments on Twitter using data analytics and machine learning.',
        image: {}, // Add image link if available
        technologies: ['React', 'Machine Learning', 'JavaScript']
    },
    {
        title: 'Legal Documents Management',
        description: 'A blockchain-based system developed for managing legal documents efficiently.',
        image: {}, // Add image link if available
        technologies: ['Blockchain', 'Smart Contracts']
    },
    {
        title: 'Voting System',
        description: 'A blockchain-based voting system using secure technology.',
        image: {}, // Add image link if available
        technologies: ['Blockchain', 'Smart Contracts']
    },
    {
        title: 'Plant Disease Detection System',
        description: 'A machine learning project to detect plant diseases.',
        image: {}, // Add image link if available
        technologies: ['Machine Learning', 'Python']
    },
    {
        title: 'Mood-Based Chat and Song Prediction',
        description: 'A machine learning project for chat-based mood detection and song prediction.',
        image: {}, // Add image link if available
        technologies: ['Machine Learning', 'Python']
    }
    
];


export default Projects