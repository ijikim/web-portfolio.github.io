import { projectsData } from "@/data/content/projects/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div id="projects" className="h-[100vh] flex justify-center items-center">
      <ul className="w-[70vw] grid grid-cols-[1fr_1fr_1fr] gap-[30px]">
        {projectsData.map((item) => (
          <li key={item.id} className="flex flex-col p-[20px] bg-white-main/50 rounded-lg">
            <h3 className="t-eb-18">{item.title}</h3>
            {projectsData[0].text.map((text, i) => (
              <p key={i} className="t-r-14">
                {text}
              </p>
            ))}
            <div className="flex gap-[10px] text-nowrap t-r-14 mt-[10px]">
              <Link
                to={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-point/30 p-[5px] rounded-lg hover:bg-gray-point/50"
              >
                사이트
              </Link>
              <Link
                to={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-point/30 p-[5px] rounded-lg hover:bg-gray-point/50"
              >
                깃허브
              </Link>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-point/30 p-[5px] rounded-lg hover:bg-gray-point/50"
              >
                기획안
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
