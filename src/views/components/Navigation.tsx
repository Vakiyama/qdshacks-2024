export function NavHeader({ userId }: { userId: number | undefined }) {
  /* change userId to userObj later */
  return (
    <nav class="flex flex-wrap justify-between p-1 bg-slate-900">
      <button class="m-2 bg-blue-700 hover:bg-blue-800 rounded-lg p-2 pl-5 pr-5">
        <a class="text-gray-50" href="/">
          Home
        </a>
      </button>
      <h2 class="text-center text-2xl text-white font-bold mt-2">
        ⚡RE:Charge
      </h2>
      <div class="flex self-center">
        {userId ? (
          <button
            class="m-2 bg-blue-700  hover:bg-blue-800 rounded-lg p-2 pl-5 pr-5"
            hx-post="/auth/logout"
            hx-swap="innerHTML"
            hx-target="body"
          >
            <p class="text-white">Logout</p>
          </button>
        ) : (
          <button class="m-2 bg-blue-700 hover:bg-blue-800 rounded-lg p-2 pl-5 pr-5">
            <a class="text-gray-50" href="/auth/login">
              Login
            </a>
          </button>
        )}
      </div>
    </nav>
  );
}
