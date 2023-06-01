import Header from '../components/header/Header';
import SushiCard from '../components/sushiCard/SushiCard';
import styles from '../styles/modules/SushiPage.module.scss';
import Loader from '../components/loader/PageLoader';
import { useGetProductsQuery } from '../store/services/shopApi';
const SushiListPage = () => {
	const { data: products, isLoading } = useGetProductsQuery(1);

	return (
		<>
			<Header />
			{isLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<>
					<div className={styles.title}>
						<svg
							version="1.0"
							xmlns="http://www.w3.org/2000/svg"
							width="512.000000pt"
							height="512.000000pt"
							viewBox="0 0 512.000000 512.000000"
							preserveAspectRatio="xMidYMid meet"
						>
							<g
								transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
								fill="#000000"
								stroke="none"
							>
								<path
									d="M3875 4787 c-22 -13 -393 -227 -825 -477 -984 -567 -1019 -588 -1163
				-671 -65 -38 -121 -69 -124 -69 -3 0 -47 40 -98 88 -104 100 -216 165 -351
				204 -113 33 -324 33 -437 0 -150 -43 -281 -124 -388 -240 -96 -105 -154 -210
				-195 -358 -21 -77 -31 -348 -15 -425 37 -176 178 -326 350 -371 56 -14 118
				-17 409 -17 188 -1 342 -2 342 -3 0 -2 -9 -27 -20 -55 -30 -79 -50 -213 -50
				-332 0 -133 13 -208 51 -287 16 -34 29 -65 29 -68 0 -3 -297 -6 -661 -6 l-661
				0 -34 -34 -34 -34 0 -147 0 -147 34 -34 34 -34 211 0 211 0 0 -127 c0 -109 3
				-133 20 -160 10 -17 28 -37 39 -43 23 -12 844 -16 874 -4 39 15 33 99 -9 114
				-15 6 -187 10 -410 10 l-385 0 3 103 3 102 1233 5 c1081 4 1234 7 1242 20 20
				31 15 70 -12 93 -19 16 -105 17 -1489 17 l-1469 0 0 85 0 85 2120 0 2120 0 0
				-85 0 -85 -515 0 -516 0 -24 -25 c-28 -27 -31 -52 -11 -81 13 -18 32 -19 293
				-24 l278 -5 3 -102 3 -103 -1101 0 -1101 0 -24 -25 c-29 -29 -32 -55 -8 -84
				l18 -22 1133 1 c777 0 1140 3 1153 11 11 6 29 25 39 42 17 27 20 51 20 160 l0
				127 210 0 210 0 32 29 33 29 3 151 3 152 -34 34 -35 35 -211 0 c-116 0 -211 3
				-211 6 0 3 13 34 29 68 44 92 55 165 48 334 -6 170 -25 250 -89 380 -56 115
				-103 147 -148 102 -29 -29 -25 -54 25 -155 67 -133 79 -192 80 -375 0 -149 -1
				-157 -28 -215 -15 -33 -47 -79 -70 -102 l-41 -43 -468 0 c-257 0 -468 1 -468
				3 0 1 14 29 30 61 17 32 30 65 30 72 0 12 61 14 343 14 376 0 386 1 431 63 26
				36 34 171 16 277 -31 185 -170 337 -353 386 -145 38 -312 -2 -428 -105 l-46
				-40 -18 38 c-9 22 -35 65 -56 97 l-40 59 33 28 c51 44 165 105 243 129 57 18
				94 23 195 23 143 0 228 -20 338 -81 71 -40 96 -40 125 -2 34 46 16 74 -78 125
				-129 68 -214 88 -385 88 -108 0 -162 -5 -210 -18 -83 -23 -211 -86 -274 -134
				-27 -21 -55 -42 -62 -48 -9 -7 -19 -7 -28 0 -7 6 -35 27 -62 48 -63 48 -191
				111 -274 133 -72 20 -298 26 -383 10 l-48 -8 3 41 3 42 185 107 c2228 1283
				2130 1223 2130 1292 0 29 -190 366 -222 393 -29 24 -94 22 -143 -6z m90 -147
				c8 -16 15 -33 15 -38 0 -5 -42 -33 -92 -63 -83 -47 -1463 -843 -1856 -1070
				-85 -49 -158 -89 -163 -89 -8 0 -43 70 -37 75 2 1 372 215 823 475 451 260
				924 533 1050 606 127 74 233 134 237 134 4 0 14 -13 23 -30z m112 -195 c10
				-22 13 -38 7 -44 -5 -4 -281 -165 -614 -356 -333 -192 -684 -394 -780 -450
				-96 -56 -339 -196 -540 -312 -201 -116 -479 -276 -618 -357 -140 -80 -258
				-146 -264 -146 -16 0 -48 31 -48 45 0 21 29 40 325 211 160 92 623 359 1030
				594 768 443 947 546 1275 737 107 62 198 113 203 113 4 0 15 -16 24 -35z
				m-2772 -719 c182 -58 324 -179 410 -350 l35 -69 -91 -54 c-50 -29 -94 -53 -98
				-53 -3 0 -21 32 -39 71 -81 172 -265 280 -456 267 -171 -12 -316 -110 -391
				-263 -42 -85 -55 -148 -55 -272 0 -184 27 -202 292 -203 l177 0 19 -44 c11
				-24 37 -56 58 -72 32 -25 47 -29 98 -29 60 0 66 3 251 109 105 61 210 121 234
				135 l44 24 -7 -44 c-18 -115 -107 -228 -213 -271 -57 -22 -67 -23 -451 -26
				-332 -3 -402 -1 -455 13 -122 31 -217 125 -253 250 -21 74 -15 306 11 400 70
				253 268 441 530 501 92 21 251 12 350 -20z m-119 -331 c100 -30 100 -34 -10
				-108 l-98 -65 -45 20 c-27 12 -78 22 -124 25 -44 3 -79 9 -79 13 0 13 68 69
				110 90 79 40 165 49 246 25z m219 -187 c14 -29 25 -61 25 -70 0 -10 -34 -36
				-92 -70 -113 -65 -108 -63 -108 -45 0 8 -11 35 -25 61 l-25 47 43 29 c23 16
				65 45 92 64 28 19 54 35 58 35 4 1 19 -23 32 -51z m-457 -78 c82 -18 162 -104
				162 -175 l0 -25 -177 2 -178 3 0 85 c0 118 1 120 79 120 36 0 87 -5 114 -10z
				m1388 -348 c184 -58 336 -186 418 -352 63 -129 78 -208 74 -390 -3 -141 -4
				-148 -36 -212 -18 -36 -48 -80 -68 -97 l-35 -31 -552 0 -553 0 -41 43 c-23 23
				-55 69 -70 102 -27 58 -28 66 -28 215 0 167 12 231 61 340 23 51 30 59 67 70
				121 35 241 134 293 239 31 63 30 62 169 95 46 11 242 -3 301 -22z m1020 -337
				c98 -29 98 -33 -13 -106 l-98 -66 -45 20 c-26 11 -79 21 -128 24 l-83 6 36 37
				c84 86 215 120 331 85z m216 -182 c19 -40 24 -67 26 -166 l4 -118 -93 3 -92 3
				-14 59 c-7 32 -23 76 -35 97 -13 24 -18 43 -12 48 17 15 179 121 186 121 3 0
				17 -21 30 -47z m-394 -110 c36 -21 54 -42 76 -85 44 -88 43 -89 -136 -86
				l-153 3 -3 89 c-2 49 0 96 3 104 4 12 21 14 86 9 65 -4 90 -11 127 -34z"
								/>
								<path
									d="M2018 2575 c-178 -49 -317 -202 -348 -385 -18 -106 -10 -241 16 -277
				46 -63 50 -64 464 -61 349 3 377 4 403 22 48 32 57 63 57 194 0 127 -13 188
				-57 276 -33 65 -125 157 -191 190 -106 54 -240 70 -344 41z m250 -141 c23 -9
				42 -21 42 -25 0 -5 -43 -38 -96 -73 l-96 -64 -46 21 c-29 12 -77 22 -124 25
				-43 3 -78 8 -78 13 0 10 76 72 110 89 81 43 204 49 288 14z m182 -179 c22 -44
				25 -63 25 -160 l0 -110 -91 -3 c-88 -3 -92 -2 -98 20 -3 13 -6 32 -6 44 0 12
				-13 47 -29 78 l-28 57 41 28 c22 16 64 45 91 64 28 20 55 35 60 33 6 -1 21
				-24 35 -51z m-443 -80 c76 -23 143 -103 143 -171 l0 -24 -177 2 -178 3 0 85
				c0 120 0 120 88 120 40 0 96 -7 124 -15z"
								/>
							</g>
						</svg>
						<p>
							Sushi<span>Way</span>
						</p>
					</div>

					<div className={styles.container}>
						{products?.map((product) => (
							<div key={product.id}>
								<SushiCard
									image={product.image}
									weight={product.weight}
									title={product.title}
									price={product.price}
								/>
							</div>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default SushiListPage;
