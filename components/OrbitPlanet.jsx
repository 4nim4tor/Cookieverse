"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import PlanetLabel from "./sub-components/PlanetLabel";

export default function Planet({
	name,
	textures = {}, // default to empty object
	radius,
	distance,
	orbitSpeed,
	spinSpeed,
}) {
	const mesh = useRef();
	// Build an array of maps that actually exist
	const urls = [textures.albedo, textures.normal, textures.roughness].filter(
		Boolean
	);
	const maps = useTexture(urls);
	// Assign them safely
	const albedo = maps[0];
	const normal = maps[1];
	const roughness = maps[2];

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime() * orbitSpeed;
		mesh.current.position.x = Math.cos(t) * distance;
		mesh.current.position.z = Math.sin(t) * distance;
		mesh.current.rotation.y += spinSpeed; // self-spin
	});

	return (
		<group ref={mesh}>
			<mesh>
				<sphereGeometry args={[radius, 32, 32]} />
				<meshStandardMaterial
					map={albedo}
					normalMap={normal}
					roughnessMap={roughness}
				/>
			</mesh>

			{/* Floating comic label */}
			<PlanetLabel text={name} radius={radius} />
		</group>
	);
}
