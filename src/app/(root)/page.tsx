import CardItems from "@/components/CardItems";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      _id: 1,
      title: "Title From John",
      description: "A long description text",
      views: 100,
      image: "https://dummyimage.com/600x400/000/fff",
      category: "Robots",
      author: {
        _id: 1,
        name: "John Doe",
        avatarUrl: "https://dummyimage.com/100x100/000/fff",
      },
    },
    {
      _createdAt: new Date(),
      _id: 2,
      title: "Title From Bradd",
      description: "A long description text",
      views: 100,
      image: "https://dummyimage.com/600x400/000/fff",
      category: "Robots",
      author: {
        _id: 1,
        name: "Bradd Doe",
        avatarUrl: "https://dummyimage.com/100x100/000/fff",
      },
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Title</h1>
        <p className="sub-heading">A long description text</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `You searched for: ${query}` : "Showing all."}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post, index) => <CardItems key={index} item={post} />)
          ) : (
            <p className="no-results">No posts found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
