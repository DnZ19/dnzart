"use client";

import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import { useState } from "react";
import Modal from "@/app/components/Modal";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductPage({
	searchParams,
}: SearchParamTypes) {
	const [selectedImage, setSelectedImage] = useState("");
	const [showModal, setShowModal] = useState(false);

	const handleClick = (img: string) => {
		setSelectedImage(img);
		setShowModal(true);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
	};

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col md:flex-row mt-10 min-h-max">
				<Image
					src={searchParams.images[0]}
					alt={searchParams.name}
					width={600}
					height={600}
					className="w-full lg:w-auto max-h-auto md:max-w-xs lg:md:max-h-80 lg:max-w-md rounded-lg bg-cover"
				/>
				<div>
					<div className="px-4 text-justify">
						<h1 className="text-2xl pb-4">
							{searchParams.name}
						</h1>
						<div className="gap-2 flex flex-col items-startb mb-8 w-28 text-xs">
							<button className="py-1 px-4 bg-slate-300 text-slate-950 rounded-xl text-left text-xs">
								{searchParams.length}
							</button>
							<button className="py-1 px-4 bg-slate-300 text-slate-950 rounded-xl text-left text-xs">
								{searchParams.Height}
							</button>
							<button className="py-1 px-4 bg-slate-300 text-slate-950 rounded-xl text-left text-xs">
								{searchParams.depth}
							</button>
						</div>
						{searchParams.price !== null &&
							formatPrice(searchParams.price)}
						<p className="mt-10">
							{searchParams.description}
						</p>
						<div className="flex flex-row items-center gap-6 lg:mt-16 lg:w-full lg:justify-end">
							<Link href="/contact">
								<button className="bg-transparent border-2 border-teal-950 hover:bg-teal-500 text-teal-900 rounded-lg py-2 px-4 mt-10 cursor-pointer">
									Check availability
								</button>
							</Link>
							<Link href="/products">
								<TiArrowBack className="w-12 h-12 mb-[-40px]" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full h-auto">
				<div className="flex flex-row gap-4 mt-4">
					{Array.isArray(searchParams.images) &&
						searchParams.images.map((img, index) => (
							<div
								key={index}
								onClick={() => handleClick(img)}>
								<Image
									src={img}
									alt={`Image ${index}`}
									width={100}
									height={100}
									className="cursor-pointer object-cover"
								/>
							</div>
						))}
				</div>
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}>
					<Image
						src={selectedImage}
						alt={searchParams.name}
						width={600}
						height={600}
						className="w-full max-h-auto rounded-lg bg-cover"
					/>
				</Modal>
			</div>
		</div>
	);
}
