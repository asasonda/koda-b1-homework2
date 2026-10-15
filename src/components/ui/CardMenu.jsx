export default function CardMenu({ product }) {
  return (
    <div className="box border border-gray-300 rounded-lg">
      <img
        src={product.gambar}
        className="object-cover rounded-t-lg md:h-50 h-40"
      />
      <div className="px-3 md:py-3 py-2 flex flex-col items-start">
        <div>
          <h4 className="font-bold overflow-hidden line-clamp-1">
            {product.nama}
          </h4>
          <p className="overflow-hidden text-xs line-clamp-1">
            {product.deskripsi}
          </p>
        </div>

        <p className="font-bold text-green-600 mt-3 tracking-tight text-lg">
          Rp{product.harga.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
