"use client"

import { motion } from "framer-motion"

export function CircularAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large outer circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="rounded-full border-2 opacity-20"
          style={{
            width: "800px",
            height: "800px",
            borderColor: "#4242cd",
            boxShadow: "0 0 30px rgba(66, 66, 205, 0.3), inset 0 0 30px rgba(66, 66, 205, 0.1)",
          }}
        />
      </motion.div>

      {/* Medium circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="rounded-full border-2 opacity-25"
          style={{
            width: "600px",
            height: "600px",
            borderColor: "#4242cd",
            boxShadow: "0 0 25px rgba(66, 66, 205, 0.4), inset 0 0 25px rgba(66, 66, 205, 0.15)",
          }}
        />
      </motion.div>

      {/* Inner circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="rounded-full border-2 opacity-30"
          style={{
            width: "400px",
            height: "400px",
            borderColor: "#4242cd",
            boxShadow: "0 0 20px rgba(66, 66, 205, 0.5), inset 0 0 20px rgba(66, 66, 205, 0.2)",
          }}
        />
      </motion.div>

      {/* Orbiting dots */}
      {[0, 120, 240].map((angle, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            width: "600px",
            height: "600px",
            marginLeft: "-300px",
            marginTop: "-300px",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30 + index * 5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#4242cd",
              boxShadow: "0 0 20px rgba(66, 66, 205, 0.8), 0 0 40px rgba(66, 66, 205, 0.5)",
            }}
          />
        </motion.div>
      ))}

      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(66, 66, 205, 0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
