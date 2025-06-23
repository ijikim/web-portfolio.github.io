import { introductionData } from "@/data/content/introduction/introduction";
import { motion } from "framer-motion";
import { TextSpan16, Title24, Title32 } from "@/components/ui/Text-styled";

export default function Introduction() {
  return (
    <div id="introduction" className="w-full h-[100vh]">
      <div className="w-[70vw] h-full mx-auto grid grid-cols-[4fr_3fr] justify-center items-center border-x-[1px] border-gray-point divide-x-[1px] divide-gray-point">
        {/* text */}
        <div className="h-[70vh] flex flex-col border-y-[1px] border-gray-point px-[30px] py-[20px]">
          <Title32 className="">{introductionData.title}</Title32>
          <Title24 className="py-[10px]">{introductionData.subTitle}</Title24>
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

        {/* image */}
        <div className="w-full h-[70vh] border-y-[1px] border-gray-point flex justify-center items-center pt-[50px]">
          <div className="relative introduction-img">
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
        </div>
      </div>
    </div>
  );
}
