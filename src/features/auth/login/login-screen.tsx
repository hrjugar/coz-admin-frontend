import { LoginForm } from './login-form'

export function LoginScreen() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-8 sm:px-6">
      <section className="w-full max-w-130 rounded-[28px] border border-(--color-border) bg-[linear-gradient(165deg,var(--color-surface-strong),var(--color-surface))] p-8 shadow-[0_1px_0_var(--color-highlight)_inset,0_28px_60px_rgba(17,17,17,0.12),0_12px_24px_rgba(77,103,177,0.08)] backdrop-blur-[6px] max-sm:rounded-3xl max-sm:p-6">
        <div className="mb-8">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(77,103,177,0.18)] bg-[color-mix(in_oklab,var(--color-surface-strong)_88%,white_12%)] px-4 py-2 text-sm font-semibold tracking-[0.2em] shadow-[0_10px_24px_rgba(77,103,177,0.08)] uppercase">
              <span className="text-(--color-primary)">co</span>
              <span className="h-1.5 w-1.5 rounded-full bg-(--color-secondary)" />
              <span className="text-(--color-secondary)">z</span>
            </span>
          </div>
          <p className="mb-3 text-center text-xs font-bold tracking-[0.18em] text-(--color-primary) uppercase">
            Co-Z Coworking Space
          </p>
          <h1 className="m-0 text-center text-[clamp(2rem,4vw,2.75rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-(--color-text)">
            Admin Portal Login
          </h1>
          <p className="mt-3.5 text-center leading-[1.65] text-(--color-text-muted)">
            Sign in with your staff account.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  )
}
