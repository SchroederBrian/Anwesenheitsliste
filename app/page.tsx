export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Willkommen bei der Anwesenheitsliste</h1>
      <p className="max-w-prose text-sm text-gray-600 dark:text-gray-400">
        Diese Version ist ein reiner Frontend-Mockup. Funktionen wie Benutzerauthentifizierung und
        Datenpersistenz werden in Version 2 implementiert.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Nutzen Sie die Navigation links, um die verschiedenen Bereiche zu erkunden.
      </p>
    </section>
  );
}