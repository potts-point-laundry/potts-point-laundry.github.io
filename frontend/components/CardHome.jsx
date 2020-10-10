import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import GoogleButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function CardHome({
	image,
	link,
	title,
	cardStyle,
	openNewTab = false,
	...props
}) {
	return (
		<Card className={cardStyle.root}>
			<CardMedia
				className={cardStyle.media}
				image={image}
				title={title}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="h2"
					className="text-center"
				>
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.children}
				</Typography>
			</CardContent>
			<CardActions className="justify-content-end">
				<GoogleButton
					size="small"
					color="primary"
					href={link}
					target={openNewTab ? "_blank" : ""}
				>
					Learn More
				</GoogleButton>
			</CardActions>
		</Card>
	);
}
