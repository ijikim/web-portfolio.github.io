import { introductionData } from "@/data/content/introduction/introduction";
import { motion } from "framer-motion";
import { TextSpan16, Title24, Title32 } from "@/components/ui/Text-styled";

export default function Introduction() {
  return (
    <div id="introduction" className="w-full h-[100vh]">
      <div className="w-[80vw] max-w-[1000px] mx-auto h-full flex flex-col justify-center gap-[30px]">
        <div>
          <Title32 className="">{introductionData.title}</Title32>
          <Title24 className="py-[10px]">{introductionData.subTitle}</Title24>
        </div>

        {/* image */}
        <div className="relative introduction-img mx-auto mt-[30px]">
          <motion.div
            className="absolute top-[-10%] left-[50%] -translate-x-1/2 emoji"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>

        {/* text */}
        <div className="flex flex-col">
          <p className="flex flex-col gap-[10px] ">
            {introductionData.list.map((item) => (
              <TextSpan16 key={item.id}>
                {item.text.split(/(더 쉬운 경험)/g).map((point, index) =>
                  point === "더 쉬운 경험" ? (
                    <strong key={index} className="t-eb-16">
                      "더 쉬운 경험"
                    </strong>
                  ) : (
                    point
                  )
                )}
              </TextSpan16>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
