import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar = ({ src = "", alt = "" }: AvatarProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={100}
      height={100}
      className="inline-block rounded-full width-auto height-auto"
    />
  );
};

export default Avatar;
