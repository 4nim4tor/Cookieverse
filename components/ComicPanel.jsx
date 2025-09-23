import React from "react";
import clsx from "clsx";

export default function ComicPanel({ children, className }) {
	return (
		<div
			className={clsx(
				"min-h-screen w-full flex flex-col items-center justify-start",
				"bg-[radial-gradient(circle_at_top_left,_#fefefe,_#e5e5e5)]", // fallback bg
				"relative overflow-hidden border-8 border-black", // comic panel border
				"before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/halftone.png')] before:opacity-20 before:pointer-events-none",
				className
			)}
		>
			{children}
		</div>
	);
}
