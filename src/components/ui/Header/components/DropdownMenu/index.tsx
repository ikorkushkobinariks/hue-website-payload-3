import { FC } from 'react';
import { DropdownMenuProps } from './types';
import MenuColumn from '../MenuColumn';
import Badge from '@/components/ui/Badge';

const DropdownMenu: FC<DropdownMenuProps> = ({ data, setIsDropdownOpen }) => {
  return (
    <div
      className="paint-from-top left-0 absolute top-[82px] z-10 w-screen overflow-hidden border-b border-gray bg-white"
      style={{
        backgroundImage: `url('/static/images/gradient-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex flex-col pl-[165px] pr-[265px] pt-32">
        <div className="flex justify-between border-b border-gray pb-[78px]">
          {data.map((columnData, columnIndex) => (
            <MenuColumn
              key={columnIndex}
              {...columnData}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-[9px] py-[26px]">
            <p>Ut vitae morbi pellentesque</p>
            <Badge text="Watch Demo" bgColor="bg-lilac" />
          </div>
          <div className="size-[18px] rounded-full bg-lilac" />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
