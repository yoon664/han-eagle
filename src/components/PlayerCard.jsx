// export default function PlayerCard({ name, number, image }) {
//   return (
//     <div className="w-40 flex flex-col items-center text-white">
//       <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
//       <p className="mt-2 font-bold">{name}</p>
//       <p className="text-sm text-gray-400">#{number}</p>
//     </div>
//   );
// }

export default function PlayerCard({ name, number, image }) {
  return (
    <div className="w-40 flex-shrink-0 flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mb-2" />
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-400">#{number}</p>
    </div>
  );
}
