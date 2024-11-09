import About from "@/components/about";
import NavBar from "@/components/navBar";

function Home() {
  return (
    <div className="px-40 pt-10 font-mono">
      <NavBar />
      <About />
    </div>
  );
}

export default Home;
