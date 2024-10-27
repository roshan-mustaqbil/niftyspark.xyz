"use client";
import React from "react";

function MainComponent() {
  const [activeImage, setActiveImage] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect((1) => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Custom NFT Design",
      description: "Unique digital art tailored to your vision",
    },
    {
      title: "Collection Creation",
      description: "Complete NFT collections with varying traits",
    },
    {
      title: "3D NFT Art",
      description: "Immersive three-dimensional digital assets",
    },
    {
      title: "Animated NFTs",
      description: "Dynamic motion art and animations",
    },
  ];

  const prices = [
    {
      tier: "Basic",
      price: "0.5 ETH",
      features: [
        "1 Custom NFT",
        "2 Revisions",
        "Basic Animation",
        "Commercial Rights",
      ],
    },
    {
      tier: "Pro",
      price: "2 ETH",
      features: [
        "5 Custom NFTs",
        "5 Revisions",
        "Advanced Animation",
        "Commercial Rights",
        "Priority Support",
      ],
    },
    {
      tier: "Enterprise",
      price: "5 ETH",
      features: [
        "Full Collection",
        "Unlimited Revisions",
        "Complex Animation",
        "Commercial Rights",
        "24/7 Support",
        "Marketing Support",
      ],
    },
  ];

  const gallery = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
  ];

  return (
    <div className="relative min-h-screen font-poppins bg-[#0A0A0A] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-500/30 blur-[100px]"></div>
        <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full bg-pink-500/30 blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] rounded-full bg-blue-500/30 blur-[100px]"></div>
      </div>
      <div className="relative z-10">
        <nav className="fixed top-0 w-full z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              NiftySpark
            </h1>
            <div className="space-x-8">
              <a
                href="#services"
                className="hover:text-purple-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                className="hover:text-purple-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#gallery"
                className="hover:text-purple-400 transition-colors"
              >
                Gallery
              </a>
            </div>
          </div>
        </nav>

        <header className="h-screen flex items-center justify-center px-4">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] border border-purple-500/40 rounded-full animate-[rotate_20s_linear_infinite]"></div>
            <div className="absolute w-[400px] h-[400px] border border-pink-500/40 rounded-full animate-[rotate_15s_linear_infinite_reverse]"></div>
            <div className="absolute w-[200px] h-[200px] border border-blue-500/40 rounded-full animate-[rotate_10s_linear_infinite]"></div>
          </div>
          <div
            className="text-center relative"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <img
              src="/1.jpg"
              alt="Scientist character in red jacket conducting experiments"
              className="w-[150px] h-[150px] mx-auto mb-8 rounded-full opacity-75"
              style={{
                width: `${Math.random() * 80 + 70}px`,
                height: `${Math.random() * 80 + 70}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
            <img
              src="/2.jpg"
              alt="Blue monster character in Hawaiian shirt"
              className="absolute top-[-50px] left-[-150px] rounded-full opacity-75"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
            <img
              src="/3.jpg"
              alt="Cute dragon character with pink horns"
              className="absolute top-[50px] right-[-130px] rounded-full opacity-75"
              style={{
                width: `${Math.random() * 90 + 60}px`,
                height: `${Math.random() * 90 + 60}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
            <img
              src="/4.jpg"
              alt="Character playing saxophone in urban setting"
              className="absolute bottom-[-30px] left-[-110px] rounded-full opacity-75"
              style={{
                width: `${Math.random() * 85 + 65}px`,
                height: `${Math.random() * 85 + 65}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
            <img
              src="/5.jpg"
              alt="Lion character with bandana in tropical setting"
              className="absolute bottom-[20px] right-[-170px] rounded-full opacity-75"
              style={{
                width: `${Math.random() * 95 + 55}px`,
                height: `${Math.random() * 95 + 55}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
            <img
              src="/6.jpg"
              alt="Tiger character with sunglasses at sunset"
              className="absolute top-[-30px] right-[-110px] rounded-full opacity-75"
              style={{
                width: `${Math.random() * 75 + 75}px`,
                height: `${Math.random() * 75 + 75}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              NiftySpark
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Elevating Digital Art to New Dimensions
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:opacity-90 transition-opacity">
              Explore Our Work
            </button>
          </div>
        </header>

        <section id="services" className="py-20 px-4">
          <h2 className="text-3xl text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="mb-6 text-3xl text-purple-400 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-lg group-hover:scale-110 transition-transform mx-auto">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl mb-4 text-purple-400">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 border-t border-b border-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-8">About Us</h2>
            <p className="text-lg">
              We are a collective of digital artists and blockchain enthusiasts
              dedicated to creating unique NFT experiences. Our team combines
              artistic vision with technical expertise to bring your digital
              assets to life.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-3xl text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {prices.map((tier, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
                  {tier.tier}
                </h3>
                <p className="text-3xl font-bold mb-8 text-white text-center">
                  {tier.price}
                </p>
                <ul className="space-y-4 text-center">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-300 justify-center"
                    >
                      <i className="fas fa-check text-purple-400 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-3xl text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="relative cursor-pointer transform transition-transform duration-500"
                style={{
                  transform: `translateY(${
                    scrollY * 0.1 * ((index % 3) - 1)
                  }px)`,
                }}
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img}
                  alt={`NFT artwork ${index + 1}`}
                  className="w-full h-[150px] object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        {activeImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt="Selected NFT artwork"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .stars {
          background: transparent url("/stars.png") repeat top center;
          z-index: 0;
          animation: move-twinkle 200s linear infinite;
        }
        .stars2 {
          background: transparent url("/stars.png") repeat top center;
          z-index: 1;
          animation: move-twinkle 150s linear infinite;
        }
        .stars3 {
          background: transparent url("/stars.png") repeat top center;
          z-index: 2;
          animation: move-twinkle 100s linear infinite;
        }
        @keyframes move-twinkle {
          from {background-position: 0 0;}
          to {background-position: -10000px 5000px;}
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
