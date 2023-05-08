import Product from "../components/Product";

export default function Products() {
	return (
		<div>
			<h1 className="text-gray-500 font-light font-sans text-4xl mt-10 border-b-2 border-gray-950">
				Overview
			</h1>
			<div className="grid grid-cols-fluid gap-4 mt-12">
				<Product
					id={"1"}
					sold={false}
					name={"Painting one"}
					image={"/paintings/paint1.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"2"}
					sold={false}
					name={"Painting two"}
					image={"/paintings/paint2.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"3"}
					sold={true}
					name={"Painting three"}
					image={"/paintings/paint3.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"5"}
					sold={false}
					name={"Painting four"}
					image={"/paintings/paint4.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"6"}
					sold={true}
					name={"Painting four"}
					image={"/paintings/paint5.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"7"}
					sold={true}
					name={"Painting four"}
					image={"/paintings/paint6.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"8"}
					sold={false}
					name={"Painting four"}
					image={"/paintings/paint7.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"9"}
					sold={true}
					name={"Painting four"}
					image={"/paintings/paint8.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"10"}
					sold={false}
					name={"Painting four"}
					image={"/paintings/paint9.jpg"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
			</div>
		</div>
	);
}
