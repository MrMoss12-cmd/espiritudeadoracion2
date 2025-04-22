'use client';

import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion'; // Import motion

const locations = [
  {
    city: 'Los Angeles, CA',
    address: '1000 S Westgate Ave',
    zipCode: 'Los Angeles, 90049',
    phone: '(310) 747-1374',
    email: 'losangeles@worship.com',
    schedule: [
      'Mon - Fri | 07:00 AM - 08:00 PM',
      'Sat - Sun | 08:00 AM - 06:00 PM'
    ]
  },
  {
    city: 'San Francisco, CA',
    phone: '(415) 321-7688'
  },
  {
    city: 'New York, NY',
    phone: '(917) 977-8888'
  }
];

export default function LocationComponent() {

  // Variants for container elements that stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children by 0.2s
      },
    },
  };

  // Variants for individual items (text, image, list items)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly lower and faded out
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Fade in and move up
  };

  // Variant specifically for the image (can be different if needed)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };


  return (
    <section className="bg-[#342E1C] text-white py-16 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content - Animate container and children */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
            variants={containerVariants} // Use container variants for staggering
          >
            {/* Animate title section */}
            <motion.div variants={itemVariants}>
              <span className="text-[#FFB347] text-lg">Our locations</span>
              <h2 className="text-4xl font-bold mt-2">Come visit us !</h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lacus eu felis
                nulla non varius. Lorem ipsum dolor sit amet consectetur adipiscing.
              </p>
            </motion.div>

            {/* Animate details section */}
            <motion.div className="space-y-4" variants={itemVariants}>
              {/* ... details content (Phone, Address, Mail, Schedule) ... */}
              {/* You could wrap each detail block in motion.div with itemVariants too if desired */}
              <div>
                <h3 className="text-gray-400 mb-1">Phone</h3>
                <p>{locations[0].phone}</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Address</h3>
                <p>{locations[0].address}</p>
                <p>{locations[0].zipCode}</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Mail</h3>
                <p>{locations[0].email}</p>
              </div>
              <div>
                <h3 className="text-gray-400 mb-1">Our schedule</h3>
                {locations[0].schedule?.map((time, index) => (
                  <p key={index}>{time}</p>
                ))}
              </div>
            </motion.div>

            {/* Animate buttons */}
            <motion.div className="flex gap-2" variants={itemVariants}>
              <motion.button
                className="p-2 border border-white rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoIosArrowBack size={24} />
              </motion.button>
              <motion.button
                className="p-2 border border-white rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoIosArrowForward size={24} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Animate image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants} // Use image variants
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* ... Image component ... */}
              <Image
                src="https://i.ibb.co/d04SKTMJ/cartagena.jpg"
                alt="Cartagena de Indias"
                fill
                className="object-cover"
                priority
              />
              {/* ... Image overlay ... */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold">Cartagena de Indias, BOL</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Locations - Animate container and children */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants} // Use container variants for staggering
        >
          {locations.map((location, index) => (
            // Animate each location item
            <motion.div key={index} className="flex items-center gap-4" variants={itemVariants}>
              <div className="w-8 h-8 rounded-full bg-[#FFB347] flex items-center justify-center">
                <span className="text-black font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold">{location.city}</h3>
                <p className="text-gray-400">{location.phone}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}