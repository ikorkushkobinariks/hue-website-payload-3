import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import { LogoLinkProps } from './types';

const LogoLink: FC<LogoLinkProps> = ({
  href = '/',
  src = '/static/images/logo-text.png',
  alt = 'Hue Logo',
  width = 100,
  height = 40,
  priority = true,
}) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
};

export default LogoLink;
