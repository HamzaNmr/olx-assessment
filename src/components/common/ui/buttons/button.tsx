import React from "react";
import styles from "@/styles/button.module.css"
import clsx from "clsx";

export type ButtonVariant = "default" | "outline" | "secondary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: React.ReactElement;
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ label, icon, variant = "default", className, disabled, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        styles.button,
        styles[variant],
        {
          [styles.disabled]: disabled,
        },
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
});

Button.displayName = "Button";
