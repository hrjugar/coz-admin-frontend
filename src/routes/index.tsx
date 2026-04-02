import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-8 sm:px-6">
      <section className="w-full max-w-[520px] rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(165deg,var(--color-surface-strong),var(--color-surface))] p-8 shadow-[0_1px_0_var(--color-highlight)_inset,0_28px_60px_rgba(17,17,17,0.12),0_12px_24px_rgba(77,103,177,0.08)] backdrop-blur-[6px] max-sm:rounded-[24px] max-sm:p-6">
        <div className="mb-8">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(77,103,177,0.18)] bg-[color-mix(in_oklab,var(--color-surface-strong)_88%,white_12%)] px-4 py-2 text-sm font-semibold tracking-[0.2em] shadow-[0_10px_24px_rgba(77,103,177,0.08)] uppercase">
              <span className="text-[var(--color-primary)]">co</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-[var(--color-secondary)]">z</span>
            </span>
          </div>
          <p className="mb-3 text-center text-xs font-bold tracking-[0.18em] text-[var(--color-primary)] uppercase">
            Co-Z Coworking Space
          </p>
          <h1 className="m-0 text-center text-[clamp(2rem,4vw,2.75rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-[var(--color-text)]">
            Admin Portal Login
          </h1>
          <p className="mt-3.5 text-center leading-[1.65] text-[var(--color-text-muted)]">
            Sign in with your staff account.
          </p>
        </div>

        <form className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-[0.92rem] font-semibold text-[var(--color-text)]">
              Email
            </span>
            <input
              className="w-full rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-strong)_88%,white_12%)] px-4 py-[0.95rem] text-[var(--color-text)] outline-none transition-[border-color,box-shadow,background-color] duration-180 placeholder:text-[color-mix(in_oklab,var(--color-text-muted)_70%,transparent_30%)] focus:border-[color-mix(in_oklab,var(--color-secondary)_65%,var(--color-border))] focus:shadow-[0_0_0_4px_rgba(77,103,177,0.14)]"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[0.92rem] font-semibold text-[var(--color-text)]">
              Password
            </span>
            <input
              className="w-full rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-strong)_88%,white_12%)] px-4 py-[0.95rem] text-[var(--color-text)] outline-none transition-[border-color,box-shadow,background-color] duration-180 placeholder:text-[color-mix(in_oklab,var(--color-text-muted)_70%,transparent_30%)] focus:border-[color-mix(in_oklab,var(--color-secondary)_65%,var(--color-border))] focus:shadow-[0_0_0_4px_rgba(77,103,177,0.14)]"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </label>

          <div className="mt-[0.1rem] flex items-center gap-4">
            <label className="inline-flex items-center gap-[0.55rem] text-[0.92rem] text-[var(--color-text-muted)]">
              <input
                className="h-4 w-4 accent-[var(--color-primary)]"
                type="checkbox"
                name="remember"
              />
              <span>Remember this device</span>
            </label>
          </div>

          <button
            className="cursor-pointer rounded-2xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] px-[1.1rem] py-4 font-bold text-[#f5f1ea] shadow-[0_14px_30px_rgba(213,84,45,0.24)] transition-[transform,box-shadow,filter] duration-180 hover:-translate-y-px hover:shadow-[0_18px_34px_rgba(213,84,45,0.28)] hover:saturate-[1.04] focus-visible:shadow-[0_0_0_4px_rgba(77,103,177,0.18),0_18px_34px_rgba(213,84,45,0.28)] focus-visible:outline-none"
            type="button"
          >
            Sign In
          </button>

          <p className="mt-0.5 text-center text-[0.84rem] text-[var(--color-text-muted)]">
            Authorized personnel only.
          </p>
        </form>
      </section>
    </main>
  )
}
