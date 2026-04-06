import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz in der Dusche vermeiden: Praktische Hygiene-Routine | PediZone.de',
  description: 'Die Dusche ist Risikofaktor Nr. 1 für Fußpilz im eigenen Zuhause. Mit der richtigen Routine schützen Sie sich und Ihre Familie effektiv.',
  alternates: {
    canonical: 'https://pedizone.de/blog/fusspilz/dusche',
  },
}

export default function DuscheArtikel() {
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
            <li className="text-medical-600">Dusche</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-medical-800 mb-4">
          Fußpilz in der Dusche vermeiden
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-medical-600 mb-8">
          <span>📅 5. April 2026</span>
          <span>•</span>
          <span>🕒 6 Min. Lesezeit</span>
        </div>

        <div className="relative h-64 sm:h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image 
            src="/images/blog/dusche-1.webp"
            alt="Badeschuhe in der Dusche zur Fußpilz-Prävention"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-medical max-w-none">
          <p className="text-lg text-medical-700 leading-relaxed mb-6">
            Ihre Dusche ist kein steriler OP-Saal – und das muss sie auch nicht sein. Aber bei Fußpilz wird sie schnell zur Wiederansteckungsquelle. Das Problem: Die Kombination aus Feuchtigkeit, Wärme und Hautschuppen schafft ideale Bedingungen für Pilzsporen. Die gute Nachricht: Mit ein paar gezielten Änderungen in Ihrer Routine minimieren Sie das Risiko drastisch.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Warum die Dusche zum Problem wird</h2>

          <p className="mb-4">
            Fußpilz-Sporen lieben feuchte Oberflächen. Nach dem Duschen bleiben winzige Hautschuppen auf dem Boden zurück – manche davon mit Pilzsporen beladen. Bei der nächsten Dusche betreten Sie diese Fläche barfuß, die Haut ist durch warmes Wasser aufgeweicht, und Sporen dringen leichter ein.
          </p>

          <p className="mb-4">
            <strong>Der Teufelskreis:</strong> Jemand im Haushalt hat Fußpilz → duscht → hinterlässt Sporen → nächste Person duscht → infiziert sich möglicherweise → hinterlässt noch mehr Sporen. So erklärt sich, warum Fußpilz in Familien oft "kreist".
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Die 3-Punkte-Routine: Vorher, Während, Nachher</h2>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">VOR dem Duschen</h3>
          
          <div className="bg-blue-50 p-6 my-6 rounded-xl border border-blue-200">
            <p className="font-semibold text-medical-800 mb-3">1. Badeschuhe griffbereit?</p>
            <p className="text-medical-700 text-sm mb-4">
              Viele denken: "Badeschuhe sind nur für Schwimmbäder". Falsch. In der eigenen Dusche sind sie genauso sinnvoll – besonders wenn jemand im Haushalt aktuell Fußpilz hat oder hatte.
            </p>
            <p className="text-medical-700 text-sm">
              <strong>Praxis-Tipp:</strong> Billige Plastik-Flipflops (5-10€) reichen völlig. Nach dem Duschen mit dem Wasserstrahl abspülen und außerhalb der Duschkabine trocknen lassen.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">WÄHREND des Duschens</h3>

          <p className="mb-4">
            Hier geht es nicht um komplizierte Rituale, sondern um zwei einfache Dinge:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 bg-white rounded-lg border-l-4 border-primary-500">
              <p className="font-semibold text-medical-800 mb-2">Füße zuletzt waschen</p>
              <p className="text-sm text-medical-600">
                Nicht zuerst die Füße, dann den Körper – sondern umgekehrt. Grund: Sie vermeiden, dass Pilzsporen von den Füßen mit den Händen auf andere Körperteile übertragen werden. Klingt paranoid? Ist aber bei aktivem Fußpilz sinnvoll.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border-l-4 border-primary-500">
              <p className="font-semibold text-medical-800 mb-2">Separate Seife/Duschgel</p>
              <p className="text-sm text-medical-600">
                Feste Seifenstücke können Sporen übertragen. Besser: Flüssigseife aus dem Spender oder ein separates Duschgel nur für die Füße. Übertrieben? Vielleicht. Aber wenn Sie seit Monaten gegen wiederkehrenden Fußpilz kämpfen, probieren Sie es aus.
              </p>
            </div>
          </div>

          <div className="relative h-64 w-full my-8 rounded-xl overflow-hidden">
            <Image 
              src="/images/blog/dusche-2.webp"
              alt="Füße richtig abtrocknen nach dem Duschen"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-medical-800 mt-6 mb-3">NACH dem Duschen – Der kritische Moment</h3>

          <p className="mb-4">
            Hier entscheidet sich, ob Ihre Dusche zum Hygiene-Problem wird oder nicht. <strong>Die zwei häufigsten Fehler:</strong>
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <p className="font-semibold text-medical-800 mb-3">❌ Fehler 1: Füße nur "überwischen"</p>
            <p className="text-medical-700 text-sm mb-4">
              Viele Menschen trocknen ihre Füße, indem sie kurz mit dem Handtuch drüberwischen. Das Problem: Die Zehenzwischenräume bleiben feucht. Genau dort siedelt sich Fußpilz am liebsten an.
            </p>
            <p className="font-semibold text-medical-800 mb-3">✓ Richtig:</p>
            <p className="text-medical-700 text-sm">
              Jeden Zehenzwischenraum einzeln mit einem Zipfel des Handtuchs trockenreiben. Ja, das dauert 30 Sekunden länger. Aber es ist der wichtigste Schritt überhaupt.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
            <p className="font-semibold text-medical-800 mb-3">❌ Fehler 2: Dasselbe Handtuch mehrfach nutzen</p>
            <p className="text-medical-700 text-sm mb-4">
              Ein feuchtes Handtuch nach dem Duschen aufhängen und am nächsten Tag nochmal benutzen? Bei Fußpilz keine gute Idee. Sporen überleben auf feuchten Textilien problemlos 24-48 Stunden.
            </p>
            <p className="font-semibold text-medical-800 mb-3">✓ Richtig:</p>
            <p className="text-medical-700 text-sm">
              Täglich frische Handtücher – zumindest für die Füße. Wer nicht jeden Tag Handtücher waschen will: Nutzen Sie ein kleines separates Handtuch nur für die Füße (z.B. Gästehandtuch).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Duschkabine reinigen: Wie oft ist wirklich nötig?</h2>

          <p className="mb-4">
            Hier die unbequeme Wahrheit: Bei aktivem Fußpilz im Haushalt sollten Sie die Dusche <strong>wöchentlich desinfizieren</strong>. Nicht nur putzen – desinfizieren.
          </p>

          <div className="bg-green-50 p-6 my-6 rounded-xl border border-green-200">
            <h3 className="font-semibold text-medical-800 mb-3">Reinigungs-Protokoll (1x pro Woche):</h3>
            <ol className="space-y-3 text-medical-700 list-decimal list-inside">
              <li><strong>Grobschmutz entfernen:</strong> Normaler Badreiniger, Boden und Wände abwischen</li>
              <li><strong>Desinfektionsmittel auftragen:</strong> Chlorhaltige Reiniger (z.B. DanKlorix verdünnt 1:10) oder spezieller Schimmel-/Pilzentferner</li>
              <li><strong>Einwirken lassen:</strong> 10-15 Minuten – nicht sofort abspülen!</li>
              <li><strong>Gründlich abspülen:</strong> Mit klarem Wasser, besonders in Ecken und Fugen</li>
              <li><strong>Trockenwischen:</strong> Mit einem alten Handtuch nachwischen (reduziert Restfeuchtigkeit)</li>
            </ol>
          </div>

          <p className="mb-4">
            <strong>Wichtig:</strong> Duschvorhänge sind Pilz-Magnete. Wenn möglich: Glaswand nutzen. Falls Vorhang: Alle 2-3 Monate austauschen oder bei 60°C waschen.
          </p>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Badematten: Der übersehene Risikofaktor</h2>

          <p className="mb-4">
            Sie steigen aus der Dusche, treten auf die Badematte – und übertragen Sporen. Am nächsten Tag macht das die nächste Person. Badematten sind praktisch Pilz-Sammelbecken.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
            <h3 className="font-semibold text-medical-800 mb-3">Badematte-Regel:</h3>
            <ul className="space-y-2 text-medical-700">
              <li>✓ <strong>Täglich wechseln</strong> bei aktivem Fußpilz im Haushalt</li>
              <li>✓ <strong>2-3x pro Woche wechseln</strong> als Prävention</li>
              <li>✓ <strong>Bei 60°C waschen</strong> – niedrigere Temperaturen töten Pilzsporen nicht ab</li>
              <li>✓ <strong>Alternative:</strong> Schnelltrocknende Mikrofaser-Matten (trocknen in 2-3 Stunden)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Checkliste: Dusch-Hygiene auf einen Blick</h2>

          <div className="bg-blue-50 p-6 my-6 rounded-xl border-2 border-blue-300">
            <h3 className="font-semibold text-medical-800 mb-4">Tägliche Routine:</h3>
            <ul className="space-y-2 text-medical-700">
              <li>☐ Badeschuhe in der Dusche tragen (besonders bei Fußpilz-Risiko)</li>
              <li>☐ Füße als letztes waschen</li>
              <li>☐ Zehenzwischenräume einzeln abtrocknen</li>
              <li>☐ Frisches Handtuch für die Füße verwenden</li>
              <li>☐ Badematte wechseln (bei aktivem Befall)</li>
            </ul>
            
            <h3 className="font-semibold text-medical-800 mb-4 mt-6">Wöchentlich:</h3>
            <ul className="space-y-2 text-medical-700">
              <li>☐ Duschboden und -wände desinfizieren</li>
              <li>☐ Badeschuhe mit Essigwasser reinigen</li>
              <li>☐ Duschvorhang auf Schimmel/Verfärbungen prüfen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Häufige Fragen zur Dusch-Hygiene</h2>

          <div className="space-y-4 my-6">
            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Reicht normales Putzen oder muss ich wirklich desinfizieren?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Normales Putzen entfernt Schmutz, aber nicht alle Pilzsporen. Bei aktivem Fußpilz im Haushalt ist Desinfektion sinnvoll – zumindest wöchentlich. Außerhalb von Ausbrüchen reicht gründliches Putzen mit normalem Badreiniger meist aus, solange die Dusche danach gut trocknet.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Kann ich Essig statt Chlorreiniger verwenden?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Essig hat antimykotische Eigenschaften, ist aber schwächer als chlorhaltige Mittel. Kompromiss: Wöchentlich Chlorreiniger, dazwischen 1-2x mit Essigwasser (1:1 verdünnt) nachwischen. Vorteil Essig: Schonender für Fugen und Armaturen, weniger chemischer Geruch.
              </p>
            </details>

            <details className="group bg-white p-6 rounded-xl shadow-sm border border-medical-100">
              <summary className="font-semibold text-medical-800 cursor-pointer flex justify-between items-center">
                Wie lange nach Fußpilz-Behandlung muss ich extra-hygienisch sein?
                <svg className="w-5 h-5 text-medical-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-medical-600 text-sm">
                Rechnen Sie mit 4-6 Wochen ab Behandlungsbeginn. Auch wenn Symptome früher verschwinden, können Sporen noch in der Umgebung vorhanden sein. Nach dieser Zeit können Sie zur normalen Hygiene-Routine zurückkehren – aber behalten Sie die guten Gewohnheiten bei (Füße gut abtrocknen etc.). Mehr zur <Link href="/blog/fusspilz/wie-lange" className="text-primary-600 hover:underline">Behandlungsdauer hier</Link>.
              </p>
            </details>
          </div>

          <h2 className="text-2xl font-bold text-medical-800 mt-8 mb-4">Fazit: Kleine Änderungen, große Wirkung</h2>

          <p className="mb-4">
            Die meisten Dusch-Hygiene-Maßnahmen gegen Fußpilz sind weder kompliziert noch teuer. <strong>Die drei wichtigsten Punkte:</strong> Füße gründlich abtrocknen (besonders zwischen den Zehen), täglich frische Handtücher, und bei aktivem Befall wöchentlich desinfizieren.
          </p>

          <p className="mb-4">
            Das klingt nach Aufwand? Vergleichen Sie es mit monatelangem Kampf gegen wiederkehrenden Fußpilz. Die 5 Minuten extra pro Woche lohnen sich. Kombinieren Sie die Dusch-Hygiene mit der richtigen <Link href="/blog/fusspilz/socken" className="text-primary-600 hover:underline">Socken-Wahl</Link> und passender <Link href="/blog/fusspilz/creme" className="text-primary-600 hover:underline">Behandlung</Link>, und Fußpilz wird zum lösbaren Problem.
          </p>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="font-semibold text-medical-800 mb-3">Weiterführende Artikel</h3>
            <div className="space-y-2 text-sm">
              <Link href="/blog/fusspilz/ansteckend" className="block text-primary-600 hover:underline">
                → Wie ansteckend ist Fußpilz wirklich?
              </Link>
              <Link href="/blog/fusspilz/socken" className="block text-primary-600 hover:underline">
                → Die richtigen Socken gegen Fußpilz
              </Link>
              <Link href="/wissen/fusspilz/vorbeugung" className="block text-primary-600 hover:underline">
                → Fußpilz vorbeugen: Kompletter Leitfaden
              </Link>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-8 rounded-r-lg">
            <p className="text-medical-700 text-sm">
              <strong>Medizinischer Hinweis:</strong> Diese Hygiene-Tipps ersetzen keine medizinische Behandlung bei aktivem Fußpilz. Konsultieren Sie bei anhaltenden Beschwerden einen Dermatologen.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
