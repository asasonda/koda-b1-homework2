import { useEffect, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message_pesan: "",
  });
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("contactMessages");
      const data = saved ? JSON.parse(saved) : [];

      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("contactMessages", JSON.stringify(messages));
  }, [messages]);

  
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      nama: form.name,
      email: form.email,
      pesan: form.message_pesan,
    };
    setMessages((prev) => [newMessage, ...prev]);

    setForm({
      name: "",
      email: "",
      message_pesan: "",
    });
  }
  return (
    <div className="max-w-7xl mx-auto md:px-10 px-6 py-10 border-l border-r border-b rounded-b-xl border-gray-300">
      <div className="flex flex-col md:flex-row items-start gap-5 justify-center">
        <div>
          <div className="text-center">
            <h1 className="font-bold md:text-4xl text-2xl mt-2">Contact Us</h1>
            <p className="font-light md:text-base text-sm">
              ini halaman contact dapat diakses dan memberikan message.
            </p>
          </div>
          <div className="border border-gray-300 rounded-xl px-5 py-6 mt-4">
            <h2 className="text-xl font-semibold">Kirim Pesan</h2>
            <p className="text-sm">Input untuk mengirim pesan</p>
            <form onSubmit={handleSubmit}>
              <div className="w-full flex-col flex mt-5">
                <label>Masukkan nama:</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="border border-gray-300 px-3 py-1 rounded-md"
                />
              </div>
              <div className="mt-3 flex md:flex-row flex-col gap-4 justify-between">
                <div className="flex flex-col w-full">
                  <label>Masukkan email:</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Nama Email"
                    className="border border-gray-300 px-3 py-1 rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <label>Tinggalkan pesan</label>
                <textarea
                  name="message_pesan"
                  placeholder="Message"
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-sky-700 text-white w-full rounded-lg mt-4 py-1 cursor-pointer"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
        <div className="border border-gray-300 rounded-xl px-5 py-6 mt-4">
          <h2 className="rounded-xl px-3 py-2 text-xl">Daftar Pesan (<span className="font-bold text-green-600">{messages.length}</span>)</h2>
          {messages.length === 0 ? (
            <p>Belum ada Pesan</p>
          ) : (
            <div className="space-y-4">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-slate-200 p-4 mt-2"
                >
                  <h3 className="font-semibold">{item.nama}</h3>
                  <p className="text-sm text-slate-500">{item.email}</p>
                  <p className="mt-2 border border-gray-300 rounded-xl px-2 py-2 whitespace-pre-wrap wrap-break-word text-slate-700 text-sm">
                    <span className="font-bold">Pesan:</span> {item.pesan}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
