"use client";

import { useState, useRef, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Avant",
  afterAlt = "Après",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, x)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-col-resize select-none bg-neutral-100"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300">
        <div className="absolute inset-0 flex items-center justify-center text-primary-400 text-sm">
          {afterAlt}
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-400"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">
          {beforeAlt}
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <MoveHorizontal size={18} className="text-primary" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-primary/70 text-white px-3 py-1 rounded text-xs font-medium z-10">
        Avant
      </span>
      <span className="absolute top-3 right-3 bg-accent/70 text-white px-3 py-1 rounded text-xs font-medium z-10">
        Après
      </span>
    </div>
  );
}
