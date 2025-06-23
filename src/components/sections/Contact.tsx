import Footer from "@/components/ui/Footer";
import { Text14, Text24, TextSpan18, Title48 } from "@/components/ui/Text-styled";

export default function Contact() {
  return (
    <div id="contact" className="h-[100vh] relative flex flex-col justify-center items-center contact-bg">
      <div>
        <Title48 className="mb-[30px]">Thank you :)</Title48>
        <Text24 className="mb-[10px]" whileHover={{ color: "var(--color-red-point)" }}>
          <a href="mailto:bbo05081@gmail.com">bbo05081@gmail.com</a>
          <TextSpan18>(click)</TextSpan18>
        </Text24>
        <div className="mb-[30px]">
          <Text14>새로운 시작에 설렘을 담아, 매일 조금씩 성장하는 프론트엔드 개발자가 되겠습니다.</Text14>
          <Text14>작은 디테일 하나까지 소중히 다루며, 웹을 통해 세상과 소통하는 기쁨을 느끼겠습니다.</Text14>
        </div>
      </div>

      <Footer />
    </div>
  );
}
