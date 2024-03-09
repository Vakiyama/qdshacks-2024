import { Html } from '../components/Html';
import { NavHeader } from '../components/Navigation';

export function Categories() {
  return (
    <Html>
      <NavHeader userId={undefined} />
      <div
        class="
      w-full 
      border-black
      border
      h-full 
      p-4
      flex
      "
      >
        <div
          class="
      flex
      w-full
      "
        >
          <div class="w-1/2 bg-gray-400 h-40 mr-5"></div>
          <div class="w-1/2 bg-gray-500 h-40 ml-5"></div>
        </div>
      </div>
    </Html>
  );
}
