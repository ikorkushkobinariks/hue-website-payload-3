'use client';

import { FC } from 'react';
import Link from 'next/link';
import { LinkWithDropdownProps } from './types';
import ChevronDownIcon from '../icons/ChevronDownIcon';

const NavLink: FC<LinkWithDropdownProps> = ({
  className,
  href,
  label,
  onClick,
  isExpandable,
  iconClassName,
  ...props
}) => {
  return (
    <Link href={href} onClick={onClick} className={className} {...props}>
      <span className="body-md group flex items-center">
        {label}
        {isExpandable && (
          <ChevronDownIcon color="none" className={iconClassName} />
        )}
      </span>
    </Link>
  );
};

export default NavLink;
