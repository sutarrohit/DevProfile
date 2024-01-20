import React from "react";
import { CgWebsite } from "react-icons/cg";

// ITERNAL IMPORT
import Style from "./Projects.module.css";

const Projects = () => {
  type project = {
    name: string;
    gitHub: string;
    website: string;
  };

  const projectData: project[] = [
    {
      name: "Full Stack NFT Marketplace",
      gitHub: "https://github.com/sutarrohit/Full-Stack-NFTMarketplace",
      website: "https://full-stack-nft-marketplace-rtlx.vercel.app",
    },

    {
      name: "Token ICO",
      gitHub: "https://github.com/sutarrohit/Token-ICO",
      website: "https://token-ico-eight.vercel.app",
    },
    {
      name: "ChatGPT Clone",
      gitHub: "https://github.com/sutarrohit/ChatGPT",
      website: "https://chat-gpt-sutarrohit.vercel.app",
    },
    {
      name: "Profie Card",
      gitHub: "https://github.com/sutarrohit/ForntEnd-using-HTML-CSS",
      website: "https://fornt-end-using-html-css.vercel.app/",
    },

    {
      name: "Database And APIs",
      gitHub: "https://github.com/sutarrohit/DatabaseAndAPIs",
      website: "https://github.com/sutarrohit/DatabaseAndAPIs",
    },

    {
      name: "ERC20 Token",
      gitHub: "https://github.com/sutarrohit/ERC20Token",
      website: "https://github.com/sutarrohit/ERC20Token",
    },
  ];

  return (
    <div className={Style.projects} id="projects">
      <div className={Style.projects_container}>
        <div className={Style.projects_container_heading}>
          <h1>Projects</h1>
        </div>

        <div className={Style.projects_container_project}>
          {projectData.map((item, key) => {
            return (
              <div className={Style.projects_container_project_card} key={key}>
                <div className={Style.projects_container_project_card_name}>
                  <CgWebsite />
                  <p>{item.name}</p>
                </div>

                <div className={Style.projects_container_project_card_links}>
                  <a href={item.gitHub} target="_blank">
                    GitHub
                  </a>
                  <a href={item.website} target="_blank">
                    Website
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
