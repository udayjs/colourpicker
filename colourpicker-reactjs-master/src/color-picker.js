import React, { useState } from 'react';
import './color-picker.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [ ,setSelectedColor ] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    toggleColorList();
    document.body.style.backgroundColor = color; // Change the background color of the entire screen
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;


