import React from 'react';
import { icons } from 'utils/icons';

interface Props extends React.SVGProps<SVGSVGElement> {
  src: keyof typeof icons;
  onClick?: React.MouseEventHandler;
}

export const Svg: React.FC<Props> = ({ src, onClick, ...props }) => {
  const Icon = icons[src];

  return !Icon ? null : <Icon {...props} onClick={onClick}></Icon>;
};
