export type ObservabilityEvent = {
  name: string
  attributes?: Record<string, string | number | boolean | null | undefined>
}

export type ObservabilityErrorContext = {
  area: string
  attributes?: Record<string, string | number | boolean | null | undefined>
}

export interface ObservabilityClient {
  trackEvent(event: ObservabilityEvent): void
  captureError(error: unknown, context: ObservabilityErrorContext): void
}

function compactAttributes(
  attributes?: Record<string, string | number | boolean | null | undefined>,
) {
  if (!attributes) {
    return {}
  }

  return Object.fromEntries(
    Object.entries(attributes).filter(([, value]) => value !== undefined),
  )
}

export const observability: ObservabilityClient = {
  trackEvent(event) {
    if (import.meta.env.DEV) {
      console.info('[observability:event]', {
        runtime: import.meta.env.SSR ? 'server' : 'client',
        name: event.name,
        attributes: compactAttributes(event.attributes),
      })
    }
  },
  captureError(error, context) {
    if (import.meta.env.DEV) {
      console.error(
        '[observability:error]',
        context.area,
        compactAttributes(context.attributes),
        error,
      )
    }
  },
}
