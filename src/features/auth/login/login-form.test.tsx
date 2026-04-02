import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LoginForm } from './login-form'

const TEST_ADMIN_EMAIL = 'dev-admin@example.test'
const TEST_ADMIN_PASSWORD = 'dev-password-123'

describe('LoginForm', () => {
  it('submits parsed form values through the injected login action', async () => {
    const onLogin = vi.fn().mockResolvedValue(undefined)

    render(<LoginForm onLogin={onLogin} />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: TEST_ADMIN_EMAIL },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: TEST_ADMIN_PASSWORD },
    })
    fireEvent.click(screen.getByLabelText(/remember this device/i))
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(onLogin).toHaveBeenCalledWith({
        email: TEST_ADMIN_EMAIL,
        password: TEST_ADMIN_PASSWORD,
        remember: true,
      })
    })

    expect(
      screen.getByText('Frontend flow looks good. Connect the backend next.'),
    ).toBeTruthy()
  })
})
