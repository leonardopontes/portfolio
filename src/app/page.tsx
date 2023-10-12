import Navbar from '../components/Navbar';
import Home from '../components/Home';

export default function Page() {
  return (
    <div className="w-full overflow-hidden bg-black"> 
      <div className="bg-img bg-no-repeat bg-cover bg-top md:h-[100vh]">
        <Navbar />
        <Home />
      </div>
    </div>
  )
}