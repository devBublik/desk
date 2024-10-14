export const TailwindBreakpoint = {
	Small: "640px",
	Medium: "768px",
	Large: "1024px",
	ExtraLarge: "1280px",
};

export const mediaQuery = (breakpoint) => {
	return `(max-width: ${breakpoint})`;
};
