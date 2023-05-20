export interface IProduct {
	id_tovara: number;
	name: string;
	property1: number;
	property2: number;
	price: number;
}
export interface IProducts {
	products: IProduct[];
}
