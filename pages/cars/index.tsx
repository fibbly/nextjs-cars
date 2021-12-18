import type { NextPage, GetStaticProps } from "next";
import { MongoClient } from "mongodb";
import { Car, CarModel } from "../../types/cars";
import CarList from "../../components/CarList";

type Props = {
	cars: Car[];
};

const Cars: NextPage<Props> = (props) => {
	return <CarList cars={props.cars} />;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const client = await MongoClient.connect(
		"mongodb+srv://fibble:%40Angel1990@cluster0.e7aia.mongodb.net/NextCars?retryWrites=true&w=majority"
	);

	const db = client.db();

	const carsCollection = db.collection("cars");

	const cars = (await carsCollection.find().toArray()) as CarModel[];

	client.close();

	return {
		props: {
			cars: cars.map(
				(car): Car => ({
					id: car._id.toString(),
					make: car.make,
					model: car.model,
					description: car.description,
					engine: car.engine,
				})
			),
		},
	};
};

export default Cars;
