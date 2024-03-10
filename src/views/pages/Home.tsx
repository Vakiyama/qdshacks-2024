import type { User } from "../../user";
import { Html } from "../components/Html";
import { NavHeader } from "../components/Navigation";
import { MiniBattery } from "../components/MiniBattery";
import { BigBattery } from "../components/BigBattery";

export function Home({ user }: { user: User }) {
  let batteryLeft = 0;
  user.categories.forEach((category) => (batteryLeft += category.charge / 100));
  batteryLeft = 1 - batteryLeft;
  console.log(batteryLeft);
  return (
    <Html>
      <NavHeader userId={user.userId} />
      <h1 class="text-center text-2xl font-bold mt-2">Hello, {user.username}</h1>
      <div class="w-full flex h-4/6 justify-center content-center pt-4 mt-10">
        <BigBattery power={batteryLeft} />
      </div>
      <div class="w-full flex justify-center content-center mt-6">
        <button class="m-2 bg-blue-700  hover:bg-blue-800 rounded-xl p-4 pl-8 pr-8">
          <a class="text-white text-xl" href="/category/list">
            See Categories
          </a>
        </button>
      </div>
      <form action="/category/resetBattery" method="post">
        <input type="hidden" name="userId" value={user.userId} />
        <button
          type="submit"
          class="m-2 bg-red-500 hover:bg-red-800 rounded-xl p-4 pl-8 pr-8"
        >
          <span class="text-white text-xl">Reset Battery</span>
        </button>
      </form>
    </Html>
  );
}
