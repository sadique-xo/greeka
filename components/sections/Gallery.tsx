import Image from "next/image";
import { galleryImages } from "@/data/gallery-data";

export function Gallery() {
  return (
    <section id="gallery" className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
      <div className="w-full grid grid-cols-4 gap-0">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
