import { Emphasis } from "./components/Emphasis";
import { Information } from "./components/Information";
import { Menu } from "./components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden mb-11 ">
        <Information />
        <Emphasis />
        <Menu title="Pratos" />
        <Menu title="Sobremesas" />
        <Menu title="Lanches" />
    </main>
  );
}
