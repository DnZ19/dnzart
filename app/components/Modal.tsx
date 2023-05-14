import { ReactNode, MouseEventHandler } from "react";
import { ModalType } from "@/types/ModelType";

export default function Modal({
	showModal,
	setShowModal,
	children,
}: ModalType) {
	const handleClose: MouseEventHandler = (event) => {
		event.stopPropagation();
		setShowModal(false);
	};

	if (!showModal) {
		return null;
	}

	return (
		<div onClick={handleClose}>
			<div onClick={(e) => e.stopPropagation()}>
				{children}
				{/* <button onClick={handleClose}>Close</button> */}
			</div>
		</div>
	);
}
