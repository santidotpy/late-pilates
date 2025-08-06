import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Users, Calendar, Camera, Heart } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export default function Rules() {
  return (
    <section id="rules">
      {/* Rules Section */}
      <AnimatedSection className="py-20 md:py-32 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-light text-mocha mb-4"
              style={{ fontFamily: "Poppins" }}
            >
              Normas del Estudio
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Para garantizar una experiencia segura y armoniosa para todos
              nuestros miembros, te pedimos que respetes las siguientes normas
              de nuestro estudio.
            </p>
          </div>

          {/* GRID OF 6 CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Etiqueta y Conducta en Clase */}
            <Card className="bg-white/80 border-mocha/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#a47864]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-mocha" />
                </div>
                <CardTitle
                  className="text-xl font-normal text-mocha"
                  style={{ fontFamily: "Poppins" }}
                >
                  Etiqueta y Conducta en Clase
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Puntualidad
                  </h4>
                  <p className="text-sm text-stone-600">
                    Llegá a horario. Se permite una tolerancia de hasta 15
                    minutos después del inicio de la clase. Pasado este tiempo,
                    no se permitirá el ingreso para no interrumpir la armonía y
                    concentración de tus compañeros, y la clase no será
                    recuperable.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Comportamiento y Silencio
                  </h4>
                  <p className="text-sm text-stone-600">
                    Mantené el silencio y respetá el espacio de concentración de
                    otros participantes durante la clase.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Respeto al Instructor
                  </h4>
                  <p className="text-sm text-stone-600">
                    Respetá las indicaciones y decisiones del instructor durante
                    la clase. Si tenés dudas o inquietudes sobre una corrección
                    o ajuste, hablá con él/ella en privado antes o después de la
                    clase para mantener la fluidez y el foco del grupo.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 2. Salud y Seguridad */}
            <Card className="bg-white/80 border-mocha/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#a47864]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-mocha" />
                </div>
                <CardTitle
                  className="text-xl font-normal text-mocha"
                  style={{ fontFamily: "Poppins" }}
                >
                  Salud y Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Evaluación Médica
                  </h4>
                  <p className="text-sm text-stone-600">
                    Informá sobre lesiones o condiciones médicas antes de
                    comenzar cualquier clase.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Síntomas de Enfermedad
                  </h4>
                  <p className="text-sm text-stone-600">
                    No asistas si presentás síntomas de resfriado, fiebre o
                    malestar general.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Higiene Personal
                  </h4>
                  <p className="text-sm text-stone-600">
                    Se recomienda el{" "}
                    <span className="font-bold underline">no</span> uso de talco
                    para evitar marcas y daños en nuestros equipos y camillas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 3. Política de Cancelación y Recuperación */}
            <Card className="bg-white/80 border-mocha/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#a47864]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-mocha" />
                </div>
                <CardTitle
                  className="text-xl font-normal text-mocha"
                  style={{ fontFamily: "Poppins" }}
                >
                  Política de Cancelación y Recuperación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Cancelación Gratuita
                  </h4>
                  <p className="text-sm text-stone-600">
                    Avisá con al menos 3 horas de anticipación para cancelar sin
                    costo ni penalización.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Cancelación Tardía o No Asistencia
                  </h4>
                  <p className="text-sm text-stone-600">
                    Si cancelás con menos de 3 horas de anticipación o no
                    asistís sin previo aviso, la clase se dará por vista y no
                    será recuperable ni reembolsable.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Recuperación de Clases
                  </h4>
                  <p className="text-sm text-stone-600">
                    Si cancelás dentro del horario permitido, podrás coordinar
                    la recuperación de tu clase directamente con tu instructor.{" "}
                    <span className="font-bold text-mocha">
                      Solo se permite la recuperación de una clase al mes.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 4. Uso y Cuidado de Equipamiento */}
            <Card className="bg-white/80 border-mocha/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#a47864]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-mocha" />
                </div>
                <CardTitle
                  className="text-xl font-normal text-mocha"
                  style={{ fontFamily: "Poppins" }}
                >
                  Uso y Cuidado de Equipamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Cuidado del Equipo
                  </h4>
                  <p className="text-sm text-stone-600">
                    Tratá todo el equipamiento con cuidado. Reportá cualquier
                    daño inmediatamente al instructor.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">Limpieza</h4>
                  <p className="text-sm text-stone-600">
                    Limpiá el equipamiento después de cada uso con los productos
                    proporcionados por el estudio.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 5. Fotografía y Privacidad en Redes */}
            <Card className="bg-white/80 border-mocha/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#a47864]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-mocha" />
                </div>
                <CardTitle
                  className="text-xl font-normal text-mocha"
                  style={{ fontFamily: "Poppins" }}
                >
                  Fotografía y Privacidad en Redes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Compartir en Redes Sociales
                  </h4>
                  <p className="text-sm text-stone-600">
                    ¡Nos encanta que compartas tu experiencia! Etiquetanos
                    <span className="font-bold text-mocha">
                      {" "}
                      @latepilatesreformer
                    </span>{" "}
                    en tus publicaciones.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Privacidad de Otros Miembros
                  </h4>
                  <p className="text-sm text-stone-600">
                    Respetá la privacidad de otros miembros. No incluyas a otras
                    personas en tus fotos sin su consentimiento.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 6. Inscripción, Membresías y Pagos (COMBINED CARD) */}
            <Card className="bg-white/80 border-mocha/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-[#a47864]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-mocha" />
                </div>
                <CardTitle
                  className="text-xl font-normal text-mocha"
                  style={{ fontFamily: "Poppins" }}
                >
                  Inscripción y Pagos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Clase de Prueba
                  </h4>
                  <p className="text-sm text-stone-600">
                    Ofrecemos una clase de prueba gratuita para nuevos miembros.
                    Consultá disponibilidad.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Pagos a Tiempo
                  </h4>
                  <p className="text-sm text-stone-600">
                    Es fundamental realizar los pagos de tus clases en las
                    fechas acordadas.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-700 mb-2">
                    Recargos por Mora
                  </h4>
                  <p className="text-sm text-stone-600">
                    El incumplimiento en las fechas de pago resultará en la
                    aplicación de un sobrecargo, cuyo monto dependerá del tiempo
                    transcurrido.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-white/60 border-mocha/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-normal text-mocha mb-4">
                  ¿Tenés alguna pregunta?
                </h3>
                <p className="text-stone-600 mb-6">
                  Nuestro equipo está aquí para ayudarte. No dudes en
                  contactarnos a través de nuestras redes sociales o hablá
                  directamente con nuestros instructores antes o después de las
                  clases.
                </p>
                <p className="text-sm text-stone-500 italic">
                  Estas normas están sujetas a cambios. Te notificaremos sobre
                  cualquier actualización importante.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
