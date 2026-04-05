import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Ansteckung: Wie steckt man sich an? (Übertragungswege)',
  description: 'Wie steckt man sich mit Fußpilz an? Übertragungswege, Ansteckungsrisiko in Schwimmbad & Sauna, Schutzmaßnahmen. ✓ Praktische Tipps vom Dermatologen',
  keywords: ['fußpilz ansteckung', 'fußpilz übertragung', 'wie steckt man sich an', 'ansteckungsgefahr'],
  authors: [{ name: 'Dr. med. Sarah Weber', url: 'https://pedizone.de' }],
  alternates: { canonical: 'https://pedizone.de/wissen/fusspilz/ansteckung' },
}

export default function AnsteckungPage() {
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
            <li className="text-medical-600">Ansteckung</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-6">
          Fußpilz Ansteckung: So erfolgt die Übertragung
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
            Fußpilz gehört zu den ansteckendsten Hautinfektionen. Die Übertragung passiert schneller als viele denken - oft reicht schon ein Besuch im Schwimmbad. Wer die Ansteckungswege kennt, kann sich besser schützen.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Wie läuft die Ansteckung ab?</h2>
          
          <p className="text-medical-600 mb-4">
            Der Erreger - meist Fadenpilze (Dermatophyten) - überlebt wochen- bis monatelang außerhalb des Körpers. Infizierte verlieren beim Gehen winzige Hautschuppen, in denen die Pilzsporen stecken.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-2">Der Infektionsweg Schritt für Schritt:</h3>
            <ol className="text-sm text-medical-700 space-y-2 list-decimal pl-5">
              <li>Infizierte Person verliert pilzhaltige Hautschuppen</li>
              <li>Schuppen bleiben auf Böden, Handtüchern oder in Schuhen haften</li>
              <li>Gesunde Person kommt in Kontakt damit</li>
              <li>Pilzsporen heften sich an die Haut</li>
              <li>Bei günstigen Bedingungen (Feuchtigkeit, Wärme) dringen sie ein</li>
              <li>Nach 1-2 Wochen erste Symptome</li>
            </ol>
          </div>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Wo ist die Ansteckungsgefahr am größten?</h2>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Hochrisiko-Bereiche:</h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Schwimmbäder & Thermen</h4>
              <p className="text-sm text-red-700">
                Feuchte Böden, viele Barfußläufer, warme Temperaturen. Umkleiden und Duschbereiche sind besonders kritisch.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Fitnessstudios</h4>
              <p className="text-sm text-red-700">
                Duschen nach dem Sport, gemeinsame Umkleiden, oft barfuß unterwegs. Hohe Pilzkonzentration möglich.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Saunen</h4>
              <p className="text-sm text-red-700">
                Feucht-warmes Klima ist ideal für Pilze. Gemeinschaftsliegen und Böden sind Übertragungsorte.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Hotels & Pensionen</h4>
              <p className="text-sm text-red-700">
                Hotelteppiche, Badematten, manchmal auch Bettvorleger - besonders in Barfußzonen riskant.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Mittleres Risiko:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li><strong>Gemeinschaftsduschen:</strong> Auch in Betrieben, Kasernen, Internaten</li>
            <li><strong>Yoga-Studios:</strong> Oft barfuß, Matten werden manchmal geteilt</li>
            <li><strong>Schuhgeschäfte:</strong> Schuhe ohne Socken anprobieren</li>
            <li><strong>Pedikürestudios:</strong> Wenn Hygiene nicht optimal ist</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Ansteckung im privaten Umfeld</h2>

          <p className="text-medical-600 mb-4">
            Auch zu Hause kann man sich anstecken - besonders wenn ein Familienmitglied bereits Fußpilz hat.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-6 rounded-r-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Typische Übertragungswege daheim:</h3>
            <ul className="text-sm text-yellow-700 space-y-2">
              <li>• <strong>Gemeinsame Badematten:</strong> Größtes Risiko in der Wohnung</li>
              <li>• <strong>Geteilte Handtücher:</strong> Niemals Handtücher teilen!</li>
              <li>• <strong>Teppiche & Läufer:</strong> Pilzsporen halten sich wochenlang</li>
              <li>• <strong>Bettvorleger:</strong> Wenn man barfuß aus dem Bett steigt</li>
              <li>• <strong>Schuhe:</strong> Fremde Schuhe anziehen (z.B. Hausschuhe)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Schutz in der Familie:</h3>
          <ul className="list-disc pl-6 text-medical-600 space-y-2 mb-6">
            <li>Infizierte Person bekommt eigene Badematte</li>
            <li>Handtücher täglich wechseln, bei 60°C waschen</li>
            <li>Bad nach Benutzung kurz desinfizieren (Desinfektionsspray)</li>
            <li>Niemand darf Schuhe oder Socken der erkrankten Person tragen</li>
            <li>Behandlung konsequent durchführen</li>
          </ul>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Wie ansteckend ist Fußpilz wirklich?</h2>

          <p className="text-medical-600 mb-4">
            Sehr ansteckend - aber nicht jeder Kontakt führt zur Infektion. Es braucht günstige Bedingungen:
          </p>

          <ul className="list-disc pl-6 text-medical-600 space-y-3 mb-6">
            <li><strong>Feuchtigkeit:</strong> Nasse oder feuchte Füße</li>
            <li><strong>Aufweichung:</strong> Lange in Schuhen, Schwitzen</li>
            <li><strong>Kleine Verletzungen:</strong> Risse, Druckstellen erleichtern Eindringen</li>
            <li><strong>Geschwächte Abwehr:</strong> Stress, Krankheit, Alter</li>
            <li><strong>Kontaktdauer:</strong> Je länger der Kontakt, desto höher das Risiko</li>
          </ul>

          <p className="text-medical-600 mb-6">
            <strong>Gut zu wissen:</strong> Gesunde, trockene und intakte Haut ist relativ resistent gegen Pilze. Deshalb erkranken nicht alle Menschen trotz Kontakt.
          </p>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Inkubationszeit: Wann zeigen sich Symptome?</h2>

          <p className="text-medical-600 mb-4">
            Nach der Ansteckung dauert es meist 1-3 Wochen bis zu den ersten Beschwerden. Manchmal auch kürzer (wenige Tage) oder länger (bis zu 6 Wochen).
          </p>

          <div className="p-5 bg-medical-50 rounded-lg border border-medical-100 mb-6">
            <h3 className="font-semibold text-medical-800 mb-2">Typischer Verlauf:</h3>
            <ul className="text-sm text-medical-600 space-y-1">
              <li>• Tag 1-7: Pilzsporen siedeln sich an, keine Symptome</li>
              <li>• Tag 7-14: Erste Vermehrung, eventuell leichtes Kribbeln</li>
              <li>• Tag 14-21: Juckreiz beginnt, erste Rötungen</li>
              <li>• Ab Tag 21: Typische Symptome voll ausgeprägt</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">So schützen Sie sich effektiv</h2>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">In öffentlichen Bereichen:</h3>
          <ol className="list-decimal pl-6 text-medical-600 space-y-2 mb-6">
            <li><strong>Badeschuhe tragen:</strong> Immer - auch unter der Dusche</li>
            <li><strong>Eigene Handtücher:</strong> Nie fremde Handtücher benutzen</li>
            <li><strong>Nach dem Duschen:</strong> Füße sofort abtrocknen, besonders zwischen den Zehen</li>
            <li><strong>Nicht barfuß:</strong> Auch nicht kurz mal</li>
            <li><strong>Schnell umziehen:</strong> Nasse Badesachen nicht lange anbehalten</li>
          </ol>

          <h3 className="text-xl font-semibold text-medical-800 mt-8 mb-4">Zu Hause:</h3>
          <ol className="list-decimal pl-6 text-medical-600 space-y-2 mb-6">
            <li>Eigene Handtücher und Badematten verwenden</li>
            <li>Handtücher bei 60°C waschen</li>
            <li>Füße täglich waschen und gut abtrocknen</li>
            <li>Keine fremden Schuhe tragen</li>
            <li>Bei Fußpilz in der Familie: Desinfektion verstärken</li>
          </ol>

          <h2 className="text-2xl font-semibold text-medical-800 mt-10 mb-5">Häufige Fragen zur Ansteckung</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Kann man sich im eigenen Bett anstecken?</h3>
              <p className="text-sm text-medical-600">
                Unwahrscheinlich. Bettwäsche wird regelmäßig gewechselt und Pilzsporen überleben dort nicht gut. Riskanter sind Teppiche und Badematten, wo man barfuß geht.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Ist Fußpilz über Socken übertragbar?</h3>
              <p className="text-sm text-medical-600">
                Ja, wenn man Socken einer infizierten Person trägt. Auch beim Waschen unter 60°C können Pilzsporen überleben. Deshalb: Keine Socken teilen, bei mindestens 60°C waschen.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold text-medical-800 mb-2">Wie lange bleibt man ansteckend?</h3>
              <p className="text-sm text-medical-600">
                Solange die Infektion besteht. Auch nach Beginn der Behandlung noch etwa 1-2 Wochen. Erst wenn die Pilze komplett abgetötet sind, endet die Ansteckungsgefahr.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg my-8 border border-gray-200">
            <h3 className="font-semibold text-medical-800 mb-3 text-sm">Medizinische Quellen</h3>
            <ul className="text-xs text-medical-600 space-y-1">
              <li>1. Robert Koch-Institut: Übertragungswege bei Dermatomykosen, 2024</li>
              <li>2. Deutsche Dermatologische Gesellschaft: Leitlinie Tinea pedis, 2023</li>
              <li>3. Centers for Disease Control (CDC): Athlete's Foot Transmission, 2024</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Informationen</h3>
            <ul className="space-y-2">
              <li><Link href="/wissen/fusspilz/vorbeugung" className="text-primary-600 hover:underline font-medium">→ Fußpilz Vorbeugung: Schutzmaßnahmen</Link></li>
              <li><Link href="/wissen/fusspilz/symptome" className="text-primary-600 hover:underline font-medium">→ Symptome früh erkennen</Link></li>
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
