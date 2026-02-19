import React from 'react'

const HowWeWork = () => {
  return (
    <section className="py-20 bg-gray-50" id="how-we-work">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm text-indigo-600 font-semibold">How Our Team Works</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">We help you get placed — step by step</h2>
          <p className="mt-3 text-gray-600">A focused approach to land your dream job: resume support, interview preparation and end-to-end placement assistance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Resume & Applications</h4>
            <p className="text-gray-600 mb-4">We review and polish your resume, then apply to targeted jobs daily with tailored cover letters.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Job applications support</li>
              <li>Resume review</li>
              <li>Email updates</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M7 20h10a2 2 0 002-2V8a2 2 0 00-2-2h-4l-2-2H9a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Interview Preparation</h4>
            <p className="text-gray-600 mb-4">Hands-on mock interviews, feedback, and recruiter follow-ups to boost your confidence.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Interview preparation</li>
              <li>Mock interviews</li>
              <li>Recruiter follow-ups</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6M7 21h10" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2">Placement Support</h4>
            <p className="text-gray-600 mb-4">End-to-end assistance including daily applications, scheduling and priority interview support.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>End-to-end job assistance</li>
              <li>Daily job applications</li>
              <li>Priority interview support</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork
