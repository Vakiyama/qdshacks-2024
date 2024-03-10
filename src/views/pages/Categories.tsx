import { Html } from '../components/Html';
import { NavHeader } from '../components/Navigation';
import { Category } from '../components/Category';

export function Categories() {
  return (
    <Html>
      <NavHeader userId={undefined}></NavHeader>
      <Category title="category" data="data">
      </Category>
    </Html>
  );
}
