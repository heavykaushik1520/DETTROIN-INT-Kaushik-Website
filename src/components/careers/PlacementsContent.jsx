import {
  PLACEMENT_BATCHES,
  PLACEMENT_SUMMARY_LINKS,
} from '../../constants/placements'

function PlacementTable({ batch }) {
  const maxRows = Math.max(...batch.columns.map((col) => col.colleges.length))
  const summary = batch.summaryKey
    ? PLACEMENT_SUMMARY_LINKS[batch.summaryKey]
    : null

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div
        className="px-5 py-4 text-center"
        style={{
          background:
            'linear-gradient(135deg, rgb(9, 26, 79) 0%, rgb(13, 59, 134) 100%)',
        }}
      >
        <h3 className="text-lg font-black text-white md:text-xl">
          Batch of {batch.year}
        </h3>
        <p className="mt-1 text-sm font-semibold text-amber-300">
          Cohort - {batch.cohort}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#eef5ff]">
              {batch.columns.map((col) => (
                <th
                  key={col.name}
                  className="min-w-40 border-b border-gray-200 px-4 py-3 text-xs font-bold tracking-wide text-[#0d3b86] uppercase"
                >
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxRows }).map((_, rowIndex) => (
              <tr
                key={`${batch.year}-row-${rowIndex}`}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}
              >
                {batch.columns.map((col) => (
                  <td
                    key={`${col.name}-${rowIndex}`}
                    className="border-b border-gray-100 px-4 py-2.5 align-top text-gray-700"
                  >
                    {col.colleges[rowIndex] || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {summary && (
        <div className="border-t border-gray-100 px-5 py-4 text-center">
          <a
            href={summary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 hover:underline"
          >
            Click here to view {summary.label}
          </a>
        </div>
      )}
    </div>
  )
}

export default function PlacementsContent() {
  return (
    <div>
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
          College Destinations
        </span>
        <div className="mx-auto mt-2 mb-4 h-0.5 w-8 bg-amber-400" />
        <h2
          className="text-3xl font-black md:text-4xl"
          style={{ color: 'rgb(13, 59, 134)' }}
        >
          College Placements
        </h2>
        <p className="mt-2 text-sm text-gray-500 md:text-base">
          (for the past 5 years)
        </p>
      </div>

      <div className="space-y-10">
        {PLACEMENT_BATCHES.map((batch) => (
          <PlacementTable key={batch.year} batch={batch} />
        ))}
      </div>
    </div>
  )
}
