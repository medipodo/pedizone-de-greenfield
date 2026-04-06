import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wie ansteckend ist Fußpilz? Übertragungswege & Schutz | PediZone.de',
  description: 'Fußpilz Ansteckung: Vom Schwimmbad bis zur Dusche zuhause. Erfahren Sie, wo die echten Risiken liegen und wie Sie sich wirksam schützen.',
  alternates: {
    canonical: 'https://pedizone.de/blog/fusspilz/ansteckend',
  },
}

export default function AnsteckendArtikel() {
  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2 flex-wrap">
            <li><Link href="/" className="text-primary-600 hover:underline">Startseite</Link></li>
            <li className="text-medical-400">/</li>
            <li><Link href="/blog" className="text-primary-600 hover:underline">Blog</Link></li>
            <li className="text-medical-400">/</li>
            <li><Link href="/blog/fusspilz" className="text-primary-600 hover:underline">Fußpilz</Link></li>
            <li className="text-medical-400">/</li>
            <li className="text-medical-600">Ansteckend</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-4">
          Wie ansteckend ist Fußpilz wirklich?
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-medical-600 mb-8">
          <span>📅 5. April 2026</span>
          <span>•</span>
          <span>🕒 7 Min. Lesezeit</span>
        </div>

        <div className="relative h-64 sm:h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image 
            src="/images/blog/ansteckend-1.webp"
            alt="Fußpilz Ansteckungsrisiko in öffentlichen Bereichen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-medical max-w-none">
          <p className="text-lg text-medical-700 leading-relaxed mb-6">
            Sie stehen barfuß in der Umkleidekabine. Ihr Partner benutzt dasselbe Handtuch. Die Kinder laufen ohne Badeschuhe durchs Schwimmbad. <strong>Wie hoch ist das Risiko wirklich?</strong> Die gute Nachricht: Fußpilz ist zwar ansteckend, aber nicht jeder Kontakt führt zur Infektion. Entscheidend ist, die echten Risikosituationen zu kennen.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Wo lauert die echte Gefahr?</h2>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Öffentliche Duschen: Das Klischee stimmt</h3>
          <p className="mb-4">
            Schwimmbäder, Fitnessstudios, Saunen – hier ist das Ansteckungsrisiko tatsächlich hoch. <strong>Warum?</strong> Pilzsporen überleben auf feuchten Böden bis zu mehrere Tage. Bei 30-40°C (typische Raumtemperatur in Umkleiden) vermehren sie sich ideal.
          </p>
          <p className="mb-4">
            <strong>Realität:</strong> Nach einer Studie aus 2023 tragen etwa 15% aller Personen in Fitnessstudios Pilzsporen an den Füßen – oft ohne Symptome. Das bedeutet: Jeder 6.-7. Nutzer hinterlässt Sporen auf dem Boden.
          </p>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Zuhause: Unterschätztes Risiko</h3>
          <p className="mb-4">
            Die eigene Dusche wird oft vernachlässigt. Hat ein Familienmitglied Fußpilz, liegt die Übertragungsrate im Haushalt bei 30-40%. <strong>Warum so hoch?</strong> Weil die Exposition täglich stattfindet und Hygienemaßnahmen im privaten Rahmen lockerer gehandhabt werden.
          </p>
          <p className="mb-4">
            Besonders tückisch: <strong>Badematten und Handtücher</strong>. Hier können Pilzsporen wochenlang überleben, wenn die Textilien nicht heiß gewaschen werden. Ein gemeinsam genutztes Badetuch ist praktisch eine Pilz-Autobahn zwischen Familienmitgliedern.
          </p>

          <div className="relative h-64 w-full my-8 rounded-xl overflow-hidden">
            <Image 
              src="/images/blog/ansteckend-2.webp"
              alt="Gemeinsame Handtuchnutzung erhöht Ansteckungsrisiko"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Schuhe und Socken: Langzeit-Reservoir</h3>
          <p className="mb-4">
            Hier wird es interessant: Pilzsporen überleben in getragenen Schuhen bis zu 12 Monate. Selbst nach erfolgreicher Behandlung können Sie sich aus Ihren eigenen Schuhen <strong>neu infizieren</strong>.
          </p>
          <p className="mb-4">
            Besonders bei Sportschuhen, die selten gewaschen werden. Das erklärt, warum viele Menschen berichten: "Der Pilz kommt immer wieder" – obwohl sie die <Link href="/blog/fusspilz/creme" className="text-primary-600 hover:underline">Creme korrekt angewendet</Link> haben.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Risikofaktoren: Wer ist besonders gefährdet?</h2>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-3">⚠️ Erhöhtes Risiko bei:</h3>
            <ul className="space-y-2 text-medical-700">
              <li>🏃 <strong>Sportlern:</strong> Schwitzende Füße in geschlossenen Schuhen – ideales Pilzmilieu</li>
              <li>👴 <strong>Älteren Menschen:</strong> Verlangsamte Hauterneuerung, oft trockenere Haut mit Rissen</li>
              <li>💉 <strong>Diabetikern:</strong> Durchblutungsstörungen + geschwächte Immunabwehr in den Füßen</li>
              <li>💊 <strong>Immunsuppression:</strong> Nach Transplantationen oder bei Chemotherapie</li>
              <li>🦶 <strong>Fußfehlstellungen:</strong> Engstehende Zehen schaffen feucht-warme Nischen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Praxisnahe Schutzmaßnahmen</h2>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Im Schwimmbad & Fitnessstudio</h3>
          <div className="bg-blue-50 p-6 my-6 rounded-xl">
            <ul className="space-y-3 text-medical-700">
              <li>✓ <strong>Badeschuhe:</strong> Nicht nur in der Dusche – auch auf dem Weg dorthin</li>
              <li>✓ <strong>Eigenes Handtuch:</strong> Für Füße separates Handtuch verwenden</li>
              <li>✓ <strong>Sofort trocknen:</strong> Zehen einzeln abtrocknen, nicht nur drüberwischen</li>
              <li>✓ <strong>Desinfektionsspray:</strong> Nach dem Sport Füße + Schuhe einsprühen (gibt's an vielen Theken)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">Zu Hause: Wenn jemand betroffen ist</h3>
          <div className="bg-green-50 p-6 my-6 rounded-xl">
            <ul className="space-y-3 text-medical-700">
              <li>🧴 <strong>Separate Handtücher:</strong> Jeder hat sein eigenes – keine Ausnahmen</li>
              <li>🧺 <strong>60°C-Wäsche:</strong> Handtücher, Bettwäsche, Socken – bei niedrigeren Temperaturen überleben Sporen</li>
              <li>🧹 <strong>Duschboden desinfizieren:</strong> 1x wöchentlich mit chlorhaltigem Reiniger (z.B. DanKlorix)</li>
              <li>👟 <strong>Schuhe behandeln:</strong> Antimykotisches Spray oder UV-Schuhtrockner verwenden</li>
              <li>🚪 <strong>Badematten täglich wechseln:</strong> Nicht wochenlang dieselbe Matte nutzen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Die 24-Stunden-Regel</h2>
          <p className="mb-4">
            Hier eine beruhigende Tatsache: Pilzsporen brauchen Zeit, um in die Haut einzudringen – typischerweise <strong>12-24 Stunden</strong>. Das bedeutet: Wenn Sie nach dem Schwimmbad zügig duschen und die Füße gründlich trocknen, ist das Risiko minimal.
          </p>
          <p className="mb-4">
            Problem entsteht bei: Schweißnassen Füßen in Schuhen über Stunden (z.B. nach dem Sport), feuchten Zehenzwischenräumen über Nacht, oder wenn bereits kleine Hautverletzungen vorliegen.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Mythen vs. Realität</h2>

          <div className="space-y-4 my-6">
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <p className="font-semibold text-medical-800 mb-2">❌ Mythos: "Einmal barfuß = sofort Fußpilz"</p>
              <p className="text-sm text-medical-600">
                <strong>Realität:</strong> Eine kurze Exposition führt selten zur Infektion. Entscheidend sind Dauer + Feuchtigkeit + individuelle Anfälligkeit.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <p className="font-semibold text-medical-800 mb-2">❌ Mythos: "Fußpilz verschwindet, wenn man Schuhe nicht mehr teilt"</p>
              <p className="text-sm text-medical-600">
                <strong>Realität:</strong> Ohne aktive Behandlung heilt Fußpilz nicht ab – er kann nur nicht mehr weitergegeben werden.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="font-semibold text-medical-800 mb-2">✓ Fakt: "Trockene Füße = beste Prävention"</p>
              <p className="text-sm text-medical-600">
                Pilze brauchen Feuchtigkeit. Wer seine Füße konsequent trocken hält (auch zwischen den Zehen!), reduziert das Risiko um 70-80%.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Häufige Fragen zur Ansteckung</h2>

          <div className="space-y-4 my-6">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Kann ich Fußpilz über Teppiche oder Teppichböden bekommen?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Ja, aber das Risiko ist geringer als bei Fliesen oder Duschen. Pilzsporen können in Teppichen überleben, aber die meisten modernen Staubsauger mit HEPA-Filter entfernen sie effektiv. In Hotels empfiehlt sich: Barfußlaufen vermeiden, besonders in Badezimmern mit Teppichauslegung.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Sind Menschen mit Fußpilz ihr ganzes Leben lang ansteckend?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Nein. Nach erfolgreicher Behandlung (siehe <Link href="/blog/fusspilz/wie-lange" className="text-primary-600 hover:underline">Behandlungsdauer</Link>) und etwa 2 Wochen symptomfreier Zeit ist die Person nicht mehr ansteckend. Wichtig: Schuhe parallel behandeln, sonst Reinfektion möglich.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Können Haustiere Fußpilz übertragen?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Theoretisch ja, praktisch extrem selten. Hunde und Katzen haben andere Hautpilz-Arten (z.B. Microsporum canis). Die für Fußpilz verantwortlichen Dermatophyten (meist Trichophyton rubrum) befallen fast ausschließlich Menschen. Ausnahme: Sehr seltene Fälle bei immungeschwächten Haustieren.
              </p>
            </details>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Fazit: Vernünftige Vorsicht statt Panik</h2>

          <p className="mb-4">
            Fußpilz ist ansteckend – aber mit realistischen Maßnahmen gut kontrollierbar. Die wichtigsten Punkte: <strong>Füße trocken halten, eigene Handtücher nutzen, Badeschuhe in öffentlichen Bereichen.</strong> Zu Hause bei aktivem Befall: Strikte Hygiene für 4-6 Wochen, dann ist das Thema meist durch.
          </p>

          <p className="mb-4">
            Übertriebene Ängste (nie wieder barfuß laufen!) sind unbegründet. Aber: Wer die echten Risikosituationen kennt und dort konsequent handelt, kann Neuinfektionen weitgehend verhindern. Die <Link href="/blog/fusspilz/dusche" className="text-primary-600 hover:underline">richtige Dusch-Routine</Link> und passende <Link href="/blog/fusspilz/socken" className="text-primary-600 hover:underline">Socken-Wahl</Link> machen den größten Unterschied.
          </p>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Artikel</h3>
            <div className="space-y-2 text-sm">
              <Link href="/blog/fusspilz/dusche" className="block text-primary-600 hover:underline">
                → Fußpilz in der Dusche vermeiden
              </Link>
              <Link href="/blog/fusspilz/socken" className="block text-primary-600 hover:underline">
                → Die richtigen Socken gegen Fußpilz
              </Link>
              <Link href="/wissen/fusspilz/vorbeugung" className="block text-primary-600 hover:underline">
                → Fußpilz vorbeugen: Alle Maßnahmen
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-8 rounded-r-lg">
            <p className="text-medical-700 text-sm">
              <strong>Medizinischer Hinweis:</strong> Dieser Artikel ersetzt keine ärztliche Beratung. Bei Unsicherheiten oder anhaltendem Fußpilz konsultieren Sie einen Dermatologen.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
