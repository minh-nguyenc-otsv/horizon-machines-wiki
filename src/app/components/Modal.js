export default function Modal() {
	return (
			<dialog id="my_modal" className="modal">
				<form method="dialog" className="modal-box">
					<button htmlfor="my-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">Press ESC key or click on ✕ button to close</p>
				</form>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
	);
}