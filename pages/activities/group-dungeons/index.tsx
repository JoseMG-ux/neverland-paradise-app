import React from "react";

import DungeonsTableList from "./components/DungeonsTableList";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const GroupDungeonPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center w-full">
          <h1 className={title()}>Dungeons grupales</h1>
          <div className={subtitle({ class: "mt-4" })}>
            En esta sección podrás ver una tabla con las mazmorras realizadas,
            los jugadores que participaron, así como los cálculos
            correspondientes del botín que le corresponde a cada uno..
          </div>
        </div>
        <section className="flex flex-col items-center justify-center w-full gap-4 py-8 md:py-10">
          <DungeonsTableList />
        </section>
      </section>
    </DefaultLayout>
  );
};

export default GroupDungeonPage;
