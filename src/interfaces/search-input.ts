export interface SearchInputProps {
  value: string;
  placeholder?: string;
  onSearch: (query: string) => void;
  onChange?: (query: string) => void;
  onEnter?: (query: string) => void;
}