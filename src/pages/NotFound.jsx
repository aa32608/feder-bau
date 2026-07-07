import { Link } from 'react-router-dom'
import { PageHero } from '../components/UI'
import { useLanguage } from '../context/LanguageContext'

const labels = {
  sq: {
    title: 'Faqja nuk u gjet',
    text: 'Faqja që po kërkoni nuk ekziston. Kthehuni në faqen kryesore.',
    back: 'Kthehu te Kreu',
  },
  mk: {
    title: 'Страницата не е пронајдена',
    text: 'Страницата што ја барате не постои. Вратете се на почетната страница.',
    back: 'Назад на почетна',
  },
  en: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist. Return to the home page.',
    back: 'Back to Home',
  },
}

export default function NotFound() {
  const { language } = useLanguage()
  const copy = labels[language] || labels.en

  return (
    <>
      <PageHero
        eyebrow="404"
        title={copy.title}
        text={copy.text}
      />
      <section className="section" style={{textAlign:'center', paddingTop:0}}>
        <Link to="/" className="button primary">{copy.back} →</Link>
      </section>
    </>
  )
}
