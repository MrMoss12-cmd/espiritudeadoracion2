'use client';

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

export default function VisionMisionComponent() {

  // Animation variant for elements coming from the left
  const variantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variant for elements coming from the right
  const variantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#2F3B2F] text-white py-16 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-4">
        {/* First Mission Section - Animate from Left */}
        <motion.div
          className="flex flex-col md:flex-row gap-12 mb-16 items-center" // Added items-center for better alignment
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible
          variants={variantsLeft} // Use left variants
        >
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[#FFB347] text-lg">Our mission</span>
            </div>
            <h2 className="text-4xl font-bold">
              We trust in the strength of God
            </h2>
            <p className="text-gray-300">
              Text ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
            <motion.button
              className="bg-white text-[#2F3B2F] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
          </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://i.ibb.co/vxm0Q1GZ/huggin.jpg" // Consider using local images
                alt="People hugging in church"
                fill
                sizes="(max-width: 768px) 100vw, 50vw" // Added sizes prop
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Second Vision Section - Animate from Right */}
        <motion.div
          className="flex flex-col-reverse md:flex-row gap-12 items-center" // Added items-center
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible
          variants={variantsRight} // Use right variants
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://i.ibb.co/1tTkpK5k/raised.jpg" // Consider using local images
                alt="People with raised hands"
                fill
                sizes="(max-width: 768px) 100vw, 50vw" // Added sizes prop
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Right Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[#FFB347] text-lg">Our vision</span>
            </div>
            <h2 className="text-4xl font-bold">
              We spread the gospel of Jesus
            </h2>
            <p className="text-gray-300">
              Text ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
            <motion.button
              className="bg-white text-[#2F3B2F] px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}