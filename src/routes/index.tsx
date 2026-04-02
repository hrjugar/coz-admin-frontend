import { createFileRoute } from '@tanstack/react-router'

import { LoginScreen } from '#/features/auth/login/login-screen'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <LoginScreen />
}
