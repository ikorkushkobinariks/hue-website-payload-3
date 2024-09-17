import Link from 'next/link';
import React, { FC } from 'react';
import { PrimaryButtonProps, ButtonType } from './types';
import { getButtonClasses } from './usePrimaryButton';

const PrimaryButton: FC<PrimaryButtonProps> = ({
  onClick,
  className,
  label = 'Get Started',
  href = '/',
  size = 'medium',
  isTM = false,
  buttonType = ButtonType.Primary,
  ...props
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={getButtonClasses(buttonType, size, className)}
      {...props}
    >
      {label}
      {isTM && <sup>TM</sup>}
    </Link>
  );
};

export default PrimaryButton;
