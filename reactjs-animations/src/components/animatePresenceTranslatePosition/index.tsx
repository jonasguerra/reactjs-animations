import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const AnimatePresenceTranslatePosition = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <motion.button onClick={toggleVisible} layout>
        Exibir/Ocultar
      </motion.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            style={{
              marginTop: 20,
              height: 150,
              width: 150,
              background: 'blue',
            }}
            initial={{
              rotate: '0deg',
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: '360deg',
              scale: 1,
              y: [0, 100, -350, 0],
            }}
            exit={{
              y: 0,
              scale: 0,
            }}
            transition={{
              duration: 2.5,
              ease: 'backInOut',
              times: [0, 0.33, 0.66, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
