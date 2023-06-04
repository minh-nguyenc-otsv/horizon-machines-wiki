import Card from "./Card";

export default function Carousel({ machines }) {
	const listMachines = machines.map((machine) => (
		<div key={machine["machine_id"]} className="carousel-item">
			<Card
				machine_id={machine["machine_id"]}
				machine_name={machine["machine_name"]}
			/>
		</div>
	));
	return (
		<div className="carousel carousel-center w-screen p-4 space-x-4 bg-transparent">
			{listMachines}
		</div>
	);
}
