import type { LoginFormValues } from './login.schema'

const DEV_ADMIN_EMAIL = import.meta.env.VITE_DEV_ADMIN_EMAIL
const DEV_ADMIN_PASSWORD = import.meta.env.VITE_DEV_ADMIN_PASSWORD

export async function loginWithPassword(values: LoginFormValues) {
  await new Promise((resolve) => window.setTimeout(resolve, 700))

  if (!DEV_ADMIN_EMAIL || !DEV_ADMIN_PASSWORD) {
    throw new Error(
      'Missing VITE_DEV_ADMIN_EMAIL or VITE_DEV_ADMIN_PASSWORD in the dev environment.',
    )
  }

  if (
    values.email.toLowerCase() !== DEV_ADMIN_EMAIL.toLowerCase() ||
    values.password !== DEV_ADMIN_PASSWORD
  ) {
    throw new Error('Invalid email or password.')
  }
}
