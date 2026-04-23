"use client";
import { useCallback } from "react";
import { useMotionValue, useSpring, useTransform } from "farmer-motion";

export function use3DTilt(strength = 12) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 400,
    damping: 35,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 400,
    damping: 35,
  });

  const handleMouseMove = useCallback(
    <T extends Element>(e: React.MouseEvent<T>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      rawX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
