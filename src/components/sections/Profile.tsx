import { aboutMe } from "@/data/content/profile/about-me";
import { characterData } from "@/data/content/profile/character";
import { educationData } from "@/data/content/profile/education";
import { licenseData } from "@/data/content/profile/license";
import { workExperienceData } from "@/data/content/profile/work-experience";
import { PointSpan, Text14, Title18 } from "@/components/ui/Text-styled";

export default function Profile() {
  return (
    <div id="profile" className="w-full h-[100vh]">
      <div className="w-[70vw] h-full mx-auto grid grid-cols-[2fr_5fr] items-center border-x-[1px] border-gray-point divide-x-[1px] divide-gray-point">
        <div className="p-[30px] h-[70vh] flex items-center border-y-[1px] border-gray-point divide-y-[1px] divide-gray-point">
          <div className="profile-img" />
        </div>
        <div className="h-[70vh] flex items-center border-y-[1px] border-gray-point divide-y-[1px] divide-gray-point">
          <ul className="w-full grid p-[20px] gap-[20px]">
            <li className="flex flex-col gap-[5px]">
              <Title18>ABOUT ME</Title18>
              <Text14 className="flex gap-[15px]">
                {aboutMe.map((item, index) => (
                  <span key={item.label} className={index === 0 ? "t-sb-14" : ""}>
                    {item.value}
                  </span>
                ))}
              </Text14>
            </li>
            <li className="flex flex-col gap-[5px] ">
              <Title18>CHARACTER</Title18>
              <Text14 className="flex gap-[15px]">
                {characterData.map((item, index) => (
                  <span key={item.id} className={index === 0 ? "t-sb-14" : ""}>
                    {item.text}
                  </span>
                ))}
              </Text14>
            </li>
            <li className="flex flex-col gap-[5px] ">
              <Title18>EDUCATION</Title18>
              {educationData.map((item) => (
                <Text14 key={item.id} className="flex gap-[15px]">
                  <span>{item.date}</span>
                  <PointSpan>{item.title}</PointSpan>
                  <span>{item.location}</span>
                </Text14>
              ))}
            </li>
            <li className="flex flex-col gap-[5px] ">
              <Title18>WORK EXPERIENCE</Title18>
              {workExperienceData.map((item) => (
                <Text14 key={item.id} className="flex gap-[15px]">
                  <span>{item.date}</span>
                  <PointSpan>{item.title}</PointSpan>
                  <span>{item.location}</span>
                </Text14>
              ))}
            </li>
            <li className="flex flex-col gap-[5px] ">
              <Title18>LICENSE</Title18>
              {licenseData.map((item) => (
                <Text14 key={item.id} className="flex gap-[20px]">
                  <span>{item.date}</span>
                  <PointSpan>{item.title}</PointSpan>
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
