
import { motion } from 'framer-motion';

const AnimatedCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <h1>Animated Card</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          width: '300px',
          margin: '20px',
        }}
      >
        <h2>Card Title</h2>
        <p>This is an animated card. It scales up and fades in.</p>
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
