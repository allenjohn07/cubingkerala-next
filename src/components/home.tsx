"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useOnScreen } from "@/util/animation"
import Link from "next/link"
import CubingKeralaGetStarted from "./ck-getstarted"
import CubingKeralaCubingLengends from "./ck-cubinglegends"
import { CubingKeralaCalendars } from "./ck-calendar"
import { CubingKeralaUnravel } from "./ck-unravel"

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
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: isVisible1 ? 1 : 0, y: isVisible1 ? 0 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <CubingKeralaGetStarted />
          </motion.div>
        </section>
        <section ref={ref2} className="w-full  bg-muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible2 ? 1 : 0, y: isVisible2 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <CubingKeralaCalendars/>
          </motion.div>
        </section>
        <section ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible3 ? 1 : 0, y: isVisible3 ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <CubingKeralaCubingLengends />
          </motion.div>
        </section>
        <section ref={ref4} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible4 ? 1 : 0, y: isVisible4 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <CubingKeralaUnravel />
          </motion.div>
        </section>
      </main>
    </div>
  )
}