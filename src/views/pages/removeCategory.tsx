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
                value={category.categoryId}
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
