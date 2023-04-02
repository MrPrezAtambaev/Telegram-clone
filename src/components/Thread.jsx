import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
	MicNoneOutlined,
	MoreHoriz,
	SendRounded,
	TimerOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import {
	selectThreadId,
	selectThreadName,
	selectThreadImg,
} from "../features/threadSlice";
import {
	onSnapshot,
	collection,
	addDoc,
	serverTimestamp,
	query,
	orderBy,
} from "firebase/firestore";
import db from "../firebase-config";
import Message from "./Message/Message";
import thread from "./thread.module.scss";

const Thread = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const threadName = useSelector(selectThreadName);
	const threadId = useSelector(selectThreadId);
	const threadImg = useSelector(selectThreadImg);
	const user = useSelector(selectUser);

	useEffect(() => {
		if (threadId) {
			onSnapshot(
				query(
					collection(db, "threads", threadId, "messages"),
					orderBy("timestamp"),
				),
				(snapshot) => {
					setMessages(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						})),
					);
				},
			);
		}
	}, [threadId]);

	const sendMessage = async (event) => {
		event.preventDefault();
		await addDoc(collection(db, "threads", threadId, "messages"), {
			timestamp: serverTimestamp(),
			message: input,
			uid: user.uid,
			photo: user.photo,
			email: user.email,
			displayName: user.displayName,
		});
		//firebace
		setInput("");
	};

	return (
		<div className={thread.wrapper}>
			<div className={thread.head}>
				<div className={thread.cont}>
					<Avatar src={threadImg} />
					<div className={thread.info}>
						<h4 style={{ margin: 0 }}>{threadName}</h4>
						<h5 style={{ margin: 0, marginTop: "8px" }}>Last Seen</h5>
					</div>
				</div>
				<IconButton>
					<MoreHoriz />
				</IconButton>
			</div>
			<div className={thread.message}>
				{messages.map(({ id, data }) => (
					<Message key={id} data={data} />
				))}
			</div>
			<div className={thread.inp}>
				<form>
					<input
						placeholder="Write a message..."
						type="text"
						value={input}
						className={thread.input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<IconButton>
						<TimerOutlined />
					</IconButton>
					<IconButton onClick={sendMessage}>
						<SendRounded />
					</IconButton>
					<IconButton>
						<MicNoneOutlined />
					</IconButton>
				</form>
			</div>
		</div>
	);
};

export default Thread;
