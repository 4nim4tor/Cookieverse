export default function HomePage() {
	return (
		<main className="text-center p-8">
			<h1 className="text-2xl font-bold mb-4">🍪 Welcome to Whack‑A‑Cookie</h1>
			<p className="mb-4">Ready to test your reflexes?</p>
			<a href="/game">
				<button className="px-4 py-2 bg-orange-500 text-white rounded shadow">
					Start Game
				</button>
			</a>
		</main>
	);
}
