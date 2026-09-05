import Link from "next/link";
import { content } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-muted sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          {/* <p className="font-medium text-ink">{content.profile.name}</p> */}
          {/* <p className="mt-2">{content.profile.title}. {content.profile.location}.</p>/ */}
          <p className="mt-2">{content.profile.copyright}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/case-studies" className="hover:text-ink">
            {content.footer.workLabel}
          </Link>
          <Link href="/about" className="hover:text-ink">
            {content.footer.aboutLabel}
          </Link>
          <Link href="/contact" className="hover:text-ink">
            {content.footer.contactLabel}
          </Link>
          <a
            href={`mailto:${content.profile.email}`}
            className="hover:text-ink"
          >
            {content.footer.emailLabel}
          </a>
          {/* <a href={content.profile.linkedinUrl} className="hover:text-ink">
            {content.footer.linkedinLabel}
          </a> */}
          <a href={content.profile.upworkUrl} className="hover:text-ink">
            {content.footer.upworkLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
