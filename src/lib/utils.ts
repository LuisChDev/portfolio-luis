export const isBrowser = typeof window !== "undefined";
export const isSmallScreen = isBrowser && window.innerWidth < 768;
