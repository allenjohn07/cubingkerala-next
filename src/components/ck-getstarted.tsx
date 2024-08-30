"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import LottieComponent from "./lottie";
import Link from "next/link";
import { Button } from "./ui/button";
import { CubingKeralaTyping } from "./ck-typing";

const CubingKeralaGetStarted = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background">
      <div className="container px-6 flex justify-center items-center py-10 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 text-start w-full ">
            <div className="w-[300px] md:w-[500px] absolute hidden lg:block lg:top-32 lg:-right-10">
              <LottieComponent path="/rubiks-cube.json" />
            </div>
            <div className="w-[30px] md:w-[40px] absolute top-[42px] md:top-[97px] left-4 md:left-3 z-10">
              <LottieComponent path="/rounds-spinning.json" />
            </div>
            <CubingKeralaTyping />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl">
              a community dedicated to Rubik's Cube enthusiasts in Kerala.
            </h1>
            <p className="text-muted-foreground pb-5 md:text-xl max-w-[850px] md:pt-5">
              We organize events, competitions, and meetups to bring together cubers of all skill levels. <br /> Whether you're a seasoned speedsolver or just starting your journey, our community offers a space where you can learn, grow, and share your passion for cubing. <br /> Together, we can unlock not only the secrets of each puzzle but also the potential within ourselves.
            </p>
            <Link href="/login"><Button className="bg-green-400 text-black hover:bg-green-500 rounded-none">Get started</Button></Link>
          </div>
          {/* for smaller screens */}
          <div className="w-[300px] block md:hidden z-50">
            <LottieComponent path="/rubiks-cube.json" />
          </div>
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
};

export default CubingKeralaGetStarted;
