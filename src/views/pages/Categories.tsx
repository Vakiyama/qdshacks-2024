import { Html } from '../components/Html';
import { NavHeader } from '../components/Navigation';
import { Category as CategoryItem } from '../components/Category';
import type { Category } from '../../interface/interface';

const categoryClasslist = "mb-5 w-full bg-gray-400 h-40 mr-4 rounded-lg";

type RGBColor = { r: number; g: number; b: number };

const CategoryWrapper: JSXTE.Component<{
  rgbString: string;
  position: "left" | "right";
  powerOpacity: number;
}> = ({ rgbString, position, powerOpacity, children }) => {
  return (
    <div class="mr-5 relative">
      <div
        class="mb-8 w-full bg-gray-400 h-40 mr-4 rounded-lg border-2"
        style={`
        box-shadow: 0px 0px ${4 + 10 * powerOpacity}px ${
          4 * powerOpacity
        }px ${rgbString};`}
      >
        {children}
      </div>
      <div
        class={`absolute ${position === "left" ? "right-0" : "left-0"} top-3`}
      >
        <div
          class={`bg-black absolute ${
            position === "left" ? "left-0" : "right-0"
          } w-6 h-px ${position === "left" ? "rotate-12" : "-rotate-12"}`}
          style={`background-color: ${rgbString}`}
        />
      </div>
    </div>
  );
};

// 20*opacity
export function Categories({
  categories,
  userId,
}: {
  userId: number | undefined;
  categories: Category[];
}) {
  const powerOpacity = categories.reduce((value, category) => {
    return value + category.energy / 100;
  }, 0);

  function interpolateColors(
    colorA: RGBColor,
    colorB: RGBColor,
    opacity: number
  ): RGBColor {
    if (opacity < 0 || opacity > 1) {
      throw new Error("Opacity must be between 0 and 1");
    }

    const r = Math.round(colorA.r * (1 - opacity) + colorB.r * opacity);
    const g = Math.round(colorA.g * (1 - opacity) + colorB.g * opacity);
    const b = Math.round(colorA.b * (1 - opacity) + colorB.b * opacity);

    return { r, g, b };
  }

  const background = { r: 96, g: 165, b: 250 };
  const highlight = { r: 96, g: 165, b: 250 };
  const powerLineColor = interpolateColors(background, highlight, powerOpacity);
  const rgbString = `rgb(${powerLineColor.r}, ${powerLineColor.g}, ${powerLineColor.b})`;

  const categoriesLeft = categories.splice(0, categories.length);
  const categoriesRight = categories;

  return (
    <Html>
      <NavHeader userId={userId} />
      <nav class="nav">
        <div class="flex justify-around p-4 bg-slate-900">
          <a href="/category/add" class="nav-button">
            <button class="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded">
              Add Category
            </button>
          </a>
          <a href="/category/remove" class="nav-button">
            <button class="bg-red-500 hover:bg-red-600 text-white text-lg font-bold py-2 px-4 rounded">
              Remove Category
            </button>
          </a>
        </div>
      </nav>
      <div
        class="
      w-full 
      border-black
      border
      h-full 
      p-8
      flex
      flex-row
      "
      >
        <div class="flex flex-col w-1/2">
          {categoriesLeft.map((category) => {
            const powerOpacity = interpolateColors(
              background,
              highlight,
              category.energy
            );
            const rgbString = `rgb(${powerOpacity.r}, ${powerOpacity.g}, ${powerOpacity.b})`;

            return (
              <CategoryWrapper
                position="left"
                rgbString={rgbString}
                powerOpacity={category.energy}
              >
                <CategoryItem title="Work" data="100" />
              </CategoryWrapper>
            );
          })}
        </div>
        {/* middle-border */}
        <div
          class="w-px p-px h-full rounded "
          style={`;
            background-color: ${rgbString};
            box-shadow: 0px 0px ${4 + 10 * powerOpacity}px ${
            4 * powerOpacity
          }px ${rgbString};
          `}
        />
        {/* middle-border */}
        <div class="flex flex-col w-1/2 ml-5 relative">
          {categoriesRight.map((category) => {
            const powerOpacity = interpolateColors(
              background,
              highlight,
              category.energy
            );
            const rgbString = `rgb(${powerOpacity.r}, ${powerOpacity.g}, ${powerOpacity.b})`;

            return (
              <CategoryWrapper
                position="right"
                rgbString={rgbString}
                powerOpacity={category.energy}
              >
                <CategoryItem title="Work" data="100" />
              </CategoryWrapper>
            );
          })}
        </div>
      </div>
    </Html>
  );
}
