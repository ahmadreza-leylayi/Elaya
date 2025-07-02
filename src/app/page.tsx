import Navbar from "./Navbar/page";


export default function Home() {
  return (
<div className="w-full h-screen flex flex-col bg-[url('/images/Home.png')] bg-center bg-cover bg-no-repeat py-1">
    <Navbar/>
    <div className="mt-[45%] w-full">
      <span className="flex flex-col text-start ml-3 p-3 text-[39px] font-normal font-display text-white"><span className="font-display text-start tracking-wider  text-[30px] text-rose-300">ELAYA <br/></span> Vocal Coaching</span>
   
      <p className=" w-[85%] font-title ml-8 mt-5 text-[14px]  text-white">Take your singing to the next level with professional vocal coaching</p>
    </div>
    <div>
      <button className="font-display mt-10 ml-6 p-2 w-46 rounded-md border border-gray-500 text-[17px] font-stretch-50% font-bold text-gray-700 bg-white ">Contact</button>
    </div>
</div>
  );
}
