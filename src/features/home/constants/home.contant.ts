import {
  ArmchairIcon,
  Backpack,
  CalendarCheckIcon,
  ChefHatIcon,
  LightbulbIcon,
  MoonIcon,
  PartyPopperIcon,
  SearchIcon,
  TentIcon,
  TruckIcon
} from "lucide-react";

// Browse By Category Section
export const CATEGORY_LIST = [
  {
    id: 1,
    icon: TentIcon,
    label: "Tents",
    items: 24
  },
  {
    id: 2,
    icon: ChefHatIcon,
    label: "Cooking Gear",
    items: 18
  },
  {
    id: 3,
    icon: Backpack,
    label: "Backpacks",
    items: 15
  },
  {
    id: 4,
    icon: MoonIcon,
    label: "Sleeping Gear",
    items: 12
  },
  {
    id: 5,
    icon: LightbulbIcon,
    label: "Lighting",
    items: 15
  },
  {
    id: 6,
    icon: ArmchairIcon,
    label: "Camp Furniture",
    items: 30
  }
];

// Step Process Section
export const PROCESS_STEPS = [
  {
    noStep: 1,
    icon: SearchIcon,
    label: "Browse & Select",
    description:
      "Explore our curated collection of premium camping gear and add items to your cart."
  },
  {
    noStep: 2,
    icon: CalendarCheckIcon,
    label: "Pick Your Dates",
    description:
      "Choose your rental dates and we'll calculate the total cost automatically."
  },
  {
    noStep: 3,
    icon: TruckIcon,
    label: "We Deliver",
    description:
      "Get your gear delivered right to your door, cleaned and ready for adventure."
  },
  {
    noStep: 4,
    icon: PartyPopperIcon,
    label: "Enjoy & Return",
    description:
      "Have an amazing trip! Return the gear when done – we handle the cleaning."
  }
];
