import drive from "drive-db";
import _ from "lodash";

const fetchFromGoogleSheets = (tab: number) => {
	return drive({
		sheet: "1hbV7p_sUK692HcxhET95Fhib2Px4yOtyjK0BAvgMffU",
		tab: tab.toString(),
		cache: 3600,
	});
};

export const GetShopDetails = async () => {
	const shopDetails: [IShopDetails] = await fetchFromGoogleSheets(1);

	if (shopDetails) {
		return _.chain(shopDetails).keyBy("name").mapValues("value").value();
	}
};

export const GetShopPricing = async (): Promise<IShopPrices | null> => {
	const shopPrices: [IShopPrice] = await fetchFromGoogleSheets(2);

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

export interface IShopPrices {
	dry_cleaning: IShopPrice[];
	laundry: IShopPrice[];
	pressing: IShopPrice[];
}

interface IShopDetails {
	name: string;
	value: string;
}

export interface IShopPrice {
	category: string;
	name: string;
	price: string;
	description: string;
}
