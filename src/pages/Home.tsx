import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import styles from '../styles/modules/Home.module.scss';

const Home = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.container__img}>
					<img
						src={'https://bakerstreetbakery.com.ua/files/resized/slides/img_0248-2.1980x700.jpg'}
						alt="Тарталетки на будь-який смак"
					/>
					<p className={styles.img__title}>Тарталетки на будь - який смак</p>
					<Link to={'/products'} className={styles.img__link}>
						<p>Подивитись всі</p>
					</Link>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
