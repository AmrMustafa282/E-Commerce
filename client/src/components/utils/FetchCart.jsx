import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { TableBody, TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { deleteItem } from "@/rtk/slices/cart-slice";
import deleteFromDatabase from "./deleteFromDatabase";
import { formater } from "@/lib/utils";
function FetchCart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalPrice = () => {
    let price = 0;
    products.map((product) => {
      price += product.price;
    });
    return price;
  };
  return (
    <>
      <TableBody>
        {products.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{invoice._id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="destructive"
                onClick={() => {
                  dispatch(deleteItem(invoice._id));
                  deleteFromDatabase("cartProducts", index);
                }}
              >
                <Trash2 />
              </Button>
            </TableCell>
            <TableCell className="text-right">{formater(invoice.price)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{formater(totalPrice())}</TableCell>
        </TableRow>
      </TableFooter>
    </>
  );
}
export default FetchCart;
