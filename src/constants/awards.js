import indiaToday from '../assets/img/awards-logo/india-today.webp'
import nsaAward from '../assets/img/awards-logo/nsa-award.webp'
import wesMumbai from '../assets/img/awards-logo/wes-mumbai.webp'
import economicTimes from '../assets/img/awards-logo/economic-times.webp'
import scoonews from '../assets/img/awards-logo/scoonews.webp'
import tmcLogo from '../assets/img/awards-logo/tmc-logo.webp'

const RAW_AWARDS_COLUMN_UP = [
  {
    alt: 'India Today Award',
    href: 'https://www.indiatoday.in/',
    src: indiaToday,
  },
  {
    alt: 'National School Awards',
    href: 'https://nationalschoolawards.in/',
    src: nsaAward,
  },
  {
    alt: 'World Education Summit',
    href: 'https://wes.eletsonline.com/',
    src: wesMumbai,
  },
]

const RAW_AWARDS_COLUMN_DOWN = [
  {
    alt: 'Economic Times',
    href: 'https://economictimes.indiatimes.com/',
    src: economicTimes,
  },
  {
    alt: 'Scoo News',
    href: 'https://scoonews.com/',
    src: scoonews,
  },
  {
    alt: 'Thane Municipal Corp',
    href: 'https://thanecity.gov.in/tmc/',
    src: tmcLogo,
  },
]

function withValidLogos(awards) {
  return awards.filter((award) => Boolean(award.src))
}

export const AWARDS_COLUMN_UP = withValidLogos(RAW_AWARDS_COLUMN_UP)
export const AWARDS_COLUMN_DOWN = withValidLogos(RAW_AWARDS_COLUMN_DOWN)
export const HAS_AWARD_LOGOS =
  AWARDS_COLUMN_UP.length > 0 || AWARDS_COLUMN_DOWN.length > 0

export const ACHIEVEMENT_CARDS = [
  {
    title: '15th World Education Summit in Mumbai!',
    description:
      'Won awards in the following categories:\n1) Innovation in Campus Infrastructure – Vasant Valley School\n2) Profound Technology usage in Early Childhood Teaching – Vasant Valley School.',
  },
  {
    title: 'Featured in Knowledge Review Magazine',
    description:
      "Yet another Milestone achieved by Vasant Valley School. It's a proud moment for Vasant Valley School to be featured among notable institutions in The Knowledge Review Magazine.",
  },
  {
    title: "100% Result: Vasant Valley School's First Batch (2018-19)",
    description:
      '100% Result: The Times Of India At Vasant Valley School, we feel really proud to announce 100% Result of our 10th standard students for the academic year 2018-19. As per The Times Of India, Vasant Valley School.',
  },
  {
    title: 'Best School Recognition',
    description:
      "Vasant Valley School has been recognized for excellence. It gives us a great sense of pride that Vasant Valley School has been awarded a prestigious recognition.",
  },
  {
    title: 'Vasant Valley School Wins Award For Excellence',
    description:
      "It gives us immense pleasure to announce that we were awarded recognition for excellence in education by India Today on Saturday, 7th October 2017.",
  },
  {
    title: 'We are a FIT INDIA School',
    description:
      'FIT INDIA Certificate of Recognition. Vasant Valley School is proud to announce that our declaration has been approved by the Ministry of Youth Affairs and Sports and we are a FIT INDIA School!',
  },
]



