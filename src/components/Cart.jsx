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
import { Button } from "./ui/button";
import { deleteItem } from "@/rtk/slices/cart-slice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
// const dispatch = useDispatch();
// const products = useSelector((state) => state);
// console.log(products);
export function Cart() {
  const products = useSelector((state) => state.cart);
  console.log(products);
  let totalAmount = 0;
  products.forEach((invoice) => {
    totalAmount += parseFloat(invoice.price);
  });
  console.log(totalAmount);
  return (
    <div className="container my-16">
      <h1 className="text-center text-xl">Your Cart</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            {/* <TableHead>Method</TableHead> */}
            <TableHead className="text-right ">Delete</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.name}</TableCell>
              {/* <TableCell>{invoice.paymentMethod}</TableCell> */}
              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  onClick={() => {
                    deleteItem(invoice.id);
                  }}
                >
                  <Trash2 />
                </Button>
              </TableCell>
              {/* <TableCell className="text-right">${invoice.price}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${totalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
export default Cart;
