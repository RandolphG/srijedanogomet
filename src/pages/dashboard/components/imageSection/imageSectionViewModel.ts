import { motion } from "framer-motion";
import { resourceImages } from "../../../../resources";

export const ImageSectionViewModel = () => {
  const imeMotion = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 40,
    },
  };

  const prezimeMotion = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -40,
    },
  };

  return { motion, imeMotion, prezimeMotion, resourceImages };
};
