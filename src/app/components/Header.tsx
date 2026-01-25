import Image from "next/image";
import clsx from "clsx";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center py-8 lg:py-12",
        className
      )}
    >
      <div className="relative">
        <Image
          src="/images/shi_thumbnail.jpg"
          alt="Shivi Mittal"
          width={80}
          height={80}
          priority
          className="rounded-full ring-4 ring-white shadow-xl dark:ring-zinc-800"
        />
        <div className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 opacity-75 blur" />
      </div>
    </div>
  );
}
