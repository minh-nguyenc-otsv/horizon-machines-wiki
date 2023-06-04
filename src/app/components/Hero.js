"use client";

import Image from "next/image";
import Modal from "./Modal";

export default function Hero({ machine, machine_components }) {
	return (
		<div className="hero bg-transparent">
			<div className="hero-content flex-col lg:flex-row">
				<Image
					src={`/machines/${machine["machine_id"]}.png`}
					alt="machines"
					width="0"
					height="0"
					sizes="100vw"
					quality={100}
					className="w-full h-auto rounded-full"
				/>
				<div className="text-black space-x-2 space-y-2">
					<h1 className="text-5xl font-bold">{machine["machine_name"]}</h1>
					<p className="py-6">{machine["machine_info"]}</p>
					<div className="grid grid-cols-2 grid-row-1 gap-4">
						<button
							className="btn btn-primary"
							onClick={() => window.my_modal.showModal()}
						>
							Components
						</button>
						<button
							className="btn btn-primary"
							onClick={() => window.my_modal.showModal()}
						>
							How to fight
						</button>
					</div>
					<Modal
						machine_components={machine_components}
						how_to_fight={machine["how_to_fight"]}
					/>
				</div>
			</div>
		</div>
	);
}
