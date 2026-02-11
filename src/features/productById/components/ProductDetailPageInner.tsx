"use client";

import {
  CalendarIcon,
  CheckIcon,
  ChevronLeftIcon,
  ShoppingCartIcon,
  StarIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { formatMoney } from "~/lib/format";
import { cn } from "~/lib/utils";
import { FEATURE_LIST, PROFIT_LIST } from "../contants/productById.contant";
import DatePicker from "./DatePicker";
import { Button } from "~/components/ui/button";
import useSelfHealingSlug from "../hooks/useSelfHealingSlug";

type ProductDetailPageInnerProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category: {
    name: string;
  };
};

const ProductDetailPageInner = (props: ProductDetailPageInnerProps) => {
  useSelfHealingSlug({ id: props.id, name: props.name });
  return (
    <section className="max-w-7xl 7xl:container mx-auto px-4">
      {/* Icon Back */}
      <Link
        href="/"
        className="text-foreground/80 hover:text-secondary text-sm font-normal flex items-center gap-2"
      >
        <ChevronLeftIcon className="size-4" />
        Back to Browse
      </Link>

      <div className={cn("grid grid-cols-1 mt-10 gap-12", "lg:grid-cols-2")}>
        {/* Image Product */}
        <div className="aspect-square relative overflow-hidden rounded-2xl">
          <Image
            src={props.imageUrl}
            alt="Cover Product"
            unoptimized
            fill
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content Product */}
        <div className="flex flex-col gap-4">
          <Badge
            variant="outline"
            className="lowercase text-md px-4 bg-foreground/10 text-foreground/80 font-medium"
          >
            {props.category.name}
          </Badge>
          <h1 className="text-4xl font-bold text-foreground/90">
            {props.name}
          </h1>
          {/* Rating and Review */}
          <div className="flex items-center gap-2 text-foreground text-md">
            {/* Star */}
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4].map((_) => (
                <StarIcon
                  key={_}
                  className="text-primary/60 fill-primary/80 size-5"
                />
              ))}
              <StarIcon className="text-primary/50 fill-transparent size-5" />
            </div>
            <p className="font-semibold">4.8</p>
            <p className="text-foreground/50 font-medium">(123 reviews)</p>
          </div>
          {/* Price per Day */}
          <p className="text-4xl font-bold text-secondary">
            {formatMoney(props.price)}
            <span className="text-lg font-medium text-foreground/50">/day</span>
          </p>

          {/* Description */}
          <p className="text-md font-medium text-foreground/60 text-justify">
            {props.description}
          </p>
          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-foreground">Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              {FEATURE_LIST.map((feat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon className="text-secondary size-4" />
                  <p className="text-sm font-medium text-foreground/80">
                    {feat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Select Rental Date */}
          <div className="bg-primary/10 p-4 rounded-2xl">
            <h1 className="flex items-center gap-4 font-semibold">
              <CalendarIcon className="text-secondary" />
              Select Rental Dates
            </h1>
            {/* Date Picker  */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-6">
              <div>
                <h4 className="text-sm font-medium">Start Date</h4>
                <DatePicker />
              </div>
              <div>
                <h4 className="text-sm font-medium">End Date</h4>
                <DatePicker />
              </div>
            </div>
          </div>
          {/* Button CTA Rental */}
          <Button
            variant="default"
            className="flex items-center gap-4 font-medium py-6 cursor-pointer text-md bg-primary/80"
          >
            <ShoppingCartIcon className="size-4" />
            Select Dates to Rent
          </Button>

          <hr className="my-4 border-foreground/10" />
          {/* Profit */}
          <div className="grid grid-cols-3">
            {PROFIT_LIST.map((profit, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <profit.icon className="size-6 text-secondary/90" />
                <p className="text-xs text-foreground/50 font-medium text-center">
                  {profit.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPageInner;
