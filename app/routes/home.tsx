import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "TalentScreen-AI" },
    { name: "description", content: "AI-powered resume analyzer by Adeleye Olayinka Ibrohim that scans, scores, and optimizes your CV. Get instant insights, keyword checks, and tailored tips to land your dream job.”!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.png')] bg-cover">

    <Navbar />

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Manage Applications and Resume Ratings</h1>
        <h2>Monitor submissions and optimize resumes with AI.</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

    </section>
  </main>
}
