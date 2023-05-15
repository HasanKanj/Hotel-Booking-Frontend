// import { useState } from "react";
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };  return (
//     <div className=" bg-white dark:bg-gray-800 ">
//     <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
//         <div className="flex justify-between "> 
//             <div className="hidden sm:flex flex-row items-center space-x-6">
//                 <img className="dark:bg-white  p-1 rounded  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />                       
//                <img className="dark:bg-white  p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg2.svg" alt="facebook" />
//                 <img className="dark:bg-white  p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg3.svg" alt="linkdin" />
//                 <img className="dark:bg-white  p-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg4.svg" alt="instagram" />                                                             
//             </div>
//             <div className=" flex space-x-3 items-center">
//                 <img className="p-1 dark:bg-white rounded-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg5.svg" alt="circle" />                 
//                 <h1 className=" font-normal text-2xl leading-6 text-gray-800 dark:text-white " >OvonRueden</h1>
//             </div>
//             <div className="hidden sm:flex flex-row space-x-4">
//                 <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button>
//                 <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Sign In</button>
//             </div>

//             <div id="bgIcon" onClick={toggleMenu}  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
//                 <img className="dark:bg-white" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
//                <img className="dark:bg-white hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />                                                               
//             </div>
//         </div>

//         <div id="MobileNavigation" className="hidden sm:hidden mt-4 mx-auto">
//             <div className="flex flex-row items-center justify-center space-x-6">
//                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />                       
//                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg2.svg" alt="facebook" />
//                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg3.svg" alt="linkdin" />
//                 <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg4.svg" alt="instagram" />                                                             
//             </div>
//             <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
//                 <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Sign Up</button>
//                 <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Sign In</button>
//             </div>
//         </div>
//     </nav>    
// </div>
//   );
// }
// export default Header;