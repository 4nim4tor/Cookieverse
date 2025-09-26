import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Billboard } from "@react-three/drei";

function PlanetLabel({ text, radius }) {
	const ref = useRef();
	useFrame(({ clock }) => {
		if (ref.current) {
			ref.current.position.y =
				radius * 1.4 + Math.sin(clock.getElapsedTime()) * 0.1;
		}
	});

	return (
		<Billboard>
			<Text
				ref={ref}
				font="/fonts/Bangers-Regular.ttf"
				fontSize={radius * 0.4}
				color="#ffcc00"
				outlineWidth={0.04}
				outlineColor="black"
			>
				{text}
			</Text>
		</Billboard>
	);
}

export default PlanetLabel;
