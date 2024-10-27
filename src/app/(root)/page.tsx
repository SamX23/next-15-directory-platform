import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <section className="pink_container">
      <h1 className="heading">Title</h1>
      <p className="sub-heading">A long description text</p>
      <SearchForm query={query} />
    </section>
  );
}
