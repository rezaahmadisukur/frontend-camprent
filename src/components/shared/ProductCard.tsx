import { ShoppingCart, StarIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { formatMoney } from "~/lib/format";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

type TypeProps = {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  category: {
    name: string;
  };
};

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1632088679704-6692a94ada2c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0 ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductCard = (props: TypeProps) => {
  return (
    <Card className="h-120 lg:h-100 p-0 overflow-hidden group w-full">
      <CardHeader className="relative h-full w-full overflow-hidden">
        <Image
          src={props.imageUrl ?? placeholderImageUrl}
          unoptimized
          fill
          alt="Cover"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />

        <Badge variant="secondary" className="absolute top-3 left-3">
          Available
        </Badge>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-1">
        <h4 className="uppercase text-muted-foreground/90 text-xs font-semibold">
          {props.category.name}
        </h4>

        <Link
          href={`/products/${props.id}`}
          className="text-md font-bold text-foreground transition-all duration-300 hover:text-secondary line-clamp-1"
        >
          {props.name}
        </Link>

        <p className="text-sm font-medium text-foreground flex gap-1.5 items-center">
          <StarIcon className="w-4 h-4 fill-primary text-primary" /> 4.6
          <span className="text-muted-foreground/90">(90)</span>
        </p>

        <div className="flex justify-between items-center mt-3">
          {/* price */}
          <h1 className="text-xl font-bold text-foreground">
            {formatMoney(props.price)}
            <span className="text-sm text-muted-foreground/90 font-semibold">
              /day
            </span>
          </h1>
          {/* CTA */}
          <Button variant="default" size="sm" className="cursor-pointer">
            <ShoppingCart />
            Rent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
