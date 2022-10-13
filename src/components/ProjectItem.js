import React from "react";

function ProjectItem({ name, about, technologies }) {
 console.log (technologies)

//  for (const i in technologies){
//   return <span >{technologies[i]}</span>
//  }
  const renderTechList= technologies.map((tech)=> {
    return <span key = {tech} >{tech}</span>

  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechList}
      </div>
    </div>
  );
}

export default ProjectItem;
