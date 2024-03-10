import { Html } from '../components/Html';
import { NavHeader } from '../components/Navigation';

export function Home() {
  return (
    <Html>
      <NavHeader userId={undefined} />
      <h1 class="text-1xl font-bold underline">Hello! This is the homepage.</h1>
    </Html>
  );
}
