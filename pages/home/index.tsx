import { Input } from "@heroui/input";

import Activities from "./components/Activities";

import { title, subtitle } from "@/components/primitives";
import { SearchIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

const Home = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "pink", fontWeight: "extrabold" })}>
            TITLE&nbsp; {/*NEVERLAND */}
          </span>
          <br />
          <span className={title({ fontWeight: "extrabold" })}>
            SUBTITLE
          </span>{" "}
          {/*PARADISE */}
          <div className={subtitle({ class: "mt-4" })}>
            Aplicación con el fin de llevar la gestión de actividades del
            gremio.
          </div>
        </div>

        <div className="flex gap-3 w-1/2">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
          {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            Buscar
          </Link> */}
        </div>

        <div className="mt-8 flex w-full">
          <Activities />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
