import Link from 'next/link'
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
            <Link href="/wissen/fusspilz/was-ist-fusspilz" className="group">
              <div className="p-6 bg-white border border-medical-100 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-medical-800 group-hover:text-primary-600 transition-colors">
                  Was ist Fußpilz?
                </h3>
                <p className="text-sm text-medical-500 mt-2">
                  Grundlegende Informationen über Tinea pedis und wie Sie die Erkrankung erkennen.
                </p>
              </div>
            </Link>
            <Link href="/wissen/fusspilz/behandlung" className="group">
              <div className="p-6 bg-white border border-medical-100 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-medical-800 group-hover:text-primary-600 transition-colors">
                  Behandlung
                </h3>
                <p className="text-sm text-medical-500 mt-2">
                  Wirksame Therapiemöglichkeiten und Medikamente gegen Fußpilz.
                </p>
              </div>
            </Link>
            <Link href="/wissen/fusspilz/symptome" className="group">
              <div className="p-6 bg-white border border-medical-100 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-medical-800 group-hover:text-primary-600 transition-colors">
                  Symptome erkennen
                </h3>
                <p className="text-sm text-medical-500 mt-2">
                  Typische Anzeichen und Symptome einer Fußpilzinfektion.
                </p>
              </div>
            </Link>
            <Link href="/wissen/fusspilz/vorbeugung" className="group">
              <div className="p-6 bg-white border border-medical-100 rounded-lg hover:border-primary-200 hover:shadow-md transition-all">
                <h3 className="font-semibold text-medical-800 group-hover:text-primary-600 transition-colors">
                  Vorbeugung
                </h3>
                <p className="text-sm text-medical-500 mt-2">
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
