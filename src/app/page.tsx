//components
import { Suspense } from "react";
import PokemonForm from "./components/PokemonForm";
import PokemonList from "./components/PokemonList";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <div>
       <Suspense fallback={<Loader />}>
        <PokemonForm />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <PokemonList />
      </Suspense>
    </div>
  );
}
