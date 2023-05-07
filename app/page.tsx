import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div className="flex flex-col items-center justify-start h-screen bg-red-300 p-4">
				<Link href="/products">
					<div className="flex flex-col items-center justify-start h-30 mt-52 bg-slate-300 hover:bg-gray-500 cursor-pointer transition-colors duration-200 text-gray-700 p-4 rounded-md">
						<h1 className="text-4xl font-bold italic">
							Hello Friends
						</h1>
						<p className="text-gray-500 italic text-xs">
							This is my digital art galary
						</p>
					</div>
				</Link>
			</div>
		</main>
	);
}
