import { TentIcon } from "lucide-react";

type TProps = {
  headDesc?: string;
};

const HeaderAuth = (props: TProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {/* Logo */}
      <div className="flex gap-4 items-center justify-center">
        <div className="w-15 h-15 rounded-lg bg-secondary/90 text-secondary-foreground grid place-content-center">
          <TentIcon className="size-8" />
        </div>
        <h1 className="text-xl font-bold text-foreground">CampRent</h1>
      </div>
      {/* Description */}
      <p className="font-semibold text-lg text-foreground/50">
        {props.headDesc}
      </p>
    </div>
  );
};

export default HeaderAuth;
