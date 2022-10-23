export interface ISidebarProps {
  open: boolean;
  close: () => void;
}

export interface ISidebarItem {
  value: string;
  hasSubsection?: boolean;
}

export interface ISidebarSectionProps {
  title: string;
  data: ISidebarItem[];
  noSeparator?: boolean;
}

export interface IProductFeedProps {
  products: IProducts[];
}

export interface IProducts {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  category: string;
}