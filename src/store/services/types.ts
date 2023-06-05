export interface IProduct {
	id_tovara: number;
	name: string;
	property1: number;
	property2: number;
	price: number;
	img: string;
}
export interface IProducts {
	products: IProduct[];
}
export interface ICartPost {
	user_id: number;
	item: {
		id_tovara: number;
		quantity: number;
	};
}
