import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/wave.gif')] bg-cover bg-center">
	    <div className="flex items-center gap-8">
		    <Image
			    src={"/alone.png"}
			    alt={"long lost doggo"}
			    width={150} height={150}
			    className="rounded-lg object-cover"
		    />
		    <div className="flex flex-col gap-4">
			    <div>
				    <h2 className="font-bold text-3xl">nerdium</h2>
				    <p className="italic">computer engineer, game developer, dead mall enthusiast</p>
			    </div>
			    <dl className="grid grid-cols-[auto_1fr] gap-x-4">
			        <dt className="font-semibold">email</dt>
			        <dd><a className="underline" href="mailto:contact@nerdium.dev">{"contact@nerdium.dev"}</a></dd>

			        <dt className="font-semibold">github</dt>
			        <dd><a className="underline" href="https://github.com/nerdium">{"nerdium"}</a></dd>
			    </dl>
		    </div>
	    </div>
    </div>
  );
}
