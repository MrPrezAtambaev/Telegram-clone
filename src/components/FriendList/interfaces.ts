export type FriendProps = {
	img: string;
	name: string;
};

export type FrList = {
	img: string;
	name: string;
	uid?: string;
};

export type FrListServer = {
	userEmail: string;
	userFriends?: Array<FrList>;
	userID: string;
	userName: string;
	userPhoto: string;
};
