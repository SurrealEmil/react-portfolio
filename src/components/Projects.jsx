import React, { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
    const url = "https://api.github.com/users/SurrealEmil/repos";
    const projectNames = ["AudialAtlasService", "Lab03MiniprojektAPI", "BankNyBank", "react-portfolio"];

    const [githubProjects, setGithubProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    const filteredProjects = data.filter(proj => projectNames.includes(proj.name));
                    setGithubProjects(filteredProjects);
                    console.log(filteredProjects);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching GitHub projects:', error);
                    setError('Failed to fetch projects. Please try again later.');
                    setIsLoading(false);
                });
        // }, 3000); // Test to see that loading works
    }, []);

    return (
        <section id="projects" className='projects-info'>
            <h2>School Projects</h2>
            {isLoading ? (
                <div className='loading-projects'>
                    <SyncLoader color="#36d7b7" />
                    <p>Loading projects...</p>
                </div>
            ) : error ? (
                <div className='error-message'>{error}</div>
            ) : (
                <section className='projects'>
                    {githubProjects.map(proj => {
                        return (
                            <article className='project-card' key={proj.name}>
                                {/* <p>{proj.description}</p> */}
                                <Card>
                                    <Card.Img variant="top" src={proj.homepage} alt={`Picture of ${proj.name}`} />
                                    <Card.Body>
                                        <Card.Title>{proj.name}</Card.Title>
                                        <Card.Text>
                                            {proj.description}
                                        </Card.Text>
                                        <Button href={proj.html_url} target="_blank" rel="noopener noreferrer">View on Github</Button>
                                    </Card.Body>
                                </Card>
                            </article>
                            
                        );
                    })}
                </section>
            )}
        </section>
    );
}

export default Projects;

