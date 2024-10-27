import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-white py-4 px-5 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Vercel Logo" width={133} height={30} />
        </Link>
        <div className="flex items-center gap-4">
          {session && session?.user ? (
            <>
              <Link href="/add">Add</Link>
              <Link href={`/user/${session?.user?.id}`}>
                {session?.user?.name}
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <button type="submit">Logout</button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
