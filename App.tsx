import React, { useState } from 'react';
import { ShieldCheckIcon, WrenchScrewdriverIcon, CodeBracketIcon, UserGroupIcon, ClockIcon } from './components/icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <WrenchScrewdriverIcon className="h-12 w-12 text-red-600" />,
    title: "Instalasi Fire Alarm",
    description: "Pemasangan sistem fire alarm baru sesuai standar keamanan nasional dan internasional untuk berbagai jenis properti.",
  },
  {
    icon: <CodeBracketIcon className="h-12 w-12 text-red-600" />,
    title: "Programming Notifier",
    description: "Jasa programming, konfigurasi, dan commissioning untuk semua jenis panel Master Control Fire Alarm (MCFA) Notifier.",
  },
  {
    icon: <CodeBracketIcon className="h-12 w-12 text-red-600" />,
    title: "Programming Siemens Cerberus PRO & ECO",
    description: "Keahlian khusus dalam programming dan integrasi sistem fire alarm Siemens Cerberus PRO dan Cerberus ECO untuk proteksi maksimal.",
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-red-600" />,
    title: "Perawatan & Troubleshooting",
    description: "Layanan pemeliharaan rutin dan perbaikan cepat untuk memastikan sistem Anda selalu berfungsi optimal.",
  },
];

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <UserGroupIcon className="h-10 w-10 text-white" />,
        title: "Tim Profesional",
        description: "Teknisi kami berpengalaman dan bersertifikat khusus untuk sistem Notifier dan Siemens."
    },
    {
        icon: <ShieldCheckIcon className="h-10 w-10 text-white" />,
        title: "Kepatuhan Standar",
        description: "Kami memastikan setiap instalasi dan programming sesuai dengan regulasi keselamatan kebakaran yang berlaku."
    },
    {
        icon: <ClockIcon className="h-10 w-10 text-white" />,
        title: "Dukungan 24/7",
        description: "Siap memberikan dukungan teknis dan layanan darurat kapan pun Anda membutuhkannya."
    }
];

interface CaseStudy {
  image: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
}

const caseStudies: CaseStudy[] = [
  {
    image: 'https://picsum.photos/seed/project1/800/600',
    title: "Integrasi Sistem di Gedung Perkantoran High-Rise",
    challenge: "Mengintegrasikan sistem fire alarm Notifier dengan sistem manajemen gedung (BMS) yang sudah ada tanpa mengganggu operasional harian.",
    solution: "Melakukan instalasi panel Notifier NFS2-3030 secara bertahap di luar jam kerja dan mengembangkan modul gateway kustom untuk komunikasi yang lancar dengan BMS.",
    outcome: "Sistem terintegrasi penuh, memungkinkan pemantauan terpusat dan meningkatkan waktu respons terhadap potensi kebakaran sebesar 40%.",
  },
  {
    image: 'https://picsum.photos/seed/project2/800/600',
    title: "Upgrade Sistem di Pabrik Manufaktur",
    challenge: "Mengganti sistem fire alarm konvensional yang usang dengan sistem addressable Siemens Cerberus PRO di area produksi yang beroperasi 24/7.",
    solution: "Merancang rencana migrasi zona-per-zona, memastikan area kritis tetap terproteksi selama proses upgrade. Menggunakan detektor khusus yang tahan terhadap lingkungan industri.",
    outcome: "Peningkatan akurasi deteksi dini, pengurangan alarm palsu secara drastis, dan kemudahan dalam penentuan lokasi titik alarm secara spesifik.",
  }
];

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">
    {children}
  </a>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            Fire<span className="text-red-600">Secure</span>
          </a>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="#services">Layanan</NavLink>
            <NavLink href="#why-us">Mengapa Kami</NavLink>
            <NavLink href="#case-studies">Studi Kasus</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
            <div className="md:hidden bg-white">
                <nav className="flex flex-col items-center px-2 pt-2 pb-4 space-y-1">
                    <a href="#services" onClick={() => setIsOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50">Layanan</a>
                    <a href="#why-us" onClick={() => setIsOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50">Mengapa Kami</a>
                    <a href="#case-studies" onClick={() => setIsOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50">Studi Kasus</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50">Kontak</a>
                </nav>
            </div>
        )}
      </header>
    );
};

const HeroSection: React.FC = () => (
    <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Solusi Profesional Fire Alarm <br className="hidden md:block" /> Notifier & Siemens
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Instalasi, Programming, dan Perawatan Sistem Keamanan Kebakaran Terpercaya.
        </p>
        <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Konsultasi Gratis
        </a>
      </div>
    </section>
);


const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center transform hover:-translate-y-2">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Layanan Unggulan Kami</h2>
        <p className="text-lg text-gray-600 mt-2">Solusi lengkap untuk sistem proteksi kebakaran Anda.</p>
        <div className="mt-4 w-24 h-1 bg-red-600 mx-auto rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const WhyUsSection: React.FC = () => (
    <section id="why-us" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Mengapa Memilih Kami?</h2>
                <p className="text-lg text-gray-300 mt-2">Komitmen kami untuk keamanan dan kepuasan Anda.</p>
                <div className="mt-4 w-24 h-1 bg-red-600 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="bg-red-600 p-4 rounded-full mb-5">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const BrandsSection: React.FC = () => (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <h3 className="text-center text-2xl font-semibold text-gray-700 mb-8">Didukung oleh Brand Terkemuka di Industri</h3>
            <div className="flex justify-center items-center space-x-8 md:space-x-16">
                <div className="text-center">
                   <img src="https://www.notifier.com/en-us/PublishingImages/Logo.png" alt="Notifier Logo" className="h-12 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"/>
                   <p className="mt-2 font-semibold text-gray-600">Notifier by Honeywell</p>
                </div>
                <div className="text-center">
                    <img src="https://www.siemens.com/Images/siemens-logo-2021.png" alt="Siemens Logo" className="h-12 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"/>
                    <p className="mt-2 font-semibold text-gray-600">Siemens Cerberus PRO & ECO</p>
                </div>
            </div>
        </div>
    </section>
);

const CaseStudyCard: React.FC<CaseStudy> = ({ image, title, challenge, solution, outcome }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-red-600">Tantangan:</h4>
          <p className="text-gray-600 text-sm">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold text-red-600">Solusi:</h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-red-600">Hasil:</h4>
          <p className="text-gray-600 text-sm">{outcome}</p>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudiesSection: React.FC = () => (
  <section id="case-studies" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Studi Kasus Proyek Kami</h2>
        <p className="text-lg text-gray-600 mt-2">Bukti nyata keahlian kami di lapangan.</p>
        <div className="mt-4 w-24 h-1 bg-red-600 mx-auto rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => (
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hubungi Kami</h2>
                <p className="text-lg text-gray-600 mt-2">Dapatkan penawaran dan konsultasi gratis untuk proyek Anda.</p>
                <div className="mt-4 w-24 h-1 bg-red-600 mx-auto rounded"></div>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="John Doe" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Alamat Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="john.doe@example.com" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan Anda</label>
                        <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Jelaskan kebutuhan Anda..." required></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-12 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);


const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} FireSecure. All Rights Reserved.</p>
            <p className="text-sm mt-1">Jasa Profesional Instalasi & Programming Fire Alarm</p>
        </div>
    </footer>
);

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <BrandsSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
