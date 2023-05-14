"use client";

import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		if (window.innerWidth < 1024) {
			setIsOpen(!isOpen);
		}
	}

	return (
		<nav className="bg-transparent relative flex flex-row items-center justify-between my-2">
			<h2 className="absolute right-0 h-auto w-26 max-w-md lg:left-0 text-red-600 font-bold antialiased tracking-wider hover:italic z-20 md:text-xl">
				<Link href="/">
					<img
						src="/favicon.ico"
						alt="Favicon"
						className="inline mr-0"
					/>
					ENNI<span className="text-blue-700">Z</span>
				</Link>
			</h2>

			<div className="flex flex-col items-center justify-between py-8">
				<button
					className="text-gray-800 focus:outline-none lg:hidden"
					onClick={toggleMenu}>
					<i
						className="fa fa-bars text-2xl"
						style={{ fontSize: "35px" }}></i>
				</button>
			</div>

			<ul
				className={`${
					isOpen
						? "fixed inset-0 flex flex-col items-center justify-center bg-white text-gray-600 mt-[-150px] z-10"
						: "hidden lg:flex lg:items-center lg:justify-end md:gap-10 md:text-xl md:mr-2"
				}`}>
				{isOpen && (
					<button
						className="flex flex-col items-center justify-center text-gray-700 gap-4 focus:outline-none"
						onClick={toggleMenu}>
						<i
							className="fa fa-times w-32 h-20"
							style={{ fontSize: "25px" }}></i>
					</button>
				)}

				<Link href="/">
					<li
						className="flex flex-row h-auto justify-between items-center py-2 rounded-md ursor-pointer hover:text-red-600"
						onClick={toggleMenu}>
						Home
					</li>
				</Link>

				<Link href="/products">
					<li
						className="flex flex-row justify-between items-center py-2 rounded-md cursor-pointer hover:text-red-600"
						onClick={toggleMenu}>
						Overview
					</li>
				</Link>

				<Link href="/commissioned">
					<li
						className="flex flex-row justify-between items-center py-2 rounded-md cursor-pointer hover:text-red-600"
						onClick={toggleMenu}>
						Commissioned
					</li>
				</Link>

				<Link href="/about">
					<li
						className="flex flex-row justify-between items-center py-2 rounded-md italic text-blue-700 cursor-pointer hover:text-red-600"
						onClick={toggleMenu}>
						About Me
					</li>
				</Link>

				<Link href="/contact">
					<li
						className="flex flex-row justify-between items-center py-2 rounded-md italic cursor-pointer hover:text-red-600"
						onClick={toggleMenu}>
						Reach out
					</li>
				</Link>
			</ul>
		</nav>
	);
}
