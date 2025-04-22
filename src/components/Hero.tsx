'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion'; // Import motion

export default function Hero() {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  const imageVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
  });

  return (
    <section className={`${styles.heroSection} relative min-h-[600px] py-16 overflow-hidden`}>
      {/* Gradient Background */}
      <div className={styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div ref={interBubbleRef} className={styles.interactive}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.h2
              className="text-[#FFB347] font-medium text-xl"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              About us
            </motion.h2>
            <motion.h1
              className="text-5xl font-bold text-white"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              We trust in<br />God's Love
            </motion.h1>
            <motion.p
              className="text-gray-200 max-w-lg"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Pellentesque eu rhoncus a habitasse. In sem nibh phasellus at diam duis interdum. Est vel sed habitant diam tortor fringilla. Nunc sapien vitae porttitor blandit sed dignissim lorem vitae pulvinar. Cras risus dolor.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <motion.button
                className="bg-[#FFB347] text-[#2F3B2F] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#2F3B2F] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                What we believe
              </motion.button>
            </motion.div>
          </div>

          {/* Right Images */}
          <div className="relative h-[500px]">
            <motion.div
              className="absolute right-0 top-0 w-72 h-72 rounded-2xl overflow-hidden shadow-lg"
              initial="hidden"
              animate="visible"
              variants={imageVariants(0.6)} // Delay for the first image
            >
              <Image
                src="https://i.ibb.co/zTzjY3bG/hand.jpg"
                alt="Worship hands raised"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority // Added priority for faster loading
              />
            </motion.div>
            <motion.div
              className="absolute left-0 bottom-0 w-72 h-72 rounded-2xl overflow-hidden shadow-lg"
              initial="hidden"
              animate="visible"
              variants={imageVariants(0.8)} // Slightly later delay for the second image
            >
              <Image
                src="https://i.ibb.co/9kWy4rqm/worship.jpg"
                alt="People worshiping"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority // Added priority for faster loading
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}