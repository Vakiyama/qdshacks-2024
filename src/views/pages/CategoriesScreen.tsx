import { Html } from "../components/Html";
import { NavHeader } from "../components/Navigation";

export function CategoryScreen({
  userId,
  name,
  power,
  categoryId,
}: {
  userId: number | undefined;
  name: string;
  power: number;
  categoryId: number;
}) {
  return (
    <Html>
      <NavHeader userId={userId} />
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
          <div class="flex flex-col p-5">
            <div style="margin-top: 5px; display: flex; justify-content: center; align-items: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold; text-align: center;">
                {name}
              </h1>
            </div>

            <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
              <form action={`/category/edit/${categoryId}`} method="post">
                <label
                  class="border-4 border-black hover:bg-blue-500 hover:text-white rounded-full p-2"
                  for="increase"
                >
                  <input type="hidden" value={name} name="name" />

                  <input type="hidden" value={power + 5} name="energy" />

                  <input
                    type="submit"
                    value="+"
                    style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; padding: 0; margin: 0; font-size: 30px; font-weight: bold; color: black;"
                  />
                </label>
              </form>

              <h1 style="margin: 40; font-size: 20px; font-weight: 500;">
                Battery {power}%
              </h1>
              <form action={`/category/edit/${categoryId}`} method="post">
                <label
                  class="border-4 border-black hover:bg-blue-500 hover:text-white rounded-full p-2"
                  for="decrease"
                >
                  <input type="hidden" value={name} name="name" />

                  <input type="hidden" value={power - 5} name="energy" />

                  <input
                    type="submit"
                    value="-"
                    style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; padding: 0; margin: 0; font-size: 35px; font-weight: bold; color: black;"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
