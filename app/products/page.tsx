import Product from "../components/Product";

export default function Products() {
	return (
		<div>
			<div className="grid grid-cols-fluid gap-4 mt-12">
				<h1 className="text-gray-500 font-light text-2xl">
					All my paintings
				</h1>
				<Product
					id={"1"}
					name={"Painting one"}
					image={"/painting.png"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"2"}
					name={"Painting two"}
					image={"/painting.png"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"3"}
					name={"Painting three"}
					image={"/painting.png"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"4"}
					name={"Painting four"}
					image={"/painting.png"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
			</div>
		</div>
	);
}
