import { ReactNode } from 'react';

export interface MobileNavLinkProps {
  label: string;
  href?: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
}

export interface MobileNavHeaderProps {
  clickHandler?: () => void;
  logoWidth?: number;
  className?: string;
  icon: React.ReactNode;
  isForCreators?: boolean;
}
