"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  tasks,
  epics,
  sprintsMeta,
  type Task,
  type SprintId,
  type Priority,
  type Status,
  type Role,
} from "./data";

// ── Config maps ──────────────────────────────────────────────────

const priorityCfg: Record<Priority, { label: string; color: string }> = {
  critical: { label: "Critical", color: "#F85149" },
  high:     { label: "High",     color: "#F97316" },
  medium:   { label: "Medium",   color: "#D29922" },
  low:      { label: "Low",      color: "#8B949E" },
};

const statusCfg: Record<Status, { label: string; color: string; border: string }> = {
  "todo":        { label: "To Do",       color: "#8B949E", border: "border-[#30363D]" },
  "in-progress": { label: "In Progress", color: "#0070F3", border: "border-[#0070F3]/40" },
  "review":      { label: "Review",      color: "#D29922", border: "border-[#D29922]/40" },
  "done":        { label: "Done",        color: "#3FB950", border: "border-[#3FB950]/40" },
};

const roleCfg: Record<Role, { label: string; cls: string }> = {
  pm:   { label: "PM",      cls: "text-[#0EA5E9] bg-[#0EA5E9]/10 border-[#0EA5E9]/30" },
  dev:  { label: "Dev",     cls: "text-[#A78BFA] bg-[#A78BFA]/10 border-[#A78BFA]/30" },
  both: { label: "PM + Dev",cls: "text-[#3FB950] bg-[#3FB950]/10 border-[#3FB950]/30" },
};

const STATUSES: Status[] = ["todo", "in-progress", "review", "done"];

// ── Sub-components ───────────────────────────────────────────────

function EpicBadge({ epicId }: { epicId: string }) {
  const epic = epics.find((e) => e.id === epicId);
  if (!epic) return null;
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-medium"
      style={{ color: epic.color, backgroundColor: `${epic.color}15`, border: `1px solid ${epic.color}25` }}
    >
      {epic.icon} {epic.label}
    </span>
  );
}

