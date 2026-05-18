export default function ToledoPuyDuFouTravelWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/34600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl font-bold transition"
      >
        WhatsApp
      </a>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.leyendasdetoledo.com/wp-content/uploads/2021/06/196485967_483647479416823_7278981829014094989_n.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Costas Travel Toledo Experience
          </h1>

          <p className="max-w-3xl text-lg md:text-2xl mb-8">
            Descubre la magia de Toledo con visitas guiadas, alojamiento y
            entradas al espectacular parque histórico Puy du Fou España.
          </p>

          <a
            href="#reservas"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-2xl transition"
          >
            Reservar Ahora
          </a>
        </div>
      </section>

      {/* Sobre el producto */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2022/01/19/fotografia-de-la-panoramica-de-toledo-por-la-noche-1.jpeg"
            alt="Vista panorámica de Toledo"
            className="rounded-3xl shadow-xl object-cover h-[450px] w-full"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">Un viaje cultural único</h2>

            <p className="text-lg leading-relaxed mb-6">
              Costas Travel Experience ofrece un paquete exclusivo que combina
              la riqueza histórica de Toledo con la espectacular experiencia
              inmersiva de Puy du Fou España. Diseñado para familias, parejas,
              grupos y amantes de la historia que buscan una experiencia
              premium.
            </p>

            <ul className="space-y-4 text-lg">
              <li>✔️ Alojamiento seleccionado</li>
              <li>✔️ Visita guiada por Toledo</li>
              <li>✔️ Entradas a Puy du Fou España</li>
              <li>✔️ Actividades aptas para todos los públicos</li>
              <li>✔️ Atención personalizada</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            ¿Qué incluye el paquete?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-2xl font-semibold mb-4">Alojamiento</h3>

              <img
                src="https://logos-marcas.com/wp-content/uploads/2021/08/Booking-Emblema.jpg"
                alt="Alojamiento"
                className="rounded-3xl h-56 w-full object-cover shadow-lg mb-4"
              />

              <p>
                Hoteles cuidadosamente seleccionados para garantizar comodidad y
                buena ubicación.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🏰</div>
              <h3 className="text-2xl font-semibold mb-4">Visita Guiada</h3>

              <img
                src="https://scontent.fmad7-1.fna.fbcdn.net/v/t39.30808-6/475279864_1769227293866353_9092036740277751410_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=zafzAAjiwncQ7kNvwF3z77F&_nc_oc=Adqd-nt4ys1k4GMXwoM6vW9mgNIJqdcYPUeaK8NzM8XwKSmtwWYnuz5I_Mo8NFSOud0&_nc_zt=23&_nc_ht=scontent.fmad7-1.fna&_nc_gid=jpkOK-exA825q8JdvJg3gA&_nc_ss=7a289&oh=00_Af4s8R-STUHDd2U1U_y_oFYPWVGBNbKhpzjtmCj3pMU44g&oe=6A110063"
                alt="Visita guiada por Toledo"
                className="rounded-3xl h-56 w-full object-cover shadow-lg mb-4"
              />

              <p>
                Descubre los secretos de la antigua capital imperial con guías
                especializados.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-2xl font-semibold mb-4">Puy du Fou</h3>

              <img
                src="https://toledoentradas.es/wp-content/uploads/puy-du-fou-toledo.jpg"
                alt="Puy du Fou España"
                className="rounded-3xl h-56 w-full object-cover shadow-lg mb-4"
              />

              <p>
                Vive espectáculos históricos impresionantes y una experiencia
                inolvidable.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Galería */}
      <section className="relative h-screen bg-cover bg-center">
        <h2 className="text-4xl font-bold text-center mb-14">
          Vive la experiencia
        </h2>

        <div className="relative h-screen bg-cover bg-center">
          <img
            src="https://www.alsaudade.com/wp-content/uploads/2026/02/DSC_0414_016-1.jpg"
            alt="Toledo histórico"
            className="absolute rounded-3xl shadow-xl object-cover h-[630px] w-full"
          />
        </div>
      </section>

      {/* Precios */}
      <section className="bg-yellow-500 py-20 px-6 text-center text-black">
        <h2 className="text-4xl font-bold mb-8">Oferta Especial</h2>

        <div className="bg-white max-w-xl mx-auto rounded-3xl p-10 shadow-2xl">
          <p className="text-xl mb-4">Paquete desde</p>
          <p className="text-6xl font-bold mb-6">Desde 350€ por persona</p>

          <p className="mb-8 text-lg">
            Incluye alojamiento, visita guiada y entrada a Puy du Fou España.
          </p>

          <a
            href="#reservas"
            className="inline-block bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition"
          >
            Solicitar Información
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section id="reservas" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-gray-100 p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-9">
            Reserva tu experiencia
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-4 rounded-2xl border border-gray-300"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-4 rounded-2xl border border-gray-300"
            />

            <input
              type="number"
              placeholder="Número de viajeros"
              className="w-full p-4 rounded-2xl border border-gray-300"
            />

            <textarea
              placeholder="Cuéntanos qué tipo de viaje buscas"
              rows={5}
              className="w-full p-4 rounded-2xl border border-gray-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-2xl transition"
            >
              Reservar por Email
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Costas Travel Toledo Experience
        </h3>

        <p className="mb-2">
          Agencia especializada en experiencias culturales y viajes históricos
          en Toledo y Puy du Fou España.
        </p>

        <p className="text-sm text-gray-400">
          © 2026 Costas Travel Experience · Todos los derechos reservados.
        </p>
      </footer>

      {/* Nota Deploy */}
      <div className="bg-gray-900 text-white text-center py-4 text-sm">
        Web oficial de Costas Travel Toledo Experience.
      </div>
    </div>
  );
}
