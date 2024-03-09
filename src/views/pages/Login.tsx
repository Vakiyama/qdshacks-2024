import { Html } from "../components/Html";

export function Login() {
  return (
    <Html>
      <div class="w-screen h-screen flex justify-center">
        <div
          class="
        place-items-center
        place-self-center 
        w-fit
        h-fit 
        border-solid
        border-4
        border-black
        bg-indigo-500 
        align-middle 
        rounded-lg 
        justify-center"
        >
          <form class="flex flex-col p-5" action="/auth/login" method="post">
            <label for="email">
              <p class="text-gray-50">Username:</p>
            </label>
            <input
              class="border-2 border-black"
              type="text"
              required
              name="email"
              placeholder="Email"
            />
            <label for="password">
              <p class="text-gray-50 "> Password:</p>
            </label>
            <input
              class="mb-4 border-2 border-black"
              type="password"
              required
              name="password"
              placeholder="Password"
            />
            <label
              class="border-4 border-black hover:bg-blue-500 hover:text-white pl-1"
              for="submit"
            >
              <input class="flex justify-end" type="submit" value="Submit" />
            </label>
          </form>
        </div>
      </div>
    </Html>
  );
}
