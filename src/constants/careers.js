export const CAREERS_CONTACT = {
  school: 'Vasant Valley School',
  address: 'Sector C, Vasant Kunj, New Delhi - 110070, India',
  mapUrl:
    'https://www.google.co.in/maps/place/Vasant+Valley+School/@28.5334421,77.1420857,17z',
  phones: [
    { label: '+91 11 41767940', href: 'tel:+911141767940' },
    { label: '26892787', href: 'tel:+911126892787' },
    { label: '26896547', href: 'tel:+911126896547' },
  ],
  email: 'careers@vasantvalley.edu.in',
}

export const CAREERS_INTRO =
  'In keeping with the school’s motto of “Excellence in Deed”, Vasant Valley believes in providing education in its finest form. ‘Learning never stops’ – this has been the watermark for all staff at Vasant Valley School. We are regularly looking for exemplary educators with a strong sense of commitment to join the Vasant Valley School family and play an active role as a professional, a specialist and a mentor to our students.'

export const CAREERS_GUIDELINES = [
  'You are requested to fill in the online application form to apply.',
  'On submitting the application form, you will receive an email confirmation on the Email ID specified by you in the application form.',
]

export const SPECIALISATION_OPTIONS = [
  'English',
  'Hindi',
  'Sanskrit',
  'Mathematics',
  'Biology',
  'Chemistry',
  'Physics',
  'Life Science (Class 3 to 5)',
  'History',
  'Geography',
  'Economics',
  'Political Science',
  'Sociology',
  'Psychology',
  'Accountancy',
  'Business Studies',
  'Engineering Drawing',
  'Computer Science',
  'Home Science',
  'Occupational Therapist',
  'Physical Education',
  'Applied Art',
  'Painting',
  'Pottery',
  'Sculpture',
  'Guitar',
  'Sitar',
  'Indian Vocal Music',
  'Tabla',
  'Drums',
  'Western Vocal',
  'Indian Dance',
  'Western Dance',
  'Drama',
  'Special Educator',
  'Language Therapist',
  'Speech Therapist',
]

export const TITLE_OPTIONS = ['Ms.', 'Mr.', 'Dr.']

export const BOARD_OPTIONS = ['CBSE', 'IGCSE', 'Both']

export const YEAR_GROUP_OPTIONS = [
  'Foundation to 2',
  'Classes 3 to 5',
  'Classes 6 to 8',
  'Classes 9 and 10',
  'Classes 11 and 12',
  'Special Section',
]

export const emptyEmploymentRow = () => ({
  school: '',
  designation: '',
  classesSubjects: '',
  duration: '',
  reason: '',
})

export const emptyEducationRow = () => ({
  degree: '',
  year: '',
  board: '',
  institution: '',
  subjects: '',
  specialization: '',
  percentage: '',
})

export const careerInputClassName =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all bg-white'
