import { Avatar } from "@mui/material";
import { FriendProps } from "./interfaces";

const Friend = ({ img, name }: FriendProps) => {
	return (
		<div>
			<Avatar src={img} />
			<div>{name}</div>
		</div>
	);
};

export default Friend;
