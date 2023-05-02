import React from 'react';

// const featuredJobs = [
//   {
//     id: 1,
//     category: 'Google Apprenticeship',
//     coverImage: '',
//   },
// ];

export default function Index() {
  return (
    <main>
      {/* Banner section */}
      <section>Banner</section>

      {/* Feature job openings */}
      <section>
        <h2 className="text-center py-10 text-xl">Featured Job Openings</h2>
      </section>

      {/* Mentorship banner */}
      <section>Mentorship</section>

      {/* Latest jobs */}
      <section>
        <h2 className="text-center py-10 text-xl">
          Explore The Latest Job Openings
        </h2>
        <div className="px-40 py-10">
          <div className="font-semibold text-5xl flex justify-center items-center bg-gray-500 rounded-lg h-[1100px]">
            airtable
          </div>
        </div>
      </section>
    </main>
  );
}
