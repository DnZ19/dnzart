import { ReactNode, MouseEventHandler } from "react";

export type ModalType = {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	children: ReactNode;
};
