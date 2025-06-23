import { menuData } from "@/data/menu";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/ui/Text-styled";

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
    <div className="w-full h-[50px] fixed top-0 z-10 border-b-[1px] border-gray-point backdrop-blur">
      <ul className="w-[70vw] h-full mx-auto flex justify-evenly items-center border-x-[1px] border-gray-point">
        {menuData.map((item) => (
          <Navigation
            key={item.id}
            animate={{ opacity: activeId === item.path ? 1 : 0.3 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ opacity: 1 }}
          >
            <button
              type="button"
              onClick={() => handleMenuClick(item.path)}
              className="bg-transparent border-none outline-none cursor-pointer"
            >
              {item.title}
            </button>
          </Navigation>
        ))}
      </ul>
    </div>
  );
}
