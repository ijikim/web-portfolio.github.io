import { titleData } from "@/data/title";
import { menuData } from "@/data/menu";
import { Nemu, Point, Title48 } from "@/components/ui/Text-styled";
import { motion } from "framer-motion";

export default function Home() {
  // 스크롤 이동 함수
  const handleMenuClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="home" className="w-full h-[200vh] grid grid-rows-2 divide-y-[1px] divide-gray-point">
      {/* Home */}
      <div className="w-full home-bg">
        <div className="w-[70vw] h-full mx-auto flex flex-col justify-center items-center gap-[10px] border-x-[1px] border-gray-point">
          <Title48>{titleData.title}</Title48>
          <Point>
            <span className="text-red-point">{titleData.point}</span>
            {titleData.text}
            <span className="!text-black-main">{titleData.name}</span>
          </Point>
        </div>
      </div>

      {/* List */}
      <div className="w-full">
        <div className="w-[70vw] h-full mx-auto grid grid-cols-[3fr_4fr] border-x-[1px] border-gray-point divide-x-[1px] divide-gray-point">
          <div className="flex justify-center items-center">
            <Title48>CONTENTS</Title48>
          </div>
          <div className="flex justify-center items-center">
            <ul className="grid gap-[40px]">
              {menuData.map((item, index) => (
                <Nemu
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{
                    overflow: "hidden",
                    height: 30,
                  }}
                >
                  <motion.button
                    type="button"
                    onClick={() => handleMenuClick(item.path)}
                    className="bg-transparent border-none outline-none cursor-pointer"
                    style={{ display: "block" }}
                    initial="initial"
                    whileHover="hover"
                    variants={{
                      initial: { y: 0 },
                      hover: { y: "-50%" },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <p className="flex gap-[10px] h-[30px]">
                      <span>0{index + 1}</span>
                      <span className="t-eb-24">{item.title}</span>
                      <span>{item.text}</span>
                    </p>
                    <p className="flex gap-[10px] h-[30px] text-red-point">
                      <span>0{index + 1}</span>
                      <span className="t-eb-24">{item.title}</span>
                      <span>{item.text}</span>
                    </p>
                  </motion.button>
                </Nemu>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
