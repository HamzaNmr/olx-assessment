export interface LocationSelectorOption {
  value: string;
  label: string;
}

export interface LocationSelectorProps {
  value: LocationSelectorOption | null;
  options: LocationSelectorOption[];
  onChange: (option: LocationSelectorOption) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}