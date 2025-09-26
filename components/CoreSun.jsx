import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function Sun() {
	const sunRef = useRef();
	const sunTexture = useTexture("/images/cookie.png");

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();

		// Lazy rotation
		if (sunRef.current) {
			sunRef.current.rotation.y += 0.001;

			// Pulsing emissive intensity (breathing effect)
			const pulse = 0.6 + Math.sin(t * 1.2) * 0.2;
			sunRef.current.material.emissiveIntensity = pulse;
		}
	});

	return (
		<mesh ref={sunRef}>
			<sphereGeometry args={[4, 32, 32]} />
			<meshStandardMaterial
				map={sunTexture}
				emissive={"#ffaa00"}
				emissiveIntensity={0.6}
			/>
		</mesh>
	);
}
