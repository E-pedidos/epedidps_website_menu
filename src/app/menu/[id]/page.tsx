import { Emphasis } from "./components/Emphasis";
import { Information } from "./components/Information";
import { Menu } from "./components/Menu";

export default function MenuFilial() {
  
  return (
    <main className="flex flex-col items-center overflow-x-hidden mb-11">
        <Information />
        <Emphasis />
        <Menu title="Pratos" />
    </main>
  );
}
