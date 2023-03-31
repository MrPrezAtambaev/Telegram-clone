import {
	Routes,
	Route,
	NavLink,
	HashRouter as Router,
	BrowserRouter,
} from "react-router-dom";
import { AppBar, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Profile from "../Profile/Profile";
import Telegram from "../Messenger/Messenger";
import main from "./main.module.scss";

const Main = () => {
	return (
		<div className={main.cont}>
			<AppBar>
				<NavLink to="/">
					<IconButton>
						<AccountCircleOutlinedIcon />
					</IconButton>
				</NavLink>
				<NavLink to="/messages">
					<IconButton>
						<EmailOutlinedIcon />
					</IconButton>
				</NavLink>
			</AppBar>
			<div>
				<Routes>
					<Route path="/" element={<Profile />} />
					<Route path="/messages" element={<Telegram />} />
				</Routes>
			</div>
		</div>
	);
};

export default Main;
