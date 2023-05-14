type Params = {
	id: string;
};

type SearchParams = {
	name: string;
	price: number | null;
	images: string[];
	length: string;
	Height: string;
	depth: string;
	description: string;
	id: string;
};

export type SearchParamTypes = {
	params: Params;
	searchParams: SearchParams;
};
