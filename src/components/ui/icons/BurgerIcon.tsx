import { IconProps } from './icon.interface';

const BurgerIcon = ({
  height = 32,
  width = 32,
  color = 'black',
  className,
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 10h16M4 16h16M4"
    />
  </svg>
);

export default BurgerIcon;
