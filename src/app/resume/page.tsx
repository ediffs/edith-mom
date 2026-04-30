"use client";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-linear-to-r from-slate-950 via-cyan-950 to-slate-950">
      <main className="w-full max-w-3xl flex flex-col py-32 px-6 sm:px-12 bg-[#232143]">
        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="flex max-w-lg text-3xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Edith Hohner
          </h1>
          <h2 className="flex max-w-x font-style: italic text-md font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Computer Science B.Sc. Honours, Mathematics Minor, Classical Studies
            Minor
          </h2>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Work Experience
          </h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Teaching Assistant — UM Computer Science Department
              </h3>
              <p className="text-sm text-gray-300 mt-1">Jan 2026 – Present</p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Delivered one-on-one explanations of key software development
                concepts
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Provided direct feedback and communications with instructors
                of COMP 1020 and COMP 2450
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Planned engaging labs including short lectures, invigilated
                exams for up to 120 students
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Instructor Guard — City of Winnipeg Aquatic Services
              </h3>
              <p className="text-sm text-gray-300 mt-1">July 2023 – Present</p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ As the in-charge guard; delegated tasks to employees and gave
                direct feedback as required
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Taught swimming lessons in English and French, managed groups
                of up to 12 students of various ages
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Wrote 1000+ detailed evaluations of participants across
                several 10-week sessions
              </p>
            </div>
          </div>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Volunteer Experience
          </h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Director of Advocacy — UM Computer Science Students&apos;
                Association
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                April 2026 – April 2027
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Guided my committee to launch frequent, public initiatives to
                ensure students were adequately represented
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Collected students’ opinions and concerns and voiced them to
                the Computer Science Department
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Director of Lounge Affairs — UM Computer Science Students&apos;
                Association
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                June 2025 – April 2026
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Recruited and gave training to new/returning supervisors of
                the CSSA Lounge
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Attended executive meetings, communicated effectively to
                organize events with 100+ students attending
              </p>
            </div>
          </div>
          <h2 className="flex max-w-lg text-2xl font-semibold leading-10 tracking-tight text-[#f4ecd6] dark:text-[#f4ecd6] justify-center">
            Personal Projects
          </h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Personal Portfolio Website | TypeScript, React.js, Next.js,
                Tailwind CSS, HTML
              </h3>
              <p className="text-sm text-gray-300 mt-1">March 2026 – Present</p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Designed and implemented dynamically moving components to be
                displayed on the site
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Gained skills in full stack web development using frameworks
                such as Next.js, React, and Tailwind CSS
              </p>
            </div>
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Aurora Firefox Extension | JavaScript, HTML, Git
              </h3>
              <p className="text-sm text-gray-300 mt-1">May 2025 – June 2025</p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Created and built a Firefox extension to facilitate student
                registration using Aurora by injecting professor ratings
                directly onto the registration page
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Combined knowledge of HTML and Javascript to fetch and safely
                insert data
              </p>
            </div>
            <div className="bg-[#2e2a5a] rounded-xl p-6 shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#f4ecd6]">
                Colloventory | Godot 4, GDScript, Python
              </h3>
              <p className="text-sm text-gray-300 mt-1">February 2025</p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Created a fully functional 2D arcade video game for the
                Winnipeg Game Jam
              </p>
              <p className="text-[#f4ecd6] mt-3">
                ∗ Took charge of the design and programming process, achieving
                quick results in under three days
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
