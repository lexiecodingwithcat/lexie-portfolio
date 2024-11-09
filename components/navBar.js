import Link from "next/link";
function NavBar() {
  return (
    <header className="flex justify-between">
      <h1 className="text-3xl font-bold">
        Lexie<span className="text-[#00FF9C]">.</span>
      </h1>
      <nav className="text-2xl flex gap-8">
        <Link href="/" className="hover:underline hover:decoration-[#00FF9C]">
          Home
        </Link>
        <Link
          href="/service"
          className="hover:underline hover:decoration-[#00FF9C]"
        >
          Service
        </Link>
        <Link
          href="/resume"
          className="hover:underline hover:decoration-[#00FF9C]"
        >
          Resume
        </Link>
        <Link
          href="/work"
          className="hover:underline hover:decoration-[#00FF9C]"
        >
          Work
        </Link>
        {/* <Link href="/work">Hire me</Link> */}
      </nav>
    </header>
  );
}

export default NavBar;
