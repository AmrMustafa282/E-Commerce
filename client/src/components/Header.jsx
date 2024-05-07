import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Header = () => {
  const nav = useNavigate();
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center my-6">
        <Link to="/" className="text-3xl font-bold ">
          Exclusive
        </Link>
        <div className="hidden xl:block">
          <NavigationMenuDemo />
        </div>
        <div className="flex items-center gap-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2 box-content">
                <Search className="w-8 h-8 cursor-pointer " />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <div className="grid gap-4 py-6">
                <Input
                  placeholder="What are you looking for?"
                  className="col-span-3"
                />
              </div>
              <DialogFooter>
                <Button type="submit">Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon" className="p-2 box-content ">
            <Heart className="w-8 h-8 " />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="p-2 box-content"
            onClick={() => nav("/cart")}
          >
            <ShoppingCart className="w-8 h-8 " />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2 box-content">
                {" "}
                <User className="w-8 h-8 " />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => nav("/sign-in")}>
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => nav("/sign-up")}>
                Sign Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
