type Breadcrumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

export default function Breadcrumbs({ items }: Readonly<BreadcrumbsProps>) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-10 flex items-center gap-2 text-sm opacity-60 bg-accent/10 rounded-full px-4 py-2 w-fit">

      <a
        href="/"
        className="transition-opacity hover:opacity-60 font-bold">
        Home
      </a>

      {items.map((item) => (
        <span
          key={item.label}
          className="flex items-center gap-2">
          <span className="text-accent font-bold">/</span>

          {item.href ? (
            <a
              href={item.href}
              className="transition-opacity hover:opacity-60">
              {item.label}
            </a>
          ) : (
            <span className="opacity-100">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}