import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Skills.module.css";
import images from "../../img/skills/index";

const Skills = () => {
  type skillsObject = {
    name: string;
    imgURL: any;
  };

  const codingSkills: skillsObject[] = [
    { name: "JavaScript", imgURL: images.javascript },
    { name: "TypeScript", imgURL: images.typscript },
    { name: "React.js", imgURL: images.reactjs },
    { name: "Node.js", imgURL: images.nodejs },
    { name: "Express.js", imgURL: images.express },
    { name: "HTML", imgURL: images.html },
    { name: "CSS", imgURL: images.css },
    { name: "Solidity", imgURL: images.solidity },
  ];

  const toolsAndTechnologies: skillsObject[] = [
    { name: "MongoDB", imgURL: images.mongodb },
    { name: "DevOps", imgURL: images.devops },
    { name: "Kubernetes", imgURL: images.kubernets },
    { name: "Microservices", imgURL: images.microservice },
    { name: "REST APIs", imgURL: images.api },
    { name: "Blockchain", imgURL: images.blockchain },
  ];

  return (
    <div className={Style.skills} id="skills">
      <div className={Style.skills_container}>
        {/* codingskills */}

        <div className={Style.skills_container_codingSkills}>
          <h2>Coding Skills</h2>
          <div className={Style.skills_container_codingSkills_data}>
            {codingSkills.map((item, key) => {
              return (
                <div
                  className={Style.skills_container_codingSkills_info}
                  key={key}
                >
                  <Image src={item.imgURL} alt={item.name} width={50} />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* tools  */}

        <div className={Style.skills_container_Tools}>
          <h2>Tools And Technologies</h2>
          <div className={Style.skills_container_Tools_data}>
            {toolsAndTechnologies.map((item, key) => {
              return (
                <div className={Style.skills_container_Tools_info} key={key}>
                  <Image src={item.imgURL} alt={item.name} width={50} />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
