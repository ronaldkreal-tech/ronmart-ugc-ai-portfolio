import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink, Copy, Check, Sparkles, ArrowRight, Code, Download, FileArchive } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Project Export" },
      { name: "description", content: "Export and manage project settings." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [copied, setCopied] = useState(false);

  const projectInfo = {
    name: "RonMart UGC.ai",
    previewUrl: "https://id-preview--a428a88c-2b72-4427-bea9-88f4b98e2348.lovable.app",
    publishedUrl: "https://ronmartugcai.lovable.app",
    customDomain: "ronmartugcai.com",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const steps = [
    {
      n: "1",
      title: "Open the Lovable editor",
      text: "Click the button below to open your project in the Lovable editor.",
      action: {
        label: "Open Lovable Editor",
        href: projectInfo.previewUrl,
        icon: ExternalLink,
      },
    },
    {
      n: "2",
      title: "Connect to GitHub",
      text: "In the editor, click the Plus (+) menu in the chat input → GitHub → Connect project.",
      action: null,
    },
    {
      n: "3",
      title: "Create repository",
      text: "Authorize the Lovable GitHub app and create a new repository. Your code will sync automatically.",
      action: null,
    },
    {
      n: "4",
      title: "Download or clone",
      text: "Once synced, visit your GitHub repo to download a ZIP or clone with git.",
      action: {
        label: "View GitHub Docs",
        href: "https://docs.lovable.dev/integrations/github",
        icon: Github,
      },
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>RonMart UGC<span className="text-primary">.ai</span></span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-semibold hover:bg-card transition"
          >
            Back to site <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            <Code className="h-3.5 w-3.5" /> Admin
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Project Export</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            One-click guide to push your project code to GitHub.
          </p>
        </div>

        {/* Project Info Card */}
        <div className="rounded-2xl border border-border bg-card/60 p-6 mb-10">
          <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <FileArchive className="h-5 w-5 text-primary" /> Project Info
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Project Name</span>
              <span className="text-sm font-medium">{projectInfo.name}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Preview URL</span>
              <a
                href={projectInfo.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Open preview
              </a>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Published URL</span>
              <a
                href={projectInfo.publishedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Open site
              </a>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">Custom Domain</span>
              <span className="text-sm font-medium">{projectInfo.customDomain}</span>
            </div>
          </div>
        </div>

        {/* Offline Backup */}
        <div className="rounded-2xl border border-primary/30 bg-[image:var(--gradient-card)] p-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Download className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-lg font-semibold">Offline Backup</h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Download a ZIP snapshot of the project source (src, public, config files). Generated on every build and dev start.
              </p>
              <a
                href="/project-source.zip"
                download="ronmartugcai-source.zip"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                <Download className="h-4 w-4" /> Download project ZIP
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Tip: run <code className="rounded bg-background/60 px-1.5 py-0.5">bun install</code> after extracting to restore dependencies.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <h2 className="font-display text-xl font-semibold flex items-center gap-2">
            <Github className="h-5 w-5 text-primary" /> GitHub Export Steps
          </h2>

          {steps.map((step, i) => (
            <div
              key={step.n}
              className="rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/30 transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-bold">
                  {step.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                  {step.action && (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
                    >
                      <step.action.icon className="h-4 w-4" />
                      {step.action.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-10 rounded-2xl border border-border bg-[image:var(--gradient-card)] p-6">
          <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" /> Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="/project-source.zip"
              download="ronmartugcai-source.zip"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" /> Download project ZIP
            </a>
            <button
              onClick={() => copyToClipboard(projectInfo.publishedUrl)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm font-medium hover:bg-background transition"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy published URL"}
            </button>
            <a
              href="https://docs.lovable.dev/integrations/github"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm font-medium hover:bg-background transition"
            >
              <Github className="h-4 w-4" /> GitHub Integration Docs
            </a>
            <a
              href="https://docs.lovable.dev/tips-tricks/self-hosting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm font-medium hover:bg-background transition"
            >
              <ExternalLink className="h-4 w-4" /> Self-Hosting Guide
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-muted-foreground">
          This admin page is not linked from the public site. Bookmark this URL for easy access.
        </div>
      </div>
    </main>
  );
}
