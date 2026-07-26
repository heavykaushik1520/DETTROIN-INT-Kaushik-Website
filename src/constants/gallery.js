import basketball from '../assets/img/photo-gallery/basketball.jpg'
import choirUniform from '../assets/img/photo-gallery/choir-uniform.jpg'
import cricketGround from '../assets/img/photo-gallery/cricket-ground.jpg'
import eLearning from '../assets/img/photo-gallery/e-learning-classrooms.jpg'
import mathsLab from '../assets/img/photo-gallery/maths-science-lab.jpg'
import primaryWalking from '../assets/img/photo-gallery/primary-walking.png'
import readingRoom from '../assets/img/photo-gallery/reading-room.jpg'
import schoolLibrary from '../assets/img/photo-gallery/school-library.jpg'
import storageFacility from '../assets/img/photo-gallery/storage-facility.jpg'
import studentAnchors from '../assets/img/photo-gallery/student-anchors.jpg'
import swimmingPool from '../assets/img/photo-gallery/swimming-pool.jpg'

export const GALLERY_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'sports', label: 'Sports' },
  { id: 'academics', label: 'Academics' },
  { id: 'campus', label: 'Campus' },
  { id: 'life', label: 'Student Life' },
]

export const GALLERY_PHOTOS = [
  {
    id: 'swimming-pool',
    src: swimmingPool,
    title: 'Olympic Spirit',
    caption: 'Students training in our on-campus swimming pool',
    category: 'sports',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'basketball',
    src: basketball,
    title: 'Court Action',
    caption: 'Basketball sessions that build teamwork and grit',
    category: 'sports',
    span: '',
  },
  {
    id: 'cricket-ground',
    src: cricketGround,
    title: 'Cricket Ground',
    caption: 'Open turf for matches, practice and house competitions',
    category: 'sports',
    span: '',
  },
  {
    id: 'e-learning',
    src: eLearning,
    title: 'Smart Classrooms',
    caption: 'Interactive e-learning spaces for modern pedagogy',
    category: 'academics',
    span: 'lg:col-span-2',
  },
  {
    id: 'maths-lab',
    src: mathsLab,
    title: 'Maths & Science Lab',
    caption: 'Hands-on discovery that makes STEM come alive',
    category: 'academics',
    span: '',
  },
  {
    id: 'school-library',
    src: schoolLibrary,
    title: 'School Library',
    caption: 'A quiet haven for curious minds and lifelong readers',
    category: 'campus',
    span: '',
  },
  {
    id: 'reading-room',
    src: readingRoom,
    title: 'Reading Room',
    caption: 'Focused spaces designed for deep learning',
    category: 'academics',
    span: '',
  },
  {
    id: 'student-anchors',
    src: studentAnchors,
    title: 'Student Anchors',
    caption: 'Confidence on camera — media and communication skills',
    category: 'life',
    span: 'md:col-span-2',
  },
  {
    id: 'choir-uniform',
    src: choirUniform,
    title: 'Choir Ensemble',
    caption: 'Music, harmony and stage presence in full bloom',
    category: 'life',
    span: '',
  },
  {
    id: 'primary-walking',
    src: primaryWalking,
    title: 'Primary Moments',
    caption: 'Everyday joy across our vibrant primary wing',
    category: 'life',
    span: '',
  },
  {
    id: 'storage-facility',
    src: storageFacility,
    title: 'Campus Facilities',
    caption: 'Well-planned infrastructure supporting school life',
    category: 'campus',
    span: 'lg:col-span-2',
  },
]
