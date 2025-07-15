import Navigation from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Zap,
  Target,
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const prefilledMessage = "¡Hola! Me gustaría recibir más información sobre las clases de pilates. ¿Podrías contarme un poco más?";
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WSP_NUMBER}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="min-h-screen bg-mocha-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Serene Pilates Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Encuentra tu equilibrio
          </h1>
          <p className="text-xl sm:text-2xl text-stone-100 mb-8 max-w-2xl mx-auto">
            Muévete con intención, fortalece tu núcleo y encuentra la calma
            interior mediante una práctica de Pilates consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-peach-300 hover:bg-peach-400 text-mocha-800 text-lg px-8 py-3"
            >
              Ver horario
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800 text-lg px-8 py-3 bg-transparent"
            >
              Explorar clases
            </Button>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-mocha-800 mb-6">
              Tu viaje hacia el bienestar comienza aquí
            </h2>
            <p className="text-lg text-mocha-600 mb-8 leading-relaxed">
              En Late Pilates, creemos en el poder transformador del movimiento
              consciente. Nuestro estudio ofrece un santuario donde puedes
              fortalecer tu cuerpo, calmar tu mente y conectar con una comunidad
              de apoyo. Seas principiante o practicante experimentado, nuestros
              instructores expertos te guiarán en un viaje personalizado hacia
              una mejor salud y equilibrio interior.
            </p>
            <Button
              variant="outline"
              className="border-stone-300 text-mocha-700 hover:bg-stone-100 bg-transparent"
            >
              Conoce más sobre nosotros
            </Button>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-16 sm:py-20 lg:py-24 bg-mocha-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mocha-800 mb-4">
              ¿Por qué elegir Pilates?
            </h2>
            <p className="text-lg text-mocha-600 max-w-2xl mx-auto">
              Descubre los beneficios transformadores de nuestra enseñanza
              integral de Pilates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="bg-white border-mocha-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-peach-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-peach-500" />
                </div>
                <h3 className="text-xl font-semibold text-mocha-800 mb-3">
                  Fortalece tu núcleo
                </h3>
                <p className="text-mocha-600">
                  Fortalece tu núcleo y estabilidad para mejor postura y
                  reducción del dolor lumbar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-mocha-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-sage-500" />
                </div>
                <h3 className="text-xl font-semibold text-mocha-800 mb-3">
                  Mejora tu flexibilidad
                </h3>
                <p className="text-mocha-600">
                  Mejora tu rango de movimiento y movilidad a través de
                  movimientos controlados y fluidos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-mocha-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-mocha-800 mb-3">
                  Conexión mente-cuerpo
                </h3>
                <p className="text-mocha-600">
                  Cultiva una profunda conciencia y un control preciso a través
                  de la respiración y el movimiento conscientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-mocha-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-mocha-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-stone-500" />
                </div>
                <h3 className="text-xl font-semibold text-mocha-800 mb-3">
                  Atención personalizada
                </h3>
                <p className="text-mocha-600">
                  Clases pequeñas garantizan orientación individual y
                  adaptaciones para cada cuerpo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mocha-800 mb-4">
              ¿Qué dicen nuestros clientes?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-mocha-50 border-mocha-200">
              <CardContent className="p-6">
                <p className="text-mocha-600 mb-4 italic">
                  "Las clases de Late Pilates son increíbles. Me han ayudado a
                  fortalecer mi núcleo y estabilidad, y mantienen las clases
                  acogedoras y relajantes."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-mocha-700 font-semibold">BG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-mocha-800">Brenda G.</p>
                    <p className="text-sm text-mocha-600">Cliente regular</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-mocha-50 border-mocha-200">
              <CardContent className="p-6">
                <p className="text-mocha-600 mb-4 italic">
                  "Después de años de dolor lumbar, Pilates ha sido
                  transformador. El ambiente del estudio es tan relajante, y
                  siempre me siento equilibrada y fuerte."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-mocha-700 font-semibold">PL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-mocha-800">Peter L.</p>
                    <p className="text-sm text-mocha-600">6 meses</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-mocha-50 border-mocha-200">
              <CardContent className="p-6">
                <p className="text-mocha-600 mb-4 italic">
                  "Me encanta cómo cada clase es diferente pero consistente en
                  calidad. Las clases pequeñas significan que puedo recibir la
                  atención que necesito para mejorar mi forma."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-mocha-700 font-semibold">DB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-mocha-800">Darío B.</p>
                    <p className="text-sm text-mocha-600">1 año</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-mocha-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-mocha-800 mb-4">
              Pase por nuestro estudio
            </h2>
            <p className="text-lg text-mocha-600">
              Experimenta el ambiente sereno donde la transformación ocurre
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Studio Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Pilates Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Class in Session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg sm:block lg:hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Peaceful Corner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg hidden lg:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Peaceful Corner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg hidden lg:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Natural Light"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-stone-300 text-mocha-700 hover:bg-stone-100 bg-transparent"
            >
              Ver galería completa
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-mocha-800 mb-8">
              ¿Listo para comenzar tu viaje?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-mocha-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-mocha-600" />
                </div>
                <h3 className="font-semibold text-mocha-800 mb-2">Visítanos</h3>
                <p className="text-mocha-600 text-center">
                  Paso de los Andes 512 casa 2
                  <br />
                  Mendoza, Argentina
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-mocha-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-mocha-600" />
                </div>
                <h3 className="font-semibold text-mocha-800 mb-2">
                  Horario del estudio
                </h3>
                <p className="text-mocha-600 text-center">
                  Lunes a Jueves: 9AM - 8PM
                  <br />
                  Viernes: 9AM - 6PM
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-mocha-100 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-mocha-600" />
                </div>
                <h3 className="font-semibold text-mocha-800 mb-2">Contacto</h3>
                <div className="flex gap-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                >
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    WhatsApp
                  </Button>
                </Link>
                  <Link
                    href={process.env.NEXT_PUBLIC_IG_URL || ""}
                    target="_blank"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent"
                    >
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mocha-800 text-mocha-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Late Pilates
              </h3>
              <p className="text-mocha-300 mb-4 max-w-md">
                Tu santuario para el movimiento consciente, el fortalecimiento
                del núcleo y la paz interior. Únete a nuestra comunidad y
                descubre el poder transformador de Pilates.
              </p>
              <div className="flex gap-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                >
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    WhatsApp
                  </Button>
                </Link>

                <Link
                  href={process.env.NEXT_PUBLIC_IG_URL || ""}
                  target="_blank"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-stone-800 bg-transparent"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-mocha-300 hover:text-white"
                  >
                    Acerca de nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes"
                    className="text-mocha-300 hover:text-white"
                  >
                    Clases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-mocha-300 hover:text-white"
                  >
                    Horario
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-mocha-300 hover:text-white"
                  >
                    Galería
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-2 text-mocha-300">
                <p>Paso de los Andes 512 casa 2</p>
                <p>Mendoza, Argentina</p>
                <p>Lunes a Jueves: 9AM - 8PM</p>
                <p>Viernes: 9AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-mocha-400">
            <p>&copy; 2025 Late Pilates. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
