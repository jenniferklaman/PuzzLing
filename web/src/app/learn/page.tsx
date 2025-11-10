export default function LearnHome() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Learn</h1>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<a href="/learn/tutorials" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">Tutorials</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">How to build and play linguistics games.</p>
				</a>
				<a href="/learn/data-explorer" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">Data Explorer</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">Browse UD, WALS, UniMorph, Phoible datasets.</p>
				</a>
				<a href="/learn/olympiad-archive" className="rounded-lg border p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900">
					<div className="text-lg font-medium">Olympiad Archive</div>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">IOL/NACLO style puzzles and solutions.</p>
				</a>
			</div>
		</div>
	);
}


