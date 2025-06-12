import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Tombol Go Back - kiri atas */}
          <motion.div
            className="fixed top-5 left-5 z-10"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          {/* Tombol Download - kanan atas */}
          <motion.div
            className="fixed top-5 right-5 z-10"
            {...fadeAnimation}
          >
            <CustomButton
              type="outline"
              title="Download"
              handleClick={downloadCanvasToImage}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          {/* ColorPicker di bagian bawah */}
          <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
          >
            <div className="mt-4">
              <ColorPicker />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
