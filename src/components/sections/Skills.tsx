import { useEffect, useRef, useState } from "react";
import { skillsData } from "@/data/content/skills/skills";
import { Text18, TextSpan18, Title32 } from "@/components/ui/Text-styled";

const MARQUEE_SPEED = 150; // 1초 당 이동 px

export default function Skills() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    if (marqueeRef.current) {
      const width = marqueeRef.current.scrollWidth;
      setDuration(width / MARQUEE_SPEED);
    }
  }, [skillsData.length]);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };
  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div id="skills" className="h-[100vh] flex flex-col items-center justify-center gap-[7vh]">
      {/* marquee 컨테이너 */}
      <div className="marquee-style">
        <div
          className="animate-marquee"
          ref={marqueeRef}
          style={{
            animationDuration: `${duration}s`,
            willChange: "transform",
          }}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {[...skillsData, ...skillsData].map((item, i) => (
            <button
              key={item.title + i}
              type="button"
              tabIndex={-1}
              className="flex-shrink-0 h-[70px] mx-[15px] border-none outline-none transition-transform duration-200 ease-in-out cursor-pointer hover:scale-90 active:scale-90"
              onClick={() => setSelectedIndex(i % skillsData.length)}
            >
              <img src={item.path} alt={item.title} className="w-full h-full" draggable={false} />
            </button>
          ))}
        </div>
      </div>

      {/* 선택된 기술 표시 */}
      <div className="w-[80vw] h-[55vh] py-[30px] px-[40px] rounded-xl bg-white/50 overflow-hidden">
        <div className="h-full hidden-scroll">
          <Title32 className="mb-[15px] flex items-center">
            {selectedIndex !== null ? skillsData[selectedIndex].title : "Click! ⬆️⬆️"}
            <TextSpan18 className="ml-[10px]">
              {selectedIndex !== null ? skillsData[selectedIndex].star : "Click! ⬆️⬆️"}
            </TextSpan18>
          </Title32>
          <Text18 className="flex flex-col gap-[10px] ml-[10px]">
            {selectedIndex !== null
              ? skillsData[selectedIndex].text.map((line, i) => (
                  <span key={i}>
                    <strong className="t-sb-18 mr-[10px]">{i + 1}.</strong>
                    {line}
                  </span>
                ))
              : "선택한 기술의 설명이 여기에 표시됩니다."}
          </Text18>
        </div>
      </div>
    </div>
  );
}
