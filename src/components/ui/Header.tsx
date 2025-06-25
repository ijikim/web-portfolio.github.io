import { menuData } from "@/data/menu";
import { useEffect, useState } from "react";
import { Navigation18, Title18 } from "@/components/ui/Text-styled";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [activeId, setActiveId] = useState(menuData[0].path);

  // 메뉴 클릭 스타일
  useEffect(() => {
    const handleScroll = () => {
      let current = menuData[0].path;
      for (const item of menuData) {
        const section = document.getElementById(item.path);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 100;
          if (window.scrollY >= top) {
            current = item.path;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="w-full h-[50px] fixed top-0 z-10">
      <ul className="w-[70vw] max-w-[1000px] h-full mx-auto flex justify-between items-center">
        {menuData.map((item) => (
          <Navigation18
            key={item.id}
            animate={{ opacity: activeId === item.path ? 1 : 0.3 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ opacity: 1 }}
          >
            <Button onClick={() => handleMenuClick(item.path)}>{item.title}</Button>
          </Navigation18>
        ))}
      </ul>
    </div>
  );
}
