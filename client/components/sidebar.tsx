export function Sidebar({
  items,
  selected,
}: {
  items: { id: string; label: string; href: string }[];
  selected: string;
}) {
  return (
    <nav className="w-full h-full">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="font-bold">
            <a
              href={item.href}
              className={`block transition-colors py-1 text-base ${
                item.id === selected
                  ? "bg-neutral-600 text-neutral-100"
                  : "text-neutral-100 hover:bg-neutral-400"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
