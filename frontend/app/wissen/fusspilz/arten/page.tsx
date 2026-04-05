import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Arten: Die 3 häufigsten Formen im Überblick',
  description: 'Welche Fußpilz-Arten gibt es? Interdigitale, squamös-hyperkeratotische und vesikulös-dysidrotische Form - Symptome, Unterschiede und Behandlung.',
  keywords: ['fußpilz arten', 'fußpilz formen', 'interdigitale fußpilz', 'mokassin fußpilz'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: { canonical: 'https://pedizone.de/wissen/fusspilz/arten' },
}

export default function ArtenPage() {
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
            <li className="text-medical-600">Arten</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
          Fußpilz Arten: Die 3 häufigsten Formen
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
            Fußpilz ist nicht gleich Fußpilz. Dermatologen unterscheiden drei Hauptformen, die unterschiedliche Bereiche befallen und verschiedene Beschwerden verursachen. Die richtige Einordnung hilft bei der gezielten Behandlung.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">1. Interdigitale Form - Der Klassiker</h2>
          
          <p className="text-medical-600 mb-4">
            Die häufigste Form. Etwa 80% aller Fußpilz-Patienten haben diese Variante.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-2">Typische Merkmale:</h3>
            <ul className="text-sm text-medical-700 space-y-2">
              <li>• Befall zwischen den Zehen, meist zwischen 4. und 5. Zeh</li>
              <li>• Weißliche, aufgeweichte Haut (Mazeration)</li>
              <li>• Starker Juckreiz, besonders abends</li>
              <li>• Risse, die schmerzen können</li>
              <li>• Manchmal nässende Stellen</li>
            </ul>
          </div>

          <p className="text-medical-600 mb-6">
            <strong>Warum gerade hier?</strong> Die Zehenzwischenräume sind schwer zu trocknen. Schweiß sammelt sich, Schuhe pressen die Zehen zusammen - perfekte Bedingungen für Pilze.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Behandlung:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li>Antimykotische Creme 2x täglich, mindestens 3 Wochen</li>
            <li>Zehenzwischenräume nach dem Waschen sehr gründlich abtrocknen</li>
            <li>Eventuell Zehenspreizer zum Lüften verwenden</li>
            <li>Bei hartnäckigem Verlauf: Tabletten vom Arzt</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">2. Squamös-hyperkeratotische Form - Der Mokassin-Typ</h2>

          <p className="text-medical-600 mb-4">
            Zweithäufigste Form. Befällt die Fußsohlen und Fußkanten. Wird oft mit trockener Haut verwechselt.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-2">Typische Merkmale:</h3>
            <ul className="text-sm text-medical-700 space-y-2">
              <li>• Trockene, schuppende Fußsohlen</li>
              <li>• Verdickte Hornhaut, vor allem an Fersen</li>
              <li>• Rötung an den Fußkanten</li>
              <li>• Juckreiz meist mild oder fehlend</li>
              <li>• Langsame Entwicklung über Monate/Jahre</li>
            </ul>
          </div>

          <p className="text-medical-600 mb-6">
            <strong>Tückisch:</strong> Diese Form entwickelt sich schleichend. Viele denken, sie hätten einfach nur trockene Füße. Die Pilzinfektion bleibt unbehandelt und wird chronisch.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Behandlung:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li>Antimykotische Creme, oft über mehrere Wochen nötig</li>
            <li>Hornhaut vorsichtig entfernen (Bimsstein, nicht zu aggressiv)</li>
            <li>Harnstoffhaltige Creme zur Aufweichung der Hornhaut</li>
            <li>Bei ausgedehntem Befall: Systemische Therapie mit Tabletten</li>
            <li>Geduld - diese Form braucht länger bis zur Heilung</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">3. Vesikulös-dysidrotische Form - Die Bläschen-Variante</h2>

          <p className="text-medical-600 mb-4">
            Seltenste Form (ca. 10%). Auffällig durch Bläschenbildung.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-2">Typische Merkmale:</h3>
            <ul className="text-sm text-medical-700 space-y-2">
              <li>• Kleine, juckende Bläschen an Fußsohle und -kanten</li>
              <li>• Bläschen können zusammenfließen</li>
              <li>• Nach Platzen: nässende, rote Stellen</li>
              <li>• Sehr starker Juckreiz</li>
              <li>• Oft akuter Beginn</li>
            </ul>
          </div>

          <p className="text-medical-600 mb-6">
            <strong>Verwechslungsgefahr:</strong> Sieht ähnlich aus wie dyshidrotisches Ekzem. Hautarzt kann durch Pilznachweis unterscheiden.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Behandlung:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li>Antimykotische Creme, manchmal kombiniert mit entzündungshemmender Komponente</li>
            <li>Bläschen nicht aufstechen - Infektionsgefahr!</li>
            <li>Kühle Umschläge gegen Juckreiz</li>
            <li>Bei starker Entzündung: Arzt aufsuchen</li>
            <li>Eventuell kurzzeitig Kortisoncreme zusätzlich</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Mischformen und Komplikationen</h2>

          <p className="text-medical-600 mb-4">
            In der Praxis treten oft Mischformen auf. Ein Patient kann gleichzeitig interdigitalen Fußpilz und die Mokassin-Form haben.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
              <h3 className="font-semibold text-medical-800 mb-2">Mögliche Komplikationen</h3>
              <ul className="text-sm text-medical-600 space-y-1">
                <li>• Übergreifen auf die Nägel (Nagelpilz)</li>
                <li>• Bakterielle Zusatzinfektion</li>
                <li>• Chronifizierung bei Nichtbehandlung</li>
                <li>• Ausbreitung auf Hände (Tinea manuum)</li>
              </ul>
            </div>
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100">
              <h3 className="font-semibold text-medical-800 mb-2">Wann zum Arzt?</h3>
              <ul className="text-sm text-medical-600 space-y-1">
                <li>• Unsichere Diagnose</li>
                <li>• Keine Besserung nach 2 Wochen</li>
                <li>• Ausgedehnter Befall</li>
                <li>• Diabetiker/Immunschwäche</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Häufige Fragen zu Fußpilz-Arten</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Welche Fußpilz-Art habe ich?</h3>
              <p className="text-sm text-medical-600">
                Schauen Sie, wo die Beschwerden sind: Zwischen den Zehen = interdigital. An der Fußsohle mit Hornhaut = Mokassin-Typ. Bläschen an Sohle/Kante = vesikulös. Bei Unsicherheit zum Hautarzt.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Welche Form ist am hartnäckigsten?</h3>
              <p className="text-sm text-medical-600">
                Der Mokassin-Typ ist oft am schwierigsten zu behandeln. Er entwickelt sich schleichend und wird häufig spät erkannt. Die Behandlung dauert länger als bei anderen Formen.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Kann sich die Art ändern?</h3>
              <p className="text-sm text-medical-600">
                Ja, eine Form kann in eine andere übergehen oder sich ausbreiten. Interdigitaler Fußpilz kann sich auf die Fußsohle ausweiten. Deshalb ist konsequente Behandlung wichtig.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
            <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen</h3>
            <ul className="text-xs text-medical-600 space-y-1">
              <li>1. Deutsche Dermatologische Gesellschaft: Leitlinie Tinea pedis, 2023</li>
              <li>2. Nenoff P, et al. Mykosen der Füße. Hautarzt, 2024</li>
              <li>3. European Academy of Dermatology: Clinical Classification, 2024</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Informationen</h3>
            <ul className="space-y-2">
              <li><Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline font-medium">→ Fußpilz Symptome erkennen</Link></li>
              <li><Link href="/wissen/fusspilz/behandlung" className="text-primary-600 hover:underline font-medium">→ Fußpilz Behandlung</Link></li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-8 rounded-r-lg">
          <p className="text-medical-700 text-sm">
            <strong>Wichtiger Hinweis:</strong> Die Inhalte ersetzen keine ärztliche Beratung. Bei anhaltenden oder schweren Beschwerden konsultieren Sie bitte einen Arzt oder Dermatologen.
          </p>
        </div>
      </div>
    </article>
  )
}
