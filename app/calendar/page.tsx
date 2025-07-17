import CalendarGrid from '../../components/CalendarGrid';

export default function CalendarPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Mein Jahreskalender</h1>
      <CalendarGrid />
    </section>
  );
}