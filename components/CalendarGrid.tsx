import { addMonths, startOfYear, format, eachMonthOfInterval } from 'date-fns';
import { de } from 'date-fns/locale';

export default function CalendarGrid({ year = new Date().getFullYear() }: { year?: number }) {
  const start = startOfYear(new Date(year, 0, 1));
  const months = eachMonthOfInterval({ start, end: addMonths(start, 11) });
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {months.map((month) => (
        <div key={month.toISOString()} className="rounded border bg-white p-2 shadow-sm dark:bg-zinc-900">
          <h3 className="mb-2 text-center text-sm font-semibold">
            {format(month, 'LLLL yyyy', { locale: de })}
          </h3>
          <div className="grid grid-cols-7 text-xs">
            {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => (
              <span key={d} className="font-bold text-center">
                {d}
              </span>
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <span key={i} className="aspect-square border text-center" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}