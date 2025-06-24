import { titleData } from "@/data/title";
import { menuData } from "@/data/menu";
import { NavigationSB18, Title48, PointP18, Title32 } from "@/components/ui/Text-styled";
import { Button } from "@/components/ui/button";
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
    <div id="home" className="w-full h-[200vh] grid grid-rows-[1fr_1fr]">
      {/* Home */}
      <div className="w-full home-bg">
        <div className="w-full h-full flex flex-col justify-center items-center gap-[10px]">
          <Title48>{titleData.title}</Title48>
          <PointP18 className="text-gray-point">
            <span className="text-red-point">{titleData.point}</span>
            {titleData.text}
            <span className="!text-black-main">{titleData.name}</span>
          </PointP18>
        </div>
      </div>

      {/* List */}
      <div className="w-full">
        <div className="w-full h-full flex flex-col justify-center items-center gap-[50px]">
          <div className="flex items-center">
            <Title32>CONTENTS</Title32>
          </div>
          <div className="flex items-center">
            <ul className="grid gap-[10px]">
              {menuData.map((item, index) => (
                <NavigationSB18
                  key={item.id}
                  className="overflow-hidden h-[30px]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Button onClick={() => handleMenuClick(item.path)}>
                    <motion.div
                      className="grid grid-rows-[1fr_1fr]"
                      initial="initial"
                      whileHover="hover"
                      variants={{ initial: { y: 0 }, hover: { y: "-50%" } }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <p className="flex gap-[10px]">
                        <span>0{index + 1}</span>
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </p>
                      <p className="flex gap-[10px] text-red-point">
                        <span>0{index + 1}</span>
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </p>
                    </motion.div>
                  </Button>
                </NavigationSB18>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
