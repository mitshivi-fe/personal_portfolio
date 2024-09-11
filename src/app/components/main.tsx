import Button from "./button";
import Image from "next/image";
import Link from "next/link";
function Main() {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        <div className="mx-auto max-w-3xl gap-4 flex lg:flex-row flex-col justify-center items-center">
          <Left />
          <Right />
        </div>
      </div>
    </>
  );
}

function Left() {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-2xl lg:text-3xl font-bold tracking-wide text-primary-100">
        Hi There!
      </h2>
      <div className="py-6 lg:text-lg text-mid">
        <p>
          I am{" "}
          <span className="text-lg lg:text-2xl text-pretty text-primary-200">
            Shivi Mittal{" "}
          </span>
          a Senior frontend Engineer, holding more than 6 years of experience of
          working with MNC's, early stage startups and fast growing unicorns. My
          expertise lies into JS, HTML, CSS, TypeScript, Tailwind, React.js,
          Next.js, angular, and poking nose into everything Frontend. If you are
          looking for someone who can help you with your frontend needs, you are
          at the right place be it mentorship, consulting, or just a chat.
        </p>
      </div>
      <Button>
        <Link href="/shivi_resume_nitkkr.pdf" download="cv">
          {" "}
          Know more about me!{" "}
        </Link>
      </Button>
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
        alt="hero Image"
        className="rounded-lg"
      ></Image>
    </div>
  );
}

export default Main;
