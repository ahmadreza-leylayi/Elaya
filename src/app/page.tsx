import Footer from "./components/Footer";
import FooterText from "./components/Footer-text";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
<div className="relative w-full min-h-screen flex flex-col bg-[url('/images/Home.png')] bg-center bg-cover bg-no-repeat py-1">
    <Navbar/>
    <div className="mt-[45%] xl:mt-[5%] md:mt-[10%] w-fit lg:ml-7">
      <span className="flex flex-col text-start ml-3 p-3 lg:text-[65px] text-[39px] font-normal font-display text-white"><span className="font-display text-start tracking-wider lg:text-[50px]  text-[30px] text-rose-300">ELAYA <br/></span> Vocal Academy</span>
   
      <p className=" w-[85%] font-title ml-8 mt-5 lg:text-[16px] text-[14px]  text-white">Take your singing to the next level with professional vocal coaching</p>
    </div>
    <div className="flex w-[40%] lg:ml-7">
      <button className="font-display mt-10 ml-7 py-2 px-0 w-46 rounded-md border border-white text-[17px]  font-extralight text-white  tracking-widest ">Contact</button>
    </div>
<Footer/>
<FooterText/>
</div>
  );
}
