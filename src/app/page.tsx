import Link from "next/link";
import { Terminal } from "lucide-react";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col min-h-[75vh]">
      <div className="max-w-3xl animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-8 font-mono text-sm text-emerald-600">
          <Terminal className="w-4 h-4" />
          <span>$ whoami --role=&quot;</span>
          <Typewriter text="Computer Engineering Student" />
          <span>&quot;</span>
        </div>

        <h1 className="text-6xl sm:text-6xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
          Cybersecurity enthusiast <br className="hidden sm:block" />
          engineering a safer digital world.
        </h1>

        <p className="text-xl text-foreground max-w-2xl leading-relaxed mb-10">
          I explore vulnerabilities and build secure, scalable cloud
          environments. With hands-on experience in AWS, Azure and Linux, I
          specialize in vulnerability analysis, network security and cloud
          infrastructure deployment.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 font-mono text-sm">
          <Link
            href="/skills"
            className="px-6 py-3 bg-zinc-900 text-zinc-50 font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center rounded-sm"
          >
            ./view_skills.sh
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center justify-center rounded-sm"
          >
            cat about.md
          </Link>
        </div>
      </div>

      <div className="mt-auto pt-24 grid sm:grid-cols-3 gap-8 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in delay-200">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Linux & Systems
          </h3>
          <p className="text-base text-foreground">
            Hands-on experience with Linux administration, SSH configuration,
            network analysis and VM deployment on cloud environments.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Version Control & Collaboration
          </h3>
          <p className="text-base text-foreground">
            Declarative workflows using Git and Scrum methodologies, ensuring
            clean, trackable and collaborative development.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            Security & Vulnerability Analysis
          </h3>
          <p className="text-base text-foreground">
            Identifying weaknesses before they become threats. Hands-on
            experience analyzing network traffic, scanning for vulnerabilities
            and configuring secure environments across cloud and local
            infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
