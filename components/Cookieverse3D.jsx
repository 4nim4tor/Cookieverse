"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "./OrbitPlanet";
import Sun from "./CoreSun";
import ScaledSystem from "./sub-components/ScaledSystem";
import { planetsConfig } from "../lib/planetsConfig.js";

export default function Cookieverse3D() {
	return (
		<Canvas camera={{ position: [0, 10, 25], fov: 60 }}>
			<ambientLight intensity={0.3} />
			<pointLight position={[0, 0, 0]} intensity={2} />

			<ScaledSystem planets={planetsConfig}>
				{/* Sun */}
				<Sun />

				{/* Planets from config */}
				{planetsConfig.map((planet, i) => (
					<Planet
						key={i}
						textures={planet.textures}
						radius={planet.radius}
						distance={planet.distance}
						orbitSpeed={planet.orbitSpeed}
						spinSpeed={planet.spinSpeed}
					/>
				))}
			</ScaledSystem>

			<OrbitControls enableZoom={false} />
		</Canvas>
	);
}
