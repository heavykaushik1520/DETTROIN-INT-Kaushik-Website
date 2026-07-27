import cambridgePathways from '../../assets/img/academics/cambridge_pathways.png'
import cambridgeLearner from '../../assets/img/academics/igcse_cambridge.jpg'

const LEARNER_ATTRIBUTES = [
  {
    title: 'Confident',
    text: 'in working with information and ideas - their own and those of others',
  },
  {
    title: 'Responsible',
    text: 'for themselves, responsive to and respectful of others',
  },
  {
    title: 'Reflective',
    text: 'as learners, developing their ability to learn',
  },
  {
    title: 'Innovative',
    text: 'and equipped for new and future challenges',
  },
  {
    title: 'Engaged',
    text: 'intellectually and socially, ready to make a difference',
  },
]

const FOUNDATION_REASONS = [
  'Head start on building the skills integral towards readiness for the IGCSE Programme',
  'Bridges shift from CBSE/other curricula to the Cambridge system reducing adjustment pressure in Class.',
  'Sample a range of disciplines before making subject choices for IGCSE',
]

const FOUNDATION_SUBJECTS = [
  {
    category: 'Languages*',
    subjects: ['English Language and Literature', 'Spanish or Hindi Language and Literature'],
    notes: [
      'Please note that CBSE requires students to have studied three languages up to Class 8 in order to be eligible for the CBSE Class 10 examinations.',
      'Some Indian universities may require Hindi to have been studied up to Class 8, so please complete your due diligence before making a choice between Hindi and Spanish.',
    ],
  },
  {
    category: 'Humanities and Social Sciences',
    subjects: [
      'History',
      'Economics',
      'Environment Geography*',
      'Global Perspectives**',
    ],
  },
  {
    category: 'Sciences',
    subjects: [
      'Biology',
      'Physics',
      'Chemistry',
      'Environmental Management*',
    ],
  },
  {
    category: 'Mathematics',
    subjects: ['Mathematics'],
  },
  {
    category: 'Creative and Professional',
    subjects: [
      'Art and Design',
      'Applied Computing',
      'Global Perspectives**',
    ],
  },
]

const IGCSE_WHY = [
  "World's most popular international qualification for 14 to 16 year olds.",
  'Core of the IGCSE curriculum emphasizes a practical approach to learning based on inquiry.',
  'Cambridge IGCSE develops learner knowledge, understanding and skills in:',
]

const IGCSE_SKILLS = [
  'Subject content',
  'Applying knowledge and understanding to new as well as familiar situations',
  'Intellectual enquiry',
  'Flexibility and responsiveness to change',
  'Working and communicating in English',
  'Influencing outcomes',
  'Cultural awareness.',
]

const IGCSE_WHY_MORE = [
  "Provides an ideal foundation for higher-level courses such as the International Baccalaureate Diploma Programme, 'A' Levels and the North American APT (Advanced Placement Test).",
  "Has worldwide recognition and is equivalent to the Certificate of Secondary Education from Indian education boards, General Certificate of Secondary Education, and 'O' Level.",
]

const IGCSE_SUBJECTS = [
  {
    category: 'Mandatory',
    subjects: [
      'First Language English (0500)',
      'Global Perspectives (0457)',
    ],
  },
  {
    category: 'Elective 1',
    subjects: ['Spanish (0530)', 'Hindi (0549)'],
  },
  {
    category: 'Elective 2',
    subjects: ['Literature in English (0475)', 'Chemistry (0620)'],
  },
  {
    category: 'Elective 3',
    subjects: ['History (0470)', 'Physics (0625)'],
  },
  {
    category: 'Elective 4',
    subjects: ['Mathematics (0580)'],
  },
  {
    category: 'Elective 5',
    subjects: ['Business Studies (0264)', 'Economics (0455)'],
  },
  {
    category: 'Elective 6',
    subjects: [
      'Art and Design (0400)',
      'Computer Science (0478)',
      'Information and Communication Technology (0417)',
    ],
  },
  {
    category: 'Elective 7',
    subjects: [
      'Environmental Management (0680)',
      'Biology (0610)',
      'Geography (0460)',
    ],
  },
]

const ICE_GROUPS = [
  { title: 'Group 1', text: 'Languages' },
  { title: 'Group 2', text: 'Humanities' },
  { title: 'Group 3', text: 'Sciences' },
  { title: 'Group 4', text: 'Mathematics' },
  { title: 'Group 5', text: 'Creative and Vocational' },
]

