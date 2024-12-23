"use client";

import Companies from "./components/Companies";
import BestOffer from "./components/BestOffer";
import Healthstate from "./components/Healthstate";
import Bestplan from "./components/Bestplan";
import MyFooter from "./components/MyFooter";
import Heros from "./components/Heros";

export default function Home() {
  return (
    <main className="">
      <Heros />

      <Companies />

      <div className="NewCodeIsnow ">
        <BestOffer />
      </div>

      <section className="Healthstate">
        <Healthstate />
      </section>

      <div className="mynewone">
        <Bestplan />
      </div>

      <div className="MyFooter">
        <MyFooter />
      </div>
    </main>
  );
}
