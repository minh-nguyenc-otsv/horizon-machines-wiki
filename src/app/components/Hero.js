import { PrismaClient } from "@prisma/client";
import Image from "next/image";

async function fetchMachine(machine_name) {
  const prisma = new PrismaClient({});
  const machine = await prisma.machines.findFirst({
    where: {
      machine_name: machine_name,
    },
  });
  console.log(machine);
  return machine;
}

export default function Hero() {
  const concac = fetchMachine("thunderjaw");
  console.log(concac);
  return (
    <div className="hero bg-transparent">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/Thunderjaw.jpeg"
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
          <button className="btn btn-primary">Components</button>
        </div>
      </div>
    </div>
  );
}
