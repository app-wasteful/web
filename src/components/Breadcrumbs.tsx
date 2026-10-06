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
      className="sticky top-0 z-40 mb-10 flex items-center gap-2 bg-accent/10 rounded-full p-4 w-fit text-sm backdrop-blur "
    >
      <a
        href="/"
        className="font-bold transition-opacity hover:opacity-60"
      >
        Home
      </a>

      {items.map((item) => (
        <span
          key={item.label}
          className="flex items-center gap-2"
        >
          <span className="font-bold text-accent">/</span>

          {item.href ? (
            <a
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}