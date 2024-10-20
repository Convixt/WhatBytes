
import Navbar from "./components/Navbar";

import SkillTest from "./pages/SkillTest";

export default function Home() {
  return (
    <div className="w-full">
      <div>
    <Navbar />
    </div>
    <hr className="border-t border-gray-300 w-auto my-2 mt-[30px] " />
    <div className="skillset md:flex justify-center items-center">
      <SkillTest />
    </div>
   
     </div>
     


    
  );
}
