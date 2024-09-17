export interface NavMenuProps {
  handleDropdownMouseEnter: () => void;
  handleLinkClick: (item: { label: string; href?: string }) => void;
  handleOnMouseLeave: () => void;
  handleOnMouseOver: (item: { label: string; href?: string }) => void;
  hoveredItemLabel: string | null;
  isDropdownOpen: boolean;
  isForCreators: boolean;
  isScrolled: boolean;
}
