"use client";

import { createMedia } from "@artsy/fresnel";

// Create app media breakpoints
export enum Breakpoints {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
  xxl = "xxl",
}

export const breakpoints: Record<Breakpoints, number> = {
  xs: 0,
  s: 768,
  m: 1024,
  l: 1280,
  xl: 1440,
  xxl: 1860,
};

const AppMedia = createMedia({
  breakpoints,
});

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
