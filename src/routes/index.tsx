import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const Route = createFileRoute('/')({ component: App })

const loginSchema = z.object({
  email: z.email({ message: 'Enter a valid email address.' }),
  password: z
    .string()
    .min(1, 'Enter your password.')
    .min(8, 'Password must be at least 8 characters.'),
  remember: z.boolean().default(false),
})

type LoginFormValues = z.infer<typeof loginSchema>
type LoginFormInput = z.input<typeof loginSchema>

async function mockLoginRequest(values: LoginFormValues) {
  await new Promise((resolve) => window.setTimeout(resolve, 700))

  if (
    values.email.toLowerCase() !== 'admin@coz.space' ||
    values.password !== 'coz-admin'
  ) {
    throw new Error('Invalid email or password.')
  }
}

function App() {
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInput, any, LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    mode: 'onBlur',
  })

  async function onSubmit(values: LoginFormValues) {
    setFormMessage(null)

    try {
      await mockLoginRequest(values)
      setFormMessage('Frontend flow looks good. Connect the backend next.')
    } catch (error) {
      setFormMessage(
        error instanceof Error ? error.message : 'Something went wrong.',
      )
    }
  }

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

        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="grid gap-2">
            <span className="text-[0.92rem] font-semibold text-(--color-text)">
              Email
            </span>
            <input
              className="w-full rounded-2xl border border-(--color-border) bg-[color-mix(in_oklab,var(--color-surface-strong)_88%,white_12%)] px-4 py-[0.95rem] text-(--color-text) outline-none transition-[border-color,box-shadow,background-color] duration-180 placeholder:text-[color-mix(in_oklab,var(--color-text-muted)_70%,transparent_30%)] focus:border-[color-mix(in_oklab,var(--color-secondary)_65%,var(--color-border))] focus:shadow-[0_0_0_4px_rgba(77,103,177,0.14)] aria-invalid:border-[rgba(213,84,45,0.55)] aria-invalid:shadow-[0_0_0_4px_rgba(213,84,45,0.12)]"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
            />
            {errors.email ? (
              <p className="m-0 text-sm text-(--color-primary)">
                {errors.email.message}
              </p>
            ) : null}
          </label>

          <label className="grid gap-2">
            <span className="text-[0.92rem] font-semibold text-(--color-text)">
              Password
            </span>
            <input
              className="w-full rounded-2xl border border-(--color-border) bg-[color-mix(in_oklab,var(--color-surface-strong)_88%,white_12%)] px-4 py-[0.95rem] text-(--color-text) outline-none transition-[border-color,box-shadow,background-color] duration-180 placeholder:text-[color-mix(in_oklab,var(--color-text-muted)_70%,transparent_30%)] focus:border-[color-mix(in_oklab,var(--color-secondary)_65%,var(--color-border))] focus:shadow-[0_0_0_4px_rgba(77,103,177,0.14)] aria-invalid:border-[rgba(213,84,45,0.55)] aria-invalid:shadow-[0_0_0_4px_rgba(213,84,45,0.12)]"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              aria-invalid={errors.password ? 'true' : 'false'}
              {...register('password')}
            />
            {errors.password ? (
              <p className="m-0 text-sm text-(--color-primary)">
                {errors.password.message}
              </p>
            ) : null}
          </label>

          <div className="mt-[0.1rem] flex items-center gap-4">
            <label className="inline-flex items-center gap-[0.55rem] text-[0.92rem] text-(--color-text-muted)">
              <input
                className="h-4 w-4 accent-(--color-primary)"
                type="checkbox"
                {...register('remember')}
              />
              <span>Remember this device</span>
            </label>
          </div>

          {formMessage ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                formMessage === 'Frontend flow looks good. Connect the backend next.'
                  ? 'border-[rgba(77,103,177,0.24)] bg-[rgba(77,103,177,0.08)] text-(--color-secondary-strong)'
                  : 'border-[rgba(213,84,45,0.22)] bg-[rgba(213,84,45,0.08)] text-(--color-primary-strong)'
              }`}
              role="alert"
            >
              {formMessage}
            </div>
          ) : null}

          <button
            className="cursor-pointer rounded-2xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-strong))] px-[1.1rem] py-4 font-bold text-[#f5f1ea] shadow-[0_14px_30px_rgba(213,84,45,0.24)] transition-[transform,box-shadow,filter] duration-180 hover:-translate-y-px hover:shadow-[0_18px_34px_rgba(213,84,45,0.28)] hover:saturate-[1.04] focus-visible:shadow-[0_0_0_4px_rgba(77,103,177,0.18),0_18px_34px_rgba(213,84,45,0.28)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:saturate-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>

          <p className="mt-0.5 text-center text-[0.84rem] text-(--color-text-muted)">
            Authorized personnel only.
          </p>
        </form>
      </section>
    </main>
  )
}
