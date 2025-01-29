// DecorativeElements.tsx
"use client";

export const GridPattern = () => (
  <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>
);

export const CirclePattern = () => (
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square opacity-[0.02] dark:opacity-[0.03]">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="78"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="58"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  </div>
);

export const Lines = () => (
  <div className="absolute left-0 top-0 w-px h-screen bg-gradient-to-b from-transparent via-border-light dark:via-border-dark to-transparent" />
);
