"use client"

import { Button } from "@/components/ui/button"
import LottieComponent from "@/components/lottie"
import { motion } from "framer-motion"
import { useOnScreen } from "@/util/animation"
import Link from "next/link"

export default function HomeComponent() {

  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.1 });

  return (
    <div className="flex flex-col pl-0 md:pl-8 min-h-[100dvh]">
      <main className="flex-1">
        <section ref={ref1} className="w-full min-h-screen relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible1 ? 1 : 0, y: isVisible1 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container px-8 md:px-6 flex justify-center items-center py-4 md:py-24">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 text-start w-full ">
                  <div className="w-[300px] md:w-[500px] absolute hidden lg:block lg:top-32 lg:-right-10">
                    <LottieComponent path="/rubiks-cube.json" />
                  </div>
                  <div className="w-[30px] md:w-[40px] absolute top-[20px] md:top-[97px] left-6 md:left-3 -z-50">
                    <LottieComponent path="/rounds-spinning.json" />
                  </div>
                  <h6 className="font-mono text-lg md:text-2xl text-green-500 ml-6">Cubing Kerala,</h6>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-7xl">
                    a community dedicated to Rubik's Cube enthusiasts in Kerala.
                  </h1>
                  <p className="text-muted-foreground pb-5 md:text-xl max-w-[850px] md:pt-5">
                    We organize events, competitions, and meetups to bring together cubers of all skill levels. <br /> Whether you're a seasoned speedsolver or just starting your journey, our community offers a space where you can learn, grow, and share your passion for cubing. <br /> Together, we can unlock not only the secrets of each puzzle but also the potential within ourselves.
                  </p>
                  <Link href="/login"><Button className="bg-green-400 text-black hover:bg-green-500 rounded-none">Get started</Button></Link>
                </div>
                {/* for smaller screens */}
                <div className="w-[300px] block md:hidden -z-50">
                    <LottieComponent path="/rubiks-cube.json" />
                  </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section ref={ref2} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible2 ? 1 : 0, y: isVisible2 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-green-500">Upcoming Competitions</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mark Your Calendars</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay tuned for our upcoming Rubik's Cube competitions in Kerala. Compete against the best cubers and
                    showcase your skills.
                  </p>
                </div>
                <Link href="/competitions"><Button className="bg-green-400 text-black hover:bg-green-500 rounded-none">Competitions</Button></Link>
              </div>
            </div>
          </motion.div>
        </section>
        <section ref={ref3} className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible3 ? 1 : 0, y: isVisible3 ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg px-3 py-1 text-sm text-green-400">Top Ranked Cubers</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Cubing Legends of Kerala
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Meet the top-ranked Rubik's Cube solvers in Kerala, who have dedicated their time and effort to
                    mastering the art of cubing.
                  </p>
                </div>
                <Link href="/rankings"><Button className="bg-green-400 text-black hover:bg-green-500 rounded-none">Rankings</Button></Link>
              </div>
            </div>
          </motion.div>
        </section>
        <section ref={ref4} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible4 ? 1 : 0, y: isVisible4 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted text-green-500 text-sm">About Cubing Kerala</div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Unraveling the Cube, Connecting the Community
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Cubing Kerala is a vibrant community of Rubik's Cube enthusiasts, founded in 2017 with the goal of
                    promoting the art of cubing in the state. Over the years, we have organized numerous competitions,
                    workshops, and social events, fostering a strong network of cubers and encouraging the growth of the
                    sport.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg bg-muted text-green-500 text-sm">Our Mission</div>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    At Cubing Kerala, our mission is to cultivate a vibrant cubing community, promote the sport, and
                    provide a platform for cubers to showcase their skills, connect with like- minded individuals, and
                    inspire the next generation of cubing enthusiasts.
                  </p>
                  <Link href="https://chat.whatsapp.com/BQmcKIG0eKjLlDQYsPLHdS "><Button className="bg-green-400 text-black hover:bg-green-500 rounded-none">Join our Whatsapp group</Button></Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}