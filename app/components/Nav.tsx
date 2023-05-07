"use client";
import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<ul className="flex items-centerpy-8 text-gray-800">
				<Link href="/">
					<li className="flex flex-row justify-between items-center py-2 px-4 rounded-md">
						Home
					</li>
				</Link>

				<Link href="/products">
					<li className="flex flex-row justify-between items-center py-2 px-4 rounded-md">
						overview
					</li>
				</Link>

				<li className="flex flex-row justify-between items-center py-2 px-4 rounded-md">
					about me
				</li>
				<li className="flex flex-row justify-between items-cente py-2 px-4 rounded-md">
					link
				</li>
				<li className="flex flex-row justify-between items-center py-2 px-4 rounded-md">
					link
				</li>
			</ul>
		</nav>
	);
}
