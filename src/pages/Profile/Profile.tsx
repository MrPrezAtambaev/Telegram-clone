import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { IconButton } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

interface UserProfile {
	photo: string;
	displayName: string;
	email: string;
}

const Profile = () => {
	const user = useSelector(selectUser) as UserProfile | null;

	return (
		<div className="wrap">
			<div className="cont">
				<div className="head">
					<img src={user?.photo ?? img} alt="user" className="photo" />
					<div>
						<h2>{user?.displayName ?? "Unknown User"}</h2>
						<h3>E-mail: {user?.email ?? "Unknown Email"}</h3>
					</div>
					<IconButton onClick={() => signOut(auth)}>
						<LogoutOutlinedIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Profile;

const img: string | undefined =
	"https://www.portmelbournefc.com.au/wp-content/uploads/2022/03/avatar-1.jpeg";
