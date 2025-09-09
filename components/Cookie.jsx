"use client";

export function Cookie({ x, y, onHit, isSpawning }) {
	return (
		<img
			src="/cookie.png"
			alt="cookie"
			className={`absolute w-[60px] h-[60px] cursor-pointer ${
				isSpawning ? "animate-[pop_0.4s_ease-out]" : ""
			}`}
			style={{ left: x, top: y }}
			onClick={onHit}
		/>
	);
}
