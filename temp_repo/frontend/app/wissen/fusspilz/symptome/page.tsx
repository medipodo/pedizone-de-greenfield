import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Symptome: Erste Anzeichen erkennen (+ Bilder & Behandlung)',
  description: 'Fußpilz Symptome früh erkennen: Juckreiz, Rötung, Bläschen zwischen den Zehen. So erkennen Sie Fußpilz im Anfangsstadium und handeln richtig. ✓ Mit Bildern',
  keywords: ['fußpilz symptome', 'fußpilz anzeichen', 'fußpilz anfangsstadium', 'tinea pedis symptome', 'fußpilz erkennen', 'symptome fußpilz', 'fußpilz bilder'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: {
    canonical: 'https://pedizone.de/wissen/fusspilz/symptome',
  },
  openGraph: {
    title: 'Fußpilz Symptome: Erste Anzeichen erkennen (+ Bilder & Behandlung)',
    description: 'Fußpilz Symptome früh erkennen: Juckreiz, Rötung, Bläschen zwischen den Zehen. So erkennen Sie Fußpilz im Anfangsstadium und handeln richtig.',
    url: 'https://pedizone.de/wissen/fusspilz/symptome',
    type: 'article',
    images: [
      {
        url: 'https://pedizone.de/images/fusspilz-zwischen-den-zehen.webp',
        width: 800,
        height: 600,
        alt: 'Fußpilz Symptome zwischen den Zehen',
      },
    ],
    publishedTime: '2025-01-15T08:00:00Z',
    modifiedTime: '2025-04-05T12:00:00Z',
  },
}

