'use client'
import Link from '@/components/Link'
import Popup from '@/components/Popup'
import { useUserProvider } from 'context/context'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPopup, setShowPopup] = useState(false) // State to manage popup visibility
  const { state, setState } = useUserProvider()
  const [errorText, setErrorText] = useState('')

  const handleLogin = async (e) => {
    console.log('state', state)
    // e.preventDefault()
    const postData = { email: email, password: password }
    if (email && password) {
      try {
        const resp = await fetch('api/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(postData),
        })
        const data = await resp.json()
        const { success } = data || {}
        if (success) {
          window.location.href = '/'
          setState({ email: email, valid: true })
        } else {
          // setState({email: email, valid: true})
          setShowPopup(true)
          setErrorText('Error')
        }
      } catch (e) {
        console.log('e', e)
      }
    }
  }
  console.log('state', state)

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e?.target?.value || '')}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              {/* <div className="text-sm">
                <a href="#" className="font-semibold text-sky-500 hover:text-sky-400">
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e?.target?.value || '')}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold leading-6 text-sky-500 hover:text-sky-400">
            Sign up
          </Link>
        </p>
      </div>

      <Popup
        title={errorText}
        text={'You failed to log in.'}
        text2={'Please go back and try again.'}
        show={showPopup}
        setShow={() => {
          setShowPopup(false)
        }}
      />
    </div>
  )
}
