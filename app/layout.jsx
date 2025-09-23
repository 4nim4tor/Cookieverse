import "../styles/global.css";
import ComicPanel from "@/components/ComicPanel";

export const metadata = {
	title: "Cookieverse",
	description: "Explore the galaxy of cookies",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ComicPanel>{children}</ComicPanel>
			</body>
		</html>
	);
}
