import Link from "next/link";

function Home() {
  return (
    <div>
      welcome home!
      <Link href="/service">Service</Link>
    </div>
  );
}

export default Home;
