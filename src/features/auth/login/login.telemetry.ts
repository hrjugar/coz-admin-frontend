import { observability } from '#/lib/observability'

import type { LoginFormValues } from './login.schema'

export function trackLoginSubmitted(values: LoginFormValues) {
  observability.trackEvent({
    name: 'auth.login.submitted',
    attributes: {
      remember: values.remember,
      emailDomain: values.email.split('@')[1] ?? 'unknown',
    },
  })
}

export function trackLoginSucceeded() {
  observability.trackEvent({
    name: 'auth.login.succeeded',
  })
}

export function trackLoginFailed(error: unknown) {
  observability.captureError(error, {
    area: 'auth.login',
  })
}
