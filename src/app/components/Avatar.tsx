import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const Avatar = ({ src, alt, priority = false }: AvatarProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={100}
      height={100}
      priority={priority}
      className="inline-block rounded-full"
    />
  );
};

export default Avatar;
