import Image from "next/image";
import Leaderboard from "./Leaderboard";

export default function Home() {
  return (
    <>
      <div className="splashBackground w-screen h-screen fixed"></div>
      <main className="flex w-full">
        <nav className="sticky top-0 h-screen bg-black bg-opacity-80 backdrop-blur-lg min-w-[16rem]">
          <ul className="py-16">
            <ListItem label="Play" href="#play" />
            <ListItem label="Tutorial" href="#leaderboard" />
            <ListItem label="Leaderboard" href="#leaderboard" />
            <ListItem label="About" href="#leaderboard" />
          </ul>
        </nav>
        <div className="w-full">
          <section id="play" className="w-full h-screen flex flex-col xl:items-end xl:flex-row p-16 gap-10">
            <div className="grow">
              <Image
                src={"/images/SPEEED Logo@4x.webp"}
                alt="SPEEED Logo"
                width={500}
                height={500}
              />
            </div>
            <Image
              src={"/images/googleplay.png"}
              alt="SPEEED Logo"
              width={200}
              height={200}
            />
            <Image
              src={"/images/appstore.png"}
              alt="SPEEED Logo"
              width={200}
              height={200}
            />
          </section>
          <section
            id="leaderboard"
            className="w-full bg-black bg-opacity-30 h-screen backdrop-blur-lg"
          >
            <Leaderboard />
          </section>
        </div>
      </main>
    </>
  );
}

interface ListItem {
  label: string;
  href: string;
}

function ListItem({ label, href }: ListItem) {
  return (
    <li>
      <a
        href={href}
        className="w-full block px-16 py-4 transition-colors hover:bg-opacity-30 hover:bg-black active:bg-opacity-50"
      >
        {label}
      </a>
    </li>
  );
}
