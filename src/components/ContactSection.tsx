import { COMPANY } from "@/lib/constants";
import { projectTypes } from "@/lib/site-data";
import Container from "./Container";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#071b20] py-16 text-white sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fd3bf]">
              Start with the problem
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] sm:text-5xl">
              What Could an Intelligent System Improve in Your Organisation?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Whether the challenge involves customer operations, internal
              workflows, documents, equipment, data, decision-making, or
              physical processes, we can help define and engineer the right
              system.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button px-6" href="#project-enquiry">
                Discuss Your Project
              </a>
              <a
                className="ghost-button px-6"
                href={`mailto:${COMPANY.email}`}
              >
                Contact Sentient Engineering
              </a>
            </div>
            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Direct enquiry
              </p>
              <a
                className="mt-3 inline-flex text-base font-semibold text-[#8fd3bf] underline underline-offset-4"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          <form
            id="project-enquiry"
            action={`mailto:${COMPANY.email}`}
            method="post"
            encType="text/plain"
            className="grid scroll-mt-28 gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
          >
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Work email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Company
              <input name="company" autoComplete="organization" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Phone number
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
              Project type
              <select name="project_type" defaultValue="" required>
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((projectType) => (
                  <option key={projectType} value={projectType}>
                    {projectType}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
              Brief project description
              <textarea name="project_description" rows={5} required />
            </label>
            <button className="primary-button px-6 sm:col-span-2" type="submit">
              Submit Project Enquiry
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
