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
export interface IAuth {
	login: string;
	password: string;
}