function TaskCard({ task, view }: { task: Task; view: "board" | "list" }) {
  const [expanded, setExpanded] = useState(false);
  const p = priorityCfg[task.priority];
  const r = roleCfg[task.role];

  if (view === "list") {
    return (
      <tr className="border-b border-[#30363D]/50 hover:bg-[#161B22]/60 transition-colors">
        <td className="py-3 px-4">
          <span className="text-[11px] font-mono text-[#8B949E]">{task.id}</span>
        </td>
        <td className="py-3 px-4">
          <span
            className="inline-block w-2 h-2 rounded-full mr-2"
            style={{ backgroundColor: p.color }}
          />
          <span className="text-[10px] font-semibold" style={{ color: p.color }}>{p.label}</span>
        </td>
        <td className="py-3 px-4 max-w-xs">
          <div className="text-sm font-semibold text-[#E6EDF3] leading-snug">{task.title}</div>
          <div className="text-xs text-[#8B949E] mt-0.5 line-clamp-2">{task.description}</div>
        </td>
        <td className="py-3 px-4">
          <EpicBadge epicId={task.epicId} />
        </td>
        <td className="py-3 px-4">
          <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${r.cls}`}>{r.label}</span>
        </td>
        <td className="py-3 px-4 text-center">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#30363D] text-xs font-bold text-[#8B949E]">
            {task.storyPoints}
          </span>
        </td>
        <td className="py-3 px-4">
          <div className="flex flex-wrap gap-1">
            {task.labels.slice(0, 2).map((l) => (
              <span key={l} className="text-[10px] px-1.5 py-0.5 rounded bg-[#30363D]/60 text-[#8B949E]">{l}</span>
            ))}
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="bg-[#161B22] border border-[#30363D] rounded-xl p-3.5 hover:border-[#0070F3]/40 transition-all cursor-pointer select-none group"
      style={{ borderLeft: `3px solid ${p.color}` }}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[10px] font-mono text-[#8B949E] group-hover:text-[#8B949E]">{task.id}</span>
        <span
          className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
          style={{ color: p.color, backgroundColor: `${p.color}15` }}
        >
          {p.label}
        </span>
      </div>
      <h4 className="text-sm font-semibold text-[#E6EDF3] mb-1.5 leading-snug">{task.title}</h4>
      {expanded && (
        <p className="text-xs text-[#8B949E] leading-relaxed mb-2.5">{task.description}</p>
      )}
      {!expanded && (
        <p className="text-xs text-[#8B949E] line-clamp-2 mb-2.5">{task.description}</p>
      )}
      <div className="flex items-center gap-1.5 flex-wrap">
        <EpicBadge epicId={task.epicId} />
        <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${r.cls}`}>
          {r.label}
        </span>
        <span className="ml-auto inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#30363D] text-[10px] font-bold text-[#8B949E]">
          {task.storyPoints}
        </span>
      </div>
      {task.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {task.labels.map((l) => (
            <span key={l} className="text-[10px] px-1.5 py-0.5 rounded bg-[#30363D]/50 text-[#8B949E]">
              {l}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────

export default function SprintBoardPage() {
  const [activeSprintId, setActiveSprintId] = useState<SprintId>("sprint-1");
  const [roleFilter, setRoleFilter] = useState<Role | "all">("all");
  const [view, setView] = useState<"board" | "list">("board");

  const activeSprint = sprintsMeta.find((s) => s.id === activeSprintId)!;

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchSprint = t.sprint === activeSprintId;
      const matchRole =
        roleFilter === "all" ||
        t.role === roleFilter ||
        (roleFilter !== "both" && t.role === "both");
      return matchSprint && matchRole;
    });
  }, [activeSprintId, roleFilter]);

  const sprintStats = useMemo(() =>
    sprintsMeta.map((s) => {
      const st = tasks.filter((t) => t.sprint === s.id);
      return { id: s.id, count: st.length, sp: st.reduce((a, t) => a + t.storyPoints, 0) };
    }), []);

  const totalSP = tasks
    .filter((t) => t.sprint !== "backlog")
    .reduce((a, t) => a + t.storyPoints, 0);

  const handleExportCSV = () => {
    const headers = ["Summary", "Issue Type", "Priority", "Description", "Labels", "Story Points", "Epic Link", "Sprint"];
    const rows = filteredTasks.map((t) => [
      t.title,
      "Story",
      t.priority.charAt(0).toUpperCase() + t.priority.slice(1),
      t.description,
      t.labels.join(";"),
      String(t.storyPoints),
      epics.find((e) => e.id === t.epicId)?.label ?? "",
      activeSprint.label,
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${v.replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jira-import-${activeSprintId}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0D1117]">

      {/* ── Top nav ─────────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-md border-b border-[#30363D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-[#8B949E] hover:text-[#E6EDF3] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Powrót</span>
            </Link>
            <span className="text-[#30363D]">/</span>
            <span className="text-sm text-[#E6EDF3] font-medium">Sprint Board</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#0070F3] rounded flex items-center justify-center font-bold text-white text-xs">N</div>
            <span className="text-sm text-[#8B949E] hidden sm:block">Next.js Migration Guide</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D29922] bg-[#D29922]/10 border border-[#D29922]/20 rounded-full mb-4 uppercase tracking-widest">
            Jira Board — propozycja
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-3">
            Zadania migracji do Twoich sprintów
          </h1>
          <p className="text-[#8B949E] max-w-2xl mx-auto mb-2">
            Gotowe tickety do wklejenia w Jirę — podzielone na 4 sprinty (8 tygodni), z rolami PM i Dev,
            story pointami i epics. Wspólny board dla całego zespołu.
          </p>
          <p className="text-xs text-[#8B949E]/60">
            Kliknij kartę, aby rozwinąć opis. Pobierz CSV, aby zaimportować sprint bezpośrednio do Jiry.
          </p>
        </div>

        {/* ── Stats bar ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "📋", value: String(tasks.length), label: "Wszystkich zadań" },
            { icon: "⚡", value: String(totalSP), label: "Story Points (4 sprinty)" },
            { icon: "📅", value: "8 tyg.", label: "Szacowany czas" },
            { icon: "🎯", value: String(epics.length), label: "Epics" },
          ].map((s) => (
            <div key={s.label} className="bg-[#161B22] border border-[#30363D] rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-[#E6EDF3]">{s.value}</div>
              <div className="text-xs text-[#8B949E] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Epic legend ─────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-[#8B949E] font-semibold uppercase tracking-wider">Epics:</span>
          {epics.map((e) => (
            <span
              key={e.id}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ color: e.color, backgroundColor: `${e.color}15`, border: `1px solid ${e.color}25` }}
            >
              {e.icon} {e.label}
            </span>
          ))}
        </div>

        {/* ── Sprint tabs ─────────────────────────────────────────── */}
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl overflow-hidden">
          <div className="flex overflow-x-auto border-b border-[#30363D] scrollbar-hide">
            {sprintsMeta.map((s) => {
              const stat = sprintStats.find((x) => x.id === s.id);
              const isActive = activeSprintId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSprintId(s.id)}
                  className={`flex-shrink-0 flex flex-col items-start px-5 py-4 text-sm font-medium transition-all border-b-2 whitespace-nowrap min-w-[120px] ${
                    isActive
                      ? "border-[#0070F3] text-[#E6EDF3] bg-[#0070F3]/5"
                      : "border-transparent text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#0D1117]/40"
                  }`}
                >
                  <span className="font-semibold">{s.label}</span>
                  <span className="text-[10px] mt-0.5" style={{ color: isActive ? "#0070F3" : "#8B949E" }}>
                    {s.dates} · {stat?.sp ?? 0} SP
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sprint goal */}
          <div className="px-6 py-4 border-b border-[#30363D]/60 flex items-start gap-3">
            <span className="text-lg">🎯</span>
            <div>
              <span className="text-xs font-semibold text-[#0070F3] uppercase tracking-wider">Sprint Goal</span>
              <p className="text-sm text-[#8B949E] mt-0.5">{activeSprint.goal}</p>
            </div>
          </div>

          {/* Filters + view toggle */}
          <div className="px-6 py-4 border-b border-[#30363D]/60 flex flex-wrap items-center gap-4">
            {/* Role filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#8B949E] uppercase tracking-wider">Rola:</span>
              <div className="flex gap-1 bg-[#0D1117] border border-[#30363D] rounded-lg p-1">
                {(["all", "pm", "dev"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRoleFilter(r)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      roleFilter === r
                        ? r === "pm"
                          ? "bg-[#0EA5E9]/15 text-[#0EA5E9] border border-[#0EA5E9]/30"
                          : r === "dev"
                          ? "bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30"
                          : "bg-[#0070F3]/15 text-[#0070F3] border border-[#0070F3]/30"
                        : "text-[#8B949E] hover:text-[#E6EDF3]"
                    }`}
                  >
                    {r === "all" ? "Wszystkie" : r === "pm" ? "PM" : "Dev"}
                  </button>
                ))}
              </div>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#8B949E] uppercase tracking-wider">Widok:</span>
              <div className="flex gap-1 bg-[#0D1117] border border-[#30363D] rounded-lg p-1">
                {(["board", "list"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      view === v
                        ? "bg-[#0070F3]/15 text-[#0070F3] border border-[#0070F3]/30"
                        : "text-[#8B949E] hover:text-[#E6EDF3]"
                    }`}
                  >
                    {v === "board" ? "⬜ Board" : "☰ Lista"}
                  </button>
                ))}
              </div>
            </div>

            <div className="ml-auto text-xs text-[#8B949E]">
              {filteredTasks.length} zadań ·{" "}
              {filteredTasks.reduce((a, t) => a + t.storyPoints, 0)} SP
            </div>
          </div>

          {/* ── Board view ──────────────────────────────────────── */}
          {view === "board" && (
            <div className="p-6 overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-w-[700px]">
                {STATUSES.map((status) => {
                  const sc = statusCfg[status];
                  const colTasks = filteredTasks.filter((t) => t.status === status);
                  const colSP = colTasks.reduce((a, t) => a + t.storyPoints, 0);
                  return (
                    <div key={status} className={`rounded-xl border ${sc.border} bg-[#0D1117]/60 overflow-hidden`}>
                      {/* Column header */}
                      <div className="px-4 py-3 border-b border-[#30363D]/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: sc.color }}
                          />
                          <span className="text-xs font-semibold text-[#E6EDF3] uppercase tracking-wider">
                            {sc.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#8B949E]">{colSP} SP</span>
                          <span
                            className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${sc.color}20`, color: sc.color }}
                          >
                            {colTasks.length}
                          </span>
                        </div>
                      </div>
                      {/* Cards */}
                      <div className="p-3 space-y-3 min-h-[200px]">
                        {colTasks.length === 0 ? (
                          <div className="flex items-center justify-center h-24 text-xs text-[#8B949E]/50 border border-dashed border-[#30363D]/50 rounded-lg">
                            Brak zadań
                          </div>
                        ) : (
                          colTasks.map((t) => (
                            <TaskCard key={t.id} task={t} view="board" />
                          ))
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── List view ───────────────────────────────────────── */}
          {view === "list" && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#30363D] text-left">
                    {["ID", "Priorytet", "Tytuł / Opis", "Epic", "Rola", "SP", "Labele"].map((h) => (
                      <th key={h} className="px-4 py-3 text-[10px] font-semibold text-[#8B949E] uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-10 text-center text-sm text-[#8B949E]">
                        Brak zadań dla wybranych filtrów
                      </td>
                    </tr>
                  ) : (
                    filteredTasks.map((t) => (
                      <TaskCard key={t.id} task={t} view="list" />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── Jira CSV export ─────────────────────────────────────── */}
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="text-4xl">📥</div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#E6EDF3] mb-1">
              Import do Jiry — jeden klik
            </h3>
            <p className="text-sm text-[#8B949E] leading-relaxed">
              Pobierz CSV dla aktywnego sprintu ({activeSprint.label}) i zaimportuj go w Jirze przez{" "}
              <span className="text-[#E6EDF3]">Project Settings → Import issues → CSV</span>.
              Pola Summary, Priority, Description, Story Points i Labels są gotowe do mapowania.
            </p>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#0070F3] hover:bg-[#0060D9] transition-all hover:shadow-lg hover:shadow-[#0070F3]/25"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Pobierz CSV — {activeSprint.label}
          </button>
        </div>

        {/* ── Role guide ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              role: "PM",
              color: "#0EA5E9",
              icon: "📊",
              tasks: tasks.filter((t) => t.role === "pm" && t.sprint !== "backlog").length,
              sp: tasks.filter((t) => t.role === "pm" && t.sprint !== "backlog").reduce((a, t) => a + t.storyPoints, 0),
              desc: "Definicja KPI, refinement, komunikacja ze stakeholderami, dokumentacja i go/no-go decisions.",
            },
            {
              role: "Dev",
              color: "#A78BFA",
              icon: "💻",
              tasks: tasks.filter((t) => t.role === "dev" && t.sprint !== "backlog").length,
              sp: tasks.filter((t) => t.role === "dev" && t.sprint !== "backlog").reduce((a, t) => a + t.storyPoints, 0),
              desc: "Setup repo, PoC, migracja komponentów, optymalizacja wydajności, testy E2E i cutover techniczny.",
            },
            {
              role: "PM + Dev",
              color: "#3FB950",
              icon: "🤝",
              tasks: tasks.filter((t) => t.role === "both" && t.sprint !== "backlog").length,
              sp: tasks.filter((t) => t.role === "both" && t.sprint !== "backlog").reduce((a, t) => a + t.storyPoints, 0),
              desc: "Zadania wymagające ścisłej współpracy: audit, mapowanie komponentów, refinement i go-live.",
            },
          ].map((r) => (
            <div
              key={r.role}
              className="bg-[#161B22] border border-[#30363D] rounded-xl p-5"
              style={{ borderTop: `3px solid ${r.color}` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{r.icon}</span>
                <div>
                  <span className="text-sm font-bold text-[#E6EDF3]">{r.role}</span>
                  <div className="text-xs text-[#8B949E]">{r.tasks} zadań · {r.sp} SP</div>
                </div>
              </div>
              <p className="text-xs text-[#8B949E] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex flex-wrap items-center justify-center gap-4 pb-8">
          <Link
            href="/showcases"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#30363D] hover:border-[#0070F3]/40 text-[#8B949E] hover:text-[#E6EDF3] rounded-lg transition-all text-sm"
          >
            Showcases →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#30363D] hover:border-[#0070F3]/40 text-[#8B949E] hover:text-[#E6EDF3] rounded-lg transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Strona główna
          </Link>
        </div>

      </div>
    </div>
  );
}
