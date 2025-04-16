'use client'
import { X } from 'lucide-react';
import { useAudioContext } from '@/_contexts/audio-provider';
import { motion, AnimatePresence } from 'framer-motion';
import { PiRadioFill } from 'react-icons/pi';
import AudioPlayer from './audio-player';
import "@/_styles/player-toggle.css";

export default function PlayerToggle() {
  const { togglePlayer, visible } = useAudioContext();

  return (
    <>
      <button onClick={togglePlayer} className="radio-icon">
        <PiRadioFill size={60} />
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="player"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              closed: {
                scaleY: 0,
                opacity: 0,
                transition:{ duration: 0.8, ease: [0.86, 0, 0.07, 1] }
              },
              open: {
                scaleY: 1,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.86, 0, 0.07, 1] }
              }
            }}
            style={{ transformOrigin: "bottom center" }}
            className="player-panel"
          >
            <AudioPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


