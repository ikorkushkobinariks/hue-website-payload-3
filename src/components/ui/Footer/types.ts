import { MutableRefObject } from 'react';

interface FooterLinkItem {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterLinkUnitData {
  title?: string;
  items: FooterLinkItem[];
}

export interface FooterLinkUnit {
  unitTitle: string;
  unitData: FooterLinkUnitData[];
}

export interface FooterMobileDropdownProps {
  unit: FooterLinkUnit;
  index: number;
  icon: React.ReactNode;
  openItem: number | null;
  handleToggle: (index: number) => void;
  dropdownRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}
