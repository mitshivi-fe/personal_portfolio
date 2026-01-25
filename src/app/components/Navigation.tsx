"use client";

import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop, Transition } from "@headlessui/react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({
  href,
  children,
  close,
}: {
  href: string;
  children: React.ReactNode;
  close: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 text-base text-zinc-800 dark:text-zinc-200 hover:text-teal-500 dark:hover:text-teal-400"
        onClick={close}
      >
        {children}
      </Link>
    </li>
  );
}

function MobileNavigation(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <Transition>
        <PopoverBackdrop
          transition
          className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-closed:opacity-0 dark:bg-black/80"
        />
        <PopoverPanel
          focus
          transition
          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 dark:bg-zinc-900 dark:ring-zinc-800"
        >
          {({ close }) => (
            <>
              <div className="flex flex-row-reverse items-center justify-between">
                <button
                  type="button"
                  aria-label="Close menu"
                  className="-m-1 p-1"
                  onClick={() => close()}
                >
                  <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                </button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                  {navItems.map((item) => (
                    <MobileNavItem key={item.href} href={item.href} close={() => close()}>
                      {item.label}
                    </MobileNavItem>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-100/5">
                <Link
                  href="/Shivi_FE_NITkkr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => close()}
                  className="inline-flex w-full justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-400"
                >
                  Download Resume
                </Link>
              </div>
            </>
          )}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="relative block px-3 py-2 text-zinc-600 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        {children}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white/95 px-4 py-4 shadow-md shadow-zinc-800/5 backdrop-blur dark:bg-zinc-900/95 sm:px-6 lg:px-8">
      <div className="flex flex-1 justify-start">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/images/shi_thumbnail.jpg"
            alt="Shivi Mittal"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-white dark:ring-zinc-800"
          />
          <span className="hidden font-semibold text-zinc-800 dark:text-zinc-100 sm:block">
            Shivi Mittal
          </span>
        </Link>
      </div>
      <div className="flex flex-1 justify-center md:justify-center">
        <MobileNavigation className="pointer-events-auto md:hidden" />
        <DesktopNavigation className="pointer-events-auto hidden md:block" />
      </div>
      <div className="flex flex-1 justify-end gap-3">
        <ThemeToggle />
        <Link
          href="/Shivi_FE_NITkkr.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-400 md:inline-flex"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
