import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="bg-white h-16 border-b border-gray-300">
        <div className="max-w-6xl mx-auto py-3">
            <div>
                <div className="flex items-center gap-3 px-4 md:px-10 lg:px-10 xl:px-0">
                    <h2 className="font-bold text-2xl">.Indomaret</h2>
                    <p className="text-gray-300">|</p>
                    <div className="md:flex hidden gap-1 bg-gray-100 items-center justify-center px-4 py-1 rounded-xl">
                        <Link to='/' className="text-sm hover:bg-green-600 hover:text-white px-2 py-1 rounded-md " >Home</Link>
                        <p className="text-gray-300">|</p>
                        <Link to='/menu' className="text-sm hover:bg-green-600 hover:text-white px-2 py-1 rounded-md " >Menu</Link>
                        <p className="text-gray-300">|</p>
                        <Link to='/contact' className="text-sm hover:bg-green-600 hover:text-white px-2 py-1 rounded-md " >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
