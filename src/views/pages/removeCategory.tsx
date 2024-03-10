import { Html } from "../components/Html";
import { NavHeader } from "../components/Navigation";

interface Category {
  categoryId: number;
  name: string;
}

export function RemoveCategory({
  userId,
  categories,
}: {
  userId: number;
  categories: Category[];
}) {
  return (
    <Html>
      <NavHeader userId={userId} />
      <nav class="nav">
        <div class="flex justify-around p-4 bg-slate-900">
          <a href="/category/list" class="nav-button">
            <button class="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded">
              Go Back
            </button>
          </a>
        </div>
      </nav>
      <div class="flex justify-center">
        <div class="w-1/2">
          <h1 class="text-4xl text-center mb-10">Remove a Category</h1>
          {categories.map((category) => (
            <form
              class="flex flex-row justify-between items-center mb-4"
              action="/category/remove"
              method="post"
            >
              <input
                type="hidden"
                name="categoryId"
                // @ts-ignore
                value={category.category_id}
              />
              <span class="flex-grow">{category.name}</span>
              <button
                type="submit"
                class="p-2 bg-red-500 text-white rounded-lg"
              >
                Remove
              </button>
            </form>
          ))}
        </div>
      </div>
    </Html>
  );
}
