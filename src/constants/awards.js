import campusOverview from '../assets/img/photo-gallery/main-new-infra.jpg'
import campusLife from '../assets/img/photo-gallery/part-10.jpg'
import campusSports from '../assets/img/photo-gallery/part-1.jpg'
import excellenceImg from '../assets/img/center-of-excellence/image-vv-1.jpg'
import learningImg from '../assets/img/center-of-excellence/image-vv-6.jpg'
import campusBanner from '../assets/img/infrastructure/infra-banner-1.jpg'

export const AWARDS_ABOUT_PARAGRAPHS = [
  'The Vasant Valley Centre for Excellence in Education, Vasant Valley School (CEE@VVS) was born out of the experience and expertise we have gained over the last thirty-six years of running Vasant Valley School.',
  'Vasant Valley School has consistently been ranked as one of the top co-educational day schools in India and Delhi/NCR over the last 15 years, frequently securing the No. 1 or No. 2 position in prominent rankings.',
  "Today Vasant Valley School is recognised as an 'Institution of Excellence' in the field of school education in India and we rely on this wide knowledge and experience of running one of the best schools in the country.",
]

const RAW_AWARDS_COLUMN_UP = [
  {
    alt: 'Vasant Valley School campus overview',
    src: campusOverview,
  },
  {
    alt: 'Centre of excellence at Vasant Valley School',
    src: excellenceImg,
  },
  {
    alt: 'Campus life at Vasant Valley School',
    src: campusLife,
  },
]

const RAW_AWARDS_COLUMN_DOWN = [
  {
    alt: 'Vasant Valley School infrastructure',
    src: campusBanner,
  },
  {
    alt: 'Learning spaces at Vasant Valley School',
    src: learningImg,
  },
  {
    alt: 'Students at Vasant Valley School',
    src: campusSports,
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
      'Won awards in the following categories:\n1) Innovation in Campus Infrastructure - Vasant Valley School\n2) Profound Technology usage in Early Childhood Teaching - Vasant Valley School.',
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
