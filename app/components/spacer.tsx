import React from 'react';
import { cn } from "@/lib/utils"

interface SpacerProps {
  /** Vertical spacing in pixels. Defaults to 12px (h-3 in Tailwind) */
  vertical?: number | string;
  
  /** Horizontal spacing in pixels */
  horizontal?: number | string;
  
  /** Additional Tailwind classes to apply */
  className?: string;
}

export function Spacer({ 
  vertical = 12, 
  horizontal = 0, 
  className 
}: SpacerProps) {
  return (
    <div 
      className={cn(
        "block", 
        vertical && `h-${vertical}`, 
        horizontal && `w-${horizontal}`,
        className
      )} 
      aria-hidden="true"
    />
  );
}
