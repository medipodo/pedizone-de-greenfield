import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Was ist Fußpilz? Tinea Pedis einfach erklärt | PediZone',
  description: 'Was ist Fußpilz? Definition, Erreger, Verbreitung und wichtigste Fakten zu Tinea pedis. ✓ Verständlich erklärt von Dermatologen',
  keywords: ['was ist fußpilz', 'tinea pedis', 'fußpilz definition', 'pilzinfektion fuß'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: { canonical: 'https://pedizone.de/wissen/fusspilz/was-ist-fusspilz' },
}

export default function WasIstFusspilzPage() {
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
            <li className="text-medical-600">Was ist Fußpilz</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
          Was ist Fußpilz? Definition und Grundlagen
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
            Fußpilz - medizinisch <strong>Tinea pedis</strong> - ist eine Pilzinfektion der Füße. Es ist die häufigste Pilzerkrankung beim Menschen. Etwa jeder Dritte erkrankt mindestens einmal im Leben daran.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Die medizinische Definition</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
            <p className="text-medical-700">
              <strong>Tinea pedis</strong> bezeichnet eine Infektion der Fußhaut durch Fadenpilze (Dermatophyten). Die Pilze befallen Hornschicht, Haare und Nägel. Sie ernähren sich von Keratin.
            </p>
          </div>

          <p className="text-medical-600 mb-6">
            Der Begriff kommt aus dem Lateinischen: "Tinea" = Motte, Wurm (wegen des kriechenden Ausbreitungsmusters), "pedis" = des Fußes. Im Volksmund heißt die Erkrankung auch Athletenfuß.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Die Erreger: Wer verursacht Fußpilz?</h2>

          <p className="text-medical-600 mb-4">
            Verantwortlich sind meist <strong>Dermatophyten</strong> - spezialisierte Fadenpilze:
          </p>

          <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
            <li><strong>Trichophyton rubrum</strong> (70-80% der Fälle) - Häufigster Erreger weltweit</li>
            <li><strong>Trichophyton mentagrophytes</strong> (15-20%) - Zweithäufigster Erreger</li>
            <li><strong>Epidermophyton floccosum</strong> (5-10%) - Seltenerer Erreger</li>
            <li><strong>Candida-Hefen</strong> (selten) - Vor allem bei Immunschwäche</li>
          </ul>

          <p className="text-medical-600 mb-6">
            Diese Pilze haben eine besondere Fähigkeit: Sie können Keratin verdauen. Deshalb befallen sie Horn haut, Nägel und Haare.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Wie verbreitet ist Fußpilz?</h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100 text-center">
              <p className="text-3xl font-bold text-primary-600 mb-2">30-35%</p>
              <p className="text-sm text-medical-600">der Erwachsenen erkranken mindestens einmal</p>
            </div>
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100 text-center">
              <p className="text-3xl font-bold text-primary-600 mb-2">3-15%</p>
              <p className="text-sm text-medical-600">leiden aktuell an Fußpilz</p>
            </div>
            <div className="p-5 bg-medical-50 rounded-lg border border-medical-100 text-center">
              <p className="text-3xl font-bold text-primary-600 mb-2">↑7%</p>
              <p className="text-sm text-medical-600">Häufigkeit steigt mit dem Alter</p>
            </div>
          </div>

          <p className="text-medical-600 mb-6">
            Männer sind etwas häufiger betroffen als Frauen. Das liegt oft an geschlossenen Schuhen und Sport.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Wo tritt Fußpilz auf?</h2>

          <p className="text-medical-600 mb-4">
            Die Infektion kann verschiedene Bereiche des Fußes befallen:
          </p>

          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li><strong>Zehenzwischenräume</strong> (am häufigsten) - vor allem zwischen 4. und 5. Zeh</li>
            <li><strong>Fußsohlen</strong> - oft mit Hornhautverdickung</li>
            <li><strong>Fußkanten</strong> - seitliche Bereiche</li>
            <li><strong>Fußrücken</strong> (selten) - eher bei ausgedehnten Infektionen</li>
            <li><strong>Nägel</strong> (Komplikation) - aus Fußpilz kann Nagelpilz werden</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Warum gerade die Füße?</h2>

          <p className="text-medical-600 mb-4">
            Füße bieten ideale Lebensbedingungen für Pilze:
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Optimale Wachstumsbedingungen:</h3>
            <ul className="text-sm text-yellow-700 space-y-2">
              <li>• <strong>Feuchtigkeit:</strong> Füße schwitzen, Schuhe halten Feuchtigkeit</li>
              <li>• <strong>Wärme:</strong> Körpertemperatur + geschlossene Schuhe</li>
              <li>• <strong>Nahrung:</strong> Viel Hornhaut an Fußsohlen</li>
              <li>• <strong>Dunkelheit:</strong> In Schuhen kein Licht</li>
              <li>• <strong>Mechanische Belastung:</strong> Kleine Risse erleichtern Eindringen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Ist Fußpilz gefährlich?</h2>

          <p className="text-medical-600 mb-4">
            Für gesunde Menschen ist Fußpilz <strong>nicht gefährlich</strong>, aber lästig:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Bei gesunden Menschen:</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Keine ernste Bedrohung</li>
                <li>• Gut behandelbar</li>
                <li>• Heilt bei Therapie zuverlässig</li>
                <li>• Komplikationen selten</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Risiko bei:</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Diabetes mellitus</li>
                <li>• Immunschwäche</li>
                <li>• Durchblutungsstörungen</li>
                <li>• Hier: Arzt aufsuchen!</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Mögliche Komplikationen:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li><strong>Nagelpilz:</strong> Pilz breitet sich auf Nägel aus</li>
            <li><strong>Bakterielle Infektion:</strong> Durch Risse dringen Bakterien ein</li>
            <li><strong>Chronifizierung:</strong> Bei Nichtbehandlung jahrelanger Verlauf</li>
            <li><strong>Wundrose (Erysipel):</strong> Selten, aber möglich bei zusätzlicher Bakterieninfektion</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Kann Fußpilz von selbst heilen?</h2>

          <p className="text-medical-600 mb-6">
            <strong>Nein.</strong> Fußpilz heilt nicht spontan. Ohne Behandlung bleibt die Infektion bestehen oder wird schlimmer. Die Pilze vermehren sich weiter, solange die Bedingungen stimmen.
          </p>

          <p className="text-medical-600 mb-6">
            Manche Patienten berichten von Besserung im Sommer. Das liegt an offenen Schuhen und mehr Luft. Aber: Der Pilz ist nicht weg, nur vorübergehend inaktiver.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Die wichtigsten Fakten auf einen Blick</h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6 border border-gray-200">
            <ul className="space-y-3 text-medical-600">
              <li>✓ <strong>Häufigste Pilzerkrankung</strong> beim Menschen</li>
              <li>✓ Verursacht durch Fadenpilze (Dermatophyten)</li>
              <li>✓ Sehr ansteckend - Übertragung in Schwimmbädern, Saunen, Fitnessstudios</li>
              <li>✓ Heilt nicht von selbst - Behandlung nötig</li>
              <li>✓ Gut behandelbar mit antimykotischen Cremes</li>
              <li>✓ Vorbeugung durch Hygiene und richtige Schuhe möglich</li>
              <li>✓ Bei Risikopatienten (Diabetes) unbedingt zum Arzt</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Häufige Fragen</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Ist Fußpilz dasselbe wie Nagelpilz?</h3>
              <p className="text-sm text-medical-600">
                Nein. Fußpilz (Tinea pedis) befällt die Haut. Nagelpilz (Onychomykose) befällt die Nägel. Oft entsteht Nagelpilz aus unbehandeltem Fußpilz.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Warum heißt es Athletenfuß?</h3>
              <p className="text-sm text-medical-600">
                Der englische Name "Athlete's Foot" stammt daher, dass Sportler häufig betroffen sind. Viel Schwitzen, Gemeinschaftsduschen und geschlossene Sportschuhe begünstigen die Infektion.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Ist jeder Juckreiz am Fuß Fußpilz?</h3>
              <p className="text-sm text-medical-600">
                Nein. Auch Ekzeme, Allergien oder trockene Haut können jucken. Bei Unsicherheit: Hautarzt aufsuchen. Der kann durch Hautgeschabsel Pilze nachweisen.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
            <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen</h3>
            <ul className="text-xs text-medical-600 space-y-1">
              <li>1. Deutsche Dermatologische Gesellschaft: Leitlinie Tinea pedis, 2023</li>
              <li>2. Nenoff P, et al. Epidemiologie der Dermatomykosen. Hautarzt, 2024</li>
              <li>3. World Health Organization: Fungal Disease Factsheet, 2024</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="font-semibold text-medical-800 mb-3">Mehr erfahren</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline font-medium">→ Symptome erkennen</Link>
              <Link href="/wissen/fusspilz/behandlung" className="text-primary-600 hover:underline font-medium">→ Behandlungsmöglichkeiten</Link>
              <Link href="/wissen/fusspilz/ursachen" className="text-primary-600 hover:underline font-medium">→ Ursachen & Risikofaktoren</Link>
              <Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline font-medium">→ Vorbeugung & Prävention</Link>
            </div>
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
