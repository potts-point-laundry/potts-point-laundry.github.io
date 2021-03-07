import React from "react";

interface Props {
	message: string;
}

export default function GlobalMessage(props: Props) {
	return (
		<div
			id="global_message"
			className="w-full font-family-roboto-condensed text-white text-lg text-center bg-red-400 py-2">
			{props.message}
		</div>
	);
}
