import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const colors = [
  { name: 'Mustard', color: '#C2A13E' },
  { name: 'Maroon', color: '#5A2A2A' },
  { name: 'Off White', color: '#E6E6E6' },
  { name: 'Soft Black', color: '#2C2C2C' },
];

const ColorPicker = () => {
  const snap = useSnapshot(state);

  const getBorderColor = (hexColor) => {
    // Gunakan warna border kontras tergantung latar belakang
    return hexColor === '#ffffff' ? '#000000' : '#ffffff';
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {colors.map((c) => {
        const isActive = snap.color === c.color;

        const styles = {
          backgroundColor: c.color,
          opacity: isActive ? 0.6 : 1,
          border: isActive ? `2px solid ${getBorderColor(c.color)}` : '2px solid transparent',
        };

        return (
          <div
            key={c.name}
            className="tab-btn rounded-full glassmorphism w-10 h-10 cursor-pointer transition-all duration-200"
            style={styles}
            onClick={() => (state.color = c.color)}
            title={c.name}
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
