import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import "./Sidebar.css";
import CarouselDefault from "./Carousel.jsx";
import Carousel from "./Carousel.jsx";
export default function Sidebar() {
  const sideBarTab = [
    {
      link: "",
      title: "Woman's fashion",
    },
    {
      link: "",
      title: "Men's fashion",
    },
    {
      link: "",
      title: "Electronics",
    },
    {
      link: "",
      title: "Home & Lifestyle",
    },
    {
      link: "",
      title: "Medicine",
    },
    {
      link: "",
      title: "Sports & Outdoor",
    },
    {
      link: "",
      title: "Baby's & Toys",
    },
    {
      link: "",
      title: "Groceries & Pets",
    },
    {
      link: "",
      title: "Health & Beauty",
    },
  ];
  return <div>

<div class="grid grid-rows-3 grid-flow-col gap-4 text-left">
  <div class="row-span-3 ...">
    <ul>
    {
        sideBarTab.map((tab)=>{
          return  <li><a style={{onHover: "cursor"}}>{tab.title}</a></li>
        })
    }
    </ul>
 
  </div>
  {/* <div class="col-span-2 ..."><CarouselDefault /></div> */}
  <div class="row-span-2 col-span-2 ...">
</div>
</div>



 </div>
  
}
