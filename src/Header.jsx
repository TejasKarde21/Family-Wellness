

export default function Header(){
    return (<>
        <div className=" w-[95%] ml-4">
            <h1  className="text-3xl text-pink-900 ml-4 mt-3 " >Family Wellness</h1>
           <h2 className="text-base ml-4 text-gray-600">MASSAGE THERAPY</h2>
           </div>
         <ul className="mt-4 ml-4 flex w-[95%] justify-around bg-pink-900 text-white  " >
            <li className=" w-[20%] text-center py-4 font-semibold " >HOME</li>
            <li className="bg-slate-400 w-[20%] py-4 text-center font-semibold ">ABOUT</li>
            <li className="bg-slate-400 w-[20%] text-center py-4 font-semibold">SERVICES</li>
            <li className="bg-slate-400 w-[20%] text-center py-4 font-semibold">FAQ</li>
            <li className="bg-slate-400 w-[20%] text-center py-4 font-semibold">CONTACT</li>
         </ul>
      
      

    </>); 
}