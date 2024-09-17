import Link from 'next/link';
import React, { FC } from 'react';
import cn from 'classnames';
import { MobileNavLinkProps } from './types';

const MobileNavLink: FC<MobileNavLinkProps> = ({
  label,
  href = '',
  className = '',
  icon,
  onClick,
  isOpen,
}) => {
  return (
    <div onClick={onClick}>
      {href ? (
        <Link
          href={href}
          className={cn(
            'heading-300 hover:bg-gray-100 flex items-center justify-between py-16 transition-colors',
            className,
          )}
        >
          <span>{label}</span>
          {icon && (
            <span
              className={cn('transition-transform duration-300', {
                'rotate-180': isOpen,
              })}
            >
              {icon}
            </span>
          )}
        </Link>
      ) : (
        <div
          className={cn(
            'heading-300 flex items-center justify-between py-16 cursor-pointer transition-colors',
            className,
          )}
        >
          <span>{label}</span>
          {icon && (
            <span
              className={cn('transition-transform duration-300', {
                'rotate-180': isOpen,
              })}
            >
              {icon}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNavLink;
