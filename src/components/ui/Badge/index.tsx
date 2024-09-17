import React, { FC } from 'react';
import { BadgeProps } from './types';

const Badge: FC<BadgeProps> = ({ text, bgColor = 'bg-mint', ...props }) => {
  return (
    <span
      className={`ml-2 rounded-[4px] p-[6px] text-xs leading-12 text-deep-purple font-semibold ${bgColor}`}
      {...props}
    >
      {text}
    </span>
  );
};

export default Badge;
