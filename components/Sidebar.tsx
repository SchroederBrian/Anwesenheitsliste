import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'classnames';

const links = [
  { href: '/', label: 'Home' },
  { href: '/calendar', label: 'Mein Kalender' },
  { href: '/overview', label: 'Übersicht' },
  { href: '/oncall', label: 'Bereitschaft' },
  { href: '/vacation', label: 'Urlaubsübersicht' },
  { href: '/admin', label: 'Admin' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-full w-56 shrink-0 border-r bg-white dark:bg-zinc-800">
      <div className="p-4 text-xl font-bold">Anwesenheit</div>
      <nav className="flex flex-col gap-1 p-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'rounded px-3 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700',
              pathname === href
                ? 'bg-zinc-200 dark:bg-zinc-700'
                : 'text-zinc-700 dark:text-zinc-300'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}