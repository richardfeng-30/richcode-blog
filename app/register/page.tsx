import Link from "@/components/Link";

export default function RegisterPage() {

    return (
      <div className="flex justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
  
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
  
        {/* <form action="#" method="POST"> */}

        <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name" required />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your username" required />
          </div>
  
          <div className="mb-4">
            <label for="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password" required />
          </div>

          <div className="mb-4">
            <label for="school" className="block text-gray-600 text-sm font-medium mb-2">School</label>
            <input type="text" id="school" name="school" className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your school" required />
          </div>

          <div className="mb-6">
            <label for="age" className="block text-gray-600 text-sm font-medium mb-2">Age</label>
            <input type="number" id="age" name="age" className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your age" required />
          </div>
  
          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Login
          </button>
  
        {/* </form> */}
  
        <p className="text-gray-600 text-sm mt-4">Already have an account 
            <Link key="register" href="/login" className="text-blue-500 ml-2"> Log in here</Link>
        </p>

  
      </div>
      </div>
    )
  }
  