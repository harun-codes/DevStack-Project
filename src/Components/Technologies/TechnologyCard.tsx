// // import React from 'react';
// import type { TechType } from '../../types/types';

// const TechnologyCard = ({Technology}: {Technology : TechType}) => {
//     return (
//                                <div className="card bg-base-100 border border-base-300 from-base-200 to-base-100 py-6 px-6 flex justify-start ">

//                             <figure className="relative py-6 px-6 flex justify-start">
//                                 <img
//                                     src={Technology.icon}
//                                     alt="Shoes"
//                                     className="w-10 "
//                                 />
//                             </figure>

//                             <p className="absolute top-4 right-4 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                                 {Technology.badge}
//                             </p>

//                             <div className="card-body space-y-3">

//                                 <h2 className="text-xl font-bold ">
//                                     {Technology.name}
//                                 </h2>

//                                 <p className="text-sm text-slate-500 ">
//                                     {Technology.description}
//                                 </p>

//                                 <div className="flex gap-2 pt-2 text-slate-500">

//                                     <p className="rounded-lg border px-3 py-1 font-medium">
//                                         {Technology.category}
//                                     </p>

//                                     <p className="rounded-full px-3 py-1 text-xs font-medium">
//                                         {Technology.difficulty}
//                                     </p>

//                                     <p className="rounded-full px-3 py-1 text-xs font-medium">
//                                         ⭐{Technology.rating}
//                                     </p>

//                                 </div>


//                                 <div className="pt-4">
//                                     <button className="btn rounded-xl border-0 w-full text-white bg-black">
//                                         Add to Stack
//                                     </button>
//                                 </div>

//                             </div>
//                         </div>
//     );
// };

// export default TechnologyCard;