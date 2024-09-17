import cn from 'classnames';
import { ButtonType } from './types';

const buttonTypeStyles: Record<ButtonType, string> = {
  [ButtonType.Primary]:
    'bg-deep-purple text-white hover:bg-white hover:text-deep-purple border-deep-purple',
  [ButtonType.Secondary]:
    'bg-white text-deep-purple hover:bg-deep-purple hover:text-white border-deep-purple',
  [ButtonType.Accent]: 'bg-lilac text-deep-purple hover:bg-white border-lilac',
};

export const getButtonClasses = (
  buttonType: ButtonType,
  size: string,
  className?: string,
) => {
  const sizeClass =
    size === 'medium' ? 'p-[10px]' : size === 'big' ? 'px-32 py-12' : '';

  return cn(
    'flex h-48 cursor-pointer items-center justify-center rounded-[10px] border text-sm font-bold transition duration-300',
    buttonTypeStyles[buttonType],
    sizeClass,
    className,
  );
};
