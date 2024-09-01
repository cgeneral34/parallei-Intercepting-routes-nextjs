// import Link from "next/link"

// const InterceptedF2 = () => {
//   return (
//     <>
//     <h1>(.) Intercepted F2 page</h1>
//     <div className="m-4">
//         <Link href="/f1" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-red-500 hover:to-purple-400 transform hover:scale-105 transition-transform duration-200 ease-in-out">Back</Link>
//     </div>
//     </>

//   )
// }

// export default InterceptedF2

import Link from "next/link";

const InterceptedF2 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Intercepted F2 Page</h1>
      <div className="m-4 flex justify-center">
        <Link
          href="/f1"
          className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:from-blue-500 hover:to-purple-500 transform hover:scale-110 transition-all duration-300 ease-out"
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default InterceptedF2;