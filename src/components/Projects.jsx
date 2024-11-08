import React, { useEffect, useState } from "react";
import Footer from './Footer';

const ProjectCard = ({ title, description, languages, repoUrl }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-6">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {languages.map((language, index) => (
                        <p key={`${index}-${language}`} className='text-[14px] text-blue-500'>
                            #{language}
                        </p>
                    ))}
                </div>
                <a href={repoUrl} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const username = "sameetpathan"; // Replace with your GitHub username
                const headers = {
                    Authorization: `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`,
                };
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
                
                const reposData = await reposResponse.json();

                const projectData = await Promise.all(
                    reposData.map(async (repo) => {
                        const languagesResponse = await fetch(repo.languages_url);
                        const languagesData = await languagesResponse.json();
                        const languages = Object.keys(languagesData);

                        // Fetch README content
                        const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`);
                        let description = "";
                        if (readmeResponse.ok) {
                            const readmeData = await readmeResponse.json();
                            const content = atob(readmeData.content);
                            description = content.split('\n')[0]; // Get the first line as a short description
                        }

                        return {
                            title: repo.name,
                            description: description || repo.description || "No description available",
                            languages: languages,
                            repoUrl: repo.html_url,
                        };
                    })
                );

                setProjects(projectData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className="bg-black">
            {loading ? (
                <div className="text-white text-center">Loading projects...</div>
            ) : (
                <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            languages={item.languages}
                            repoUrl={item.repoUrl}
                        />
                    ))}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Projects;
