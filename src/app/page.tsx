import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="w-full py-4 px-8 bg-gray-100 shadow-sm">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <Link href="#hero" className="text-xl font-bold text-gray-900">Testovací Kavárna "U Kódu"</Link>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="hover:text-gray-600">O nás</Link></li>
            <li><Link href="#services" className="hover:text-gray-600">Služby</Link></li>
            <li><Link href="#contact" className="hover:text-gray-600">Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="h-screen flex items-center justify-center bg-gray-50 text-center px-4">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Testovací Kavárna "U Kódu"</h1>
            <p className="text-xl text-gray-600">Nejlepší káva pro vaše bugy.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">O nás</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jsme Testovací Kavárna "U Kódu", místo, kde se vášeň pro kvalitní kávu snoubí s láskou k programování. 
            Věříme, že s dobrou kávou se i ty nejzapeklitější bugy řeší mnohem lépe. 
            Naším cílem je poskytovat inspirativní a klidné prostředí pro vývojáře, testery a všechny milovníky technologií.
            Přijďte relaxovat, pracovat nebo jen tak prohodit pár slov s podobně smýšlejícími lidmi.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 py-20 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Služby</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Čerstvě pražená káva</h3>
                <p className="text-gray-600">Široký výběr prémiových káv z celého světa, připravovaných s láskou.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Pohodlné pracovní prostředí</h3>
                <p className="text-gray-600">Wi-Fi, dostatek zásuvek a klidné koutky pro vaši produktivitu.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Snacky a dezerty</h3>
                <p className="text-gray-600">Sladké i slané občerstvení pro doplnění energie během kódování.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Kontakt</h2>
          <p className="text-lg text-gray-700 mb-4">Máte otázky nebo se chcete domluvit na schůzce? Napište nám!</p>
          <p className="text-xl font-semibold text-gray-900">
            Email: <a href="mailto:test@kavarna.cz" className="text-blue-600 hover:underline">test@kavarna.cz</a>
          </p>
        </section>
      </main>

      <footer className="w-full py-6 px-8 bg-gray-100 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
