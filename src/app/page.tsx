import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen relative">
        <Image
          src={"/images/splash.jpg"}
          alt="SPEEED! splash image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>
    </main>
  );
}
