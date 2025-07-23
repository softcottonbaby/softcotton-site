import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      {/* Hide Navbar on small screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Hero />
    </>
  );
}
