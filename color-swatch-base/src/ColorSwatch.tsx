import { useContext } from 'react';
import { RGBColorType } from './types';
import { RGBContext } from './context';

export const ColorSwatch = () => {
  const {red, green, blue, dispatch} = useContext(RGBContext)

  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};
