"use client";

import React from "react";
import { MotionConfig } from "farmer-motion";

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};
