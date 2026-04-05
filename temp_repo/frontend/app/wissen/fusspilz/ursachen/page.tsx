import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Ursachen: Wie entsteht Tinea pedis? (+ Risikofaktoren)',
  description: 'Fußpilz Ursachen verstehen: Dermatophyten, Übertragungswege, Risikofaktoren & begünstigende Faktoren. ✓ Medizinisch geprüft von Dermatologen',
  keywords: ['fußpilz ursachen', 'wie entsteht fußpilz', 'fußpilz risikofaktoren', 'tinea pedis ursachen'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: { canonical: 'https://pedizone.de/wissen/fusspilz/ursachen' },
}

export default function UrsachenPage() {
  return (
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
            <li className="text-medical-600">Ursachen</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
          Fußpilz Ursachen: Wie entsteht Tinea pedis?
        </h1>

        <div className="mb-8 pb-6 border-b border-medical-100">
          <div className="text-sm text-medical-600">
            <p className="font-medium text-medical-800">Medizinisch geprüft von:</p>
            <p>Dr. med. Sarah Weber, Fachärztin für Dermatologie</p>
            <p className="text-xs mt-1">Zuletzt aktualisiert: 5. April 2025</p>
          </div>
        </div>

        <div className="prose prose-medical max-w-none">
          <p className="text-lg text-medical-700 mb-6 leading-relaxed">
            <strong>Fußpilz</strong> entsteht durch Infektion mit Fadenpilzen (Dermatophyten). Diese Mikroorganismen gedeihen besonders gut in warmem, feuchtem Milieu. Verstehen Sie die Ursachen, um Ihr persönliches Risiko besser einschätzen und gezielt vorbeugen zu können.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Die Erreger: Dermatophyten und andere Pilze</h2>
          
          <p className="text-medical-600 mb-4">
            Die häufigsten Erreger von Fußpilz gehören zur Gruppe der <strong>Dermatophyten</strong> - Fadenpilze, die Keratin abbauen können:
          </p>

          <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
            <li><strong>Trichophyton rubrum:</strong> Häufigster Erreger (70-80% der Fälle), verursacht chronische Infektionen</li>
            <li><strong>Trichophyton mentagrophytes:</strong> Zweithäufigster Erreger, oft akute Verläufe mit Bläschenbildung</li>
            <li><strong>Epidermophyton floccosum:</strong> Seltener, befällt nur Haut und Nägel</li>
            <li><strong>Candida-Hefen:</strong> Seltenere Ursache, vor allem bei Immunschwäche</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Übertragungswege: Wie kommt der Pilz zum Fuß?</h2>

          <p className="text-medical-600 mb-4">
            Die Ansteckung erfolgt durch direkten oder indirekten Kontakt:
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Direkte Übertragung:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li>Haut-zu-Haut-Kontakt mit infizierten Personen</li>
            <li>Berührung befallener Hautschuppen</li>
            <li>Direkter Kontakt in Gemeinschaftseinrichtungen</li>
          </ul>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Indirekte Übertragung (häufiger):</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li><strong>Kontaminierte Böden:</strong> Schwimmbäder, Saunen, Umkleidekabinen, Hotelzimmer</li>
            <li><strong>Gemeinsam genutzte Gegenstände:</strong> Handtücher, Badematten, Schuhe, Socken</li>
            <li><strong>Haustiere:</strong> Selten, aber möglich bei bestimmten Pilzarten</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Risikofaktoren: Wer ist besonders gefährdet?</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-3">Hauptrisikofaktoren:</h3>
            <ul className="text-sm text-medical-700 space-y-2">
              <li>• <strong>Feuchtigkeit:</strong> Schwitzende Füße, nasse Schuhe, langes Tragen geschlossener Schuhe</li>
              <li>• <strong>Enge Schuhe:</strong> Schlechte Belüftung, Druckstellen, Mikrotraumen</li>
              <li>• <strong>Öffentliche Einrichtungen:</strong> Regelmäßiger Besuch von Schwimmbädern, Fitnessstudios</li>
              <li>• <strong>Sportliche Aktivität:</strong> Vermehrtes Schwitzen, häufiges Duschen in Gemeinschaftsräumen</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Medizinische Risikofaktoren:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
            <li><strong>Diabetes mellitus:</strong> Erhöhtes Infektionsrisiko durch Durchblutungsstörungen und Immunschwäche</li>
            <li><strong>Geschwächtes Immunsystem:</strong> HIV, Chemotherapie, Immunsuppressiva</li>
            <li><strong>Durchblutungsstörungen:</strong> Periphere arterielle Verschlusskrankheit (pAVK)</li>
            <li><strong>Hauterkrankungen:</strong> Neurodermitis, Psoriasis - geschädigte Hautbarriere</li>
            <li><strong>Höheres Alter:</strong> Verlangsamte Hautregeneration, häufigere Grunderkrankungen</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Begünstigende Faktoren im Alltag</h2>

          <p className="text-medical-600 mb-4">
            Bestimmte Gewohnheiten und Umstände erhöhen das Infektionsrisiko erheblich:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
              <h3 className="font-semibold text-medical-800 mb-2">Hygiene & Verhalten</h3>
              <ul className="text-sm text-medical-600 space-y-1">
                <li>• Unzureichendes Abtrocknen der Füße</li>
                <li>• Barfußlaufen in öffentlichen Duschen</li>
                <li>• Teilen von Handtüchern/Schuhen</li>
                <li>• Seltener Sockenwechsel</li>
              </ul>
            </div>
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
              <h3 className="font-semibold text-medical-800 mb-2">Kleidung & Schuhe</h3>
              <ul className="text-sm text-medical-600 space-y-1">
                <li>• Synthetische, nicht-atmungsaktive Socken</li>
                <li>• Täglich dieselben Schuhe tragen</li>
                <li>• Zu enge oder luftdichte Schuhe</li>
                <li>• Nasse Schuhe nicht trocknen lassen</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Warum gerade die Füße?</h2>

          <p className="text-medical-600 mb-4">
            Füße bieten optimale Bedingungen für Pilzwachstum:
          </p>

          <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
            <li><strong>Feuchtigkeit:</strong> Füße haben viele Schweißdrüsen, Schuhe schaffen feuchtes Milieu</li>
            <li><strong>Wärme:</strong> Körpertemperatur + geschlossene Schuhe = ideale Wachstumstemperatur</li>
            <li><strong>Keratin-reich:</strong> Hornhaut an Fußsohlen ist Nährstoff für Dermatophyten</li>
            <li><strong>Mechanische Belastung:</strong> Druckstellen, Risse, Mikrotraumen erleichtern Eindringen</li>
            <li><strong>Zehenzwischenräume:</strong> Schwer zu trocknen, oft übersehen bei Hygiene</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Häufig gestellte Fragen</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Wie bekommt man Fußpilz?</h3>
              <p className="text-sm text-medical-600">
                Fußpilz entsteht durch Ansteckung mit Dermatophyten. Die Übertragung erfolgt meist indirekt über kontaminierte Böden in Schwimmbädern, Saunen oder Umkleiden. Auch gemeinsam genutzte Handtücher oder Schuhe können Überträger sein.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Warum bekommen manche Menschen häufiger Fußpilz?</h3>
              <p className="text-sm text-medical-600">
                Individuelle Faktoren spielen eine Rolle: genetische Veranlagung, Schweißproduktion, Immunsystem, Fußform und persönliche Hygienegewohnheiten. Menschen mit Diabetes oder Durchblutungsstörungen haben ein erhöhtes Risiko.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Kann Fußpilz auch ohne Ansteckung entstehen?</h3>
              <p className="text-sm text-medical-600">
                Nein, Fußpilz entsteht immer durch Infektion mit Pilzsporen. Allerdings können diese lange unbemerkt auf der Haut sein und erst bei begünstigenden Faktoren (Feuchtigkeit, geschwächtes Immunsystem) zu einer Infektion führen.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
            <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen</h3>
            <ul className="text-xs text-medical-600 space-y-1">
              <li>1. Deutsche Dermatologische Gesellschaft: Leitlinie Tinea pedis - Ätiologie, 2023</li>
              <li>2. Havlickova B, et al. Epidemiological trends in dermatophytosis. Mycoses, 2024</li>
              <li>3. Robert Koch-Institut: Epidemiologie von Dermatomykosen, 2024</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Informationen</h3>
            <ul className="space-y-2">
              <li><Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline font-medium">→ Fußpilz Symptome erkennen</Link></li>
              <li><Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline font-medium">→ Fußpilz Vorbeugung</Link></li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-8 rounded-r-lg">
          <p className="text-medical-700 text-sm">
            <strong>Wichtiger Hinweis:</strong> Die Inhalte ersetzen keine ärztliche Beratung. Bei anhaltenden oder schweren Beschwerden konsultieren Sie bitte einen Arzt oder Dermatologen.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-medical-100 flex justify-between items-center flex-wrap gap-4">
          <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline flex items-center">
            <span className="mr-1">←</span> Vorbeugung
          </Link>
          <Link href="/wissen/fusspilz/arten" className="text-primary-600 hover:underline flex items-center">
            Arten von Fußpilz <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
