import Image from "next/image";
const Avatar = ({ src, alt }: any) => {
  return (
    <Image
      alt="Profile image"
      src="/images/shi_thumbnail.jpg"
      width={100}
      height={100}
      className="inline-block rounded-full"
    />
  );
};
export default Avatar;
