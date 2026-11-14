import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const OWNER = "DecadeB";
const REPO = "myburger";

// Pull the OAuth token Git Credential Manager already stores for github.com.
// The token is used in-memory only and is never printed.
async function getToken() {
  const candidates = [
    "C:\\Program Files\\Git\\cmd\\git.exe",
    "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
    "git",
  ];
  let lastErr;
  for (const exe of candidates) {
    try {
      const { stdout } = await run(exe, ["credential", "fill"], {
        input: "protocol=https\nhost=github.com\n\n",
      });
      const line = stdout.split("\n").find((l) => l.startsWith("password="));
      if (!line) throw new Error("no stored credential for github.com");
      return line.slice("password=".length).trim();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

async function api(path, method = "GET", body) {
  const token = await getToken();
  const res = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      "User-Agent": "myburger-deploy",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  return { status: res.status, data };
}

const [cmd, ...args] = process.argv.slice(2);

if (cmd === "repo") {
  const { status, data } = await api(`/repos/${OWNER}/${REPO}`);
  if (status !== 200) console.log(JSON.stringify({ status, message: data?.message }));
  else console.log(JSON.stringify({
    status,
    private: data.private,
    visibility: data.visibility,
    default_branch: data.default_branch,
    has_pages: data.has_pages,
  }));
} else if (cmd === "make-public") {
  const { status, data } = await api(`/repos/${OWNER}/${REPO}`, "PATCH", { private: false });
  console.log(JSON.stringify({ status, private: data?.private, visibility: data?.visibility, message: data?.message }));
} else if (cmd === "enable-pages-workflow") {
  const { status, data } = await api(`/repos/${OWNER}/${REPO}/pages`, "POST", { build_type: "workflow" });
  console.log(JSON.stringify({ status, message: data?.message ?? "pages enabled (workflow)" }));
} else if (cmd === "enable-pages-branch") {
  const { status, data } = await api(`/repos/${OWNER}/${REPO}/pages`, "POST", {
    source: { branch: args[0] ?? "gh-pages", path: "/" },
  });
  console.log(JSON.stringify({ status, message: data?.message ?? `pages enabled from ${args[0] ?? "gh-pages"}` }));
} else if (cmd === "pages-status") {
  const { status, data } = await api(`/repos/${OWNER}/${REPO}/pages`);
  console.log(JSON.stringify({
    status,
    url: data?.html_url,
    build_type: data?.build_type,
    source: data?.source,
    status_page: data?.status,
  }));
} else if (cmd === "build-status") {
  const { status, data } = await api(`/repos/${OWNER}/${REPO}/pages/builds/latest`);
  console.log(JSON.stringify({ status, build: data?.status, created: data?.created_at, error: data?.error?.message }));
} else {
  console.log("unknown command");
}
