import { companyData } from "../Data/Company";

export default function AboutComp() {
  const company: { [key: string]: any } = companyData;

  return (
    <div className="flex flex-col gap-6 bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
      {Object.keys(company).map(
        (key, index) =>
          key !== 'Name' && (
            <div key={index}>
              {/* Heading */}
              <div className="text-blue-950 text-lg font-semibold mb-2">
                {key}
              </div>

              {/* Content */}
              {key === 'website' ? (
                <a
                  href={company[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-700 underline hover:text-blue-900 transition"
                >
                  {company[key]}
                </a>
              ) : key === 'Specialties' ? (
                <div className="text-sm flex flex-wrap gap-2 text-blue-900">
                  {company[key].map((item: string, i: number) => (
                    <span key={i} className="bg-blue-50 px-2 py-1 rounded-lg text-xs">
                      &bull; {item}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-justify text-gray-700">
                  {company[key]}
                </div>
              )}
            </div>
          )
      )}
    </div>
  );
}
