import {
  Table,
  TableBody,
  TableButton,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../components/ui/button";
import { clear, deleteItem } from "@/rtk/slices/cart-slice";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import FetchCart from "../components/utils/FetchCart";
import Container from "postcss/lib/container";

export function Cart() {
  const dispatch = useDispatch();
  return (
    <div className="container my-16 flex flex-col gap-4">
      <div className="flex">
        <h1 className=" text-xl flex-1">Your Cart</h1>
        <Button
          className="px-7"
          variant="outline"
          onClick={() => {
            dispatch(clear());
          }}
        >
          Clear
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Delete</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <FetchCart />
      </Table>
    </div>
  );
}
export default Cart;
