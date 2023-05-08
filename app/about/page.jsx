"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

export default function About() {
	return (
		<div className="grid grid-cols-fluid md:gap-4 mt-12 max-w-8xl border-2 border-gray-200 p-2">
			<div className="flex flex-col items-center justify-start h-auto lg:h-full lg:mb-10">
				<Image
					src={"/ProfilePicaFB.jpeg"}
					alt={"Dennis"}
					width={600}
					height={600}
				/>
				<h1 className="font-sans text-2xl flex flex-col items-center justify-center h-20 lg:h-28 font-bold">
					I'M DENNIS
				</h1>
				<p className="italic text-xs text-center w-28">
					'I like to be creative, paint, work, making
					music...'
				</p>
			</div>
			<div className="lg:col-wider-p">
				<p className="font-sans text-4xl border-b-2 border-gray-600 py-8">
					About Me
				</p>
				<p className="font-sans text-xl text-justify py-8">
					Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Molestiae obcaecati quisquam
					deserunt, adipisci vel nisi iste impedit culpa,
					similique amet ipsa nihil, ullam aliquid. Incidunt
					at iure exercitationem facilis a?
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Molestiae obcaecati quisquam
					deserunt, adipisci vel nisi iste impedit culpa,
					similique amet ipsa nihil, ullam aliquid. Incidunt
					at iure exercitationem facilis a?
				</p>
				<div className="flex flex-row gap-12">
					<Link href="/contact">
						<button className="bg-transparent border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-4 py-2 mb-10">
							Reach out
						</button>
					</Link>
					<Link href="https://www.instagram.com/dennizart9/">
						<FiInstagram className="w-12 h-12" />
					</Link>
				</div>
			</div>
		</div>
	);
}
