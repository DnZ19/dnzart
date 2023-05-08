import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
	return (
		<div className="w-full h-40 bg-gray-700 opacity-50 italic font-extralight flex flex-row items-center justify-center md:text-xl">
			<p className="text-gray-200">
				Made by Agile & Pixels B.V.
			</p>
			<AiOutlineCopyrightCircle className="ml-2 text-gray-200" />
		</div>
	);
}
