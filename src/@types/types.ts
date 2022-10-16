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