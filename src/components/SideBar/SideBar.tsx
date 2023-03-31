import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import sb from "./sidebar.module.scss";
import {
	BorderColorOutlined,
	PhoneOutlined,
	QuestionAnswerOutlined,
	SettingsOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import SidebarThread from "../SidebarThread";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase-config";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import Search from "../Search/Search";
import { SidebarThreads } from "./interfaces";

const Sidebar = () => {
	const user = useSelector(selectUser);
	const [threads, setThreads] = useState<Array<SidebarThreads>>([]);
	const [srcThreadName, setSrcThreadName] = useState<string>("");

	useEffect(() => {
		onSnapshot(collection(db, "threads"), (snapshot) =>
			setThreads(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				})),
			),
		);
	}, []);

	const addThread = async () => {
		const threadName = prompt("Enter a thread name.");
		if (threadName) {
			await addDoc(collection(db, "threads"), {
				threadName: threadName,
				img: user?.photo,
			});
		}
	};

	return (
		<div className={sb.wrapp}>
			<div className={sb.header}>
				<Search value={srcThreadName} setValue={setSrcThreadName} />
				<IconButton onClick={addThread}>
					<BorderColorOutlined />
				</IconButton>
			</div>
			<div className={sb.thread}>
				{threads.map(
					({
						id = "",
						data: { threadName, img },
					}: SidebarThreads): JSX.Element => (
						<SidebarThread key={id} id={id} threadName={threadName} img={img} />
					),
				)}
			</div>
			<div className={sb.footer}>
				<Avatar src={user?.photo} />
				<IconButton>
					<PhoneOutlined />
				</IconButton>
				<IconButton>
					<QuestionAnswerOutlined />
				</IconButton>
				<IconButton>
					<SettingsOutlined />
				</IconButton>
			</div>
		</div>
	);
};

export default Sidebar;
