import { HiHome, HiPlus } from "react-icons/hi";
import { HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";

import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starWar from "../assets/images/starwar.png";

import starWarV from "../assets/videos/star-wars.mp4";
import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import nationalGeographicV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";

export const menu = [
  {
    label: "HOME",
    icon: HiHome,
  },
  {
    label: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    label: "WATCH LIST",
    icon: HiPlus,
  },
  {
    label: "ORIGINALS",
    icon: HiStar,
  },
  {
    label: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    label: "SERIES",
    icon: HiTv,
  },
];

export const productionHouseList = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    image: starWar,
    video: starWarV,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGeographicV,
  },
];
