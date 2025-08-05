"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import WhatsAppBnW from "@/components/icons/whatsapp-bnw";
import Instagram from "@/components/icons/instagram";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import GlassButton from "@/components/glass-button";
import { NavbarDemo } from "@/components/nav-demo";


// #a47864 mocha color
export default function LatePilatesPage() {
  const prefilledMessage =
    "¡Hola! Me gustaría recibir más información sobre las clases de pilates. ¿Podrías contarme un poco más?";
  const whatsappUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_WSP_NUMBER
  }?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div
      className="flex flex-col min-h-[100dvh] bg-stone-50 text-stone-800 font-sans"
      id="hero"
    >
      <NavbarDemo />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/image-pilates.png"
            alt="Late Pilates Studio Interior"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 flex flex-col items-center space-y-6 px-4"
          >
            <h1
              style={{ fontFamily: "Waterlily", fontSize: "9rem" }}
              className="text-9xl text-mocha select-none"
            >
              Late
            </h1>
            <p
              className="text-xl md:text-2xl font-light tracking-wider select-none"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              <TypeAnimation
                sequence={[
                  "Pilates Reformer",
                  2000,
                  "Cuerpo y mente en armonía",
                  1000,
                  "Movimiento y bienestar",
                  1000,
                  "Conciencia y equilibrio",
                  1000,
                  "Fuerza desde el core",
                  1000,
                  "Flexibilidad y control",
                  1000,
                  "Postura y alineación",
                  1000,
                ]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 50 }}
                repeat={Infinity}
              />
            </p>
            <GlassButton />
          </motion.div>
        </section>

        {/* About Section */}
        <AnimatedSection id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl font-normal text-[#a47864]"
                  style={{ fontFamily: "Poppins" }}
                >
                  Sobre Nosotros
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  En Late, creemos en el poder transformador del movimiento.
                  Nuestro estudio es un santuario de calma y enfoque, diseñado
                  para que te conectes con tu cuerpo y mente.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Nuestros instructores certificados te guiarán a través de
                  clases de Reformer Pilates que fortalecen, alargan y
                  revitalizan, sin importar tu nivel de experiencia.
                </p>
              </div>
              <div className="flex justify-center">
                <Card className="bg-white/60 border-mocha/20 shadow-lg w-full max-w-md">
                  <CardHeader>
                    <CardTitle
                      className="text-2xl font-normal text-[#a47864]"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Nuestra Filosofía
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">
                      Inspirar bienestar a través del movimiento consciente,
                      creando una comunidad donde cada individuo florece.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Location Section */}
        <AnimatedSection id="location" className="py-20 md:py-32 bg-mocha/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-normal text-[#a47864]"
                style={{ fontFamily: "Poppins" }}
              >
                Ubicación y Horarios
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-stone-700">
                    Dirección
                  </h3>
                  <p className="text-lg text-stone-600">
                    Paso de los Andes 512, Casa 2, Mendoza, Argentina
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-stone-700">
                    Horarios
                  </h3>
                  <p className="text-lg text-stone-600">
                    Lunes a Jueves: 9:00 - 20:00
                  </p>
                  <p className="text-lg text-stone-600">
                    Viernes: 9:00 - 18:00
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.544431458021!2d-68.85986303029655!3d-32.89346899835091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09f9c817c1b9%3A0xf9ab3a5eacd8fb48!2sLate%20Pilates!5e0!3m2!1sen!2sar!4v1753634279413!5m2!1sen!2sar"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Section */}
        {/* <AnimatedSection id="gallery" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-normal text-[#a47864]"
                style={{ fontFamily: "Poppins" }}
              >
                Galería
              </h2>
            </div>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {[
                "pilates+reformer+class+in+bright+studio",
                "close+up+of+pilates+equipment",
                "woman+stretching+on+reformer+machine",
                "minimalist+studio+decor+with+plants",
                "group+of+people+in+pilates+class",
                "pilates+instructor+guiding+a+student",
              ].map((query, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={`/placeholder.svg?height=500&width=500&query=${query.replace(
                      / /g,
                      "+"
                    )}`}
                    alt={`Gallery image ${i + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection> */}

        {/* Social Media & Booking Section */}
        <AnimatedSection id="social" className="py-20 md:py-32 bg-mocha/5">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-4xl md:text-5xl font-normal text-[#a47864] mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Reservá tu lugar
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Las reservas se realizan a través de nuestras redes sociales.
              ¡Seguinos para no perderte ninguna novedad y escribinos para
              coordinar tu próxima clase!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href={process.env.NEXT_PUBLIC_IG_URL || ""}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full border-mocha text-mocha hover:bg-mocha bg-transparent hover:text-mocha"
                >
                  <Instagram className="w-8 h-8" fill="black" />
                </Button>
              </motion.a>
              <motion.a
                href={whatsappUrl || ""}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full border-mocha text-mocha hover:bg-mocha bg-transparent hover:text-mocha"
                >
                  <WhatsAppBnW className="w-8 h-8" fill="black" />
                </Button>
              </motion.a>
              <motion.a
                href={process.env.NEXT_PUBLIC_GMAPS_URL || ""}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full border-mocha text-mocha hover:bg-mocha bg-transparent hover:text-mocha"
                >
                  <MapPin className="w-8 h-8" />
                </Button>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-[#a47864] text-stone-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link
              href={process.env.NEXT_PUBLIC_IG_URL || ""}
              className="transform transition-transform duration-150 hover:scale-105 active:scale-97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-stone-200 hover:text-white" />
            </Link>
            <Link
              href={whatsappUrl || ""}
              className="transform transition-transform duration-150 hover:scale-105 active:scale-97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppBnW className="w-6 h-6 text-stone-200 hover:text-white" />
            </Link>
            <Link
              href={process.env.NEXT_PUBLIC_GMAPS_URL || ""}
              className="transform transition-transform duration-150 hover:scale-105 active:scale-97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-6 h-6 text-stone-200 hover:text-white" />
            </Link>
          </div>
          <p className="text-sm text-stone-300">
            &copy; {new Date().getFullYear()} Late Pilates. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
