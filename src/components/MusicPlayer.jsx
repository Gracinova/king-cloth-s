import { useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const MusicPlayer = () => {
  const snap = useSnapshot(state);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (snap.isMusicPlaying) {
      audioRef.current.play().catch((e) => console.log("Autoplay error:", e));
    } else {
      audioRef.current.pause();
    }
  }, [snap.isMusicPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src="public\audio\MF DOOM - Books of War (The Lost Chapters) ft. RZA, Jeru The Damaja, Guru, Talib Kweli, DMX.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MusicPlayer;
