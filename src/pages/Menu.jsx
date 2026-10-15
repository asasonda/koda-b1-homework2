import { useState } from "react";
import CardMenu from "../components/ui/CardMenu";
import products from "../data/Menu";

export default function Menu() {
  const [cari, setCari] = useState("");
  function HandlerCari(search) {
    setCari(search.target.value);
  }

  return (
    <div className="max-w-7xl mx-auto md:px-16 px-5 md:py-10 py-6 border-l border-r border-gray-300">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div>
          <h1 className="font-bold md:text-2xl text-xl">Products</h1>
          <p className="md:text-base text-sm">
            menampilkan semua produk indomaret disini
          </p>
        </div>
        <input
          placeholder="Cari..."
          value={cari}
          onChange={HandlerCari}
          className="border border-gray-300 rounded-xl px-2 py-1 md:w-70 w-full mt-2"
        />
      </div>
      <div className="md:mt-4 mt-6 md:py-1">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 md:gap-1 gap-1 justify-start">
          {!cari
            ? products.map((item) => <CardMenu key={item.id} product={item} />)
            : products.filter(
                (filterproduct) =>
                  filterproduct.nama.toLowerCase().includes(cari),
              ).map((tampilkan) => <CardMenu key={tampilkan.id} product={tampilkan} />)
          }
        </div>
      </div>
    </div>
  );
}
