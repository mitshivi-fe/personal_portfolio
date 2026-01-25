import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-100 mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary-100">Shivi Mittal</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-200 font-medium mb-4">
              Senior Frontend Engineer
            </p>
            <p className="text-lg text-text-200 mb-6 max-w-xl mx-auto lg:mx-0">
              Building high-performance web experiences for{" "}
              <span className="font-semibold text-primary-100">14M+ users</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-text-200">
              <span className="px-3 py-1 bg-bg-200 rounded-full">
                6+ Years Experience
              </span>
              <span className="px-3 py-1 bg-bg-200 rounded-full">MNCs</span>
              <span className="px-3 py-1 bg-bg-200 rounded-full">Startups</span>
              <span className="px-3 py-1 bg-bg-200 rounded-full">Unicorns</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="bg-primary-100 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-200 transition-colors text-center"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="/Shivi_FE_NITkkr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-100 text-primary-100 px-6 py-3 rounded-lg font-medium hover:bg-primary-100 hover:text-white transition-colors text-center"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/hero_Image.webp"
              alt="Shivi Mittal - Senior Frontend Engineer"
              width={450}
              height={450}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
