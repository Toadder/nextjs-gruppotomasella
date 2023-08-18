import {
	FaArrowLeft,
	FaArrowRight,
	FaCaretDown,
	FaCartShopping,
	FaEye,
	FaEyeSlash,
	FaFile,
	FaLocationDot,
	FaMagnifyingGlass,
	FaMinus,
	FaPlus,
	FaTelegram,
	FaTruckArrowRight,
	FaWhatsapp,
	FaXmark
} from 'react-icons/fa6';

export const fontAwesomeIcons = {
	FaCaretDown,
	FaLocationDot,
	FaCartShopping,
	FaTelegram,
	FaWhatsapp,
	FaMagnifyingGlass,
	FaXmark,
	FaFile,
	FaTruckArrowRight,
	FaMinus,
	FaPlus,
	FaEyeSlash,
	FaEye,
	FaArrowLeft,
	FaArrowRight
} as const;

export type FontAwesomeIconName = keyof typeof fontAwesomeIcons;
