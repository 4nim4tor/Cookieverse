"use client";
import { useState, useEffect, useRef } from "react";

export function useWhackACookie() {
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(30);
	const [gameActive, setGameActive] = useState(false);
	const [cookiePos, setCookiePos] = useState({ x: 0, y: 0 });
	const [isSpawning, setIsSpawning] = useState(false);

	const gameAreaRef = useRef(null);

	useEffect(() => {
		let gameTimer;
		let spawnTimer;

		if (gameActive) {
			// Countdown
			gameTimer = setInterval(() => {
				setTimeLeft((prev) => {
					if (prev <= 1) {
						clearInterval(gameTimer);
						clearInterval(spawnTimer);
						setGameActive(false);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);

			// Spawn cookie
			spawnTimer = setInterval(() => {
				if (gameAreaRef.current) {
					const area = gameAreaRef.current.getBoundingClientRect();
					const cookieSize = 60; // px
					const maxX = area.width - cookieSize;
					const maxY = area.height - cookieSize;

					setCookiePos({
						x: Math.random() * maxX,
						y: Math.random() * maxY,
					});

					setIsSpawning(true);
					setTimeout(() => setIsSpawning(false), 400); // match animation duration
				}
			}, 800);
		}

		return () => {
			clearInterval(gameTimer);
			clearInterval(spawnTimer);
		};
	}, [gameActive]);

	const hitCookie = () => {
		if (gameActive) {
			setScore((s) => s + 1);
		}
	};

	const startGame = () => {
		setScore(0);
		setTimeLeft(30);
		setGameActive(true);

		setIsSpawning(true);
		setTimeout(() => setIsSpawning(false), 400);
	};

	return {
		score,
		timeLeft,
		gameActive,
		cookiePos,
		hitCookie,
		startGame,
		gameAreaRef,
		isSpawning,
	};
}
