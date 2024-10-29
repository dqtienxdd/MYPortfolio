'use client';
import { cn } from "@/lib/utils";
import { Boxes } from "./BackgroundBox";
import { useState } from "react";
import { GlobeDemo } from "./GridGlobe";
import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('dqtien2020@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center"
              )}
              style={
                id === 5
                  ? { position: 'absolute', top: '12vh', left: '12vh' }
                  : id === 7
                  ? { maxWidth: '40ch', wordWrap: 'break-word' }
                  : {}
              }
            />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80",
            id === 4 && "opacity-80" // Add opacity-80 for id === 4
          )}
          style={id === 4 ? { top: '10px', left: '20vh' } : {}}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <Boxes>
            <div className="z-0 flex items-center justify-center text-white font-bold"></div>
          </Boxes>
        )}
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div
            className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"
            style={id === 7 ? { maxWidth: '40ch', wordWrap: 'break-word' } : {}}
          >
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
          </div>
        </div>
      </div>

      {id === 2 && <GlobeDemo />}
      {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['React.js', 'Next.js', 'TypeScript'].map((item) => (
              <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opcacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            {['Python', 'Javascript', 'MongoDb'].map((item) => (
              <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opcacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      {id === 6 && (
        <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings:
              {
                preserveAspectRatio: 'xMidYMid slice',
              }
            }} />
          </div>
          <MagicButton
            title={copied ? 'Email copied' : 'Copy my email'}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="!bg-[#161a31]"
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
};