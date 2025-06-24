import { aboutMe } from "@/data/content/profile/about-me";
import { characterData } from "@/data/content/profile/character";
import { educationData } from "@/data/content/profile/education";
import { licenseData } from "@/data/content/profile/license";
import { workExperienceData } from "@/data/content/profile/work-experience";
import { PointSpan14, Text14, Title18 } from "@/components/ui/Text-styled";

export default function Profile() {
  return (
    <div id="profile" className="w-full h-[100vh]">
      <div className="w-[80vw] max-w-[1000px] gap-[30px] h-full mx-auto flex items-center justify-between">
        <div className="profile-img" />
        <div className="flex items-center">
          <ul className="w-full grid p-[20px] gap-[15px] text-nowrap">
            <li className="flex flex-col gap-[2px]">
              <Title18>ABOUT ME</Title18>
              <Text14 className="flex gap-[10px]">
                {aboutMe.map((item, index) => (
                  <span key={item.label} className={index === 0 ? "t-sb-14" : ""}>
                    {item.value}
                  </span>
                ))}
              </Text14>
            </li>
            <li className="flex flex-col gap-[2px] ">
              <Title18>CHARACTER</Title18>
              <Text14 className="flex gap-[10px]">
                {characterData.map((item, index) => (
                  <span key={item.id} className={index === 0 ? "t-sb-14" : ""}>
                    {item.text}
                  </span>
                ))}
              </Text14>
            </li>
            <li className="flex flex-col gap-[2px] ">
              <Title18>EDUCATION</Title18>
              {educationData.map((item) => (
                <Text14 key={item.id} className="flex gap-[10px]">
                  <span>{item.date}</span>
                  <PointSpan14>{item.title}</PointSpan14>
                  <span>{item.location}</span>
                </Text14>
              ))}
            </li>
            <li className="flex flex-col gap-[2px] ">
              <Title18>WORK EXPERIENCE</Title18>
              {workExperienceData.map((item) => (
                <Text14 key={item.id} className="flex gap-[10px]">
                  <span>{item.date}</span>
                  <PointSpan14>{item.title}</PointSpan14>
                  <span>{item.location}</span>
                </Text14>
              ))}
            </li>
            <li className="flex flex-col gap-[2px] ">
              <Title18>LICENSE</Title18>
              {licenseData.map((item) => (
                <Text14 key={item.id} className="flex gap-[10px]">
                  <span>{item.date}</span>
                  <PointSpan14>{item.title}</PointSpan14>
                  <span>{item.location}</span>
                </Text14>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
