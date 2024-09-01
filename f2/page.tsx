import Link from "next/link"
const f2 = () => {
  return (
   <>
    <h1>F2 page</h1>
    <div className="m-4">
        <Link href="/f1" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-red-500 hover:to-purple-400 transform hover:scale-105 transition-transform duration-200 ease-in-out">Back</Link>
    </div>
    </>

  )
}

export default f2