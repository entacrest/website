import React from "react";

import { motion } from "motion/react";
import { LoaderCircle } from "lucide-react";

// Todo: Refracture the Button component to make it extendable
const Button = ({
  title,
  type,
  onClick,
  isLoading,
  disabled,
  className,
  textClassName,
  ...otherProps
}: {
  title: string;
  type?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
}) => {
  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              scale: 1.2,
              transition: { duration: 1, type: "spring", stiffness: 200 },
            }
          : {}
      }
      whileTap={!disabled ? { scale: 0.9 } : {}}
      type="button"
      className={`flex-center w-full max-w-[470px] cursor-pointer rounded-md py-2 shadow transition-all bg-button-blue text-white ${className}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled || isLoading}
      {...otherProps}
    >
      {isLoading ? (
        <LoaderCircle className="animate-spin text-white" />
      ) : (
        <p
          className={`
            font-poppins text-lg font-medium leading-[27px] ${textClassName}
            `}
        >
          {title}
        </p>
      )}
    </motion.button>
  );
};
export default Button;
