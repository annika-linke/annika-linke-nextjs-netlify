import { SanityImage } from "@/types/Response";
import Image from "../../Image/Image";

const ImageBlock = ({
  value,
}: {
  value: SanityImage & { caption?: string };
}) => {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-lg">
        <Image image={value} alt={value.alt || ""} />
      </div>
      <figcaption className="mt-2 text-sm font-bold">
        {value.caption}
      </figcaption>
    </figure>
  );
};

export default ImageBlock;
