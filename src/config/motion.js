const fastTransition = { type: "tween", duration: 0.25, ease: "easeOut" };
const fastSpring = { type: "spring", damping: 10, stiffness: 40, duration: 0.3 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      transition: fastTransition,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: fastTransition,
    },
    exit: {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
      transition: fastTransition,
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: fastTransition,
  },
  animate: {
    opacity: 1,
    transition: fastTransition,
  },
  exit: {
    opacity: 0,
    transition: fastTransition,
  },
};

export const navLogoAnimation = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: fastSpring,
};

export const navAudioAnimation = {
  initial: { x: 30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { ...fastSpring, delay: 0.05 },
};

export const headTextAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: fastTransition,
};

export const headContentAnimation = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    ...fastSpring,
    delay: 0.1,
  },
};

export const headContainerAnimation = {
  initial: { x: -30, opacity: 0, transition: fastTransition },
  animate: { x: 0, opacity: 1, transition: fastTransition },
  exit: { x: -30, opacity: 0, transition: fastTransition },
};
