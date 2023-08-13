import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Layout from '@/components/layout/Layout';

import '@/assets/styles/globals.scss';

const nunito = Nunito({
	weight: ['400', '500', '600', '700'],
	subsets: ['cyrillic']
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru">
			<body className={nunito.className}>
				<Layout>
					<Header />
					<main className="main">{children}</main>
					<Footer />
				</Layout>
			</body>
		</html>
	);
}
