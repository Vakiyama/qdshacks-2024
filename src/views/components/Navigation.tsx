export function NavHeader({ userId }: { userId: number | undefined }) {
  return (
    <nav class="flex">
      {!userId ? (
        <button
          class="m-2 bg-indigo-500 rounded-lg p-2 pl-5 pr-5"
          hx-post="/auth/logout"
          hx-swap="innerHTML"
          hx-target="body"
        >
          <p class="text-gray-50">Logout</p>
        </button>
      ) : (
        <button class="m-2 bg-indigo-500 rounded-lg p-2 pl-5 pr-5">
          <a class="text-gray-50" href="/auth/login">
            Login
          </a>
        </button>
      )}
      <button class="m-2 bg-indigo-500 rounded-lg p-2 pl-5 pr-5">
        <a class="text-gray-50" href="/auth/register">
          Register
        </a>
      </button>
    </nav>
  );
}
