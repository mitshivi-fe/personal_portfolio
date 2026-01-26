import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-700/40 bg-white dark:bg-zinc-900">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
          <div className="flex gap-6">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} Shivi Mittal. Made with love in
              India.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
