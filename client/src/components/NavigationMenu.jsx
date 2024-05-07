import React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const data = {
 desktop: [
  {
   title: "Motherboard",
   href: "/docs/primitives/alert-dialog",
  },
  {
   title: "Griphic Card",
   href: "/docs/primitives/hover-card",
  },
  {
   title: "Ram",
   href: "/docs/primitives/progress",
  },
  {
   title: "Processors",
   href: "/docs/primitives/scroll-area",
  },
  {
   title: "Desktop",
   href: "/docs/primitives/tabs",
  },
  {
   title: "Computer Case",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Power Supply",
   href: "/docs/primitives/tooltip",
  },
 ],
 notebook: [
  {
   title: "Ram",
   href: "/docs/primitives/alert-dialog",
  },
  {
   title: "Notebook Fans",
   href: "/docs/primitives/hover-card",
  },
  {
   title: "Notebook (Laptops)",
   href: "/docs/primitives/progress",
  },
  {
   title: "Notebook Case",
   href: "/docs/primitives/scroll-area",
  },
  {
   title: "Notebook Storage",
   href: "/docs/primitives/tabs",
  },
  {
   title: "Notebook MSI",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "GeForce RTX 30 Series",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Laptop Chargers & Adapters",
   href: "/docs/primitives/tooltip",
  },
 ],
 storage: [
  {
   title: "External Hard",
   href: "/docs/primitives/alert-dialog",
  },
  {
   title: "Internal Hard",
   href: "/docs/primitives/hover-card",
  },
  {
   title: "SSD",
   href: "/docs/primitives/progress",
  },
  {
   title: "M.2",
   href: "/docs/primitives/scroll-area",
  },
  {
   title: "External SSD",
   href: "/docs/primitives/tabs",
  },
  {
   title: "Memory Card",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Flash Disk",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Storage Accessories",
   href: "/docs/primitives/tooltip",
  },
 ],
 accessories: [
  {
   title: "PC Cooling",
   href: "/docs/primitives/alert-dialog",
  },
  {
   title: "Keyboard & Mouse",
   href: "/docs/primitives/hover-card",
  },
  {
   title: "Headphones",
   href: "/docs/primitives/progress",
  },
  {
   title: "LED Strip",
   href: "/docs/primitives/scroll-area",
  },
  {
   title: "Mouse Pad",
   href: "/docs/primitives/tabs",
  },
  {
   title: "Controllers",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Speaker",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Microphones",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Presenter",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Chair",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Webcan",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Cable",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Fans",
   href: "/docs/primitives/tooltip",
  },
  {
   title: "Thermal Paste",
   href: "/docs/primitives/tooltip",
  },
 ],
};

export function NavigationMenuDemo() {
 return (
  <NavigationMenu>
   <NavigationMenuList>
    <NavigationMenuItem>
     <NavigationMenuTrigger>DESKTOP</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
       {data.desktop.map((component) => (
        <ListItem
         key={component.title}
         title={component.title}
         href={component.href}
         className=""
        >
         {component.description}
        </ListItem>
       ))}
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <NavigationMenuTrigger>NOTEBOOK</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
       {data.notebook.map((component) => (
        <ListItem
         key={component.title}
         title={component.title}
         href={component.href}
        >
         {component.description}
        </ListItem>
       ))}
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <NavigationMenuTrigger>STORAGE</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
       {data.storage.map((component) => (
        <ListItem
         key={component.title}
         title={component.title}
         href={component.href}
        >
         {component.description}
        </ListItem>
       ))}
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <NavigationMenuTrigger>ACCESSORIES</NavigationMenuTrigger>
     <NavigationMenuContent>
      <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
       {data.accessories.map((component) => (
        <ListItem
         key={component.title}
         title={component.title}
         href={component.href}
        >
         {component.description}
        </ListItem>
       ))}
      </ul>
     </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <Link to="/docs" className={navigationMenuTriggerStyle()}>
      CONTACT
     </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
     <Link to="/docs" className={navigationMenuTriggerStyle()}>
      ABOUT
     </Link>
    </NavigationMenuItem>
   </NavigationMenuList>
  </NavigationMenu>
 );
}

const ListItem = React.forwardRef(
 ({ className, title, children, ...props }, ref) => {
  return (
   <li>
    <NavigationMenuLink asChild>
     <a
      ref={ref}
      className={cn(
       "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
       className
      )}
      {...props}
     >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
       {children}
      </p>
     </a>
    </NavigationMenuLink>
   </li>
  );
 }
);
ListItem.displayName = "ListItem";
