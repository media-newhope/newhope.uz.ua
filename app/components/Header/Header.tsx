import { Button } from '../Button/Button';
import {Container} from "@/app/components/Container";
import Link from "next/link";

export const Header = () => {
  const menuItems = ['Про нас', 'Наші служіння', 'Будівництво', 'Пожертвувати'];

  return (
    <header className="py-3 bg-black [&_a]:text-white [&_a:hover]:text-gray-300">
      <Container className="flex items-center justify-between">
        <div className="flex items-center text-white" >
          <Link href="/" className="text-2xl flex items-center gap-4">
            <img width="43px" src="/logo.png" alt=""/>
            <span className="hidden md:inline-block">НОВА НАДІЯ</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center text-base space-x-6 uppercase">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <select className="border rounded-md px-2 py-1">
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <Button color="secondary" variant='nav'>ПРИЄДНУЙСЯ</Button>
        </div>
      </Container>
    </header>
  );
};
