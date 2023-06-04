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
	await prisma.$disconnect();
	return machine;
}

async function fetchMachines() {
	const prisma = new PrismaClient();
	const machines = await prisma.machines.findMany({
		where: {
			zero_dawn: true,
		},
	});
	await prisma.$disconnect();
	return machines;
}

export default async function Home() {
	const machine = await fetchMachine("Thunderjaw");
	console.log(machine);
	const machines = await fetchMachines();
	return (
		<div>
			<div>
				<Hero machine={machine} machine_components={""} />
			</div>
			<div>
				<Carousel machines={machines} />
			</div>
		</div>
	);
}
