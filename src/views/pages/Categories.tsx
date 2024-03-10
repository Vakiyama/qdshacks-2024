import { Html } from '../components/Html';
import { NavHeader } from '../components/Navigation';

const categoryClasslist = 'mb-5 w-full bg-gray-400 h-40 mr-4 rounded-lg';

type RGBColor = { r: number; g: number; b: number };

function CategoryWrapper({
  rgbString,
  position,
  powerOpacity,
}: {
  rgbString: string;
  position: 'left' | 'right';
  powerOpacity: number;
}) {
  return (
    <div class="mr-5 relative">
      <div
        class="mb-5 w-full bg-gray-400 h-40 mr-4 rounded-lg border-2"
        style={`box-shadow: 0px 0px ${
          5 + 15 * powerOpacity
        }px 2px ${rgbString}`}
      >
        {position === 'left' ? 'CategoryWrapper A' : 'CategoryWrapper B'}
      </div>
      <div
        class={`absolute ${position === 'left' ? 'right-0' : 'left-0'} top-3`}
      >
        <div
          class={`bg-black absolute ${
            position === 'left' ? 'left-0' : 'right-0'
          } w-6 h-px ${position === 'left' ? 'rotate-12' : '-rotate-12'}`}
          style={`background-color: ${rgbString}`}
        />
      </div>
    </div>
  );
}

// 20*opacity
export function Categories({ powerOpacity }: { powerOpacity: number }) {
  function interpolateColors(
    colorA: RGBColor,
    colorB: RGBColor,
    opacity: number
  ): RGBColor {
    if (opacity < 0 || opacity > 1) {
      throw new Error('Opacity must be between 0 and 1');
    }

    const r = Math.round(colorA.r * (1 - opacity) + colorB.r * opacity);
    const g = Math.round(colorA.g * (1 - opacity) + colorB.g * opacity);
    const b = Math.round(colorA.b * (1 - opacity) + colorB.b * opacity);

    return { r, g, b };
  }

  const blackRGB = { r: 255, g: 251, b: 168 };
  const yellowRGB = { r: 255, g: 252, b: 0 };
  const powerLineColor = interpolateColors(blackRGB, yellowRGB, powerOpacity);
  const rgbString = `rgb(${powerLineColor.r}, ${powerLineColor.g}, ${powerLineColor.b})`;
  return (
    <Html>
      <NavHeader userId={undefined} />
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
          <CategoryWrapper
            position="left"
            rgbString={rgbString}
            powerOpacity={powerOpacity}
          />
          <CategoryWrapper
            position="left"
            rgbString={rgbString}
            powerOpacity={powerOpacity}
          />
          <CategoryWrapper
            position="left"
            rgbString={rgbString}
            powerOpacity={powerOpacity}
          />
        </div>
        {/* middle-border */}
        <div
          class="w-px p-px h-full rounded bg-slate-200"
          style={`;
            box-shadow: 0px 0px 2px 2px ${rgbString};
          `}
        />
        {/* middle-border */}
        <div class="flex flex-col w-1/2 ml-5 relative">
          <CategoryWrapper
            position="right"
            rgbString={rgbString}
            powerOpacity={powerOpacity}
          />
          <CategoryWrapper
            position="right"
            rgbString={rgbString}
            powerOpacity={powerOpacity}
          />
          <CategoryWrapper
            position="right"
            rgbString={rgbString}
            powerOpacity={powerOpacity}
          />
        </div>
      </div>
    </Html>
  );
}
