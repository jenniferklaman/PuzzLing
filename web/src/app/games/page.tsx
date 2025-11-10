export default function GamesHome() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Play Games</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<a href="/games/phoneme-guess" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">🎧 Phoneme Guess</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Identify phonemes from audio or spectrograms.</p>
				</a>
				<a href="/games/syntax-tree" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">🌳 Syntax Tree</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Build dependency trees from sentences.</p>
				</a>
				<a href="/games/morphology" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">⚙️ Morphology</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Segment and gloss inflected forms.</p>
				</a>
				<a href="/games/glossle-plus" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">💬 Glossle+</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Guess words using gloss and feature hints.</p>
				</a>
				<a href="/games/semantle-plus" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">🧠 Semantle+</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Find semantic neighbors with embeddings.</p>
				</a>
				<a href="/games/lingmap" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">🗺️ LingMap</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Explore typology on world maps.</p>
				</a>
				<a href="/games/pangram" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">🐝 Pangram</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Form as many valid morphemes as possible.</p>
				</a>
				<a href="/games/conlang-sandbox" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">🌈 Conlang Sandbox</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Design and evolve your own language.</p>
				</a>
			</div>
		</div>
	);
}


