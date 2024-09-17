import React, { FC } from 'react';
import cn from 'classnames';
import { MobileNavHeaderProps } from './types';
import LogoLink from '@/components/ui/LogoLink';

const isForCreatorsLogoSrc = '/static/images/hue-community-logo.png';

const MobileNavHeader: FC<MobileNavHeaderProps> = ({
  clickHandler,
  logoWidth = 64,
  className = '',
  icon,
  isForCreators,
}) => {
  return (
    <div className={cn('flex w-full items-center justify-between', className)}>
      {!isForCreators ? (
        <LogoLink width={logoWidth} />
      ) : (
        <LogoLink width={132} src={isForCreatorsLogoSrc} />
      )}
      <button
        className="text-white focus:outline-none tablet:hidden"
        onClick={clickHandler}
      >
        {icon}
      </button>
    </div>
  );
};

export default MobileNavHeader;
