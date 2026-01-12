export interface SelectorOption {
  value: string;
  label: string;
}

export interface SelectorProps {
  options: SelectorOption[];
  value: SelectorOption | null;
  onChange: (option: SelectorOption) => void;
  placeholder?: string;
}