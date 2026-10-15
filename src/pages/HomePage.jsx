import { Link } from "react-router";
import products from "../data/Menu";
import CardMenu from "../components/ui/CardMenu";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto md:px-16 px-4 border-l border-r border-gray-300 md:py-10 py-5">
      <div className="flex md:flex-row flex-col items-start justify-between gap-10 border-b border-gray-300 py-8">
        <div>
          <p className="text-sm">pilihan produk beragam</p>
          <h2 className="text-4xl font-bold mb-8">
            Mudah dan Dekat, Penuhi Semua <mark>Kebutuhan</mark> Sehari-hari.
          </h2>
          <Link
            to="/menu"
            className="bg-green-600 px-5 py-2 text-white rounded-lg"
          >
            Jelajahi menu
          </Link>
        </div>
        <img
          className="lg:w-150 md:w-100"
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Indomaret.svg/3840px-Indomaret.svg.png?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
        />
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-2xl">Produk favorite</h1>
        <p>memunculkan semua menu favorite</p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-1 mt-6">
          {products.map((tampilin) => {
            if(tampilin.id < 7){
              return <CardMenu key={tampilin.id} product={tampilin} />
            }
          })}
        </div>
      </div>
    </div>
  );
}
