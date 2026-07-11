import { ArrowRight, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6 max-w-6xl mx-auto">
      
      {/* STUDENT TASK: The Hero Section 
        Reference Lesson 1.4 (Spacing) and Lesson 1.3 (Typography).
      */}
      <section id="hero" className="min-h-[60vh] flex flex-col justify-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Available for work</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Software Engineer & <br />
          <span className="text-neutral-500">Systems Designer.</span>
        </h1>
        
        <p className="text-lg text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          [Student: Insert your elevator pitch here. Keep it concise, confident, and professional.]
        </p>

        <div className="flex items-center gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-neutral-200 transition-all">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-all">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* STUDENT TASK: The Projects Grid 
        Reference Lesson 1.3 (Tailwind CSS) to build the responsive cards.
      */}
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Featured Projects</h2>
        
        {/* Hint: Use Flexbox or CSS Grid here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card Skeleton - Student needs to style this! */}
          <article className="p-8 rounded-2xl bg-[#050505] border border-white/10">
            <h3 className="text-xl font-bold mb-3">Project Title</h3>
            <p className="text-neutral-400 text-sm mb-6">Description of the application architecture and purpose.</p>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-white/5 rounded text-neutral-300">Next.js</span>
              <span className="text-xs px-2 py-1 bg-white/5 rounded text-neutral-300">Tailwind</span>
            </div>
          </article>

        </div>
      </section>

    </main>
  );
}
