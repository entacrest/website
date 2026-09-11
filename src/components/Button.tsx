import React from "react";

import { motion } from "motion/react";
import { LoaderCircle } from "lucide-react";

const variantStyles: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25 hover:shadow-brand-600/35",
  dark: "bg-ink-800 text-white border border-white/10 hover:bg-ink-700",
  outline:
    "bg-transparent text-white border border-white/25 hover:border-brand-300/60 hover:text-brand-200",
  ghost: "bg-transparent text-ink-800 hover:text-brand-600",
};

// Todo: Refracture the Button component to make it extendable
const Button = ({
  title,
  type,
  onClick,
  isLoading,
  disabled,
  className,
  textClassName,
  variant = "primary",
  ...otherProps
}: {
  title: string;
  type?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  variant?: "primary" | "dark" | "outline" | "ghost";
}) => {
  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              scale: 1.03,
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }
          : {}
      }
      whileTap={!disabled ? { scale: 0.97 } : {}}
      type="button"
      className={`flex-center w-full max-w-[470px] cursor-pointer rounded-full py-2 transition-all font-semibold ${variantStyles[variant]} ${className}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled || isLoading}
      {...otherProps}
    >
      {isLoading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <p
          className={`
            text-base leading-[27px] ${textClassName}
            `}
        >
          {title}
        </p>
      )}
    </motion.button>
  );
};
export default Button;
