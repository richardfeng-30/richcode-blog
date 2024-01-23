'use client';
import Link from "@/components/Link";
import { useState } from "react";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const postData = {username: userName, password: password}
    try { 
      const resp = await fetch('api/login', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(postData)
      });
      const data = await resp.json();
      const { success } = data || {};
      if(success) {
        window.location.href = "/"
      }
    } catch(e) {
      console.log("e", e)
    }
  }

  return (
    <div className="flex justify-center">
    <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">

      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      {/* <form onSubmit={handleLogin}> */}

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">Username</label>
          <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => setUserName(e?.target?.value || "")}
            placeholder="Enter your username" required />
        </div>

        <div className="mb-6">
          <label for="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md"
            onChange={(e) => setPassword(e?.target?.value || "")}
            placeholder="Enter your password" required />
        </div>

        <button type="submit"
        onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Login
        </button>

      {/* </form> */}

      <p className="text-gray-600 text-sm mt-4">Don't have an account? 
        <Link key="register" href="/register" className="text-blue-500 ml-2">Sign up here</Link>
      </p>

    </div>
    </div>
  )
}
