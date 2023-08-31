import localFont from 'next/font/local';
import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Layout from '@/components/layout/Layout';

import '@/assets/styles/globals.scss';

const helvetica = localFont({
	src: [
		{
			path: '../src/assets/fonts/Helvetica_Regular.ttf',
			weight: '400'
		},
		{
			path: '../src/assets/fonts/Helvetica_Medium.ttf',
			weight: '500'
		},
		{
			path: '../src/assets/fonts/Helvetica_Bold.ttf',
			weight: '700'
		}
	]
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru">
			<body className={helvetica.className}>
				<Layout>
					<Header />
					<main className="main">{children}</main>
					<Footer />
				</Layout>
			</body>
		</html>
	);
}
