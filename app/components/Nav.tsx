"use client";

import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<nav className="bg-red-300 relative">
			<div className="flex flex-col items-center justify-between py-8">
				<button
					className="text-gray-800 focus:outline-none lg:hidden"
					onClick={toggleMenu}>
					<i
						className="fa fa-bars text-2xl"
						style={{ fontSize: "25px" }}></i>
				</button>
			</div>

			<ul
				className={`${
					isOpen
						? "fixed inset-0 flex flex-col items-center justify-center bg-red-300 text-gray-600"
						: "hidden lg:flex lg:items-center"
				}`}>
				{isOpen && (
					<button
						className="flex flex-col items-center justify-center text-white focus:outline-none"
						onClick={toggleMenu}>
						<i
							className="fa fa-times w-32 h-32"
							style={{ fontSize: "25px" }}></i>
					</button>
				)}

				<Link href="/">
					<li
						className="flex flex-row justify-between items-center py-2 px-4 rounded-md cursor-pointer"
						onClick={toggleMenu}>
						Home
					</li>
				</Link>

				<Link href="/products">
					<li
						className="flex flex-row justify-between items-center py-2 px-4 rounded-md cursor-pointer"
						onClick={toggleMenu}>
						Overview
					</li>
				</Link>

				<li
					className="flex flex-row justify-between items-center py-2 px-4 rounded-md"
					onClick={toggleMenu}>
					About Me
				</li>
				<li
					className="flex flex-row justify-between items-center py-2 px-4 rounded-md"
					onClick={toggleMenu}>
					Link
				</li>
				<li
					className="flex flex-row justify-between items-center py-2 px-4 rounded-md"
					onClick={toggleMenu}>
					Link
				</li>
			</ul>
		</nav>
	);
}
