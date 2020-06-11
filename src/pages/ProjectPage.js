import React from 'react';

const projects = [
    {
        title: "MLBlocks",
        description: (<div>
            <a href="https://hdi-project.github.io/MLBlocks/">MLBlocks</a> is an open-source 
            framework that streamlines the process of building machine learning models from 
            any functions in Python. I contributed to this library during 
            my <a href="https://urop.mit.edu">UROP</a> under 
            the <a href="https://dai.ids.mit.edu">Data to AI Lab</a> at MIT, including creating
            automated diagrams for pipelines.
        </div>),
    },
    {
        title: "TransmogrifAI",
        description: (<div>
            <a href="https://transmogrif.ai">TransmogrifAI</a> is an open-source automated machine 
            learning library written in Scala and running on Spark. The library consists of many 
            built-in transformations, as well as building blocks to create additional 
            transformations. The library also provides a simple way to pipeline these components 
            and train models. In addition to working on Salesforce specific features, I also 
            contributed to this library during my internship at Salesforce.
            </div>),
    },
    {
        title: "Affinity",
        description: (<div>
            <a href="https://affinity.mit.edu/">Affinity</a> is a deep learning library used to 
            predict molecular geometries and their interactions. I researched and contributed to 
            this library during my <a href="https://urop.mit.edu">UROP</a> under
            the <a href="https://www.media.mit.edu/groups/molecular-machines/overview/">Molecular 
            Machines Group</a> in the Media Lab at MIT.
        </div>),
    }
];

function getProjectInfo(project) {
    return (
        <div className="project" key={project.title}>
            <h3 className="project-title">
                {project.title}
            </h3>
            <div className="project-description">
                {project.description}
            </div>
        </div>
    );
}

const ProjectPage = () => {
    return (
        <div className="project-page">
            {projects.map((project) => {
                return getProjectInfo(project);
            })}
        </div>
    );
};

export default ProjectPage;
