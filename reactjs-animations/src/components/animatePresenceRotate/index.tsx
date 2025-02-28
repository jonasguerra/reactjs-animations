import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const AnimatePresenceRotateComponent = () => {
  const [visible, setVisible] = useState(true);

  const toggleElement = () => {
    setVisible(!visible);
  };

  return (
    <>
      <motion.button onClick={toggleElement} layout>
        Exibir/Ocultar
      </motion.button>
      <AnimatePresence mode="sync">
        {visible && (
          <motion.div
            style={{
              marginTop: 50,
              height: 150,
              width: 150,
              background: 'red',
              borderRight: 'solid 5px blue',
            }}
            initial={{
              rotate: '0deg',
              opacity: 0,
              scale: 0,
            }}
            animate={{
              rotate: '180deg',
              opacity: 1,
              scale: 1.5,
            }}
            exit={{
              rotate: '360deg',
              opacity: 0,
              scale: 0,
            }}
            transition={{
              ease: 'backInOut',
              duration: 1,
              //type: 'spring',
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
