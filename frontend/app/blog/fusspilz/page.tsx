import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußpilz Ratgeber & Tipps | Blog | PediZone.de',
  description: 'Alle Artikel rund um Fußpilz: Behandlung, Hausmittel, Vorbeugung und praktische Alltagstipps von Experten.',
  alternates: {
    canonical: 'https://pedizone.de/blog/fusspilz',
  },
}

const articles = [
  {
    slug: 'behandeln',
    title: 'Fußpilz behandeln: Was wirklich hilft',
    excerpt: 'Der komplette Guide: Welche Methoden funktionieren? Wie lange dauert es? Alle Fehler vermeiden.',
    readTime: '8 Min.',
    image: '/images/blog/behandeln-hero.webp',
  },
  {
    slug: 'hausmittel',
    title: 'Fußpilz Hausmittel: Was hilft wirklich?',
    excerpt: 'Bewährte Hausmittel gegen Fußpilz im Test - natürliche Methoden mit wissenschaftlicher Bewertung',
    readTime: '8 Min.',
    image: '/images/blog/hausmittel-1.webp',
  },
  {
    slug: 'creme',
    title: 'Die besten Fußpilz Cremes im Vergleich',
    excerpt: 'Antimykotische Cremes im Detail: Wirkstoffe, Anwendung und Kaufempfehlungen für jeden Bedarf',
    readTime: '10 Min.',
    image: '/images/blog/creme-1.webp',
  },
  {
    slug: 'ansteckend',
    title: 'Wie ansteckend ist Fußpilz wirklich?',
    excerpt: 'Ansteckungswege, Risikofaktoren und effektive Schutzmaßnahmen für Familie und Haushalt',
    readTime: '7 Min.',
    image: '/images/blog/ansteckend-1.webp',
  },
  {
    slug: 'dusche',
    title: 'Fußpilz in der Dusche vermeiden',
    excerpt: 'Richtige Hygiene im Badezimmer - praktische Tipps für die tägliche Routine',
    readTime: '6 Min.',
    image: '/images/blog/dusche-1.webp',
  },
  {
    slug: 'socken',
    title: 'Die richtigen Socken gegen Fußpilz',
    excerpt: 'Materialien, Passform und Pflege - wie Socken bei der Vorbeugung helfen können',
    readTime: '6 Min.',
    image: '/images/blog/socken-1.webp',
  },
  {
    slug: 'wie-lange',
    title: 'Wie lange dauert Fußpilz?',
    excerpt: 'Behandlungsdauer, Heilungsverlauf und Faktoren, die die Genesung beeinflussen',
    readTime: '7 Min.',
    image: '/images/blog/wie-lange-1.webp',
  },
  {
    slug: 'bilder',
    title: 'Fußpilz erkennen: Bilder und Symptome',
    excerpt: 'Visuelle Anleitung zur Erkennung verschiedener Fußpilz-Arten mit typischen Symptomen',
    readTime: '9 Min.',
    image: '/images/blog/bilder-1.webp',
  },
]

export default function FusspilzBlogCategory() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="text-primary-600 hover:underline">Startseite</Link></li>
            <li className="text-medical-400">/</li>
            <li><Link href="/blog" className="text-primary-600 hover:underline">Blog</Link></li>
            <li className="text-medical-400">/</li>
            <li className="text-medical-600">Fußpilz</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="text-4xl mb-4">🦠</div>
          <h1 className="text-4xl font-bold text-medical-800 mb-4">Fußpilz Ratgeber</h1>
          <p className="text-lg text-medical-600">
            Praktische Tipps, fundiertes Wissen und aktuelle Informationen rund um Fußpilz-Behandlung und -Vorbeugung.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/fusspilz/${article.slug}`}
              className="group bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-medical-50 to-primary-50">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs text-white/90 bg-black/30 px-2 py-1 rounded">🕒 {article.readTime}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-medical-600 text-sm">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Related Links */}
        <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
          <h3 className="font-semibold text-medical-800 mb-3">Weitere Informationen</h3>
          <div className="space-y-2 text-sm">
            <Link href="/wissen/fusspilz" className="block text-primary-600 hover:underline">
              → Fußpilz Wissensbereich
            </Link>
            <Link href="/wissen/fusspilz/behandlung" className="block text-primary-600 hover:underline">
              → Behandlungsmöglichkeiten
            </Link>
            <Link href="/wissen/fusspilz/vorbeugung" className="block text-primary-600 hover:underline">
              → Vorbeugung und Prävention
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
