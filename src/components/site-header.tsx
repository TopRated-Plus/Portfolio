import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { content } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="text-sm font-semibold tracking-normal">
          {content.profile.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full border border-ink bg-ink px-4 text-sm font-medium text-canvas transition-opacity hover:opacity-85 sm:inline-flex"
          >
            {content.contact.bookLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
