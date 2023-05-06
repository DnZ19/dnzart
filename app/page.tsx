import Product from "./components/Product";

export default function Home() {
	return (
		<main className="flex flex-col gap-12 justify-center items-center min-h-screen md:flex-row">
			<div className="bg-white hover:bg-slate-300 cursor-pointer transition-colors duration-200 text-gray-700 p-4 rounded-md">
				<h1 className="text-4xl font-bold">
					Hello Friends
				</h1>
				<p className="text-gray-500 italic text-xs">
					This is my digital art galary
				</p>
			</div>
			<Product />
		</main>
	);
}
