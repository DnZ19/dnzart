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
					images={[
						"/paintings/paint1.jpg",
						"/paintings/paint2.jpg",
						"/paintings/paint3.jpg",
						"/paintings/paint4.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"2"}
					sold={false}
					name={"Painting two"}
					images={[
						"/paintings/paint2.jpg",
						"/paintings/paint2.jpg",
						"/paintings/paint2.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"3"}
					sold={true}
					name={"Painting three"}
					images={[
						"/paintings/paint3.jpg",
						"/paintings/paint3.jpg",
						"/paintings/paint3.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"5"}
					sold={false}
					name={"Painting four"}
					images={[
						"/paintings/paint4.jpg",
						"/paintings/paint4.jpg",
						"/paintings/paint4.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"6"}
					sold={true}
					name={"Painting four"}
					images={[
						"/paintings/paint5.jpg",
						"/paintings/paint5.jpg",
						"/paintings/paint5.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"7"}
					sold={true}
					name={"Painting four"}
					images={[
						"/paintings/paint6.jpg",
						"/paintings/paint6.jpg",
						"/paintings/paint6.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"8"}
					sold={false}
					name={"Painting four"}
					images={[
						"/paintings/paint7.jpg",
						"/paintings/paint7.jpg",
						"/paintings/paint7.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"9"}
					sold={true}
					name={"Painting four"}
					images={[
						"/paintings/paint8.jpg",
						"/paintings/paint8.jpg",
						"/paintings/paint8.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
				<Product
					id={"10"}
					sold={false}
					name={"Painting four"}
					images={[
						"/paintings/paint9.jpg",
						"/paintings/paint9.jpg",
						"/paintings/paint9.jpg",
					]}
					length={"Length: 50 cm"}
					Height={"Height: 50 cm"}
					depth={"Depth: 4 cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
			</div>
		</div>
	);
}
