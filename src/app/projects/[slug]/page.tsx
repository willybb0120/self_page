import { profileData } from "@/data/profile";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return profileData.projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = profileData.projects.find((p) => p.slug === slug);

  if (!project || !project.details) {
    notFound();
  }

  const { details } = project;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-teal-300 selection:text-teal-900 font-sans">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-20 lg:py-24">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="group mb-8 inline-flex items-center text-xs font-semibold leading-tight text-teal-300 hover:text-teal-400 transition-colors"
        >
          <ArrowLeft className="mr-1 h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back to Profile
        </Link>

        {/* === 1. Hero Section === */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4 text-xs text-zinc-500 font-mono">
             <span>{project.subtitle || "Project"}</span>
             <span className="w-12 h-px bg-zinc-700"></span>
             <span>{project.tags.slice(0, 2).join(" / ")}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </header>

        {/* Cover Image (如果有) */}
        {details.coverImage && (
          <div className="mb-16 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
            <Image
              src={details.coverImage}
              alt={`${project.title} Architecture`}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* === 2. Overview (價值主張層) === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-3">
            Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-teal-300 uppercase tracking-wide">Problem</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{details.problem}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-teal-300 uppercase tracking-wide">Solution</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{details.solution}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-teal-300 uppercase tracking-wide">Impact</h3>
              <p className="text-base text-zinc-400 leading-relaxed">{details.impact}</p>
            </div>
          </div>
        </section>

        {/* === 3. Key Metrics (量化成果層) === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-3">
            Key Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {details.metrics.map((metric, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <div className="text-sm text-zinc-500 mb-2">{metric.label}</div>
                <div className="text-3xl font-bold text-teal-300 mb-1">{metric.value}</div>
                {metric.comparison && (
                  <div className="text-xs text-zinc-600">{metric.comparison}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* === 4. Technical Deep Dive (技術細節層) === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-3">
            Technical Deep Dive
          </h2>
          
          {/* Dataset */}
          {details.methodology.dataset && (
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                Dataset
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed pl-4 border-l-2 border-zinc-800">
                {details.methodology.dataset}
              </p>
            </div>
          )}

          {/* Architecture */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-zinc-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
              Architecture
            </h3>
            <ul className="space-y-3 pl-4 border-l-2 border-zinc-800">
              {details.methodology.architecture.map((item, idx) => (
                <li key={idx} className="text-base text-zinc-400 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-zinc-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
              Implementation
            </h3>
            <ul className="space-y-3 pl-4 border-l-2 border-zinc-800">
              {details.methodology.implementation.map((item, idx) => (
                <li key={idx} className="text-base text-zinc-400 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
              Challenges & Solutions
            </h3>
            <ul className="space-y-3 pl-4 border-l-2 border-amber-900/30">
              {details.methodology.challenges.map((item, idx) => (
                <li key={idx} className="text-base text-zinc-400 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* === 5. Results & Validation (驗證層) === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-3">
            Results & Validation
          </h2>

          {/* Hardware Resources */}
          {details.results.hardware && (
            <div className="mb-12 p-6 rounded-lg border border-zinc-800 bg-zinc-900/30">
              <h3 className="text-lg font-semibold text-zinc-300 mb-4">Hardware Utilization</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">LUT</div>
                  <div className="text-lg font-mono text-teal-300">{details.results.hardware.lut}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-1">DSP</div>
                  <div className="text-lg font-mono text-teal-300">{details.results.hardware.dsp}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-1">BRAM</div>
                  <div className="text-lg font-mono text-teal-300">{details.results.hardware.bram}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-1">Frequency</div>
                  <div className="text-lg font-mono text-teal-300">{details.results.hardware.freq}</div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Table */}
          {details.results.performanceTable && (
            <div className="mb-12 overflow-x-auto">
              <h3 className="text-lg font-semibold text-zinc-300 mb-4">Performance Breakdown</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    {details.results.performanceTable.headers.map((header, idx) => (
                      <th key={idx} className="text-left py-3 px-4 text-sm font-semibold text-zinc-400">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {details.results.performanceTable.rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-zinc-800/50 hover:bg-zinc-900/30">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="py-3 px-4 text-sm text-zinc-400">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Images */}
          {details.results.images && details.results.images.length > 0 && (
            <div className="space-y-12">
              {details.results.images.map((img, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="relative w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50">
                    <Image
                      src={img.src}
                      alt={img.caption || `Result image ${idx + 1}`}
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-sm text-zinc-500 italic border-l-2 border-teal-500/30 pl-4">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* === 6. Insights & Learnings (反思層) === */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-3">
            Key Insights & Learnings
          </h2>
          <div className="space-y-6">
            {details.insights.map((insight, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20">
                <p className="text-base text-zinc-300 leading-relaxed">
                  {insight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Links (如果有) */}
        {details.links && (
          <section className="mb-12">
            <div className="flex flex-wrap gap-4">
              {details.links.github && (
                <a
                  href={details.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 text-sm text-zinc-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {details.links.paper && (
                <a
                  href={details.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 text-sm text-zinc-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Paper
                </a>
              )}
              {details.links.demo && (
                <a
                  href={details.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 text-sm text-zinc-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Demo
                </a>
              )}
            </div>
          </section>
        )}

        {/* Tags */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-900/20 rounded-full border border-teal-900/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
