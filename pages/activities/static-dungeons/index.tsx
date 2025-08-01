import React from "react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

const StaticDungeonPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Dungeons estaticas</h1>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default StaticDungeonPage;
