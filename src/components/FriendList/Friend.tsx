import { Avatar } from "@mui/material";
import { FriendProps } from "./interfaces";

const Friend = ({ img, name }: FriendProps) => {
	return (
		<div>
			<Avatar src={img} />
			<div style={{ color: "black" }}>{name}</div>
		</div>
	);
};

export default Friend;
