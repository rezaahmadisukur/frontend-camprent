import { SearchIcon } from "lucide-react";
import { ComponentType } from "react";
import { PROCESS_STEPS } from "../constants/home.contant";
import { cn } from "~/lib/utils";

type TypeProps = {
  noStep: number;
  icon: ComponentType<{
    className: string;
  }>;
  label: string;
  description: string;
};

const PartProcess = (props: TypeProps) => {
  const Icon = props.icon;
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Logo */}
      <div className="w-25 h-25 bg-background rounded-full relative flex justify-center items-center">
        <Icon className="size-10 text-secondary" />
        <div className="w-8 h-8 rounded-full absolute bg-primary text-primary-foreground -top-1 -right-1 flex justify-center items-center text-md font-semibold">
          {props.noStep}
        </div>
      </div>
      {/* Title */}
      <h1 className="text-foreground text-xl font-semibold">{props.label}</h1>
      {/* Description */}
      <p className="text-foreground/80 text-md font-normal text-center">
        {props.description}
      </p>
    </div>
  );
};

const StepProcessSection = () => {
  return (
    <section className="max-w-6xl 6xl:container mx-auto">
      {/* Header */}
      <div className="max-w-3xl flex flex-col items-center mx-auto gap-4">
        <p className="w-fit py-2 px-4 bg-secondary/20 text-secondary rounded-full font-semibold text-sm">
          Simple Process
        </p>
        <h1 className="text-4xl font-bold text-foreground">How It Works</h1>
        <p className="text-foreground/80 text-lg font-normal text-center">
          Renting camping gear has never been easier. Four simple steps to your
          next adventure.
        </p>
      </div>

      {/* Step by Step */}
      <div
        className={cn(
          "grid grid-cols-1 mt-20 gap-12 px-6",
          "md:grid-cols-2 ",
          "xl:grid-cols-4"
        )}
      >
        {PROCESS_STEPS.map((process, index) => (
          <PartProcess key={`${process.label}-${index}`} {...process} />
        ))}
      </div>
    </section>
  );
};

export default StepProcessSection;
