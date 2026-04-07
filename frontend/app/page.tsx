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
      <section className="relative bg-gradient-to-b from-medical-50 to-white py-16 sm:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-5">
          <Image 
            src="/images/fusspilz-vorbeugung-hygiene.webp"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 via-medical-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-medical-800 mb-10 text-center">
            Fußpilz in Zahlen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">bis zu 30%</div>
              <p className="text-sm text-medical-600">der Deutschen sind im Laufe ihres Lebens betroffen</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">2-4 Wochen</div>
              <p className="text-sm text-medical-600">durchschnittliche Behandlungsdauer bei konsequenter Therapie</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">90%+</div>
              <p className="text-sm text-medical-600">Erfolgsrate bei richtiger und vollständiger Behandlung</p>
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

      {/* Quick Facts - Wussten Sie? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-medical-800 mb-10 text-center">
            Wussten Sie schon?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-orange-200 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold text-medical-800 mb-2">Hochansteckend</h3>
              <p className="text-sm text-medical-600">
                Fußpilz ist ansteckend – auch im eigenen Haushalt. Gemeinsame Handtücher sollten vermieden werden.
              </p>
            </div>
            <div className="p-6 border-2 border-blue-200 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="font-semibold text-medical-800 mb-2">Sportler-Risiko</h3>
              <p className="text-sm text-medical-600">
                Sportler haben ein 3x höheres Risiko für Fußpilz durch feuchte Schuhe und Umkleidekabinen.
              </p>
            </div>
            <div className="p-6 border-2 border-purple-200 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="font-semibold text-medical-800 mb-2">Kann sich ausbreiten</h3>
              <p className="text-sm text-medical-600">
                Unbehandelt kann sich Fußpilz auf die Nägel ausbreiten und chronisch werden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Check CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Haben Sie Fußpilz?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Prüfen Sie die typischen Symptome:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Juckreiz zwischen den Zehen?</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Rötung oder Schuppung?</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Brennen oder Schmerzen?</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Unangenehmer Geruch?</span>
            </div>
          </div>
          <Link 
            href="/wissen/fusspilz/symptome"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Mehr über Symptome erfahren
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-medical-800 mb-6">Aktuelle Blog-Artikel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/fusspilz/bilder" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                  <Image 
                    src="/images/blog/bilder-1.webp"
                    alt="Fußpilz erkennen mit Bildern"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                    Fußpilz erkennen: Bilder und Symptome
                  </h3>
                  <p className="text-sm text-medical-600 mb-3">
                    Visueller Guide mit Symptom-Checkliste – verschiedene Typen und typische Anzeichen.
                  </p>
                  <span className="text-xs text-primary-600 font-medium">→ Artikel lesen</span>
                </div>
              </Link>

              <Link href="/blog/fusspilz/wie-lange" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                  <Image 
                    src="/images/blog/wie-lange-1.webp"
                    alt="Fußpilz Behandlungsdauer"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                    Wie lange dauert Fußpilz?
                  </h3>
                  <p className="text-sm text-medical-600 mb-3">
                    Realistische Timeline und Faktoren, die die Behandlungsdauer beeinflussen.
                  </p>
                  <span className="text-xs text-primary-600 font-medium">→ Artikel lesen</span>
                </div>
              </Link>

              <Link href="/blog/fusspilz/socken" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                  <Image 
                    src="/images/blog/socken-1.webp"
                    alt="Die richtigen Socken bei Fußpilz"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                    Die richtigen Socken gegen Fußpilz
                  </h3>
                  <p className="text-sm text-medical-600 mb-3">
                    Material, Wechselfrequenz und Wasch-Hygiene für optimale Heilung.
                  </p>
                  <span className="text-xs text-primary-600 font-medium">→ Artikel lesen</span>
                </div>
              </Link>

              <Link href="/blog/fusspilz/dusche" className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                  <Image 
                    src="/images/blog/dusche-1.webp"
                    alt="Fußpilz Dusche vermeiden"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                    Fußpilz in der Dusche vermeiden
                  </h3>
                  <p className="text-sm text-medical-600 mb-3">
                    Die 3-Punkte-Routine für Hygiene zuhause.
                  </p>
                  <span className="text-xs text-primary-600 font-medium">→ Artikel lesen</span>
                </div>
              </Link>
            </div>
            <div className="mt-8 text-center">
              <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                Alle Blog-Artikel
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      {/* FAQ Section */}
      <section className="py-16 bg-medical-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-medical-800 mb-10 text-center">
            Häufigste Fragen
          </h2>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Wie lange dauert die Behandlung von Fußpilz?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Die Behandlung dauert in der Regel 2-4 Wochen bei konsequenter Anwendung von Antimykotika. Wichtig ist, die Behandlung auch nach Abklingen der Symptome fortzusetzen, um Rückfälle zu vermeiden.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Ist Fußpilz gefährlich?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Fußpilz ist in der Regel nicht gefährlich, aber unangenehm. Unbehandelt kann er sich ausbreiten, chronisch werden und zu Nagelpilz führen. Bei Diabetikern oder immungeschwächten Personen sollte besondere Vorsicht gelten.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Kann ich mit Fußpilz Sport machen?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Ja, Sport ist möglich. Wichtig ist, atmungsaktive Schuhe zu tragen, die Füße nach dem Sport gründlich zu trocknen und Gemeinschaftsduschen mit Badeschuhen zu nutzen, um andere nicht anzustecken.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Kann Fußpilz von selbst verschwinden?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Nein, Fußpilz verschwindet nicht von selbst. Ohne Behandlung kann er chronisch werden und sich ausbreiten. Eine antimykotische Behandlung ist notwendig, um die Pilzinfektion vollständig zu beseitigen.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Wie kann ich Fußpilz vorbeugen?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Halten Sie Ihre Füße trocken, wechseln Sie täglich Socken, tragen Sie atmungsaktive Schuhe, nutzen Sie Badeschuhe in öffentlichen Bereichen und trocknen Sie Zehenzwischenräume gründlich ab. <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline">Mehr Tipps zur Vorbeugung</Link>
              </p>
            </details>
          </div>
        </div>
      </section>


    </div>
  )
}
