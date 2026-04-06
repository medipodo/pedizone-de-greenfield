import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fußgesundheit Blog - Tipps & Ratgeber | PediZone.de',
  description: 'Aktuelle Artikel, Tipps und Ratgeber rund um Fußgesundheit, Fußpilz-Behandlung und Prävention. Expertenwissen verständlich erklärt.',
  alternates: {
    canonical: 'https://pedizone.de/blog',
  },
}

const blogCategories = [
  {
    slug: 'fusspilz',
    title: 'Fußpilz',
    description: 'Umfassende Ratgeber zu Behandlung, Vorbeugung und allem rund um Fußpilz',
    articleCount: 7,
    icon: '🦠',
  },
]

const latestArticles = [
  {
    category: 'fusspilz',
    slug: 'hausmittel',
    title: 'Fußpilz Hausmittel: Was hilft wirklich?',
    excerpt: 'Entdecken Sie bewährte Hausmittel gegen Fußpilz und erfahren Sie, welche natürlichen Methoden wissenschaftlich belegt sind.',
    image: '/images/blog/hausmittel-1.webp',
  },
  {
    category: 'fusspilz',
    slug: 'creme',
    title: 'Die besten Fußpilz Cremes im Vergleich',
    excerpt: 'Ausführlicher Vergleich der wirksamsten antimykotischen Cremes mit Wirkstoffen, Anwendung und Kaufempfehlungen.',
    image: '/images/blog/creme-1.webp',
  },
  {
    category: 'fusspilz',
    slug: 'ansteckend',
    title: 'Wie ansteckend ist Fußpilz wirklich?',
    excerpt: 'Alles über Ansteckungswege, Übertragungsrisiken und wie Sie sich und andere schützen können.',
    image: '/images/blog/ansteckend-1.webp',
  },
  {
    category: 'fusspilz',
    slug: 'dusche',
    title: 'Fußpilz in der Dusche vermeiden',
    excerpt: 'Praktische Tipps für die richtige Dusch-Hygiene und wie Sie Fußpilz im Badezimmer vorbeugen.',
    image: '/images/blog/dusche-1.webp',
  },
]

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-medical-800 mb-4">Fußgesundheit Blog</h1>
          <p className="text-lg text-medical-600 max-w-2xl mx-auto">
            Aktuelle Artikel, praktische Tipps und fundiertes Wissen rund um Fußgesundheit
          </p>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-medical-800 mb-6">Kategorien</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="group p-6 bg-white border-2 border-medical-100 rounded-xl hover:border-primary-400 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-medical-600 mb-3">{category.description}</p>
                <p className="text-xs text-medical-500">{category.articleCount} Artikel</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section>
          <h2 className="text-2xl font-bold text-medical-800 mb-6">Neueste Artikel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.category}/${article.slug}`}
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
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      Fußpilz
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-medical-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-medical-600">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
