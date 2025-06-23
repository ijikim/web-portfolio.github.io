import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Introduction from "@/components/sections/Introduction";
import Profile from "@/components/sections/Profile";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function OnePageLayout() {
  return (
    <div className="w-full divide-y-[1px] divide-gray-point">
      <Home />
      <Introduction />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
