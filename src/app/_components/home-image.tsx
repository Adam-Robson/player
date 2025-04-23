import Image from "next/image";

export type HomeImageType = {
  img: string;
};

export default function HomeImage({ img }: { img: string }) {
  return (
    <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src={`/images/logo/${img}.svg`}
        alt="light mode image"
        fill
        className="object-cover transition-opacity duration-500"
      />
    </div>
  );
}
