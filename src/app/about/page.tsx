export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 animate-fade-in">
      <div className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
          About My Approach
        </h1>
        <p className="text-xl text-foreground">
          I am constantly expanding my knowledge in cybersecurity while applying
          security best practices in every environment I work with.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-emerald-600 text-sm">01.</span>
            <h2 className="text-xl font-semibold text-foreground">
              Security is not a feature, it is a mindset.
            </h2>
          </div>
          <div className="pl-9">
            <p className="text-lg text-foreground leading-relaxed">
              Analyzing systems, identifying weaknesses and understanding how
              attacks work are the foundations of building environments that are
              truly hard to break.
            </p>
            <blockquote className="mt-4 border-l-4 border-emerald-600 bg-white dark:bg-zinc-900/50 p-4 text-zinc-900 dark:text-zinc-200 italic font-medium rounded-r-md shadow-sm">
              &quot;You can&apos;t defend what you don&apos;t understand.&quot;
            </blockquote>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-emerald-600 text-sm">02.</span>
            <h2 className="text-xl font-semibold text-foreground">
              Cloud Infrastructure as a Foundation
            </h2>
          </div>
          <div className="pl-9">
            <p className="text-lg text-foreground leading-relaxed">
              Secure systems start with a well-configured infrastructure.
              Working with AWS and Azure — deploying VMs, configuring security
              groups, managing databases and storage — has taught me that every
              configuration decision is also a security decision.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-emerald-600 text-sm">03.</span>
            <h2 className="text-xl font-semibold text-foreground">
              Continuous Learning, Continuous Improving
            </h2>
          </div>
          <div className="pl-9">
            <p className="text-lg text-foreground leading-relaxed">
              Cybersecurity is a field that never stops evolving, and neither do
              I. From studying computer engineering at Universidad de Caldas to
              applying real-world cybersecurity tools, Linux and cloud
              platforms, every project is an opportunity to grow and apply new
              knowledge.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
