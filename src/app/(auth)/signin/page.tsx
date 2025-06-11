export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Sign In Page</h1>
      <p className="text-lg">This is the sign in page.</p>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </form>
      <p className="text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
}
