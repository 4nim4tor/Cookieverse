export default function HomePage() {
	return (
		<main className="text-center p-8">
			<h1 className="text-2xl font-bold m-8">🍪 Welcome to Cookie Crunch</h1>
			<p className="m-4">Ready to test your reflexes?</p>
			<p className="m-4">Ready to sett you keyboard ablaze? </p>
			<p className="m-4">Well here you will only use the mouse!</p>
			<a href="/game">
				<button className="px-4 py-2 bg-gradient-to-b from-yellow-400 to-orange-500 shadow-md active:shadow-sm hover:bg-gradient-to-b hover:to-yellow-400 hover:from-orange-500 text-white rounded">
					Start Game
				</button>
			</a>
		</main>
	);
}
