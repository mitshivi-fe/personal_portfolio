import Link from "next/link";
import { contactInfo } from "@/app/data/socialLinks";
import Section from "../ui/Section";
import Button from "../Button";
import LinkedInIcon from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";
import MailIcon from "../icons/MailIcon";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Work Together"
      className="bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-lg mx-auto">
          Whether you need frontend expertise, mentorship, or just want to chat
          about web technologies, I&apos;d love to connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button href={`mailto:${contactInfo.email}`} variant="primary">
            <MailIcon className="w-5 h-5" />
            {contactInfo.email}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Link
            href={contactInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group -m-1 p-1"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
          </Link>
          <Link
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group -m-1 p-1"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

