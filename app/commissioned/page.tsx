import Product from "../components/Product";

export default function Commissioned() {
	return (
		<div>
			<h1 className="text-gray-500 font-light font-sans text-4xl mt-10 border-b-2 border-gray-950">
				Commissioned
			</h1>
			<div className="grid grid-cols-fluid gap-4 mt-12">
				<Product
					id={"1"}
					sold={false}
					name={"Painting one"}
					images={[
						"/paintings/paint1.jpg",
						"/paintings/paint1.jpg",
						"/paintings/paint1.jpg",
					]}
					length={"Length: -- cm"}
					Height={"Height: -- cm"}
					depth={"Depth: -- cm"}
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
					length={"Length: -- cm"}
					Height={"Height: -- cm"}
					depth={"Depth: -- cm"}
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
					length={"Length: -- cm"}
					Height={"Height: -- cm"}
					depth={"Depth: -- cm"}
					price={50000}
					description={
						"Painting is a timeless art form that has been a cornerstone of human culture and expression for centuries. From the earliest cave paintings to modern masterpiece painting has evolved through various styles, techniques, and materials, becoming an essential part of our world's artistic heritage."
					}
				/>
			</div>
		</div>
	);
}
