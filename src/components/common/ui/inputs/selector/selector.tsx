import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/selector.module.css";
import { ChevronDown, MapPin } from "lucide-react";
import { SelectorProps, SelectorOption } from "@/interfaces";



function Selector ({
  options,
  value,
  onChange,
  placeholder = "Select…",
}: SelectorProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: (event: MouseEvent) => void = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: SelectorOption) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={styles.selectorContainer} ref={containerRef}>
      <div
        className={styles.selectorButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={styles.selectedValue}>  
          <MapPin style={{color: "var(--yellow)"}} />
          <span>{value ? value.label : placeholder}</span>
        </div>
        { open ? <ChevronDown style={{ transform: "rotate(180deg)" }} /> : <ChevronDown /> }
      </div>

      {open && (
        <div className={styles.optionsList}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={styles.optionItem}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
