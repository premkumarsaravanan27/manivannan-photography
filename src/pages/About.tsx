import { motion } from 'framer-motion';
import { Camera,Users,Heart,Star } from 'lucide-react';
import aboutpic from '../images/aboutpic.jpeg';

const About = () => {
  const stats = [
    { icon: Camera, number: '1000+', label: 'Photos Captured' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Heart, number: '5+', label: 'Years Experience' },
    {icon: Star, number: '4.8', label: 'Average Rating', isRating: true}
  ];

  const skills = [
    'Portrait Photography',
    'Wedding Photography',
    'Landscape Photography',
    'Street Photography',
    'Event Photography',
    'Photo Editing',
    'Studio Lighting',
    'Digital Retouching'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-thin tracking-wider mb-4">ABOUT ME</h1>
          <div className="w-20 h-px bg-black mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={aboutpic}
                alt="Photographer portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 -z-10"></div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-thin tracking-wide">
              Hello, I'm Manivannan 
            </h2>
            
            <div className="space-y-4 text-gray-600 font-light leading-relaxed">
              <p>
                Welcome to my world of photography. I'm a passionate photographer 
                based in New York, dedicated to capturing the beauty and emotion 
                in every moment. My journey began over five years ago with a simple 
                camera and an insatiable curiosity about the world around me.
              </p>
              
              <p>
                I specialize in portrait, wedding, and landscape photography, 
                always striving to tell authentic stories through my lens. 
                My approach is natural and unobtrusive, allowing genuine emotions 
                and connections to shine through in every frame.
              </p>
              
              <p>
                When I'm not behind the camera, you can find me exploring new 
                locations, studying light, or working with clients to bring 
                their vision to life. Every project is a new adventure, and 
                I'm honored to be part of your story.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <h3 className="text-xl font-light mb-4">My Philosophy</h3>
              <p className="text-gray-600 font-light italic">
                "Photography is not just about capturing what you see, 
                but about revealing what you feel. Every image should 
                evoke emotion and tell a story that resonates with the viewer."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-black" />
              <div className="text-3xl font-thin mb-2">{stat.number}</div>
              <div className="text-sm font-light text-gray-600 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-thin tracking-wide mb-8">EXPERTISE</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="text-sm font-light tracking-wide">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;