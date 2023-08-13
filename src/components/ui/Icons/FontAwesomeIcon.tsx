import { FC } from 'react';
import * as FontAwesomeIcons from 'react-icons/fa6';

import { FontAwesomeIconName } from '@/shared/types/icon.types';

const FontAwesomeIcon: FC<{ name: FontAwesomeIconName }> = ({ name }) => {
	const IconComponent = FontAwesomeIcons[name];

	return <IconComponent /> || <></>;
};

export default FontAwesomeIcon;
