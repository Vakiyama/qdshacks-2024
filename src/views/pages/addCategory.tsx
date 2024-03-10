import { Html } from "../components/Html";
import { NavHeader } from "../components/Navigation";

export function AddCategory({ userId }: { userId: number }) {
  return (
    <Html>
      <NavHeader userId={userId} />
      <div class="flex justify-center">
        <div class="w-1/2">
          <h1 class="text-4xl text-center mb-10">Add a Category</h1>
          <form
            class="flex flex-col items-center"
            action="/category/add"
            method="post"
          >
            <input
              type="text"
              class="w-1/2 p-2 mb-5"
              name="name"
              placeholder="Category Name"
            />
            <input
              type="number"
              class="w-1/2 p-2 mb-5"
              name="energy"
              placeholder="Energy"
            />
            <button class="w-1/2 p-2 bg-blue-500 text-white rounded-lg">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </Html>
  );
}