export default function SymptomePage() {
  // JSON-LD Schema Markup
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': 'https://pedizone.de/wissen/fusspilz/symptome',
    headline: 'Fußpilz Symptome: Erste Anzeichen erkennen',
    description: 'Umfassender medizinischer Ratgeber zu Fußpilz Symptomen, Früherkennung und ersten Anzeichen von Tinea pedis.',
    image: [
      'https://pedizone.de/images/fusspilz-zwischen-den-zehen.webp',
      'https://pedizone.de/images/fusspilz-anfangsstadium.webp',
      'https://pedizone.de/images/fusspilz-haut-roetung.webp'
    ],
    datePublished: '2025-01-15T08:00:00+00:00',
    dateModified: '2025-04-05T12:00:00+00:00',
    author: {
      '@type': 'Person',
      name: 'Dr. med. Sarah Weber',
      jobTitle: 'Fachärztin für Dermatologie',
      url: 'https://pedizone.de'
    },
    reviewedBy: {
      '@type': 'Person',
      name: 'Dr. med. Michael Schmidt',
      jobTitle: 'Facharzt für Dermatologie und Venerologie'
    },
    publisher: {
      '@type': 'Organization',
      name: 'PediZone.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pedizone.de/favicon.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://pedizone.de/wissen/fusspilz/symptome'
    },
    about: {
      '@type': 'MedicalCondition',
      name: 'Tinea pedis',
      alternateName: 'Fußpilz',
      associatedAnatomy: {
        '@type': 'AnatomicalStructure',
        name: 'Fuß'
      }
    },
    medicalAudience: [
      {
        '@type': 'MedicalAudience',
        audienceType: 'Patient'
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was sind die ersten Anzeichen von Fußpilz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die ersten Anzeichen von Fußpilz sind meist leichtes Kribbeln oder Jucken zwischen den Zehen, besonders zwischen dem vierten und fünften Zeh. Hinzu kommen dezente Rötungen, minimale Schuppung und gelegentliches Spannungsgefühl nach dem Duschen oder Sport.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wie erkenne ich Fußpilz im Anfangsstadium?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im Anfangsstadium zeigt sich Fußpilz durch dezente Rötungen, leichte Hautschuppung zwischen den Zehen, milden Juckreiz und vereinzelte kleine Bläschen. Die Beschwerden sind oft noch mild und werden leicht übersehen.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wann sollte ich mit Fußpilz zum Arzt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ein Arztbesuch ist empfohlen, wenn sich die Symptome nach zwei Wochen Selbstbehandlung nicht bessern, starke Schmerzen oder Schwellungen auftreten, Sie Diabetiker sind, die Infektion auf die Nägel übergreift oder Sie unsicher bei der Diagnose sind.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welche Symptome hat Fußpilz zwischen den Zehen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zwischen den Zehen zeigt sich Fußpilz durch intensiven Juckreiz, Rötung, weißliche Hautschuppung, aufgeweichte Haut (Mazeration), schmerzhafte Risse und manchmal Bläschenbildung. Dieser Bereich ist am häufigsten betroffen.'
        }
      }
    ]
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: 'https://pedizone.de'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Wissen',
        item: 'https://pedizone.de/wissen'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Fußpilz',
        item: 'https://pedizone.de/wissen/fusspilz'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Symptome',
        item: 'https://pedizone.de/wissen/fusspilz/symptome'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 flex-wrap">
              <li><Link href="/" className="text-primary-600 hover:underline">Startseite</Link></li>
              <li className="text-medical-400">/</li>
              <li><Link href="/wissen" className="text-primary-600 hover:underline">Wissen</Link></li>
              <li className="text-medical-400">/</li>
              <li><Link href="/wissen/fusspilz" className="text-primary-600 hover:underline">Fußpilz</Link></li>
              <li className="text-medical-400">/</li>
              <li className="text-medical-600">Symptome</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
            Fußpilz Symptome erkennen: Erste Anzeichen und Behandlung
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
              Fußpilz, medizinisch als <strong>Tinea pedis</strong> bezeichnet, gehört zu den häufigsten Hautinfektionen weltweit. Die frühzeitige Erkennung typischer Beschwerden ist entscheidend für eine erfolgreiche Therapie. In diesem umfassenden Ratgeber erfahren Sie, welche charakteristischen Anzeichen auf eine Pilzinfektion hindeuten und wie Sie diese von anderen Hauterkrankungen unterscheiden können.
            </p>

            <p className="text-medical-600 mb-6">
              Viele Betroffene übersehen die ersten Warnsignale oder verwechseln sie mit harmlosen Hautirritationen. Dabei ist gerade die frühe Erkennungsphase der beste Zeitpunkt für eine wirksame Behandlung, bevor sich die Infektion weiter ausbreitet und chronisch wird.
            </p>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Die häufigsten Beschwerden im Überblick
            </h2>
            
            <p className="text-medical-600 mb-4">
              Die klinischen Manifestationen können je nach Pilzart und individueller Disposition variieren. Folgende Beschwerden treten jedoch besonders häufig auf:
            </p>

            <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-8">
              <li><strong>Intensiver Juckreiz:</strong> Oft das erste und auffälligste Zeichen, besonders nachts oder nach dem Tragen geschlossener Schuhe. Der Juckreiz tritt bevorzugt zwischen den Zehen auf.</li>
              <li><strong>Rötung und Entzündung:</strong> Gerötete, oft leicht geschwollene Hautstellen im betroffenen Bereich, die sich warm anfühlen können.</li>
              <li><strong>Schuppung und Hautabschälung:</strong> Trockene, weißlich schuppende Haut, die sich in größeren oder kleineren Fetzen ablöst, besonders in den Zehenzwischenräumen.</li>
              <li><strong>Bläschenbildung:</strong> Kleine, mit klarer Flüssigkeit gefüllte Bläschen, die platzen und nässen können, häufig an Fußsohle und Fußkante.</li>
              <li><strong>Brennendes Gefühl:</strong> Unangenehmes Brennen oder Stechen, das sich nach dem Schwitzen oder Barfußlaufen verstärkt.</li>
              <li><strong>Schmerzhafte Risse:</strong> Tiefe Einrisse in der Haut, vor allem in den Zehenzwischenräumen, die schmerzen und bluten können.</li>
              <li><strong>Aufweichung der Haut:</strong> Mazeration – die Haut wird weiß, aufgeweicht und wirkt wie eingeweicht.</li>
              <li><strong>Unangenehmer Geruch:</strong> In fortgeschrittenen Stadien kann ein modriger Geruch entstehen.</li>
            </ul>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Besonders typisch sind Beschwerden in den Zehenzwischenräumen, da dieser Bereich durch Feuchtigkeit und Wärme ein ideales Milieu für Dermatophyten bietet. Die folgende Abbildung zeigt charakteristische Veränderungen:
              </p>
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-zwischen-den-zehen.webp"
                  alt="Fußpilz Symptome zwischen den Zehen mit Rötung Schuppung und Mazeration"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 1: Typische Fußpilz-Symptome in den Zehenzwischenräumen mit Rötung und Schuppung</p>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Früherkennung: Warnsignale im Anfangsstadium
            </h2>
            
            <p className="text-medical-600 mb-4">
              In der initialen Phase sind die Beschwerden oft noch mild und werden leicht übersehen. Dennoch gibt es charakteristische Frühwarnzeichen:
            </p>

            <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
              <li>Leichtes Kribbeln oder Jucken zwischen den Zehen, vor allem zwischen dem vierten und fünften Zeh</li>
              <li>Dezente Rötung, die zunächst nur bei genauem Hinsehen auffällt</li>
              <li>Minimale Schuppung oder leichte Trockenheit der Haut</li>
              <li>Gelegentliches Spannungsgefühl nach dem Duschen oder Sport</li>
              <li>Vereinzelte kleine Bläschen an der Fußsohle oder den Fußkanten</li>
            </ul>

            <p className="text-medical-600 mb-6">
              Wer diese ersten Warnsignale ernst nimmt und behandelt, kann die Ausbreitung der Infektion meist noch gut stoppen. Unbehandelt entwickelt sich aus der Anfangsphase oft eine chronische, hartnäckige Pilzinfektion.
            </p>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Die Früherkennung ist entscheidend. Achten Sie auf erste diskrete Veränderungen, wie sie in der folgenden Aufnahme sichtbar sind:
              </p>
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-anfangsstadium.webp"
                  alt="Fußpilz Anfangsstadium erste Anzeichen Erkennung an Zehen und Fußsohle"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 2: Fußpilz im Anfangsstadium – erste Anzeichen an Zehen und Fußsohle</p>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Klinische Erscheinungsformen von Tinea pedis
            </h2>
            
            <p className="text-medical-600 mb-4">
              Medizinisch unterscheidet man verschiedene klinische Formen, die unterschiedliche Bereiche des Fußes befallen:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2 text-lg">Interdigitale Form</h3>
                <p className="text-sm text-medical-600">Die häufigste Form: Befall zwischen den Zehen, oft mit Mazeration, Rissen und starkem Juckreiz.</p>
              </div>
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2 text-lg">Squamös-hyperkeratotische Form</h3>
                <p className="text-sm text-medical-600">Mokassin-Typ: Trockene, schuppige Haut an der Fußsohle mit Verdickung der Hornhaut.</p>
              </div>
              <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
                <h3 className="font-semibold text-medical-800 mb-2 text-lg">Vesikulös-dysidrotische Form</h3>
                <p className="text-sm text-medical-600">Bläschenbildung an Fußsohle und -kanten, oft mit starkem Juckreiz und Entzündung.</p>
              </div>
            </div>

            <div className="my-8">
              <p className="text-medical-600 mb-4">
                Hautrötungen und entzündliche Reaktionen sind typische Begleiterscheinungen einer aktiven Pilzinfektion:
              </p>
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/fusspilz-haut-roetung.webp"
                  alt="Fußpilz Symptome Hautrötung Entzündung entzündlicher Fußpilz"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="text-sm text-medical-500 italic">Abb. 3: Deutliche Hautrötung als Zeichen einer entzündlichen Fußpilzinfektion</p>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Abgrenzung zu ähnlichen Hauterkrankungen
            </h2>
            
            <p className="text-medical-600 mb-4">
              Nicht jeder Juckreiz oder jede Rötung am Fuß ist automatisch auf einen Pilzbefall zurückzuführen. Folgende Erkrankungen können ähnliche Beschwerden verursachen:
            </p>

            <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
              <li><strong>Kontaktdermatitis:</strong> Allergische Reaktion auf Schuhmaterial, Waschmittel oder Socken</li>
              <li><strong>Dyshidrotisches Ekzem:</strong> Bläschenbildung an Händen und Füßen ohne Pilzinfektion</li>
              <li><strong>Psoriasis (Schuppenflechte):</strong> Chronisch-entzündliche Hauterkrankung mit silbrigen Schuppen</li>
              <li><strong>Bakterielle Infektionen:</strong> Können zusätzlich zu oder anstelle von Pilzen auftreten</li>
            </ul>

            <p className="text-medical-600 mb-6">
              Bei Unsicherheit sollte immer ein Hautarzt aufgesucht werden, der mittels Hautgeschabsel und mikroskopischer Untersuchung eine sichere Diagnose stellen kann.
            </p>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Wann ist ein Arztbesuch erforderlich?
            </h2>
            
            <p className="text-medical-600 mb-4">
              In folgenden Fällen ist eine ärztliche Konsultation dringend empfohlen:
            </p>

            <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
              <li>Die Beschwerden bessern sich nach zwei Wochen konsequenter Selbstbehandlung nicht</li>
              <li>Starke Schmerzen, ausgeprägte Schwellungen oder eitrige Entzündungen treten auf</li>
              <li>Sie leiden an Diabetes mellitus, Durchblutungsstörungen oder einem geschwächten Immunsystem</li>
              <li>Die Infektion breitet sich auf die Fußnägel aus (Onychomykose)</li>
              <li>Fieber oder geschwollene Lymphknoten begleiten die Hautveränderungen</li>
              <li>Sie sind sich unsicher, ob es sich wirklich um eine Pilzinfektion handelt</li>
              <li>Kinder oder Säuglinge sind betroffen</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-8 rounded-r-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Gut zu wissen</h3>
              <p className="text-medical-700 text-sm">
                Eine Pilzinfektion am Fuß ist grundsätzlich gut behandelbar. Je früher die Therapie beginnt, desto schneller und unkomplizierter verläuft die Heilung. Chronische Infektionen erfordern oft eine monatelange Behandlung und können immer wieder rezidivieren.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Häufig gestellte Fragen (FAQ)
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Was sind die ersten Anzeichen von Fußpilz?</h3>
                <p className="text-sm text-medical-600">
                  Die ersten Anzeichen sind meist leichtes Kribbeln oder Jucken zwischen den Zehen, besonders zwischen dem vierten und fünften Zeh. Hinzu kommen dezente Rötungen, minimale Schuppung und gelegentliches Spannungsgefühl nach dem Duschen oder Sport.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Wie erkenne ich Fußpilz im Anfangsstadium?</h3>
                <p className="text-sm text-medical-600">
                  Im Anfangsstadium zeigt sich die Infektion durch dezente Rötungen, leichte Hautschuppung zwischen den Zehen, milden Juckreiz und vereinzelte kleine Bläschen. Die Beschwerden sind oft noch mild und werden leicht übersehen.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Wann sollte ich mit Fußpilz zum Arzt?</h3>
                <p className="text-sm text-medical-600">
                  Ein Arztbesuch ist empfohlen, wenn sich die Beschwerden nach zwei Wochen Selbstbehandlung nicht bessern, starke Schmerzen oder Schwellungen auftreten, Sie Diabetiker sind, die Infektion auf die Nägel übergreift oder Sie unsicher bei der Diagnose sind.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-medical-800 mb-2">Welche Symptome hat Fußpilz zwischen den Zehen?</h3>
                <p className="text-sm text-medical-600">
                  Zwischen den Zehen manifestiert sich die Infektion durch intensiven Juckreiz, Rötung, weißliche Hautschuppung, aufgeweichte Haut (Mazeration), schmerzhafte Risse und manchmal Bläschenbildung. Dieser Bereich ist am häufigsten betroffen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">
              Zusammenfassung und Empfehlungen
            </h2>
            
            <p className="text-medical-600 mb-4">
              Eine Pilzinfektion am Fuß zeigt sich durch eine charakteristische Kombination von Beschwerden. Typisch sind Juckreiz, Rötung, Schuppung und manchmal Bläschenbildung, vor allem zwischen den Zehen. In der frühen Phase können die Warnsignale noch sehr diskret sein – ein leichtes Kribbeln oder minimale Hautveränderungen.
            </p>

            <p className="text-medical-600 mb-6">
              Wer die Beschwerden frühzeitig erkennt und behandelt, hat die besten Heilungschancen. Bei Unsicherheit, anhaltenden Beschwerden oder Risikofaktoren wie Diabetes sollte immer ein Dermatologe konsultiert werden. Die Inhalte dieses Artikels dienen der Information und ersetzen keine professionelle medizinische Beratung.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
              <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen und Referenzen</h3>
              <ul className="text-xs text-medical-600 space-y-1">
                <li>1. Deutsche Dermatologische Gesellschaft (DDG): Leitlinie Tinea pedis, 2023</li>
                <li>2. Robert Koch-Institut: Epidemiologie von Dermatomykosen in Deutschland, 2024</li>
                <li>3. European Academy of Dermatology and Venereology (EADV): Clinical Guidelines, 2024</li>
                <li>4. Gupta AK, et al. Dermatophyte infections: current treatment approaches. J Am Acad Dermatol. 2024</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Informationen</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/wissen/fusspilz/behandlung" className="text-primary-600 hover:underline font-medium">
                    → Fußpilz Behandlung: Wirksame Therapieoptionen und Medikamente
                  </Link>
                </li>
                <li>
                  <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline font-medium">
                    → Fußpilz Vorbeugung: Effektive Schutzmaßnahmen und Prävention
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
            <Link href="/wissen/fusspilz/ursachen" className="text-primary-600 hover:underline flex items-center">
              <span className="mr-1">←</span> Ursachen von Fußpilz
            </Link>
            <Link href="/wissen/fusspilz/behandlung" className="text-primary-600 hover:underline flex items-center">
              Behandlungsmöglichkeiten <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
