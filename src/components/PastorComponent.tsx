'use client';

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

export default function PastorComponent() {

  // Animation variants for the title/text section
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 } // Stagger children animation
    },
  };

  // Animation variants for the pastor cards
  const cardVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay }
    },
  });

  return (
    // Added overflow-hidden to the section to contain animations if needed
    <section className="bg-[#2F3B2F] text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Animate the title container */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible, only once
          variants={titleVariants}
        >
          {/* Animate each child of the title container */}
          <motion.span variants={titleVariants} className="text-[#FFB347] text-lg">Our Pastors</motion.span>
          <motion.h2 variants={titleVariants} className="text-4xl font-bold mt-2">
            Meet John & Sophie,<br />
            our beloved pastors
          </motion.h2>
          <motion.p variants={titleVariants} className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pastor John Card - Animate */}
          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants(0.2)} // Apply card animation with a small delay
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              {/* ... Image component ... */}
              <Image
                src="https://i.ibb.co/Ldb3LdpS/pastor.jpg"
                alt="Pastor John Carter"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            {/* ... Card text overlay ... */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-semibold">John</h3>
              <p className="text-gray-300">Carter</p>
            </div>
          </motion.div>

          {/* Pastor Sophie Card - Animate */}
          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants(0.4)} // Apply card animation with a slightly larger delay
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              {/* ... Image component ... */}
              <Image
                src="https://i.ibb.co/7x1hSpCX/pastora.jpg"
                alt="Pastor Sophie Moore"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            {/* ... Card text overlay ... */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-semibold">Sophie</h3>
              <p className="text-gray-300">Moore</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}