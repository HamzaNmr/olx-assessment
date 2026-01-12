import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/dropdown-menu.module.css";

// Root wrapper
export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.dropdownRoot}>{children}</div>;
};

// Trigger button
export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode; onToggle?: (open: boolean) => void }> = ({ children, onToggle }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false);
        onToggle?.(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onToggle]);

  const toggleMenu = () => {
    setOpen(prev => {
      onToggle?.(!prev);
      return !prev;
    });
  };

  return (
    <div
      ref={triggerRef}
      className={styles.trigger}
      tabIndex={0}
      onClick={toggleMenu}
      onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
    >
      {children}
    </div>
  );
};

// Menu content
export const DropdownMenuContent: React.FC<{ 
  children: React.ReactNode; 
  open?: boolean,
  className?: string;
}> = ({ children, open, className }) => {
  return (
    <div className={`${styles.menuContent} ${className ?? ""} ${open ? styles.open : ""}`}>
      {children}
    </div>
  );
};

// Menu item
export const DropdownMenuItem: React.FC<{
  children: React.ReactNode;
  onSelect?: () => void;
  className?: string;
}> = ({ children, onSelect, className }) => {
  return (
    <div
      className={`${styles.menuItem} ${className ?? ""}`}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.()}
    >
      {children}
    </div>
  );
};


// Submenu trigger
export const DropdownMenuSubTrigger: React.FC<{ children: React.ReactNode; submenu: React.ReactNode }> = ({ children, submenu }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${styles.menuItem} ${styles.submenuTrigger}`}
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <div className={`${styles.submenuContent} ${open ? styles.open : ""}`}>
        {submenu}
      </div>
    </div>
  );
};

// Checkbox item
export const DropdownMenuCheckboxItem: React.FC<{
  children: React.ReactNode;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}> = ({ children, checked, onChange, className }) => {
  return (
    <div
      className={`${styles.menuItem} ${className ?? ""}`}
      tabIndex={0}
      onClick={() => onChange?.(!checked)}
    >
      <span className={styles.checkboxIndicator}>{checked ? "✔️" : ""}</span>
      {children}
    </div>
  );
};


// Radio item
export const DropdownMenuRadioItem: React.FC<{
  children: React.ReactNode;
  selected: boolean;
  onSelect?: () => void;
  className?: string;
}> = ({ children, selected, onSelect, className }) => {
  return (
    <div
      className={`${styles.menuItem} ${className ?? ""}`}
      tabIndex={0}
      onClick={onSelect}
    >
      <span className={styles.radioIndicator}>{selected ? "●" : ""}</span>
      {children}
    </div>
  );
};


// Label
export const DropdownMenuLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.label}>{children}</div>;
};

// Separator
export const DropdownMenuSeparator: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`${styles.separator} ${className ?? ""}`}></div>;
};

