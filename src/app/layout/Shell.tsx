import type { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="shell">
      <header className="shell__header">
        <div>
          <p className="eyebrow">ICIG Wuppertal</p>
          <h1>IT Service Desk</h1>
          <p className="subtitle">Internal support overview</p>
        </div>
        <div className="shell__badge">Internal Tool</div>
      </header>
      <main className="shell__content" id="main-content">
        {children}
      </main>
      <footer className="shell__footer">React + TypeScript sample</footer>
    </div>
  );
}
