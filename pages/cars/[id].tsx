import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { Car, CarModel } from "../../types/cars";
import Head from "next/head";
import { Fragment, Suspense, useEffect } from "react";
import styles from "../../styles/CarDetail.module.css";
import { useRouter } from "next/router";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface Props {
	car: Car;
}

const CarDetails: NextPage<Props> = (props: Props) => {
	const router = useRouter();
	const id = router.query.id as string;
	const Model = require(`../../components/models/${id}`).default;

	return (
		<Fragment>
			<Head>
				<title>{props.car.make + " " + props.car.model}</title>
				<meta name="description" content={props.car.description} />
			</Head>
			<main className={styles["flex-container"]}>
				<section className={styles["car-details"]}>
					<h1>{props.car.make + " " + props.car.model}</h1>
					<div className={styles.engine}>
						<b>Engine:</b> {props.car.engine}
					</div>
					<div>{props.car.description}</div>
					<button onClick={() => router.back()}>Go Back</button>
				</section>
				<section className={styles["car-view"]}>
					<Canvas className={styles.carview}>
						<OrbitControls />
						<pointLight intensity={1} position={[10, 10, 10]} />
						<pointLight intensity={1} position={[-10, 10, -10]} />
						<Suspense fallback={null}>
							<Model />
						</Suspense>
					</Canvas>
				</section>
				<audio src={"../music.mp3"} autoPlay></audio>
			</main>
		</Fragment>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://fibble:%40Angel1990@cluster0.e7aia.mongodb.net/NextCars?retryWrites=true&w=majority"
	);

	const db = client.db();

	const carsCollection = db.collection("cars");

	const cars = await carsCollection
		.find({}, { projection: { _id: 1 } })
		.toArray();

	client.close();

	return {
		fallback: false,
		paths: cars.map((car) => ({
			params: { id: car._id.toString() },
		})),
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const id = context.params!.id;

	const client = await MongoClient.connect(
		"mongodb+srv://fibble:%40Angel1990@cluster0.e7aia.mongodb.net/NextCars?retryWrites=true&w=majority"
	);

	const db = client.db();

	const carsCollection = db.collection("cars");

	const car = (await carsCollection.findOne({
		_id: new ObjectId(id!.toString()),
	})) as CarModel;

	client.close();

	return {
		props: {
			car: {
				id: car._id.toString(),
				image: car.image,
				make: car.make,
				model: car.model,
				engine: car.engine,
				description: car.description,
			},
		},
	};
};

export default CarDetails;
