function SectionHeading({ letter, title }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
        style={{ background: 'rgb(13, 59, 134)' }}
      >
        {letter}
      </div>
      <h2 className="text-xl font-black tracking-wide text-gray-900 uppercase">
        {title}
      </h2>
    </div>
  )
}

function InfoTable({ rows }) {
  return (
    <div className="mb-4 overflow-hidden overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full min-w-[540px]">
        <thead>
          <tr>
            <th className="w-1/2 bg-gray-50 px-4 py-3 text-left text-xs font-bold tracking-wider text-gray-500 uppercase">
              Information
            </th>
            <th className="bg-gray-50 px-4 py-3 text-left text-xs font-bold tracking-wider text-gray-500 uppercase">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}
            >
              <td className="border-t border-gray-100 px-4 py-3 text-sm font-medium text-gray-700">
                {row.label}
              </td>
              <td className="border-t border-gray-100 px-4 py-3 text-sm text-gray-500">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function VacantDocsTable({ documents }) {
  return (
    <div className="mb-4 overflow-hidden overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr>
            <th className="w-2/5 bg-gray-50 px-4 py-3 text-left text-xs font-bold tracking-wider text-gray-500 uppercase">
              Document Information
            </th>
            <th className="bg-gray-50 px-4 py-3 text-left text-xs font-bold tracking-wider text-gray-500 uppercase">
              File Name
            </th>
            <th className="bg-gray-50 px-4 py-3 text-center text-xs font-bold tracking-wider text-gray-500 uppercase">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr
              key={doc}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}
            >
              <td className="border-t border-gray-100 px-4 py-3 text-sm font-medium text-gray-700">
                {doc}
              </td>
              <td className="border-t border-gray-100 px-4 py-3 text-xs text-gray-400">
                -
              </td>
              <td className="border-t border-gray-100 px-4 py-3 text-center">
                <span className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-400">
                  Coming soon
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function VacantResultsTable({ title }) {
  return (
    <>
      <h3 className="mt-8 mb-3 text-lg font-black tracking-wide text-gray-900 uppercase">
        {title}
      </h3>
      <div className="mb-8 overflow-hidden overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr>
              {[
                'Year',
                'No. of Registered Students',
                'No. of Students Passed',
                'Pass Percentage',
                'Remarks',
              ].map((heading) => (
                <th
                  key={heading}
                  className="bg-gray-50 px-4 py-3 text-left text-xs font-bold tracking-wider text-gray-500 uppercase"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td
                colSpan={5}
                className="border-t border-gray-100 px-4 py-8 text-center text-sm text-gray-400"
              >
                Results data will be updated soon.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export {
  SectionHeading,
  InfoTable,
  VacantDocsTable,
  VacantResultsTable,
}
