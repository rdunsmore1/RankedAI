"use client";

import { useState } from "react";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ value, onChange, readonly = false, size = "md" }: StarRatingProps) {
  const [hover, setHover] = useState(0);
  const sizes = { sm: "text-sm", md: "text-lg", lg: "text-2xl" };

  return (
    <div className={`flex gap-0.5 ${sizes[size]}`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (hover || value);
        return (
          <button key={star} type="button" disabled={readonly}
            className={`transition-colors ${readonly ? "cursor-default" : "cursor-pointer"} ${
              filled ? "text-[#B8963C]" : "text-[#D9CFC4]"
            }`}
            onMouseEnter={() => !readonly && setHover(star)}
            onMouseLeave={() => !readonly && setHover(0)}
            onClick={() => onChange?.(star)}>
            ★
          </button>
        );
      })}
    </div>
  );
}
