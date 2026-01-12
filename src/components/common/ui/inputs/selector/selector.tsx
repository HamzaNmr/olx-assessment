import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/common/ui/dropdown-menu/dropdown-menu";
import styles from "@/styles/selector.module.css";
import { SelectorProps } from "@/interfaces";
import { Icons } from "@/components/common/svg/icons";


export default function Selector({
  options,
  value,
  onChange,
  placeholder = "Select...",
  icon
}: SelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onToggle={setOpen} className={styles.selectorContainer}>
        <div className={styles.selectorButton}>
          <div className={styles.selectedValue}>
            {icon}
            <span>{value ? value.label : placeholder}</span>
          </div>
          <Icons.arrowDown
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={styles.optionsList} open={open}>
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onSelect={() => {
              onChange(opt);
              setOpen(false);
            }}
          >
            {opt.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};