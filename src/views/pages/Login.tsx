import { Html } from '../components/Html';

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
        bg-indigo-500 
        align-middle 
        rounded-lg 
        justify-center"
        >
          <form class="flex flex-col p-5">
            <label for="emailOrUsername">
              <p class="text-gray-50">Username:</p>
            </label>
            <input
              type="text"
              required
              name="emailOrUsername"
              placeholder="Username or Password"
            />
            <label for="password">
              <p class="text-gray-50"> Password:</p>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
            />
          </form>
        </div>
      </div>
    </Html>
  );
}
