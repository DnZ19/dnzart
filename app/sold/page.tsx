import Link from "next/link";

export default function Sold() {
	return (
		<div className="flex flex-col items-center justify-start mt-32 lg:mt-64 h-screen">
			<h1 className="font-sans text-4xl text-gray-800 mb-10">
				I am sorry....
			</h1>
			<p className="font-sans text-xl text-gray-800 mb-28 lg:max-w-2xl text-center">
				This painting is sold, if you want something
				similar, please contact me, maybe I can make you
				something similar of specific in the same setup?
			</p>
			<Link href="/contact">
				<button className="bg-transparent border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-4 py-2 mb-10">
					Reach out
				</button>
			</Link>
		</div>
	);
}
