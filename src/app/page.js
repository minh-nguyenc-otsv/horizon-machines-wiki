import Carousel from "../app/components/Carousel";
import Hero from "./components/Hero";
import { PrismaClient } from "@prisma/client";

async function fetchMachine(machine_name) {
	const prisma = new PrismaClient();
	const machine = await prisma.machines.findFirst({
		where: {
			machine_name: machine_name,
		},
	});
	console.log(machine);
	return machine;
}

export default async function Home() {
	const machine = await fetchMachine("Thunderjaw");
	console.log(machine);
	return (
		<div>
			<div>
				<Hero machine={machine} machine_components={""} />
			</div>
			<div>
				<Carousel />
			</div>
		</div>
	);
}
