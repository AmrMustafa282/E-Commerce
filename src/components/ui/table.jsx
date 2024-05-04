import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { deleteItem } from "@/rtk/slices/cart-slice";
const createTableComponent = (elementType, defaultClassName) =>
  React.forwardRef(({ className, ...props }, ref) => {
    const Element = elementType;
    return (
      <Element
        ref={ref}
        className={cn(defaultClassName, className)}
        {...props}
      />
    );
  });

const Table = createTableComponent(
  "table",
  "w-full caption-bottom text-sm relative overflow-auto"
);
Table.displayName = "Table";

const TableSection = createTableComponent("thead", "[&_tr]:border-b");
TableSection.displayName = "TableHeader";

const TableBody = createTableComponent("tbody", "[&_tr:last-child]:border-0");
TableBody.displayName = "TableBody";

const TableFooter = createTableComponent(
  "tfoot",
  "border-t bg-muted/0 font-medium [&>tr]:last:border-b-0"
);
TableFooter.displayName = "TableFooter";

const TableRow = createTableComponent(
  "tr",
  "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
);
TableRow.displayName = "TableRow";

const TableCell = createTableComponent(
  "td",
  "p-4 align-middle [&:has([role=checkbox])]:pr-0"
);
TableCell.displayName = "TableCell";

const TableHead = createTableComponent(
  "th",
  "h-12 px-5 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
);
TableHead.displayName = "TableHead";

const TableCaption = createTableComponent(
  "caption",
  "mt-4 text-sm text-muted-foreground"
);
TableCaption.displayName = "TableCaption";
const TableButton = () => {
  return (
    <Button
      variant="destructive"
      onClick={() => {
        deleteItem();
      }}
    >
      Delete
    </Button>
  );
};

export {
  Table,
  TableSection as TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TableHead,
  TableButton,
};
