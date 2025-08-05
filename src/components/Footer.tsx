
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Camera } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram , href: 'https://www.instagram.com/stories_by_mani?igsh=NGJmYnh6NHBwM2lp', label: 'Instagram' },
    { icon: Facebook , href: 'https://www.facebook.com/manivannan.devarajan1?mibextid=ZbWKwL', label: 'Facebook' },
    { icon: Mail, href: 'mailto:manivannanphotography@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <Camera className="w-8 h-8" />
            <span className="text-2xl font-light tracking-wider">STORIES_BY_MANI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social,) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400"
          >
            <p className="text-sm">
              © {new Date().getFullYear()} Manivannan Photography. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Capturing moments, creating memories.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;