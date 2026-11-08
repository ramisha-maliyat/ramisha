import SectionHeading from "./SectionHeading";

// 👉 change this if your GitHub username is different
const USER = "ramisha-maliyat";

type Day = { date: string; count: number; level: number };

const LEVELS: Record<string, number> = {
  NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4,
};

async function fromGitHub(token: string) {
  // Official GraphQL API: includes private contributions if enabled in your profile settings
  const query = `query($u:String!){user(login:$u){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount contributionLevel}}}}}}`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { u: USER } }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("graphql");
  const cal = (await res.json())?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!cal) throw new Error("no data");
  const days: Day[] = cal.weeks.flatMap((w: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }) =>
    w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 }))
  );
  return { days, total: cal.totalContributions as number };
}

async function fromPublicApi() {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("public");
  const j = await res.json();
  return { days: (j.contributions ?? []) as Day[], total: j.total?.lastYear as number | undefined };
}

async function getData() {
  let days: Day[] = [];
  let total: number | undefined;
  try {
    const token = process.env.GITHUB_TOKEN;
    const r = token ? await fromGitHub(token).catch(fromPublicApi) : await fromPublicApi();
    days = r.days; total = r.total;
  } catch {}
  let repos: number | undefined, followers: number | undefined;
  try {
    const p = await fetch(`https://api.github.com/users/${USER}`, { next: { revalidate: 3600 } });
    if (p.ok) { const j = await p.json(); repos = j.public_repos; followers = j.followers; }
  } catch {}
  return { days, total, repos, followers };
}

const shade = ["bg-white/[0.06]", "bg-amber-900/70", "bg-amber-700", "bg-amber-500", "bg-amber-300"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default async function GitHubActivity() {
  const { days, total, repos, followers } = await getData();

  // group days into week columns (Sunday first), padding the first week
  const weeks: (Day | null)[][] = [];
  if (days.length) {
    let cur: (Day | null)[] = Array(new Date(days[0].date + "T00:00:00Z").getUTCDay()).fill(null);
    for (const d of days) {
      cur.push(d);
      if (cur.length === 7) { weeks.push(cur); cur = []; }
    }
    if (cur.length) weeks.push(cur);
  }
  let lastMonth = -1;
  const labels = weeks.map((w, i) => {
    const first = w.find(Boolean) as Day | undefined;
    if (!first) return "";
    const m = new Date(first.date + "T00:00:00Z").getUTCMonth();
    if (m !== lastMonth && (i > 0 || w.filter(Boolean).length >= 4)) { lastMonth = m; return MONTHS[m]; }
    return "";
  });

  return (
    <section id="github" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="05 — Open Source" title="GitHub activity" />

        <div className="rounded-3xl border border-white/10 bg-surface/60 p-5 sm:p-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <p className="text-lg">
              {total !== undefined ? (<><span className="font-bold text-white">{total}</span> <span className="text-muted">contributions in the last year</span></>) : <span className="text-muted">Contributions in the last year</span>}
            </p>
            <a href={`https://github.com/${USER}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">
              @{USER} ↗
            </a>
          </div>

          {weeks.length ? (
            <div className="rounded-xl border border-white/10 p-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                <div className="flex shrink-0 flex-col gap-[3px] pr-1 text-[10px] text-muted">
                  <span className="h-4" />
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((l, i) => (
                    <span key={i} className="h-[11px] leading-[11px]">{l}</span>
                  ))}
                </div>
                <div className="flex gap-[3px]">
                  {weeks.map((w, i) => (
                    <div key={i} className="flex w-[11px] flex-col gap-[3px]">
                      <span className="h-4 whitespace-nowrap text-[10px] text-muted">{labels[i]}</span>
                      {Array.from({ length: 7 }).map((_, k) => {
                        const d = w[k];
                        return d ? (
                          <span key={k} title={`${d.count} contributions on ${d.date}`} className={`h-[11px] w-[11px] rounded-[2px] ${shade[d.level] ?? shade[0]}`} />
                        ) : (
                          <span key={k} className="h-[11px] w-[11px]" />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-muted">
                <span>{repos !== undefined && `${repos} public repos`}{followers !== undefined && ` · ${followers} followers`}</span>
                <span className="flex items-center gap-1.5">
                  Less {shade.map((s) => <span key={s} className={`h-[11px] w-[11px] rounded-[2px] ${s}`} />)} More
                </span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted">Activity is loading from GitHub. Visit my profile to see my latest work.</p>
          )}
        </div>
      </div>
    </section>
  );
}