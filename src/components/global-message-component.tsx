import React, { useEffect, useState } from "react";
import { GetShopDetails } from "../api";

export default function GlobalMessage() {
	const [globalMessage, setGlobalMessage] = useState<string>("");

	useEffect(() => {
		async function fetchData() {
			const response = await GetShopDetails();
			response && setGlobalMessage(response["global_message"]);
		}

		fetchData();
	}, []);
	return (
		<>
			{globalMessage && (
				<div
					id="global_message"
					className="w-full font-family-roboto-condensed text-white text-lg text-center bg-red-400 py-2">
					{globalMessage}
				</div>
			)}
		</>
	);
}
