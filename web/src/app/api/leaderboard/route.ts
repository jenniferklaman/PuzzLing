export async function GET() {
	const leaderboard = [
		{ user: "demo_user", game: "phoneme-guess", score: 1200 },
		{ user: "another_user", game: "syntax-tree", score: 980 },
	];
	return Response.json({ leaderboard });
}


