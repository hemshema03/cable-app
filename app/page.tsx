
const phone = "9445526151";
const whatsapp = `https://wa.me/91${phone}`;

const services = [
  {
    number: "01",
    icon: "📺",
    title: "Cable TV Connection",
    description:
      "Enjoy your favourite television channels with our cable TV connection service.",
  },
  {
    number: "02",
    icon: "📡",
    title: "SCV Set-Top Box",
    description:
      "Experience digital television entertainment with SCV set-top box services.",
  },
  {
    number: "03",
    icon: "🛠️",
    title: "Customer Support",
    description:
      "Get in touch with us for connection assistance, service enquiries and support.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-black tracking-tight">
            RAJ<span className="text-cyan-400">VISION</span>
            <span className="ml-2 text-xs font-medium text-gray-400">
              CABLE
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>

          <a
            href={`tel:${phone}`}
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-[#07111f] transition hover:bg-white"
          >
            Call Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[650px] items-center"
      >
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Your Entertainment, Our Priority
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Experience
              <span className="block text-cyan-400">Entertainment</span>
              Like Never Before.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Welcome to Rajvision Cable. Your connection to television
              entertainment with SCV cable services and set-top box solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#07111f] transition hover:scale-105"
              >
                WhatsApp Us ↗
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-1 w-12 rounded-full bg-cyan-400" />
              <p className="text-sm text-gray-400">
                Rajvision Cable · SCV Set-Top Box
              </p>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/5 p-4 shadow-2xl shadow-cyan-500/10">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[24px] bg-gradient-to-br from-[#122b4b] via-[#0c1c33] to-[#07111f]">
                <div className="mb-6 text-8xl">📺</div>
                <p className="text-3xl font-black tracking-widest">
                  RAJ<span className="text-cyan-400">VISION</span>
                </p>
                <p className="mt-3 text-sm tracking-[0.3em] text-gray-400">
                  CABLE NETWORK
                </p>
                <div className="mt-8 rounded-full border border-cyan-400/30 px-6 py-2 text-sm text-cyan-300">
                  SCV DIGITAL TV
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#12243a] p-5 shadow-xl">
              <p className="text-xs text-gray-400">Customer Enquiries</p>
              <p className="mt-1 text-xl font-bold text-cyan-400">
                94455 26151
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-white/10 bg-[#0b192b] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-cyan-400">
              About Rajvision
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Bringing Television Entertainment Closer to You.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-400">
              Rajvision Cable is focused on providing cable television
              services and SCV set-top box solutions. We aim to make
              television entertainment accessible and convenient for our
              customers.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-block font-bold text-cyan-400 hover:text-white"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-cyan-400">
            What We Offer
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Your television connection and entertainment needs, all in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-white/10 bg-[#0c1c30] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl">{service.icon}</span>
                <span className="text-sm text-gray-600">
                  {service.number}
                </span>
              </div>
              <h3 className="mt-9 text-2xl font-bold group-hover:text-cyan-400">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-blue-900/60 to-cyan-900/30 px-8 py-16 text-center md:px-20">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Rajvision Cable
          </p>
          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Your Home. Your TV. Your Entertainment.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
            Looking for a cable connection or SCV set-top box?
            Contact Rajvision Cable today.
          </p>
          <a
            href={`tel:${phone}`}
            className="mt-9 inline-block rounded-full bg-white px-9 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
          >
            Contact Us: 94455 26151
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0b192b] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-cyan-400">
              Contact Us
            </p>
            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Let's Connect.
            </h2>
            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Need a new cable connection or have a service enquiry?
              We are just a call or message away.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#10233a] p-8">
            <p className="text-sm text-gray-400">Call us directly</p>
            <a
              href={`tel:${phone}`}
              className="mt-3 block text-3xl font-black text-cyan-400 md:text-4xl"
            >
              94455 26151
            </a>

            <div className="my-8 h-px bg-white/10" />

            <p className="text-sm text-gray-400">Our service</p>
            <p className="mt-2 text-xl font-bold">
              SCV Cable & Set-Top Box
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white transition hover:bg-green-600"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050d18]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-black">
              RAJ<span className="text-cyan-400">VISION</span> CABLE
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Your Entertainment, Our Priority.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rajvision Cable.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rajvision Cable on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg shadow-green-500/30 transition hover:scale-110"
      >
        ☎
      </a>
    </main>
  );
}
