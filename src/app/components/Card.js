import Image from "next/image";

export default function Card() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/horizon_machines.jpeg"
          alt="machines"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Machine Name</h2>
        <p>Nhìn con cặc, thích nhìn không?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Detail</button>
        </div>
      </div>
    </div>
  );
}
