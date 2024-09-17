import { LinkProps } from 'next/link';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
}
export interface PrimaryButtonProps extends Omit<LinkProps, 'href'> {
  onClick?: () => void;
  className?: string;
  label?: string;
  href?: string;
  size?: 'medium' | 'big';
  isTM?: boolean;
  buttonType?: ButtonType;
}
