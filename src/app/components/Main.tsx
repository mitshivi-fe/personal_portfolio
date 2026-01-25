import Image from "next/image";
import Link from "next/link";

function Main() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-4">
      <div className="mx-auto max-w-3xl gap-4 flex lg:flex-row flex-col justify-center items-center">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="lg:w-1/2">
      <h1 className="text-2xl lg:text-3xl font-bold tracking-wide text-primary-100">
        Hi There!
      </h1>
      <div className="py-6 lg:text-lg text-text-200">
        <p>
          I am{" "}
          <span className="text-lg lg:text-2xl text-balance text-primary-200">
            Shivi Mittal{" "}
          </span>
          a Senior frontend Engineer, holding more than 6 years of experience of
          working with MNCs, early stage startups and fast growing unicorns. My
          expertise lies into JS, HTML, CSS, TypeScript, Tailwind, React.js,
          Next.js, angular, and poking nose into everything Frontend. If you are
          looking for someone who can help you with your frontend needs, you are
          at the right place be it mentorship, consulting, or just a chat.
        </p>
      </div>
      <Link
        href="/Shivi_FE_NITkkr.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-primary-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100"
      >
        Know more about me!
      </Link>
    </div>
  );
}

function Right() {
  return (
    <div className="lg:w-1/2 flex justify-center lg:pt-0 py-4">
      <Image
        src="/images/hero_Image.webp"
        height={500}
        width={500}
        alt="Shivi Mittal - Senior Frontend Engineer"
        className="rounded-lg"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

export default Main;
