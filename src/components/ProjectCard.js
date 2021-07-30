import React from "react";

const ProjectCard = (props) => {
  return (

        <div class="snippet">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div class="screenshot">
                <a href={props.link}><img src={props.img} alt="screenshot of program running" /></a>
            </div>
            <a href={props.github}>github</a>
        </div>
  );
};

export default ProjectCard;
