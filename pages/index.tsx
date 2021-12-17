import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next Cars</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<img src="./logo.png" />
				<h1>Cars</h1>
				<Link href="/cars">
					<button>See available cars</button>
				</Link>
			</main>
		</div>
	);
};

export default Home;
