import { useEffect, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import clsx from "clsx";
import { motion } from "framer-motion";
import state from "../store";

const slideFade = {
  initial: { y: 0, opacity: 1 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }, // ⬅ keluar cepat
};

const SimpleNavBar = () => {
  const snap = useSnapshot(state);
  const audioRef = useRef(null);
  const [_, forceUpdate] = useState(0);

  const toggleAudio = () => {
    state.hasInteracted = true;
    state.isMusicPlaying = !snap.isMusicPlaying;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (snap.isMusicPlaying) {
      audio.play().catch((e) => console.warn("Audio play error:", e));
    } else {
      audio.pause();
    }
  }, [snap.isMusicPlaying]);

  useEffect(() => {
    forceUpdate((n) => n + 1);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 z-50"
      variants={slideFade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
        <img src="/threejs.png" alt="Logo" className="w-10 h-10" />
      </motion.div>

      <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
        <button
          onClick={toggleAudio}
          className="flex items-center space-x-1 group"
          title={snap.isMusicPlaying ? "Pause music" : "Play music"}
        >
          <audio ref={audioRef} loop className="hidden" />
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={clsx(
                "w-1 h-4 rounded-sm transition-all",
                {
                  "animate-wave bg-black": snap.isMusicPlaying && snap.hasInteracted,
                  "bg-black": !snap.isMusicPlaying || !snap.hasInteracted,
                }
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SimpleNavBar;
