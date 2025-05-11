import Image from "next/image";

export type HomeImageType = {
  img: string;
};

export default function HomeImage({ img }: { img: string }) {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <Image
        src={`/images/logo/${img}.webp`}
        alt="light mode image"
        height={600}
        width={600}
        className="object-cover object-center mx-auto"
      />
    </section>
  );
}
