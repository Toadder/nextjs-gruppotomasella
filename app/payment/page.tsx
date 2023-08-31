import { NextPage } from 'next';
import Link from 'next/link';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

const PaymentPage: NextPage = () => {
	return (
		<section className="section">
			<div className="container md:space-y-5 space-y-4">
				<BorderedHeading title="Оплата" />
				<div className="md:space-y-5 space-y-4">
					<div className="md:text-lg space-y-1">
						<div className="font-bold md:text-2xl text-xl">
							Вы можете оплатить Ваш заказа всеми способами:
						</div>
					</div>

					<div className="md:text-lg">
						<div className="font-bold md:text-2xl text-xl text-orange">
							Оплата наличными
						</div>
						<p>
							Вы можете оплатить свой заказ наличными в рублях в нашем салоне
						</p>
					</div>

					<div className="md:text-lg">
						<div className="font-bold md:text-2xl text-xl text-orange">
							Безналичный расчет
						</div>
						<div>
							<p>
								Вы предоставляете нам ваши реквизиты, мы выставляем Вам счет,
								который вы оплачиваете в любом удобном для Вас банке
							</p>
						</div>
					</div>

					<div className="md:text-lg">
						<div className="font-bold md:text-2xl text-xl text-orange">
							Оплата банковской картой
						</div>
						<div>
							<p>
								Вы можете оплатить свой заказ банковской картой в нашем салоне.
							</p>
							<p>
								Доплата может быть произведена при получении заказа нашему
								представителю через терминал.
							</p>
						</div>
					</div>

					<div className="md:text-lg">
						<div className="font-bold md:text-2xl text-xl text-orange">
							Оплата через СБП
						</div>
						<div>
							<p>
								Вы можете оплатить заказ без карты, нужен только смартфон.
								Просто отсканируйте QR-код с использованием мобильного
								приложения вашего банка.
							</p>
						</div>
					</div>

					<div className='text-center md:text-2xl text-xl'>
						<div>Остались вопросы? Звоните!</div>
						<div>
							<a href="tel:79261153285">+7 (926) 115-32-85</a>
						</div>
						<div>
							или <Link href="/consult" className='underline'>закажите обратный звонок</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PaymentPage;
