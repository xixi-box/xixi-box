import { mkdir, writeFile } from 'node:fs/promises';

const username = process.env.PROFILE_GITHUB_USER || 'xixi-box';
const token = process.env.GH_TOKEN;
const excludedOwners = new Set(
  (process.env.EXCLUDED_REPO_OWNERS || 'xixi-box,wangshun-china')
    .split(',')
    .map((owner) => owner.trim().toLowerCase())
    .filter(Boolean),
);

if (!token) {
  throw new Error('GH_TOKEN is required to query merged pull requests.');
}

const query = `is:pr is:merged author:${username}`;
const allPullRequests = [];

for (let page = 1; ; page += 1) {
  const url = new URL('https://api.github.com/search/issues');
  url.searchParams.set('q', query);
  url.searchParams.set('per_page', '100');
  url.searchParams.set('page', String(page));

  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'xixi-box-profile-visuals',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub search request failed: HTTP ${response.status}`);
  }

  const result = await response.json();
  if (result.incomplete_results) {
    throw new Error('GitHub returned incomplete search results; refusing to publish an inaccurate count.');
  }

  allPullRequests.push(...result.items);
  if (allPullRequests.length >= result.total_count) break;
  if (page >= 10) {
    throw new Error('GitHub search is capped at 1,000 results; cannot determine an exact count.');
  }
}

const upstream = allPullRequests.filter((item) => {
  const owner = item.repository_url?.split('/')[4]?.toLowerCase();
  if (!owner) throw new Error('GitHub search result is missing repository owner.');
  return !excludedOwners.has(owner);
});

const uniqueRepos = new Set(upstream.map((item) => item.repository_url));
const updated = new Date().toISOString().slice(0, 10);
const stats = [
  { value: upstream.length, label: 'MERGED UPSTREAM PRS', x: 58 },
  { value: uniqueRepos.size, label: 'UPSTREAM REPOSITORIES', x: 330 },
  { value: allPullRequests.length, label: 'ALL MERGED PRS', x: 604 },
];

const metrics = stats.map(({ value, label, x }) => `
  <text x="${x}" y="100" font-size="52" font-weight="700" fill="#f1f8ff">${value}</text>
  <text x="${x}" y="128" font-size="13" font-weight="700" letter-spacing="1.4" fill="#a4c3d6">${label}</text>
`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="860" height="180" viewBox="0 0 860 180" role="img" aria-label="${upstream.length} merged upstream pull requests across ${uniqueRepos.size} repositories">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091726" />
      <stop offset="100%" stop-color="#103148" />
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5eead4" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>
  <rect width="860" height="180" rx="14" fill="url(#bg)" />
  <rect x="0" y="0" width="860" height="4" rx="2" fill="url(#accent)" />
  <text x="58" y="35" font-size="13" font-family="Arial, Helvetica, sans-serif" font-weight="700" letter-spacing="3" fill="#5eead4">OPEN SOURCE IMPACT</text>
  <g font-family="Arial, Helvetica, sans-serif">${metrics}
    <path d="M 300 58 V 139 M 574 58 V 139" stroke="#4a728b" opacity="0.48" />
    <text x="800" y="160" text-anchor="end" font-size="11" fill="#7295af">UPDATED ${updated} UTC</text>
  </g>
</svg>\n`;

await mkdir('dist', { recursive: true });
await writeFile('dist/merged-prs.svg', svg, 'utf8');
console.log(`Updated upstream merged PR card: ${upstream.length} PRs in ${uniqueRepos.size} repositories (${allPullRequests.length} total merged).`);
