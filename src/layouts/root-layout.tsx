// import ScrollToTopButton from '@/components/common/scroll-to-top';
import Header from "@/components/ui/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <ScrollToTopButton /> */}
    </div>
  );
}
