import React from "react";
import { IShopDetails } from "../api";

const APIDataContext = React.createContext({
	shopDetails: [],
	globalMessage: "",
	getValueByName: (array: [any], target: string) => {},
});

export default APIDataContext;
