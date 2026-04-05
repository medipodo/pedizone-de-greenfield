import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Behandlung: Wirksame Therapien & Medikamente (+ Bilder)',
  description: 'Fußpilz richtig behandeln: Cremes, Salben, Tabletten & Hausmittel. Wirksamste Antimykotika, Anwendung & Behandlungsdauer. ✓ Medizinisch geprüft',
  keywords: ['fußpilz behandlung', 'fußpilz creme', 'antimykotika', 'fußpilz medikamente', 'fußpilz therapie', 'fußpilz heilen'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: {
    canonical: 'https://pedizone.de/wissen/fusspilz/behandlung',
  },
  openGraph: {
    title: 'Fußpilz Behandlung: Wirksame Therapien & Medikamente',
    description: 'Fußpilz richtig behandeln: Cremes, Salben, Tabletten & Hausmittel. Wirksamste Antimykotika und ihre Anwendung.',
    url: 'https://pedizone.de/wissen/fusspilz/behandlung',
    type: 'article',
    images: [{ url: 'https://pedizone.de/images/fusspilz-behandlung-creme.webp', width: 800, height: 600 }],
  },
}

export default function BehandlungPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Fußpilz Behandlung: Wirksame Therapien',
    description: 'Umfassender Ratgeber zur Behandlung von Fußpilz mit Antimykotika, Cremes und systemischen Therapien.',
    image: ['https://pedizone.de/images/fusspilz-behandlung-creme.webp'],
    author: { '@type': 'Person', name: 'Dr. med. Sarah Weber', jobTitle: 'Fachärztin für Dermatologie' },
    reviewedBy: { '@type': 'Person', name: 'Dr. med. Michael Schmidt' },
    publisher: { '@type': 'Organization', name: 'PediZone.de' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Welche Creme hilft am besten gegen Fußpilz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Antimykotische Cremes mit Wirkstoffen wie Clotrimazol, Miconazol oder Terbinafin sind am wirksamsten. Die Behandlung sollte mindestens 2-4 Wochen konsequent fortgeführt werden.' }
      },
      {
        '@type': 'Question',
        name: 'Wie lange dauert die Behandlung von Fußpilz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die topische Behandlung dauert in der Regel 2-4 Wochen bei konsequenter Anwendung. Auch nach Abklingen der Symptome sollte die Therapie noch 1-2 Wochen fortgeführt werden.' }
      },
      {
        '@type': 'Question',
        name: 'Wann braucht man Tabletten gegen Fußpilz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Tabletten (systemische Antimykotika) sind nötig bei ausgedehntem Befall, Nagelp ilz, chronischen Infektionen oder wenn äußerliche Behandlung nicht wirkt. Die Einnahme erfolgt über mehrere Wochen bis Monate.' }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-8">
            <ol className="flex items-center space-x-2 flex-wrap">
              <li><Link href="/" className="text-primary-600 hover:underline">Startseite</Link></li>
              <li className="text-medical-400">/</li>
              <li><Link href="/wissen" className="text-primary-600 hover:underline">Wissen</Link></li>
              <li className="text-medical-400">/</li>
              <li><Link href="/wissen/fusspilz" className="text-primary-600 hover:underline">Fußpilz</Link></li>
              <li className="text-medical-400">/</li>
              <li className="text-medical-600">Behandlung</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
            Fußpilz Behandlung: Wirksame Therapien und Medikamente
          </h1>

          <div className="mb-8 pb-6 border-b border-medical-100">
            <div className="flex items-start space-x-4 text-sm text-medical-600">
              <div>
                <p className="font-medium text-medical-800">Medizinisch geprüft von:</p>
                <p>Dr. med. Sarah Weber, Fachärztin für Dermatologie</p>
                <p className="text-xs mt-1">Zuletzt aktualisiert: 5. April 2025</p>
              </div>
            </div>
          </div>

          <div className="prose prose-medical max-w-none">
            <p className="text-lg text-medical-700 mb-6 leading-relaxed">
              Die erfolgreiche <strong>Behandlung von Fußpilz</strong> erfordert konsequente Therapie mit antimykotischen Präparaten. In diesem umfassenden Ratgeber erfahren Sie alles über wirksame Medikamente, richtige Anwendung und Behandlungsdauer für eine nachhaltige Heilung.
            </p>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Topische Antimykotika: Cremes und Salben</h2>
            
            <p className="text-medical-600 mb-4">
              Die erste Wahl bei leichter bis mittelschwerer Pilzinfektion sind <strong>antimykotische Cremes</strong>, die direkt auf die betroffenen Hautstellen aufgetragen werden.
            </p>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Die korrekte Anwendung von antimykotischen Cremes ist entscheidend für den Behandlungserfolg:
              </p>
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-behandlung-creme.webp"
                  alt="Fußpilz Behandlung Creme Anwendung richtig auftragen"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 1: Richtige Anwendung antimykotischer Creme bei Fußpilz</p>
            </div>

            <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Wirkstoffe rezeptfrei erhältlich:</h3>
            <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
              <li><strong>Clotrimazol:</strong> Breitspektrum-Antimykotikum, 2x täglich anwenden</li>
              <li><strong>Miconazol:</strong> Wirksam gegen Dermatophyten und Hefen</li>
              <li><strong>Bifonazol:</strong> Lange Wirkdauer, 1x täglich ausreichend</li>
              <li><strong>Terbinafin:</strong> Fungizid wirkend, sehr effektiv bei Dermatophyten</li>
            </ul>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Moderne Behandlungsoptionen</h2>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Innovative Formulierungen wie Seren bieten verbesserte Penetration und Wirksamkeit:
              </p>
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-behandlung-serum.webp"
                  alt="Antimykotisches Serum Fußpilz Behandlung moderne Therapie"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 2: Moderne antimykotische Seren für effektive Fußpilzbehandlung</p>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Systemische Therapie mit Tabletten</h2>
            
            <p className="text-medical-600 mb-4">
              Bei ausgedehntem Befall, Nagelpilz oder chronischen Verläufen sind <strong>oral einzunehmende Antimykotika</strong> erforderlich:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Verschreibungspflichtige Wirkstoffe:</h3>
              <ul className="text-sm text-medical-700 space-y-2">
                <li>• <strong>Terbinafin:</strong> 250mg täglich über 2-6 Wochen</li>
                <li>• <strong>Itraconazol:</strong> Pulstherapie möglich</li>
                <li>• <strong>Fluconazol:</strong> 1x wöchentlich über mehrere Wochen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Behandlungsdauer und Erfolgsaussichten</h2>
            
            <p className="text-medical-600 mb-4">
              Die <strong>Behandlungsdauer</strong> ist entscheidend für dauerhaften Erfolg:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2">Topische Behandlung</h3>
                <p className="text-sm text-medical-600">2-4 Wochen konsequente Anwendung, auch nach Abklingen der Symptome weitere 1-2 Wochen fortführen</p>
              </div>
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2">Systemische Therapie</h3>
                <p className="text-sm text-medical-600">4-12 Wochen je nach Präparat und Befallsausmaß, regelmäßige ärztliche Kontrollen</p>
              </div>
            </div>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Bei konsequenter Behandlung zeigen sich deutliche Verbesserungen:
              </p>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-behandlung-vorher-nachher.webp"
                  alt="Fußpilz Behandlung Erfolg vorher nachher Vergleich Therapieergebnis"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 3: Behandlungserfolg - Vorher/Nachher-Vergleich bei konsequenter Therapie</p>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Richtige Anwendung: Schritt für Schritt</h2>
            
            <ol className="list-decimal pl-6 text-medical-600 space-y-3 mb-6">
              <li><strong>Reinigung:</strong> Füße gründlich mit Seife waschen und vollständig abtrocknen, besonders Zehenzwischenräume</li>
              <li><strong>Auftragen:</strong> Antimykotikum dünn auf betroffene Stellen und circa 2cm darüber hinaus verteilen</li>
              <li><strong>Einziehen lassen:</strong> Mindestens 5 Minuten warten, bevor Socken angezogen werden</li>
              <li><strong>Regelmäßigkeit:</strong> Exakt nach Packungsbeilage anwenden (meist 1-2x täglich)</li>
              <li><strong>Durchhalten:</strong> Auch nach Symptomfreiheit die angegebene Behandlungsdauer einhalten</li>
            </ol>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Unterstützende Maßnahmen</h2>
            
            <p className="text-medical-600 mb-4">
              Begleitend zur medikamentösen Therapie beschleunigen folgende Maßnahmen die Heilung:
            </p>

            <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
              <li>Füße täglich waschen und gründlich abtrocknen</li>
              <li>Atmungsaktive Socken aus Baumwolle oder speziellen Funktionsfasern</li>
              <li>Schuhe und Socken bei mindestens 60°C waschen</li>
              <li>Schuhe regelmäßig desinfizieren (Antimykotika-Spray)</li>
              <li>Barfußlaufen in öffentlichen Bereichen meiden</li>
              <li>Handtücher und Bettwäsche häufig wechseln</li>
            </ul>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Häufig gestellte Fragen</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Welche Creme hilft am besten gegen Fußpilz?</h3>
                <p className="text-sm text-medical-600">
                  Antimykotische Cremes mit Wirkstoffen wie Clotrimazol, Miconazol oder Terbinafin sind am wirksamsten. Die Behandlung sollte mindestens 2-4 Wochen konsequent fortgeführt werden, auch wenn die Symptome früher abklingen.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Wie lange dauert die Behandlung von Fußpilz?</h3>
                <p className="text-sm text-medical-600">
                  Die topische Behandlung dauert in der Regel 2-4 Wochen bei konsequenter Anwendung. Auch nach Abklingen der Symptome sollte die Therapie noch 1-2 Wochen fortgeführt werden, um Rückfälle zu vermeiden.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Wann braucht man Tabletten gegen Fußpilz?</h3>
                <p className="text-sm text-medical-600">
                  Tabletten (systemische Antimykotika) sind nötig bei ausgedehntem Befall, Nagelpilz, chronischen Infektionen oder wenn äußerliche Behandlung nicht wirkt. Die Einnahme erfolgt über mehrere Wochen bis Monate unter ärztlicher Kontrolle.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Wann zum Arzt?</h2>
            
            <p className="text-medical-600 mb-4">
              Ein Arztbesuch ist erforderlich bei:
            </p>

            <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-8">
              <li>Keine Besserung nach 2 Wochen konsequenter Selbstbehandlung</li>
              <li>Ausgedehntem Befall oder Beteiligung der Nägel</li>
              <li>Diabetes mellitus oder geschwächtem Immunsystem</li>
              <li>Häufigen Rückfällen trotz Behandlung</li>
              <li>Starken Schmerzen, Schwellungen oder eitrigen Entzündungen</li>
            </ul>

            <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
              <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen</h3>
              <ul className="text-xs text-medical-600 space-y-1">
                <li>1. Deutsche Dermatologische Gesellschaft: Leitlinie Tinea pedis, 2023</li>
                <li>2. Gupta AK, et al. Antifungal agents for tinea pedis. Cochrane Database, 2024</li>
                <li>3. European Academy of Dermatology: Treatment Guidelines, 2024</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Informationen</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline font-medium">
                    → Fußpilz Symptome erkennen
                  </Link>
                </li>
                <li>
                  <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline font-medium">
                    → Fußpilz Vorbeugung: Effektive Schutzmaßnahmen
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-8 rounded-r-lg">
            <p className="text-medical-700 text-sm">
              <strong>Wichtiger Hinweis:</strong> Die Inhalte ersetzen keine ärztliche Beratung. Bei anhaltenden oder schweren Beschwerden konsultieren Sie bitte einen Arzt oder Dermatologen.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-medical-100 flex justify-between items-center flex-wrap gap-4">
            <Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline flex items-center">
              <span className="mr-1">←</span> Symptome erkennen
            </Link>
            <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline flex items-center">
              Vorbeugung <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
