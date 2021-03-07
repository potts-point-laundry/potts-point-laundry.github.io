import drive from "drive-db";

export const GetGlobalMessage = (): string => {
	return "Sensitive skin laundry powder available upon request.";
};

export const GetShopDetails = (): Promise<[IShopDetails]> => {
	return drive({
		sheet: "1hbV7p_sUK692HcxhET95Fhib2Px4yOtyjK0BAvgMffU",
		tab: "1",
		cache: 3600,
	});
};

export interface IShopDetails {
	id: string;
	name: string;
	value: string;
	comment: string;
}

export const getValueByName = (shopDetails: [IShopDetails], target: string): string => {
	shopDetails.map((detail: IShopDetails) => {
		if (detail.name === target) {
			console.log(detail, target, detail.value);
			return detail.value;
		}
	});

	return "";
};
