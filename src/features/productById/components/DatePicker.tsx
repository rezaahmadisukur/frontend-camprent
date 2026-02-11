import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "~/components/ui/popover";

const DatePicker = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className="mt-4">
        <Button
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground w-full justify-between text-left font-normal border-2 border-secondary transition-all duration-300 hover:bg-secondary hover:data-[empty=true]:text-secondary-foreground cursor-pointer"
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          disabled={(date) => date < (date || new Date())}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
