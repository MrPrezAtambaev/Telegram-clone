import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Thread from "../../components/Thread";
import message from "./messenger.module.scss";

const Messenger = () => {
	return (
		<div className={message.swapper}>
			<Sidebar />
			<Thread />
		</div>
	);
};

export default Messenger;
