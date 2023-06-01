'use client';

import Image from "next/image";
import Modal from "./Modal";


export default function Hero() {
  return (
    <div className="hero bg-transparent">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/Thunderjaw.png"
          alt="machines"
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          className="w-full h-auto rounded-full"
        />
        <div className="text-black">
          <h1 className="text-5xl font-bold">Thunderjaw</h1>
          <p className="py-6">
            Apex combat machine, equipped with a wide array of heavy artillery
            and melee attacks.
          </p>
          <button className="btn btn-primary" onClick={()=>window.my_modal.showModal()}>Components</button>
          <button className="btn btn-primary" onClick={()=>window.my_modal.showModal()}>How to fight</button>
          <Modal/>
        </div>
      </div>
    </div>
  );
}
