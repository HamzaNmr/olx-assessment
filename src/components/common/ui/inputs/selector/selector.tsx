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
  icon,
}: SelectorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  const handleUseCurrentLocation = async () => {
    if (!navigator.geolocation) {
      onChange({ value: "current_location", label: "Current location" } as any);
      setOpen(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const label = `${pos.coords.latitude.toFixed(3)}, ${pos.coords.longitude.toFixed(3)}`;
        onChange({ value: "current_location", label } as any);
        setOpen(false);
      },
      () => {
        onChange({ value: "current_location", label: "Current location" } as any);
        setOpen(false);
      },
      { timeout: 5000 }
    );
  };

  const handleSelect = (opt: any) => {
    onChange(opt);
    setOpen(false);
    setQuery("");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger onToggle={setOpen} className={styles.selectorContainer}>
        <div className={styles.selectorButton}>
          <div className={styles.selectedValue}>
            {icon}
            <span className={value ? styles.selectedLabel : styles.placeholder}>
              {value ? value.label : placeholder}
            </span>
          </div>
          <Icons.arrowDown
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={styles.optionsList} open={open}>
        <div className={styles.searchBox}>
          <Icons.search className={styles.searchIcon} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search for location"
            className={styles.searchInput}
            aria-label="Search locations"
            autoFocus
          />
          {query && (
            <button
              className={styles.clearBtn}
              onClick={() => setQuery("")}
              aria-label="Clear search"
              type="button"
            >
              ✕
            </button>
          )}
        </div>

        <button
          type="button"
          className={styles.useLocation}
          onClick={handleUseCurrentLocation}
        >
          <div className={styles.useLocationLeft}>
            <Icons.locationFixed className={styles.targetIcon} />
            <div>
              <div className={styles.useLocationTitle}>Use current location</div>
            </div>
          </div>
          <Icons.arrowRight className={styles.chevSmall} />
        </button>

        {/* Heading + all-link */}
        <div className={styles.headerRow}>
          <div className={styles.heading}>Choose location</div>
          <button
            type="button"
            className={styles.allLink}
            onClick={() =>
              handleSelect({ value: "all_lebanon", label: "See ads in all Lebanon" })
            }
          >
            See ads in all Lebanon
          </button>
        </div>

        {/* Options list */}
        <div className={styles.scrollArea}>
          {filteredOptions.map((opt) => (
            <DropdownMenuItem
              key={opt.value}
              onSelect={() => handleSelect(opt)}
              className={styles.optionItem}
            >
              <div className={styles.optionLabel}>{opt.label}</div>
              <Icons.arrowRight className={styles.chev} />
            </DropdownMenuItem>
          ))}

          {filteredOptions.length === 0 && (
            <div className={styles.noResults}>No locations found.</div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
