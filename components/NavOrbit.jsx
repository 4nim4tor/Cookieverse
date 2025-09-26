import OrbitPlanet from "./OrbitPlanet";

export default function NavOrbit() {
	const planets = [
		{ name: "Cookie Odyssey", link: "/odyssey", speed: 18, orbitRadius: 160 },
		{ name: "Cookie Codex", link: "/codex", speed: 22, orbitRadius: 190 },
		{ name: "Game", link: "/game", speed: 15, orbitRadius: 230 },
		{ name: "Gallery", link: "/gallery", speed: 25, orbitRadius: 280 },
		{ name: "About", link: "/about", speed: 30, orbitRadius: 320 },
	];

	return (
		<div className="relative w-full h-[80vh] flex items-center justify-center">
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{
					transformStyle: "preserve-3d",
					transform: "rotateX(60deg)",
				}}
			>
				{/* Behind planets */}
				{planets.map((planet, i) => (
					<OrbitPlanet
						key={`behind-${i}`}
						{...planet}
						delay={i * 2}
						layer="behind"
					/>
				))}

				{/* Central Cookie Sun with shadow mask */}
				<div
					className="relative flex items-center justify-center font-bold"
					style={{ transform: "rotateX(-60deg)" }} // cancel tilt so Sun looks upright
				>
					<div className="w-32 h-32 rounded-full bg-yellow-500 border-8 border-black shadow-xl flex items-center justify-center relative z-10">
						🍪
						{/* Shadow overlay */}
						<div
							className="absolute inset-0 rounded-full pointer-events-none"
							style={{
								background:
									"radial-gradient(circle, rgba(0,0,0,0.4) 70%, transparent 100%)",
								mixBlendMode: "multiply",
							}}
						/>
					</div>
				</div>

				{/* Front planets */}
				{planets.map((planet, i) => (
					<OrbitPlanet
						key={`front-${i}`}
						{...planet}
						delay={i * 2}
						layer="front"
					/>
				))}
			</div>
		</div>
	);
}
