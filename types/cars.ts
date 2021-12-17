import type { WithId, Document, ObjectId } from "mongodb";

export interface CarModel extends WithId<Document> {
	image: string;
	make: string;
	model: string;
	engine: string;
	description: string;
}

export interface Car {
	id: string;
	image: string;
	make: string;
	model: string;
	engine: string;
	description: string;
}
