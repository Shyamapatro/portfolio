"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useState, useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) {
    return <>{children}</>;
  }

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
