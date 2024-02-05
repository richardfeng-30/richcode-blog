import Link from '@/components/Link'

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full rounded bg-white p-8 shadow-md sm:w-96">
        <h2 className="mb-6 text-2xl font-semibold">Register</h2>

        {/* <form action="#" method="POST"> */}

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="school" className="mb-2 block text-sm font-medium text-gray-600">
            School
          </label>
          <input
            type="text"
            id="school"
            name="school"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your school"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="age" className="mb-2 block text-sm font-medium text-gray-600">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full rounded-md border px-3 py-2"
            placeholder="Enter your age"
            required
          />
        </div>

        <button
          type="submit"
          className="focus:shadow-outline-blue w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>

        {/* </form> */}

        <p className="mt-4 text-sm text-gray-600">
          Already have an account
          <Link key="register" href="/login" className="ml-2 text-blue-500">
            {' '}
            Log in here
          </Link>
        </p>
      </div>
    </div>
  )
}
