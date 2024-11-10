import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
<div className="projects py-12">
<div className="container mx-auto px-4">
  <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
    My Work
  </h1>
  <div className="grid justify-center items-center ">         
    {/* Foodies */}
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <Image
        src="/images/foodies.png"
        alt="Foodies"
        width={900}
        height={600}
        className="justify-center items-center object-cover rounded-lg"
      />           
    </div>          
  </div>           
</div>
</div>
  );
}
// export default function Projects() {
//   const [showMore, setShowMore] = useState(false);

//   const handleShowMore = () => {
//     setShowMore(!showMore); 
//   };

//   return (
//     <div className="projects py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
//           My Work
//         </h1>
//         <div className="grid justify-center items-center ">         
//           {/* Foodies */}
//           <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
//             <Image
//               src="/images/foodies.png"
//               alt="Foodies"
//               width={900}
//               height={600}
//               className="justify-center items-center object-cover rounded-lg"
//             />           
//           </div>          
//         </div>           
//       </div>
//     </div>
//   );
// }
