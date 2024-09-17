import React from 'react';
import { IconProps } from './icon.interface';

const ChevronDownIcon = ({
  height = 16,
  width = 16,
  color = 'black',
  className,
}: IconProps) => (
  <svg
    width={height}
    height={width}
    viewBox="0 0 16 16"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 6.6665L8 10.6665L12 6.6665"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
