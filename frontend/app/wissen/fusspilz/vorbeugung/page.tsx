import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Vorbeugung: 10 Effektive Schutzmaßnahmen (+ Tipps)',
  description: 'Fußpilz vorbeugen: Die wichtigsten Hygienemaßnahmen, richtige Socken, Schuhpflege & Schutz in Schwimmbad & Sauna. ✓ Medizinisch geprüft',
  keywords: ['fußpilz vorbeugung', 'fußpilz vorbeugen', 'fußpilz prävention', 'fußpilz vermeiden', 'fußhygiene'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: {
    canonical: 'https://pedizone.de/wissen/fusspilz/vorbeugung',
  },
  openGraph: {
    title: 'Fußpilz Vorbeugung: 10 Effektive Schutzmaßnahmen',
    description: 'Fußpilz vorbeugen: Die wichtigsten Hygienemaßnahmen, richtige Socken, Schuhpflege & Schutz in Schwimmbad & Sauna.',
    url: 'https://pedizone.de/wissen/fusspilz/vorbeugung',
    type: 'article',
  },
}

export default function VorbeugungPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Fußpilz Vorbeugung: Effektive Schutzmaßnahmen',
    description: 'Umfassender Ratgeber zur Vorbeugung von Fußpilz mit praktischen Hygienemaßnahmen und Präventionsstrategien.',
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
        name: 'Wie kann man Fußpilz am besten vorbeugen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Maßnahmen: Füße täglich waschen und gründlich abtrocknen, atmungsaktive Socken tragen, Schuhe regelmäßig wechseln, in öffentlichen Bereichen Badeschuhe nutzen und Füße nicht über längere Zeit feucht halten.' }
      },
      {
        '@type': 'Question',
        name: 'Welche Socken schützen vor Fußpilz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Atmungsaktive Socken aus Baumwolle oder speziellen Funktionsfasern, die Feuchtigkeit nach außen transportieren. Socken sollten täglich gewechselt und bei mindestens 60°C gewaschen werden.' }
      },
      {
        '@type': 'Question',
        name: 'Wie schützt man sich im Schwimmbad vor Fußpilz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Immer Badeschuhe in Umkleiden, Duschen und am Beckenrand tragen. Nach dem Schwimmen Füße gründlich waschen, besonders Zehenzwischenräume gut abtrocknen und eigene Handtücher verwenden.' }
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
              <li className="text-medical-600">Vorbeugung</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
            Fußpilz Vorbeugung: Effektive Schutzmaßnahmen und Prävention
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
              <strong>Fußpilz vorbeugen</strong> ist einfacher als ihn zu behandeln. Mit den richtigen Hygienemaßnahmen und einfachen Verhaltensregeln können Sie Ihr Infektionsrisiko deutlich senken. Dieser Ratgeber zeigt Ihnen die wirksamsten Präventionsstrategien für den Alltag.
            </p>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Tägliche Fußhygiene: Das Fundament der Prävention</h2>
            
            <p className="text-medical-600 mb-4">
              Die richtige <strong>Fußhygiene</strong> ist die wichtigste Grundlage zur Vorbeugung von Pilzinfektionen:
            </p>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Gründliche Reinigung und sorgfältiges Abtrocknen sind essentiell:
              </p>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-vorbeugung-hygiene.webp"
                  alt="Fußpilz Vorbeugung Fußhygiene richtig waschen abtrocknen"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 1: Richtige Fußhygiene - Gründliches Waschen und Abtrocknen verhindert Pilzinfektionen</p>
            </div>

            <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Die richtige Reinigungsroutine:</h3>
            <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
              <li><strong>Tägliches Waschen:</strong> Füße mit milder Seife waschen, besonders zwischen den Zehen</li>
              <li><strong>Gründliches Abtrocknen:</strong> Jede Stelle sorgfältig trocknen, vor allem Zehenzwischenräume</li>
              <li><strong>Eigene Handtücher:</strong> Persönliche Handtücher verwenden, nicht mit anderen teilen</li>
              <li><strong>Regelmäßiger Wechsel:</strong> Handtücher mindestens zweimal wöchentlich bei 60°C waschen</li>
            </ul>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Die richtige Wahl: Socken und Schuhe</h2>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                <strong>Atmungsaktive Socken</strong> sind entscheidend für ein gesundes Fußklima:
              </p>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-vorbeugung-socken.webp"
                  alt="Fußpilz Vorbeugung richtige Socken Baumwolle atmungsaktiv"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 2: Atmungsaktive Socken aus Baumwolle oder Funktionsfasern schützen vor Fußpilz</p>
            </div>

            <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Socken-Empfehlungen:</h3>
            <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
              <li><strong>Material:</strong> Baumwolle oder spezielle Funktionsfasern, die Feuchtigkeit nach außen transportieren</li>
              <li><strong>Täglicher Wechsel:</strong> Socken jeden Tag wechseln, bei Sport öfter</li>
              <li><strong>Waschtemperatur:</strong> Mindestens 60°C, um Pilzsporen abzutöten</li>
              <li><strong>Keine Synthetik:</strong> Rein synthetische Materialien meiden, da sie Schweiß stauen</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Schuh-Tipps zur Prävention:</h3>
              <ul className="text-sm text-medical-700 space-y-2">
                <li>• <strong>Abwechseln:</strong> Schuhe täglich wechseln, mindestens 24h Trockenzeit</li>
                <li>• <strong>Lüften:</strong> Schuhe nach Gebrauch auslüften und trocknen lassen</li>
                <li>• <strong>Atmungsaktiv:</strong> Lederschuhe bevorzugen, offene Modelle im Sommer</li>
                <li>• <strong>Desinfektion:</strong> Regelmäßig Antimykotika-Spray in Schuhe sprühen</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Schutz in öffentlichen Bereichen</h2>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                In <strong>Schwimmbädern, Saunen und Fitnessstudios</strong> ist das Infektionsrisiko besonders hoch:
              </p>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-vorbeugung-schwimmbad.webp"
                  alt="Fußpilz Vorbeugung Schwimmbad Sauna Badeschuhe Schutz"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 3: Badeschuhe in Schwimmbad und Sauna schützen effektiv vor Fußpilz</p>
            </div>

            <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Verhaltensregeln in Gemeinschaftseinrichtungen:</h3>
            <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
              <li><strong>Badeschuhe tragen:</strong> In Umkleiden, Duschen, am Beckenrand und in Saunen immer Badeschlappen nutzen</li>
              <li><strong>Nicht barfuß laufen:</strong> Direkten Bodenkontakt in feuchten Bereichen vermeiden</li>
              <li><strong>Eigene Handtücher:</strong> Nur persönliche Handtücher verwenden, nie teilen</li>
              <li><strong>Nach dem Duschen:</strong> Füße sofort gründlich abtrocknen, besonders Zehenzwischenräume</li>
              <li><strong>Schnell trocknen:</strong> Nasse Füße nicht lange in geschlossenen Schuhen lassen</li>
            </ul>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">10 Goldene Regeln der Fußpilz-Prävention</h2>
            
            <ol className="list-decimal pl-6 text-medical-600 space-y-3 mb-8">
              <li><strong>Täglich waschen:</strong> Füße jeden Tag mit Seife reinigen</li>
              <li><strong>Gründlich abtrocknen:</strong> Besonders Zehenzwischenräume sorgfältig trocknen</li>
              <li><strong>Socken wechseln:</strong> Täglich frische Socken anziehen, nach Sport sofort wechseln</li>
              <li><strong>60°C Wäsche:</strong> Socken und Handtücher heiß waschen</li>
              <li><strong>Schuhe abwechseln:</strong> Nicht täglich die gleichen Schuhe tragen</li>
              <li><strong>Badeschuhe nutzen:</strong> In öffentlichen Duschen, Schwimmbädern und Saunen</li>
              <li><strong>Füße lüften:</strong> Zu Hause öfter barfuß laufen</li>
              <li><strong>Nicht teilen:</strong> Handtücher, Socken und Schuhe sind persönlich</li>
              <li><strong>Füße pflegen:</strong> Hornhaut regelmäßig entfernen, Haut geschmeidig halten</li>
              <li><strong>Immunsystem stärken:</strong> Gesunde Ernährung und ausreichend Schlaf</li>
            </ol>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Risikogruppen: Besondere Vorsicht geboten</h2>
            
            <p className="text-medical-600 mb-4">
              Bestimmte Personengruppen sollten besonders auf Prävention achten:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2">Erhöhtes Risiko bei:</h3>
                <ul className="text-sm text-medical-600 space-y-1">
                  <li>• Diabetes mellitus</li>
                  <li>• Geschwächtem Immunsystem</li>
                  <li>• Durchblutungsstörungen</li>
                  <li>• Sportlern (Fußschweiß)</li>
                </ul>
              </div>
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2">Zusätzliche Maßnahmen:</h3>
                <ul className="text-sm text-medical-600 space-y-1">
                  <li>• Regelmäßige Fußkontrollen</li>
                  <li>• Prophylaktische Antimykotika-Sprays</li>
                  <li>• Professionelle Fußpflege</li>
                  <li>• Ärztliche Beratung</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Häufig gestellte Fragen</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Wie kann man Fußpilz am besten vorbeugen?</h3>
                <p className="text-sm text-medical-600">
                  Die wichtigsten Maßnahmen: Füße täglich waschen und gründlich abtrocknen, atmungsaktive Socken tragen, Schuhe regelmäßig wechseln, in öffentlichen Bereichen Badeschuhe nutzen und Füße nicht über längere Zeit feucht halten.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Welche Socken schützen vor Fußpilz?</h3>
                <p className="text-sm text-medical-600">
                  Atmungsaktive Socken aus Baumwolle oder speziellen Funktionsfasern, die Feuchtigkeit nach außen transportieren. Socken sollten täglich gewechselt und bei mindestens 60°C gewaschen werden.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Wie schützt man sich im Schwimmbad vor Fußpilz?</h3>
                <p className="text-sm text-medical-600">
                  Immer Badeschuhe in Umkleiden, Duschen und am Beckenrand tragen. Nach dem Schwimmen Füße gründlich waschen, besonders Zehenzwischenräume gut abtrocknen und eigene Handtücher verwenden.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
              <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen</h3>
              <ul className="text-xs text-medical-600 space-y-1">
                <li>1. Deutsche Dermatologische Gesellschaft: Leitlinie Tinea pedis - Prävention, 2023</li>
                <li>2. Robert Koch-Institut: Präventionsstrategien bei Dermatomykosen, 2024</li>
                <li>3. Centers for Disease Control and Prevention (CDC): Fungal Infections Prevention, 2024</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Informationen</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline font-medium">
                    → Fußpilz Symptome früh erkennen
                  </Link>
                </li>
                <li>
                  <Link href="/wissen/fusspilz/behandlung" className="text-primary-600 hover:underline font-medium">
                    → Fußpilz Behandlung: Wirksame Therapien
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
            <Link href="/wissen/fusspilz/behandlung" className="text-primary-600 hover:underline flex items-center">
              <span className="mr-1">←</span> Behandlung
            </Link>
            <Link href="/wissen/fusspilz/ursachen" className="text-primary-600 hover:underline flex items-center">
              Ursachen <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
