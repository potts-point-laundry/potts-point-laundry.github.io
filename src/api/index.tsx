import _ from "lodash";
import axios from "axios";

export const fetchFromAPI = (): Promise<APIData> => {
	const apiURl =
		process.env.NODE_ENV === "production"
			? "https://raw.githubusercontent.com/potts-point-laundry/potts-point-laundry.github.io/master/data.json"
			: "/data.json";
	return axios.get<APIData>(apiURl).then((response) => response.data);
};

export const GetShopDetails = async (): Promise<IShopDetails[]> => {
	return (await fetchFromAPI()).store_details;
};

export const GetShopPricing = async (): Promise<IShopPrices | null> => {
	const shopPrices: IShopPrice[] = (await fetchFromAPI()).pricing;

	if (shopPrices) {
		const group = _.groupBy(shopPrices, (shopPrice) => {
			return shopPrice.category;
		});

		let result: IShopPrices = {
			dry_cleaning: group.dry_cleaning,
			laundry: group.laundry,
			pressing: group.pressing,
		};

		return result;
	}

	return null;
};

export interface APIData {
	store_details: IShopDetails[];
	pricing: IShopPrice[];
}

export interface IShopPrices {
	dry_cleaning: IShopPrice[];
	laundry: IShopPrice[];
	pressing: IShopPrice[];
}

export interface IShopDetails {
	name: string;
	value: string;
}

export interface IShopPrice {
	category: string;
	name: string;
	price: string;
	description: string;
}

export const findValue = (array: IShopDetails[], name: string): string => {
	for (let i = 0; i < array.length; i++) {
		if (array[i].name === name) {
			return array[i].value;
		}
	}

	return "";
};