const ICE_CATEGORIES = [
  {
    title: 'Distinction',
    text: 'Grade A or better in five subjects and grade C or better in two subjects.',
  },
  {
    title: 'Merit',
    text: 'Grade C or better in five subjects and grade F or better in two subjects.',
  },
  {
    title: 'Pass',
    text: 'Grade G or better in seven subjects.',
  },
]

const AS_A_LEVEL_POINTS = [
  'Cambridge International A Level is typically a two-year course, and Cambridge International AS Level is typically one year.',
  'Universities worldwide value and recognise Cambridge International AS & A Level qualifications since it develops learners knowledge, understanding and skills in:',
]

const AS_A_LEVEL_SKILLS = [
  'In-depth subject content',
  'Independent thinking',
  'Applying knowledge and understanding to new as well as familiar situations',
  'Handling and evaluating different types of information source',
  'Thinking logically and presenting ordered and coherent arguments',
  'Making judgements, recommendations and decisions',
  'Presenting reasoned explanations, understanding implications and communicating them logically and clearly',
]

const AS_A_LEVEL_SUBJECTS = [
  {
    category: 'Optional (only AS Levels)',
    subjects: ['English Language General Paper (8021)*'],
    notes: [
      'While we encourage students to pursue AS Level English Language for its academic value, a student may choose not to opt for the subject. In doing so, it is assumed that the student has independently reviewed relevant university and college entry requirements.',
    ],
  },
  {
    category: 'Elective 1 (AS and A Levels)',
    subjects: ['Physics (9702)', 'Business (9609)', 'History (9489)'],
  },
  {
    category: 'Elective 2 (AS and A Levels)',
    subjects: [
      'Chemistry (9701)',
      'Psychology (9990)',
      'Computer Science (9618)',
    ],
  },
  {
    category: 'Elective 3 (AS and A Levels)',
    subjects: ['Mathematics (9709)', 'Sociology (9699)', 'Geography (9696)'],
  },
  {
    category: 'Elective 4 (AS and A Levels)',
    subjects: ['Economics (9708)', 'Biology (9700)', 'Art and Design (9479)'],
  },
]

const AS_A_LEVEL_NOTES = [
  'The Board Examinations will be administered as a part of the March Series examinations for our Cambridge AS and A Level programme. The only exception will be for subjects that are not offered by Cambridge in the March Series. These subjects will be administered in the June Series (such as History, Geography, Computer Science etc.).',
  'English Language General Paper (AS Level) is an optional subject and its board examination will be conducted as a part of March Series in Class 12.',
  'Students can choose to study a total of 3 or 4 subjects, over and above English Language. This should be decided in consultation with the College Counselling Team. Further, students cannot choose two subjects from the same elective group.',
]

function SectionLabel({ children }) {
  return (
    <div className="mb-4">
      <h3
        className="text-lg font-black md:text-xl"
        style={{ color: 'rgb(194, 24, 53)' }}
      >
        {children}
      </h3>
      <div className="mt-2 h-0.5 w-8 bg-amber-400" />
    </div>
  )
}

