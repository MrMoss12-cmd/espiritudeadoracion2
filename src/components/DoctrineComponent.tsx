'use client';

import { useState } from 'react';
import { FaBook, FaCross, FaPray, FaChurch } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

const doctrineData = [
  {
    icon: <FaBook className="text-[#FFB347] text-3xl" />,
    title: 'The Holy Bible',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reference: 'John 3:16 - Thessalonians 2:13'
  },
  {
    icon: <FaCross className="text-[#FFB347] text-3xl" />,
    title: 'The Saviour',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reference: 'John 3:16 - Thessalonians 2:13'
  },
  {
    icon: <FaPray className="text-[#FFB347] text-3xl" />,
    title: 'The Holy Spirit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reference: 'John 3:16 - Thessalonians 2:13'
  },
  {
    icon: <FaChurch className="text-[#FFB347] text-3xl" />,
    title: 'The Church',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    reference: 'John 3:16 - Thessalonians 2:13'
  }
];

export default function DoctrineComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === doctrineData.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctrineData.length - 2 : prevIndex - 1
    );
  };

  // Animation variants for the title/text section
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  // Animation variants for the carousel cards
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%', // Use percentage for better responsiveness
      opacity: 0,
      position: 'absolute', // Keep exiting element positioned absolutely
      width: '100%', // Ensure it takes full width during transition
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: 'relative', // Current element is relative
      width: '100%',
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%', // Use percentage
      opacity: 0,
      position: 'absolute', // Keep exiting element positioned absolutely
      width: '100%', // Ensure it takes full width during transition
    }),
  };

  // Estimate card height for the container (adjust if necessary)
  const cardHeight = "h-64"; // Example: Adjust based on your card content height

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.span variants={titleVariants} className="text-[#FFB347] text-lg">What we believe</motion.span>
          <motion.h2 variants={titleVariants} className="text-4xl font-bold mt-2">Our statement<br />of Faith</motion.h2>
        </motion.div>

        {/* Relative container for the carousel */}
        <div className={`relative ${cardHeight} mb-8`}> {/* Added mb-8 for spacing below */}
          {/* Use AnimatePresence to handle card transitions */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex} // Key change triggers animation
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? '100%' : '-100%',
                  opacity: 0,
                  position: 'absolute' as const,
                  width: '100%'
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                  position: 'relative' as const,
                  width: '100%'
                },
                exit: (direction: number) => ({
                  zIndex: 0,
                  x: direction < 0 ? '100%' : '-100%',
                  opacity: 0,
                  position: 'absolute' as const,
                  width: '100%'
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="flex gap-6 absolute top-0 left-0 w-full" // Position absolutely, full width
            >
              {doctrineData.slice(currentIndex, currentIndex + 2).map((item, index) => (
                <div
                  key={currentIndex + index}
                  // Adjusted width calculation for 2 items with gap
                  className="w-[calc(50%-0.75rem)] bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex-shrink-0"
                  // Removed md:w-1/2, using calc instead for precision with gap
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="text-sm text-gray-500">{item.reference}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons - Position relative to the main container now */}
        <div className="relative flex justify-center gap-4 mt-4"> {/* Centered buttons below carousel */}
            <motion.button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosArrowBack size={24} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoIosArrowForward size={24} />
            </motion.button>
        </div>

      </div>
    </section>
  );
}