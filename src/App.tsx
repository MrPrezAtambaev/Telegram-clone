import React, { useEffect } from "react";
import { auth } from "./firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { useTheme } from "@mui/material";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const theme = useTheme();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//login
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					}),
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return <div className="App">{user ? <Main /> : <Login />}</div>;
}

export default App;
