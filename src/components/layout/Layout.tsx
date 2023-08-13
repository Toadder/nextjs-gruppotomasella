'use client';

import { Next13ProgressBar } from 'next13-progressbar';
import { FC, ReactNode } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';

interface ILayout {
	children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<Next13ProgressBar
				height="4px"
				color="#f27935"
				options={{ showSpinner: false }}
				showOnShallow
			/>
			<YMaps>
				<div className="layout">{children}</div>
			</YMaps>
		</>
	);
};

export default Layout;
