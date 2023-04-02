import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { onSnapshot, query, orderBy, DocumentData } from "firebase/firestore";
import { collection } from "firebase/firestore";
import db from "../firebase-config";
import { setThread } from "../features/threadSlice";

interface SidebarThreadProps {
	id: string;
	threadName?: string | null | undefined;
	img?: string;
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid rgba(190, 190, 190, 0.1);
	color: black;
	cursor: pointer;

	&:hover {
		background-color: rgba(2, 150, 199, 0.2);
	}
`;

const ThreadDetails = styled.div`
	margin-left: 15px;
	position: relative;
	width: 100%;
`;

const Timestamp = styled.small`
	position: absolute;
	top: 5px;
	right: 0;
`;

const SidebarThread: React.FC<SidebarThreadProps> = ({
	id,
	threadName,
	img,
}) => {
	const dispatch = useDispatch();
	const [threadInfo, setThreadInfo] = useState<DocumentData[]>([]);

	useEffect(() => {
		onSnapshot(
			query(
				collection(db, "threads", id, "messages"),
				orderBy("timestamp", "desc"),
			),
			(snapshot) => setThreadInfo(snapshot.docs.map((doc) => doc.data())),
		);
	}, [id]);

	return (
		<Wrapper
			onClick={() =>
				dispatch(
					setThread({
						threadId: id,
						threadName: threadName,
						threadImg: img,
					}),
				)
			}
		>
			<Avatar src={img} />
			<ThreadDetails>
				<h3>{threadName}</h3>
				<p>{threadInfo[0]?.message}</p>
				<Timestamp>
					{threadInfo.length >= 1
						? new Date(
								threadInfo[0]?.timestamp?.toDate() as string,
						  ).toLocaleString()
						: null}
				</Timestamp>
			</ThreadDetails>
		</Wrapper>
	);
};

export default SidebarThread;
