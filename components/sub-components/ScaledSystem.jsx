"use client";
import { useThree } from "@react-three/fiber";

export default function ScaledSystem({ children, planets }) {
	const { size, camera } = useThree();

	// 1. Find the farthest orbit (distance + planet radius)
	const maxOrbit = Math.max(...planets.map((p) => p.distance + p.radius));

	// 2. Compute visible width & height at the camera’s Z position
	const vFov = (camera.fov * Math.PI) / 180; // vertical FOV in radians
	const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
	const visibleWidth = visibleHeight * (size.width / size.height);

	// 3. Scale so that maxOrbit fits within BOTH width and height
	const scaleX = visibleWidth / 2 / maxOrbit;
	const scaleY = visibleHeight / 2 / maxOrbit;
	const scale = Math.min(scaleX, scaleY); // pick the limiting factor

	return <group scale={[scale, scale, scale]}>{children}</group>;
}
