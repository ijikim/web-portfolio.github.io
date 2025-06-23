import { useEffect } from "react";
import OnePageLayout from "@/components/One-page-layout";

export default function OnePage() {
  // 새로고침 시 scroll 복구
  useEffect(() => {
    const saved = localStorage.getItem("scrollY");
    if (saved) {
      window.scrollTo({ top: parseInt(saved, 10), behavior: "auto" });
    }
  }, []);

  // 스크롤 저장
  useEffect(() => {
    const onScroll = () => {
      localStorage.setItem("scrollY", String(window.scrollY));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <OnePageLayout />;
}
