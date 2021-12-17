import { FunctionComponent } from "react";
import Link from "next/link";
import { Car } from "../types/cars";
import styles from "../styles/CarItem.module.css";

type Props = Car;

const CarItem: FunctionComponent<Props> = (props) => {
	return (
		<Link href={"/cars/" + props.id}>
			<div className={styles["car-item"]}>
				<img src={props.image} />
				<div className={styles.title}>
					{props.make} {props.model}
				</div>
			</div>
		</Link>
	);
};

export default CarItem;
