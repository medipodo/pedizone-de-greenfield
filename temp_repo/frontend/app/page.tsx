import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PediZone.de - Ihr Ratgeber für Fußgesundheit',
  description: 'Umfassende Informationen über Fußgesundheit, Fußpilz, Behandlung und Prävention. Medizinisch fundiert und verständlich erklärt.',
  alternates: {
    canonical: 'https://pedizone.de',
  },
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-medical-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-medical-800 mb-6 text-balance">
            Ihr Ratgeber für{' '}
            <span className="text-primary-600">Fußgesundheit</span>
          </h1>
          <p className="text-lg sm:text-xl text-medical-600 mb-8 max-w-2xl mx-auto text-balance">
            Fundierte medizinische Informationen über Fußpilz, Behandlungsmöglichkeiten und Prävention — verständlich erklärt.
          </p>
          <Link 
            href="/wissen/fusspilz"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
          >
            Zum Fußpilz-Ratgeber
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-b border-medical-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📚</div>
              <h3 className="text-sm font-semibold text-medical-700">Fundiertes Wissen</h3>
              <p className="text-xs text-medical-500 mt-1">Medizinisch geprüfte Inhalte</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🇩🇪</div>
              <h3 className="text-sm font-semibold text-medical-700">Für Deutschland</h3>
              <p className="text-xs text-medical-500 mt-1">Relevante Informationen für DE</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="text-sm font-semibold text-medical-700">Vertrauenswürdig</h3>
              <p className="text-xs text-medical-500 mt-1">Unabhängig und transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-medical-800 mb-8 text-center">
            Beliebte Themen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/wissen/fusspilz/was-ist-fusspilz" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                <Image 
                  src="/images/fusspilz-anfangsstadium.webp"
                  alt="Was ist Fußpilz - Anfangsstadium"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                  Was ist Fußpilz?
                </h3>
                <p className="text-sm text-medical-600">
                  Grundlegende Informationen über Tinea pedis und wie Sie die Erkrankung erkennen.
                </p>
              </div>
            </Link>

            <Link href="/wissen/fusspilz/behandlung" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                <Image 
                  src="https://customer-assets.emergentagent.com/job_haut-info-de/artifacts/anf5ni25_Ads%C4%B1z%20tasar%C4%B1m%20%2821%29.webp"
                  alt="Fußpilz Behandlung"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                  Behandlung
                </h3>
                <p className="text-sm text-medical-600">
                  Wirksame Therapiemöglichkeiten und Medikamente gegen Fußpilz.
                </p>
              </div>
            </Link>

            <Link href="/wissen/fusspilz/symptome" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                <Image 
                  src="/images/fusspilz-haut-roetung.webp"
                  alt="Fußpilz Symptome erkennen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                  Symptome erkennen
                </h3>
                <p className="text-sm text-medical-600">
                  Typische Anzeichen und Symptome einer Fußpilzinfektion.
                </p>
              </div>
            </Link>

            <Link href="/wissen/fusspilz/vorbeugung" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                <Image 
                  src="/images/fusspilz-vorbeugung-hygiene.webp"
                  alt="Fußpilz Vorbeugung"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                  Vorbeugung
                </h3>
                <p className="text-sm text-medical-600">
                  Effektive Maßnahmen zur Prävention von Fußpilz.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
