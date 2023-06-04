import Image from "next/image";

export default function Card({ machine_id, machine_name }) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<Image
					src={`/machines/${machine_id}.png`}
					alt="machines"
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{machine_name.toUpperCase()}</h2>
				{/*<p>{machine_info}</p>*/}
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Detail</button>
				</div>
			</div>
		</div>
	);
}
