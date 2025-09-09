"use client";
import { Cookie } from "./Cookie";
import { useWhackACookie } from "../hooks/useWhackACookie";

export function GameArea() {
	const {
		score,
		timeLeft,
		gameActive,
		cookiePos,
		hitCookie,
		startGame,
		gameAreaRef,
		isSpawning,
	} = useWhackACookie();

	return (
		<div className="text-center p-4">
			<h1 className="text-2xl font-bold mb-4">🍪 Whack‑A‑Cookie 🍪</h1>
			<div className="flex justify-center gap-16 mb-2 text-lg">
				<span>⏱ {timeLeft}s</span>
				<span>🍪 Score: {score}</span>
			</div>
			<button
				className={`px-4 py-2 rounded text-white font-semibold transition ${
					gameActive
						? "bg-gray-400 cursor-not-allowed"
						: "bg-gradient-to-b from-yellow-400 to-orange-500 shadow-md active:shadow-sm"
				}`}
				onClick={startGame}
				disabled={gameActive}
			>
				{gameActive ? "Nom nom nom..." : "Start Game"}
			</button>

			<div
				className="relative w-[500px] h-[500px] mx-auto mt-4 bg-gray-500 border-none border-gray-300 rounded overflow-hidden"
				ref={gameAreaRef}
			>
				{gameActive && (
					<Cookie
						isSpawning={isSpawning}
						x={cookiePos.x}
						y={cookiePos.y}
						onHit={hitCookie}
					/>
				)}
			</div>
		</div>
	);
}