function BulletList({
  items,
  color = 'rgb(251, 191, 36)',
  nested = false,
  titleSeparator = ' ',
}) {
  return (
    <ul className={`space-y-3 ${nested ? 'ml-4' : ''}`}>
      {items.map((item) => {
        const title = typeof item === 'string' ? null : item.title
        const text = typeof item === 'string' ? item : item.text
        return (
          <li
            key={title ? `${title}-${text}` : text}
            className="flex items-start gap-3"
          >
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ background: color }}
            />
            <span className="text-sm leading-relaxed text-gray-700 md:text-base">
              {title && (
                <strong style={{ color: 'rgb(194, 24, 53)' }}>{title}</strong>
              )}
              {title ? `${titleSeparator}${text}` : text}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

function SubjectTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="min-w-full w-full text-left text-sm">
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.category}
              className={index % 2 === 0 ? 'bg-[#fdf2f3]/60' : 'bg-white'}
            >
              <td
                className="w-40 border-b border-gray-100 px-4 py-4 align-top text-xs font-black tracking-wide uppercase md:w-48 md:text-sm"
                style={{ color: 'rgb(194, 24, 53)' }}
              >
                {row.category}
              </td>
              <td className="border-b border-gray-100 px-4 py-4 align-top text-gray-700">
                <ul className="space-y-1">
                  {row.subjects.map((subject) => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
                {row.notes && (
                  <div className="mt-3 space-y-2 text-xs italic leading-relaxed text-gray-500">
                    {row.notes.map((note) => (
                      <p key={note}>*{note}</p>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ContentCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default function AcademicsContent() {
  return (
    <>
      <section className="bg-[#fdf2f3] py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-10 shadow-sm md:px-12 md:py-14">
            <div className="mb-6 text-center">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
                Cambridge International
              </span>
              <div className="mx-auto mt-2 mb-5 h-0.5 w-8 bg-amber-400" />
              <h2
                className="text-xl leading-snug font-black md:text-2xl lg:text-3xl"
                style={{ color: 'rgb(194, 24, 53)' }}
              >
                Vasant Valley School is a registered Cambridge International
                School offering the Cambridge curriculum for Classes 8-12.
              </h2>
            </div>

            <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-gray-600 md:text-lg md:leading-8">
              Class 8 serves as a foundation year, focusing on developing the
              skills and attributes essential for the Cambridge IGCSE programme
              in Classes 9 and 10, which then extend into the Cambridge Advanced
              programme in Class 11 (AS Level) and Class 12 (A Level).
            </p>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-[#f8fafc] p-4 md:p-6">
              <img
                src={cambridgePathways}
                alt="Cambridge Pathway from Early Years to Advanced"
                className="mx-auto h-auto w-full object-contain"
                width={679}
                height={329}
              />
            </div>

            <p className="mt-8 text-center">
              <a
                href="https://www.cambridgeinternational.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline md:text-base"
              >
                www.cambridgeinternational.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <ContentCard>
              <SectionLabel>Cambridge Learner Attributes</SectionLabel>

              <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base">
                The Cambridge curriculum and assessments are designed with the
                following Cambridge learner attributes in mind:
              </p>

              <div className="mb-6">
                <BulletList items={LEARNER_ATTRIBUTES} />
              </div>

              <img
                src={cambridgeLearner}
                alt="Cambridge learner attributes: Confident, Responsible, Reflective, Innovative, Engaged"
                className="mx-auto mb-4 h-auto w-48 object-contain"
                width={215}
                height={200}
              />

              <p className="mb-8 text-center">
                <a
                  href="https://www.cambridgeinternational.org/why-choose-us/parents-and-students/in-class/the-cambridge-learner-attributes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-xs font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline md:text-sm"
                >
                  Learn more about Cambridge learner attributes
                </a>
              </p>

              <SectionLabel>Why Cambridge Foundation Year?</SectionLabel>
              <BulletList
                items={FOUNDATION_REASONS}
                color="rgb(194, 24, 53)"
              />
            </ContentCard>

            <ContentCard>
              <SectionLabel>
                List of Cambridge Foundation Year subjects offered at Vasant
                Valley School
              </SectionLabel>

              <SubjectTable rows={FOUNDATION_SUBJECTS} />

              <div className="mt-5 space-y-2 text-xs italic leading-relaxed text-gray-500 md:text-sm">
                <p>
                  *Cambridge recognises Environmental Management as both a
                  Science and a subject under Humanities and Social Sciences.
                </p>
                <p>
                  **Global Perspectives qualifies as both a Humanities and
                  Social Sciences subject and a Creative and Professional
                  subject.
                </p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="bg-[#fdf2f3] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <ContentCard>
              <SectionLabel>Why Cambridge IGCSE?</SectionLabel>
              <div className="mb-4">
                <BulletList items={IGCSE_WHY} color="rgb(194, 24, 53)" />
              </div>
              <div className="mb-4">
                <BulletList items={IGCSE_SKILLS} nested />
              </div>
              <div className="mb-8">
                <BulletList items={IGCSE_WHY_MORE} color="rgb(194, 24, 53)" />
              </div>

              <SectionLabel>
                List of Cambridge IGCSE subjects offered at Vasant Valley School
              </SectionLabel>
              <p className="mb-2 text-sm leading-relaxed text-gray-600 md:text-base">
                Students can study a maximum of 9 subjects* in Classes 9 and 10
                (2026-2028) as follows:
              </p>
              <p className="mb-4 text-xs italic text-gray-500 md:text-sm">
                *Any subject with less than 7-8 takers will not be offered.
              </p>
              <SubjectTable rows={IGCSE_SUBJECTS} />
            </ContentCard>

            <ContentCard>
              <SectionLabel>Cambridge ICE</SectionLabel>
              <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base">
                The Cambridge ICE certificate is a group award designed for
                schools that want to offer a broad curriculum. Students enter
                and sit for a minimum of seven subjects selected from the five
                IGCSE curriculum areas:
              </p>
              <div className="mb-5">
                <BulletList items={ICE_GROUPS} titleSeparator=" - " />
              </div>
              <p className="mb-5 text-sm leading-relaxed text-gray-600 md:text-base">
                Cambridge ICE is awarded to students who pass in at least seven
                Cambridge IGCSE subjects, including two from Group 1 and one
                from each of Groups 2 to 5. The seventh subject may be chosen
                from any of the syllabus groups.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                Students who qualify for the Cambridge ICE award will be placed
                in one of three categories:
              </p>
              <div className="mb-6">
                <BulletList
                  items={ICE_CATEGORIES}
                  color="rgb(194, 24, 53)"
                  titleSeparator=" - "
                />
              </div>
              <a
                href="https://help.cambridgeinternational.org/hc/en-gb/articles/203477342-Cambridge-International-Certificate-in-Education-ICE-"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-xs font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline md:text-sm"
              >
                Learn more about Cambridge ICE
              </a>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <ContentCard>
              <SectionLabel>Cambridge AS and A Levels</SectionLabel>
              <div className="mb-4">
                <BulletList
                  items={AS_A_LEVEL_POINTS}
                  color="rgb(194, 24, 53)"
                />
              </div>
              <div className="mb-8">
                <BulletList items={AS_A_LEVEL_SKILLS} nested />
              </div>

              <SectionLabel>Assessment by Cambridge</SectionLabel>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                At Vasant Valley School, assessment options to gain Cambridge
                International AS & A Level qualifications are as follows:
              </p>
              <ol className="mb-4 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-gray-700 md:text-base">
                <li>
                  <strong style={{ color: 'rgb(194, 24, 53)' }}>
                    Take the Cambridge International AS Level only:
                  </strong>{' '}
                  The syllabus content is half a Cambridge International A
                  Level.
                </li>
                <li>
                  <strong style={{ color: 'rgb(194, 24, 53)' }}>
                    Staged Assessment Route:
                  </strong>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: 'rgb(251, 191, 36)' }}
                      />
                      <span>
                        Students take the Cambridge International AS Level in
                        one examination series* and complete the final Cambridge
                        International A Level** in a subsequent series.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: 'rgb(251, 191, 36)' }}
                      />
                      <span>
                        AS Level marks can be carried forward to a full A Level
                        twice within a 13 month period.
                      </span>
                    </li>
                  </ul>
                </li>
              </ol>
              <div className="mb-6 space-y-2 text-xs italic leading-relaxed text-gray-500 md:text-sm">
                <p>
                  *The Advanced Subsidiary Level (AS Level) examinations are
                  administered at the end of Class 11 (except for English
                  Language General Paper).
                </p>
                <p>
                  **The Advanced Level (A Level) examinations are administered
                  at the end of Class 12 along with English Language General
                  Paper AS Level.
                </p>
              </div>
              <a
                href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-advanced/cambridge-international-as-and-a-levels/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-xs font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline md:text-sm"
              >
                Learn more about Cambridge AS & A Levels
              </a>
            </ContentCard>

            <ContentCard>
              <SectionLabel>
                List of Cambridge AS and A Levels subjects offered at Vasant
                Valley School
              </SectionLabel>
              <p className="mb-4 text-xs italic text-gray-500 md:text-sm">
                *Any subject with less than 5 takers will not be offered.
              </p>
              <SubjectTable rows={AS_A_LEVEL_SUBJECTS} />

              <div className="mt-6">
                <p
                  className="mb-3 text-sm font-black"
                  style={{ color: 'rgb(194, 24, 53)' }}
                >
                  Please note:
                </p>
                <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-gray-700 md:text-base">
                  {AS_A_LEVEL_NOTES.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ol>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>
    </>
  )
}
