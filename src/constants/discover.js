import awardsImg from '../assets/img/life-at-rainbow/awards.webp'
import amenitiesImg from '../assets/img/life-at-rainbow/amenities.jpg'
import studentAchievementsImg from '../assets/img/life-at-rainbow/student-achievements.webp'
import safetySecurityImg from '../assets/img/life-at-rainbow/safety-security.webp'

export const DISCOVER_CARDS = [
  {
    title: 'Awards & Accomplishments',
    description:
      'Accolades earned for being one of the best and most promising international schools in Thane for over a decade.',
    badge: 'Recognition',
    href: '/awards-achievements',
    image: awardsImg,
  },
  {
    title: 'Amenities & Facilities',
    description:
      'Globally recognised resources and state-of-the-art facilities on our beautiful 3.5-acre campus.',
    badge: 'Campus',
    href: '/amenities',
    image: amenitiesImg,
  },
  {
    title: 'Student Achievements',
    description:
      'Student accomplishments are acknowledged and honored. Here you can view our best achievers.',
    badge: 'Excellence',
    href: '/student-achievements',
    image: studentAchievementsImg,
  },
  {
    title: 'Safety & Security',
    description:
      'Student safety and well-being is our top priority, safeguarded through stringent modern security measures.',
    badge: 'Wellbeing',
    href: '/safety-security',
    image: safetySecurityImg,
  },
]
