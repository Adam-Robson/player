import Image from "next/image";

export type HomeImageType = {
  img: string;
};

export default function HomeImage({ img }: { img: string }) {
  return (
    <section className="w-full h-full overflow-hidden">
      <Image
        src={`/images/logo/${img}.webp`}
        alt="light mode image"
        height={899}
        width={899}
        className={`
          object-cover object-center
          mx-auto w-full 
          max-w-[898px]
          max-[1536px]:max-w-[878px]
          max-[1280px]:max-w-[858px]
          max-[1024px]:max-w-[838px]
          max-[768px]:max-w-[818px] 
          max-[640px]:max-w-[798px]
          max-[480px]:max-w-[778px]
          `}
      />
    </section>
  );
}
