import { FunctionComponent } from "react";
import { Car } from "../types/cars";
import CarItem from "./CarItem";
import styles from "../styles/CarList.module.css";

type Props = {
	cars: Car[];
};

const CarList: FunctionComponent<Props> = (props) => {
	return (
		<div className={styles["car-list"]}>
			{props.cars.map((car) => (
				<CarItem
					key={car.id}
					id={car.id}
					make={car.make}
					model={car.model}
					engine={car.engine}
					description={car.description}
				/>
			))}
		</div>
	);
};

export default CarList;
