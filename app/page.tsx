import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText delay={BLUR_FADE_DELAY} className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none" yOffset={8} text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`} />
              <BlurFadeText className="max-w-150 md:text-xl" delay={BLUR_FADE_DELAY} text={DATA.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="availability">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              <p className="text-sm font-medium">
                {DATA.availability.status} - {DATA.availability.message}
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </section>
      {/* <section id="services">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Services</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {DATA.services.map((service, id) => (
              <BlurFade
                key={service.title}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >
                <Card className="h-full border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="collaboration">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Freelance & Collaboration</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Build Something Great?</h2>
              <p className="mx-auto max-w-150 text-muted-foreground tracking-wide md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m available for freelance projects, and collaborations. Whether you need a robust full-stack application or a high-converting landing page, let&apos;s discuss how
                I can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="https://cal.com/bhaveshpatel/15min" target="_blank" rel="noopener noreferrer">
                    Book a Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}&su=Freelance%20Project%20Inquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Send an Email</a>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
