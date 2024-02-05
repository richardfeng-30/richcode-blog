'use client'
import Link from '@/components/Link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    const postData = { email: email, password: password }
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
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  return (
    // <div className="flex justify-center">
    //   <div className="w-full rounded bg-white p-8 shadow-md sm:w-96">
    //     <h2 className="mb-6 text-2xl font-semibold">Login</h2>

    //     {/* <form onSubmit={handleLogin}> */}

    //     <div className="mb-4">
    //       <label className="mb-2 block text-sm font-medium text-gray-600">Username</label>
    //       <input
    //         type="text"
    //         id="username"
    //         name="username"
    //         className="w-full rounded-md border px-3 py-2"
    //         onChange={(e) => setUserName(e?.target?.value || '')}
    //         placeholder="Enter your username"
    //         required
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-600">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         className="w-full rounded-md border px-3 py-2"
    //         onChange={(e) => setPassword(e?.target?.value || '')}
    //         placeholder="Enter your password"
    //         required
    //       />
    //     </div>

    //     <button
    //       type="submit"
    //       onClick={handleLogin}
    //       className="focus:shadow-outline-blue w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none"
    //     >
    //       Login
    //     </button>

    //     {/* </form> */}

    //     <p className="mt-4 text-sm text-gray-600">
    //       Don't have an account?
    //       <Link key="register" href="/register" className="ml-2 text-blue-500">
    //         Sign up here
    //       </Link>
    //     </p>
    //   </div>
    // </div>

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
              <div className="text-sm">
                <a href="#" className="font-semibold text-sky-500 hover:text-sky-400">
                  Forgot password?
                </a>
              </div>
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
          <Link
            href="/register"
            className="font-semibold leading-6 text-sky-500 hover:text-sky-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
