import type { User } from '../../user';
import { Html } from '../components/Html';
import { NavHeader } from '../components/Navigation';
import { MiniBattery } from '../components/MiniBattery';

export function Home({ user }: { user: User }) {
  function getCellCount(maxCells: number, percentageCharge: number): number {
    const bars = Math.round((maxCells * percentageCharge) / 100);
    return bars;
  }

  const cells = 20;
  const cellCountPowered = getCellCount(cells, user.totalBattery);

  return (
    <Html>
      <NavHeader userId={undefined} />
      <h1 class="text-1xl font-bold underline">Hello! This is the homepage.</h1>
      MiniBattery
    </Html>
  );
}
