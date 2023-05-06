import Image from "next/image";

export default function Product({
	name,
	image,
	price,
	description,
}) {
	return (
		<>
			<Image
				src={image}
				alt={name}
				width={400}
				height={400}
			/>
			<div>
				<h1>{name}</h1>
				{price}
				<p>{description}</p>
			</div>
		</>
	);
}
