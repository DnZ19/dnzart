import Link from "next/link";

export default function Home() {
	return (
		<main>
			<div
				className="flex flex-col items-center justify-start h-screen bg-transparent p-4"
				style={{
					backgroundImage: "url(/foto2.jpeg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: "800px",
					marginBottom: "50px",
				}}>
				<Link href="/products">
					<div className="flex flex-col items-start justify-start h-30 mt-60 bg-gray-900 hover:bg-gray-500 cursor-pointer transition-colors duration-200 text-gray-100 p-4 rounded-md">
						<h1 className="text-4xl font-bold mb-2">
							Hello Friends
						</h1>
						<p className="text-gray-300 italic text-xs w-52">
							This is my digital art gallary, feel free to
							look around, if you have any questions, drop
							me a message..
						</p>
						<p className="font-sans text-xs mt-4"> Grz,</p>
						<p className="font-sans text-xs mt-2">Dennis</p>
						{/* <button className="text-gray-300 italic text-xs text-center">
							Enter
						</button> */}
					</div>
				</Link>
			</div>
		</main>
	);
}
