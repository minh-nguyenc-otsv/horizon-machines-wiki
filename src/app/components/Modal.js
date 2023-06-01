export default function Modal({ machine_components, how_to_fight }) {
	const modal_title = machine_components ? "Components" : "How to fight";
	const modal_content = machine_components ? machine_components : how_to_fight;
	return (
		<dialog id="my_modal" className="modal">
			<form method="dialog" className="modal-box">
				<button
					htmlFor="my-modal"
					className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				>
					✕
				</button>
				<h3 className="font-bold text-lg">{modal_title}</h3>
				<p className="py-4">{modal_content}</p>
			</form>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	);
}
