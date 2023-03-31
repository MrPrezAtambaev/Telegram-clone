import { FrList } from "./interfaces";
import friend from "./friend.module.scss";
import { Avatar, IconButton } from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const SearchFriend = ({ img, name, uid }: FrList) => {
	const user = useSelector(selectUser);
	const friendUID = uid;

	const addFriend = async () => {};

	return (
		<div className={friend.search}>
			<Avatar src={img} alt="d" />
			<div>{name}</div>
			{user?.uid === friendUID ? null : (
				<IconButton>
					<DoneOutlinedIcon />
				</IconButton>
			)}
		</div>
	);
};

export default SearchFriend;
