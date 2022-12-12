import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProduct } from "../../redux/action";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestorePageIcon from '@mui/icons-material/RestorePage';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // icono para usuario
import { useState } from "react";
import { PostTable } from "./PostTable";


///LISTA DE PRODUCTOS
const List = () => {

const [ del, setDel ] = useState('')

const dispatch = useDispatch()
let products = useSelector(state => state.products)


useEffect(() => {
  dispatch(getProduct())
 }, [])   

 function handleOnDelete(e, id){
   dispatch(deleteProduct(id))
   console.log('target ', id)
 }

console.log('productos ', products)
if(!products){
  return (<div>Cargando</div>)
  }
else{ 
  return (<PostTable products={products} isProduct={true} />)
          }

};

export default List;


const products1 = [
  {
    "sales": 0,
    "_id": "637dac758ed09f993457d20e",
    "title": "Sony PS5 Playstation 5 Digital Edition Consoleee!",
    "price": 657.49,
    "description": "U would think that it's expensive, nothing it's expensive when we are talking about the best console's experience though",
    "category": "Consoles",
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "637dac758ed09f993457d20f"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321396/tyfjf7dgrobuv7olnke0.jpg",
    "reviews": [
      {
        "user": "auth0|638bc7f0a442109d49bd4774",
        "review": "es muy bueno!",
        "_id": "6390bda90e73934e0f1f3382"
      },
      {
        "user": "auth0|638bc7f0a442109d49bd4774",
        "review": "ta buenarrrrdoo!",
        "_id": "6390d9158a07c8e6e6449068"
      },
      {
        "user": "auth0|638bc7f0a442109d49bd4774",
        "review": "ta buenarrrrdoo x2!",
        "_id": "6390d95c6c3419af7e71b0e6"
      },
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "",
        "_id": "63923eb34ccb2bb7b304ba3b"
      }
    ],
    "createdAt": "2022-11-23T05:15:33.158Z",
    "updatedAt": "2022-12-08T19:44:51.698Z",
    "details": [],
    "imageId": "tyfjf7dgrobuv7olnke0",
    "stock": 18,
    "available": true
  },
  {
    "details": [],
    "sales": 0,
    "_id": "637dad868ed09f993457d214",
    "title": "Nintendo Switch OLED Model Splatoon 3 Edition",
    "price": 381.09,
    "description": "U would think that it's expensive, nothing it's expensive when we are talking about the best console's experience though",
    "category": "Consoles",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637dad868ed09f993457d215",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321083/jfz2nnnftnl5qon4pt72.jpg",
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "",
        "_id": "63923e724ccb2bb7b304ba27"
      }
    ],
    "createdAt": "2022-11-23T05:20:06.083Z",
    "updatedAt": "2022-12-08T19:43:46.565Z",
    "imageId": "jfz2nnnftnl5qon4pt72",
    "stock": 10,
    "available": true
  },
  {
    "details": [],
    "sales": 0,
    "_id": "637db2b58ed09f993457d21a",
    "title": "AOC CQ27G2 27 Super Curved Frameless Gaming Monitor QHD 2K, 1500R Curved VA, 1ms, 144Hz",
    "price": 289,
    "description": "The Sceptre C275B-1858RN is an unusual gaming monitor in that it’s admirably straightforward. Sleek, affordable and feature rich. Like the Sceptre C275B-144R from last year, on the new monitor, Sceptre offers an excellent mix of gaming features including AMD Freesync, fast 165Hz response rate, a gentle curved screen with vibrant colors and sharp graphics.",
    "category": "Monitors",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637db2b58ed09f993457d21b",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321441/dtkj3whoegvy7qgclqyt.jpg",
    "reviews": [],
    "createdAt": "2022-11-23T05:42:13.912Z",
    "updatedAt": "2022-12-04T01:20:09.712Z",
    "imageId": "dtkj3whoegvy7qgclqyt",
    "stock": 2,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e654d07d328a5eae25a33",
    "title": "Xbox Series X",
    "price": 865,
    "description": "Introducing Xbox Series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles-all games look and play best on Xbox Series X.Experience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software.",
    "category": "Consoles",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e654d07d328a5eae25a34",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321485/dalro0papcmpap74kfmx.jpg",
    "details": [
      {
        "Product Dimensions": "5.94 x 11.85 x 5.94 inches; 13.1 Pounds"
      },
      {
        "Release date": "November 10, 2020"
      }
    ],
    "reviews": [
      {
        "user": "auth0|638bc7f0a442109d49bd4774",
        "review": "Excelente producto!",
        "_id": "63910bf6612e6c1f94eb128d"
      },
      {
        "user": "auth0|638bc7f0a442109d49bd4774",
        "review": "Excelente producto!",
        "_id": "63910cb8f56e4b2d8e8372d7"
      }
    ],
    "createdAt": "2022-11-23T18:24:13.829Z",
    "updatedAt": "2022-12-07T21:59:20.399Z",
    "imageId": "dalro0papcmpap74kfmx",
    "stock": 17,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e686d07d328a5eae25a36",
    "title": "LucidSound LS10X Wired Gaming Headset for Xbox Series X|S - Shock Blue",
    "price": 29.98,
    "description": "Quick Access Audio Controls – Easily adjust headset volume and mute the mic via on-earcup controls. Focus on the win and not on fumbling around with cumbersome controls. Designed for Comfort – Ultra-lightweight frame and memory foam earpads allow for hours of comfortable gaming.",
    "category": "Headphones",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e686d07d328a5eae25a37",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321516/yzmizusbqxz0cpynesmb.jpg",
    "details": [
      {
        "Release date": "November 1, 2022"
      },
      {
        "Product Dimensions": "8.27 x 7.87 x 3.54 inches; 8.46 Ounces"
      },
      {
        "Item Weight": "8.5 ounces"
      },
      {
        "Manufacturer": "LucidSound"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T18:37:33.485Z",
    "updatedAt": "2022-12-04T01:20:09.867Z",
    "imageId": "yzmizusbqxz0cpynesmb",
    "stock": 7,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e695607d328a5eae25a39",
    "title": "BENGOO V-4 Gaming Headset",
    "price": 54.98,
    "description": "Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.",
    "category": "Headphones",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e695607d328a5eae25a3a",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321546/qyozoe3zo3wi6m3zaguu.jpg",
    "details": [
      {
        "Manufacturer": "BENGOO"
      },
      {
        "Series": "V-4"
      },
      {
        "Product Dimensions": "8.27 x 7.87 x 3.54 inches; 8.46 Ounces"
      },
      {
        "Color": "Red"
      },
      {
        "Country of Origin": "USA"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T18:41:26.201Z",
    "updatedAt": "2022-12-04T01:20:09.959Z",
    "imageId": "qyozoe3zo3wi6m3zaguu",
    "stock": 4,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e6af807d328a5eae25a3c",
    "title": "Razer Kraken Gaming Headset",
    "price": 39,
    "description": "Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.",
    "category": "Headphones",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e6af807d328a5eae25a3d",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322795/h4slmvhddv1epyawhems.jpg",
    "details": [
      {
        "Manufacturer": "Razer"
      },
      {
        "Series": "V-4"
      },
      {
        "Product Dimensions": "7.87 x 6.69 x 1.55 inches"
      },
      {
        "Color": "Green"
      },
      {
        "item Weigh": "11.4 ounces"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "this product is amazingggg omg😍",
        "_id": "63928e83027a2017581642ed"
      }
    ],
    "createdAt": "2022-11-23T18:48:24.376Z",
    "updatedAt": "2022-12-09T01:25:23.063Z",
    "imageId": "h4slmvhddv1epyawhems",
    "stock": 4,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e6bb407d328a5eae25a3f",
    "title": "Audio-Technica ATH-G1 Premium Gaming Headset",
    "price": 169,
    "description": "Large-diameter 45 mm drivers are specially tuned to bring Audio-Technica studio-quality sound to the gaming world.High max input capability (1,300 mW) handles high-output headphone amplifiers with ease to deliver a full-force gaming experience.State-of-the-art, flexible (and detachable) boom microphone with highly directional pickup provides crystal-clear in-game communication and live streaming audio",
    "category": "Headphones",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e6bb407d328a5eae25a40",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321614/fuvhmwwzcu9tclksezg0.jpg",
    "details": [
      {
        "Manufacturer": "Audio-Technica"
      },
      {
        "Series": "ATH-G1"
      },
      {
        "Product Dimensions": "7.67 x 6.45 x 1.55 inches"
      },
      {
        "Color": "Black/blue"
      },
      {
        "item Weigh": "9.1 ounces"
      },
      {
        "Country of Origin": "USA"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T18:51:32.771Z",
    "updatedAt": "2022-12-04T01:20:10.723Z",
    "imageId": "fuvhmwwzcu9tclksezg0",
    "stock": 4,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e6c7307d328a5eae25a42",
    "title": "SteelSeries Arctis Pro High Fidelity Gaming Headset",
    "price": 109,
    "description": "Premium hi res capable speakers with high density neodymium magnets reproduce a full, expansive frequency range from 10 to 40,000 hertz with stunning realism and clarity.Luxurious polished steel and aluminum alloy construction offers maximum durability and a consistent fit.Next generation DTS headphone: X v2.0 surround sound provides optimal spatial imaging for complete 360 degree immersion",
    "category": "Headphones",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e6c7307d328a5eae25a43",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321641/zcblv5evv3d2x1dd9vmm.jpg",
    "details": [
      {
        "Manufacturer": "SteelSeries"
      },
      {
        "Series": "Arctis Pro"
      },
      {
        "Product Dimensions": "3.54 x 6.55 x 7.37 inches"
      },
      {
        "Color": "Black"
      },
      {
        "item Weigh": "15 ounces"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T18:54:43.033Z",
    "updatedAt": "2022-12-04T01:20:10.812Z",
    "imageId": "zcblv5evv3d2x1dd9vmm",
    "stock": 16,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e6e5607d328a5eae25a48",
    "title": "HyperX Cloud Mix Buds",
    "price": 99,
    "description": "Signature HyperX comfort and durability: Featuring 3 ear tip sizes for a personalized fit, and a carrying case with silicone sleeve to keep everything stored and secured when you’re on the move.HyperX Signature sound + DTS Headphone:X: Get pinpoint audio localization and a 3D sound stage thanks to the power of DTS and high-quality HyperX audio.Long Battery life: Using A2DP mode earbuds have up to 10 hours of battery life and up to an additional 23 hours using the charging case",
    "category": "Headphones",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e6e5607d328a5eae25a49",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669321949/oqtrekyugpnoichx1olx.jpg",
    "details": [
      {
        "Manufacturer": "HyperX"
      },
      {
        "Series": "Cloud MIX Buds"
      },
      {
        "Product Dimensions": "3.15 x 1.06 x 1.42 inches"
      },
      {
        "Color": "Black"
      },
      {
        "item Weigh": "1.66 ounces"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "me encanta!",
        "_id": "63924e824ccb2bb7b304bd8e"
      },
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "buenardo x10000",
        "_id": "63924ebd4ccb2bb7b304bdb4"
      },
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "prueba 1000",
        "_id": "63924f284ccb2bb7b304bddd"
      }
    ],
    "createdAt": "2022-11-23T19:02:46.184Z",
    "updatedAt": "2022-12-08T20:55:04.864Z",
    "imageId": "oqtrekyugpnoichx1olx",
    "stock": 16,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e6fa407d328a5eae25a4b",
    "title": "Acer 27.0” 1920 x 1080 VA Zero-Frame Office Home Computer Monitor",
    "price": 209,
    "description": "Delve into the world of awesome with Acer's KB272HL Full HD monitor, which offers an unmatched viewing experience. A large 27” screen delivers astonishing, 1920 x 1080 Full HD resolution with excellent detail! Through AMD Radeon technology, the game’s frame rate is determined by your graphics card, not the fixed refresh rate of the monitor, giving you a serious competitive edge. The remarkable 100 Million:1 contrast ratio ensures a crystal-clear viewing experience while rapid 4ms response time keeps moving images sharp. It also supports HDMI & VGA inputs offering greater compatibility. (UM.HK2AA.H01).",
    "category": "Monitors",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e6fa407d328a5eae25a4c",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322023/zkrzqah10xijzlb8xabu.jpg",
    "details": [
      {
        "Manufacturer": "Acer"
      },
      {
        "Series": "KB272HL Hbi"
      },
      {
        "Screen Size": "27 Inches"
      },
      {
        "Color": "Black"
      },
      {
        "Display Resolution": "1920 x 1080"
      },
      {
        "Refresh Rate": "75 Hz"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T19:08:20.996Z",
    "updatedAt": "2022-12-04T01:20:11.107Z",
    "imageId": "zkrzqah10xijzlb8xabu",
    "stock": 18,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e70c707d328a5eae25a4e",
    "title": "Samsung Business FT452 Series",
    "price": 209,
    "description": "IMPRESSIVE PICTURE QUALITY: The FT45 Series features an IPS panel for premium picture quality, with vibrant color reproduction and crystal-clear images and text without color shift; IPS technology also provides wide viewing angles of 178 ̊so content isn’t degraded and collaboration is easy.ULTRA THIN BEZELS: Text and graphics are beautifully presented in a 3-sided bezel-less frame, so you see more picture and less plastic; With ultra-slim bezels, multiple monitor configurations are virtually seamless",
    "category": "Monitors",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e70c707d328a5eae25a4f",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322077/vowcasoqnosh27arfqhp.jpg",
    "details": [
      {
        "Manufacturer": "SAMSUNG"
      },
      {
        "Series": "F22T452FQN"
      },
      {
        "Screen Size": "22 Inches"
      },
      {
        "Color": "Black"
      },
      {
        "Display Resolution": "1920 x 1080"
      },
      {
        "Refresh Rate": "75 Hz"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "La mejor inversion de todas!",
        "_id": "63911b56f56e4b2d8e837304"
      }
    ],
    "createdAt": "2022-11-23T19:13:11.320Z",
    "updatedAt": "2022-12-07T23:01:42.376Z",
    "imageId": "vowcasoqnosh27arfqhp",
    "stock": 11,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e721e07d328a5eae25a51",
    "title": "LG FHD 32-Inch Computer Monitor 32ML600M-B",
    "price": 248,
    "description": "Enjoy incredible detail and image clarity with Full HD 1080p resolution. This versatile IPS computer monitor helps keep colors consistent at a wide viewing angle while reproducing 95 percent coverage of the DCI-P3 color gamut. Color Calibration helps maintain accurate color on the screen and prevents gradual changes. Stay in the game as you take fast, easy control of essential monitor settings including picture, audio and Screen Split with just a few clicks of your mouse with On-Screen Control*. *Software download required to enable OnScreen Control. For download details, visit LGUSA.com/OnScreenControlSupport. **Wall mounting hardware sold separately",
    "category": "Joysticks",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e721e07d328a5eae25a52",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322114/ede1xzwxu8ognksiejrj.jpg",
    "details": [
      {
        "Manufacturer": "LG"
      },
      {
        "Series": "32ML600M-B"
      },
      {
        "Screen Size": "31.5 Inches"
      },
      {
        "Color": "Black"
      },
      {
        "Display Resolution": "1920 x 1080"
      },
      {
        "Refresh Rate": "75 Hz"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T19:18:54.636Z",
    "updatedAt": "2022-12-04T01:20:11.300Z",
    "imageId": "ede1xzwxu8ognksiejrj",
    "stock": 12,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e775207d328a5eae25a63",
    "title": "BenQ GW2780 27",
    "price": 149,
    "description": "BenQ GW2780 27 inch frameless IPS monitor combines Ultra slim bezels with hidden cable management. Complementing BenQ exclusive eye-care technology with low Blue light technology and flicker-free performance for extended viewing comfort, industry-leading brightness Intelligence technology delivers exquisite details in any ambient lighting environment. BenQ patented brightness Intelligence technology sensor will automatically detect your ambient lighting surrounds and automatically adjust the screen brightness to protect your eyes from longer on screen periods.",
    "category": "Monitors",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e775207d328a5eae25a64",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322153/fteql393xjydyhnlbmox.jpg",
    "details": [
      {
        "Manufacturer": "BenQ"
      },
      {
        "Series": "GW2780"
      },
      {
        "Screen Size": "27 Inches"
      },
      {
        "Color": "Blue"
      },
      {
        "Display Resolution": "1920 x 1080"
      },
      {
        "Refresh Rate": "75 Hz"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T19:41:06.673Z",
    "updatedAt": "2022-12-04T01:20:11.403Z",
    "imageId": "fteql393xjydyhnlbmox",
    "stock": 14,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e785107d328a5eae25a66",
    "title": "Razer Wolverine V2 Wired Gaming Controller",
    "price": 59,
    "description": "Hit the big league with a wired gaming controller designed for the Xbox Series X console. With advanced customizability for greater precision and control over your game, the Razer Wolverine V2 lets you dominate the competition from the comfort of your couch.",
    "category": "Joysticks",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e785107d328a5eae25a67",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322183/xcdovlpyy1f8ckkwypvs.jpg",
    "details": [
      {
        "Manufacturer": "Razer"
      },
      {
        "Series": "RZ06-03560100-R3U1"
      },
      {
        "Product Dimensions": "3.15 x 7.99 x 8.46 inches; 9.6 Ounces"
      },
      {
        "Color": "Black"
      },
      {
        "Item Weight": "9.6 ounces"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T19:45:21.682Z",
    "updatedAt": "2022-12-04T01:20:11.511Z",
    "imageId": "xcdovlpyy1f8ckkwypvs",
    "stock": 14,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637e79e607d328a5eae25a69",
    "title": "Turtle Beach Recon Controller",
    "price": 39,
    "description": "The Turtle Beach Recon Controller officially licensed for Xbox Series X, Xbox Series S, Xbox One & Windows 10 PCs is the first controller to pair game-changing audio innovations with game-winning controls. Plug in a 3.5mm headset and take advantage of proven Turtle Beach audio features like Superhuman Hearing, Mic Monitoring, Signature Audio Presets, and more. Win more with Pro-Aim Focus Mode, which tunes thumbstick sensitivity for enhanced long-range accuracy, and save up to four selectable profiles on each of the two, rear quick-action buttons. Play for hours in comfort thanks to ergonomic cooling grips and feel every vital gaming detail with next-gen vibration feedback in the handles and triggers.",
    "category": "Joysticks",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637e79e607d328a5eae25a6a",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322213/gah6rzrpcd2h3gslvshf.jpg",
    "details": [
      {
        "Manufacturer": "Turtle Beach"
      },
      {
        "Series": "TBS-0700-01"
      },
      {
        "Product Dimensions": "7.2 x 2.87 x 7.08 inches; 10.56 Ounces"
      },
      {
        "Color": "Black"
      },
      {
        "Item Weight": "10.6 ounces"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-23T19:52:06.550Z",
    "updatedAt": "2022-12-04T01:20:11.623Z",
    "imageId": "gah6rzrpcd2h3gslvshf",
    "stock": 7,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48112d1e40079396c2e",
    "title": "CHUWI HeroBook Pro Laptop 14.1 Inch Windows 11 Intel N4020 8G+256G SSD PC",
    "price": 219.99,
    "description": "The Chuwi HeroBook Pro notebook is a solution for both work and study and entertainment. Being portable, the desk will no longer be your only space to use to open the doors to other environments, whether at home or in the office.Screen with great visual impact, efficiency at your fingertips, powerful solid drive, an exclusive processor for graphics, a battery that accompanies your day.",
    "category": "Notebook",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48112d1e40079396c2f",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322240/femohiwztnwtwo8sg78r.jpg",
    "details": [
      {
        "Model": "HeroBook Pro"
      },
      {
        "Color": "Gray"
      },
      {
        "RAM Size": "8 GB"
      },
      {
        "Manufacturer Warranty": "1 year"
      },
      {
        "SSD Capacity": "256 GB"
      },
      {
        "Screen Size": "14.1 in"
      },
      {
        "Maximum Resolution": "1920 x 1080"
      },
      {
        "Operating System": "Windows 11 Home"
      },
      {
        "Connectivity": "USB 2.0, USB 3.0, Mini-HD Port"
      },
      {
        "Processor Speed": "1.10 GHz-2.60 GHz"
      },
      {
        "Features": "Built-in Microphone, Built-in Webcam"
      },
      {
        "GPU": "Intel UHD Graphics 600"
      },
      {
        "Most Suitable For": "Casual Computing, Light Gaming"
      },
      {
        "Processor": "Intel Dual-Core"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:09.541Z",
    "updatedAt": "2022-12-04T01:20:11.723Z",
    "imageId": "femohiwztnwtwo8sg78r",
    "stock": 16,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48112d1e40079396c31",
    "title": "Notebook Acer Pc portable INTEL N4020, 15.6, Ram 8Gb nvme 256 Gb, Windows 11 PRO",
    "price": 259.99,
    "description": "The Notebook Acer is a solution for both work and study and entertainment. Being portable, the desk will no longer be your only space to use to open the doors to other environments, whether at home or in the office.Screen with great visual impact, efficiency at your fingertips, powerful solid drive, an exclusive processor for graphics, a battery that accompanies your day.",
    "category": "Notebook",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48112d1e40079396c32",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322272/i2mycz1ktrvlsnv1oa6a.jpg",
    "details": [
      {
        "Model": "Acer Extensa 15 EX215-22"
      },
      {
        "Color": "Black"
      },
      {
        "RAM Size": "8 GB"
      },
      {
        "Manufacturer Warranty": "1 year"
      },
      {
        "SSD Capacity": "256 GB"
      },
      {
        "Screen Size": "15.6 in"
      },
      {
        "Operating System": "Windows 10 Pro"
      },
      {
        "Connectivity": "HDMI, USB 2.0, USB 3.1"
      },
      {
        "Processor Speed": "2,60 GHz"
      },
      {
        "Features": "Built-in Microphone, Built-in Webcam"
      },
      {
        "Most Suitable For": "Occasional computing, Workstation"
      },
      {
        "Processor": "AMD A4 3020E"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:09.635Z",
    "updatedAt": "2022-12-04T01:20:11.839Z",
    "imageId": "i2mycz1ktrvlsnv1oa6a",
    "stock": 6,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48112d1e40079396c34",
    "title": "Notebook HP 240 G8 14,1",
    "price": 285,
    "description": "The Notebook HP is a solution for both work and study and entertainment. Being portable, the desk will no longer be your only space to use to open the doors to other environments, whether at home or in the office.Screen with great visual impact, efficiency at your fingertips, powerful solid drive, an exclusive processor for graphics, a battery that accompanies your day.",
    "category": "Notebook",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48112d1e40079396c35",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322298/dkyaivdmfpdvpcb3pbrv.jpg",
    "details": [
      {
        "Model": "HP 240 G8"
      },
      {
        "Color": "Gray"
      },
      {
        "RAM Size": "8 GB"
      },
      {
        "Manufacturer Warranty": "1 year"
      },
      {
        "SSD Capacity": "256 GB"
      },
      {
        "Screen Size": "14.1 in"
      },
      {
        "Operating System": "Windows 11 Pro"
      },
      {
        "Connectivity": "Gigabit Ethernet, HDMI, Slot per scheda SD, USB 2.0, USB 3.0, USB-C"
      },
      {
        "Processor Speed": "3,40 GHz"
      },
      {
        "Features": "Antiurto, Bluetooth, Microfono incorporato, Scheda LAN 10/100, Trackpad Multi-Touch, Webcam integrata, Wi-Fi"
      },
      {
        "Most Suitable For": "Serious game, Graphic design, Casual computing, Workstation"
      },
      {
        "Processor": "Intel Core i3 10a generazione"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:09.720Z",
    "updatedAt": "2022-12-04T01:20:12.298Z",
    "imageId": "dkyaivdmfpdvpcb3pbrv",
    "stock": 4,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48112d1e40079396c37",
    "title": "Dell XPS 17-9720 i7-12700H laptop",
    "price": 180.9,
    "description": "The Notebook Dell XPS is a solution for both work and study and entertainment. Being portable, the desk will no longer be your only space to use to open the doors to other environments, whether at home or in the office.Screen with great visual impact, efficiency at your fingertips, powerful solid drive, an exclusive processor for graphics, a battery that accompanies your day.",
    "category": "Notebook",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48112d1e40079396c38",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322320/bmev2efedyd2nxqkx82u.jpg",
    "details": [
      {
        "Model": "XPS 17-9720"
      },
      {
        "Color": "Gray"
      },
      {
        "RAM Size": "16 GB"
      },
      {
        "Manufacturer Warranty": "3 year"
      },
      {
        "SSD Capacity": "256 GB"
      },
      {
        "Screen Size": "17 in"
      },
      {
        "Operating System": "Windows 11 Home"
      },
      {
        "Connectivity": "HDMI, Slot per scheda SD, USB 2.0, USB 3.0, USB-C"
      },
      {
        "Processor Speed": "2,6 GHz"
      },
      {
        "Features": "Backlit Keyboard, Bluetooth, Built-in Microphone, Built-in Webcam, Multi-Touch Trackpad, Touchscreen, Widescreen Display, Wi-Fi"
      },
      {
        "Most Suitable For": "Casual Computing, Gaming, Graphic Design, Workstation"
      },
      {
        "Processor": "Intel Core i7 12th Gen."
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:09.794Z",
    "updatedAt": "2022-12-04T01:20:12.375Z",
    "imageId": "bmev2efedyd2nxqkx82u",
    "stock": 10,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48112d1e40079396c3a",
    "title": "MacBook Air Apple M2 Laptop 16GB RAM 512GB SSD 8 Core CPU 8 Core GPU MIDNIGHT",
    "price": 200,
    "description": "The MacBook Air Apple is a solution for both work and study and entertainment. Being portable, the desk will no longer be your only space to use to open the doors to other environments, whether at home or in the office.Screen with great visual impact, efficiency at your fingertips, powerful solid drive, an exclusive processor for graphics, a battery that accompanies your day.",
    "category": "Notebook",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48112d1e40079396c3b",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322345/pemkbkscjmenpxeup5fk.jpg",
    "details": [
      {
        "Model": "MacBook Air"
      },
      {
        "Color": "Black, Gray, Pink"
      },
      {
        "RAM Size": "16 GB"
      },
      {
        "Manufacturer Warranty": "1 year"
      },
      {
        "SSD Capacity": "512 GB"
      },
      {
        "Screen Size": "13.6 in"
      },
      {
        "Operating System": "macOS 12.0, Monterey"
      },
      {
        "Connectivity": "Thunderbolt 3/USB 4, Headphone Port, Bluetooth 5.0, Wifi 6, MagSafe 3"
      },
      {
        "Processor Speed": "3,5 GHz"
      },
      {
        "Features": "Apple Retina, Scissor Keyboard, 2x Thunderbolt 3/USB 4 Ports, Built-in Speakers, Headphone Port, MagSafe 3, Backlit Keyboard, Bluetooth, Built-in Microphone, Built-in Webcam, Force Touch Trackpad, Multi-Touch Trackpad, Touch ID"
      },
      {
        "Most Suitable For": "Mobile Powerhouse, macOS Powerhouse, Programming, Web Design, Casual Computing, Graphic Design, Workstation"
      },
      {
        "Processor": "Apple M2"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:09.871Z",
    "updatedAt": "2022-12-04T01:20:12.452Z",
    "imageId": "pemkbkscjmenpxeup5fk",
    "stock": 1,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48112d1e40079396c3d",
    "title": "Apple iPad Wi-Fi + Cellular (MK493KN/A)",
    "price": 795,
    "description": "Full of power, very easy to use and versatile. The new iPad comes with a stunning 10.2-inch Retina display, the powerful A13 Bionic chip, and an ultra-wide-angle front-facing camera with Center Framing. Plus, it's compatible with Apple Pencil and Smart Keyboard.(1). With the iPad, you will do everything like nothing. And for less than you imagine.",
    "category": "Ipad",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48112d1e40079396c3e",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322369/ejlhsnjsgvdcbjejwqgy.jpg",
    "details": [
      {
        "Model": "9th Generation"
      },
      {
        "Color": "Gray"
      },
      {
        "Memory": "64 GB"
      },
      {
        "Manufacturer Warranty": "1 year"
      },
      {
        "Screen Size": "10.2 in"
      },
      {
        "Operating System": "iPadOS 15.0"
      },
      {
        "Connectivity": "Smart connector, Conector lightning, Bluetooth, Wi-Fi, LTE, MIMO"
      },
      {
        "Features": "It's multitouch. It includes USB-C Adapter, Lightning to USB-C Cable. It has Touch ID sensors, Gyroscope, Accelerometer, Barometer, Ambient Light Sensor. With GPS. SIM card readers Nano-SIM, eSIM. Bluetooth version 4.2."
      },
      {
        "Processor": "Chipset Apple A13 Bionic"
      },
      {
        "Battery life": "9 hours"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:09.944Z",
    "updatedAt": "2022-12-04T01:20:12.526Z",
    "imageId": "ejlhsnjsgvdcbjejwqgy",
    "stock": 7,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48212d1e40079396c40",
    "title": "Intel Atlas Canyon NUC11ATKC20RA Barebone L6 N (BNUC11ATKC20RA0)",
    "price": 386,
    "description": "It is for bulk encryption/decryption, authentication, random number generation, and authentication encryption applications.The Intel vPro platform is a set of hardware and technologies used to create business computing endpoints with world-class performance, built-in security, modern manageability, and platform stability.",
    "category": "Pc",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48212d1e40079396c41",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322398/un2hvawdwsxvy5nkduhh.jpg",
    "details": [
      {
        "Model": "NUC7CJYH"
      },
      {
        "Color": "Black"
      },
      {
        "Memory": "32 GB"
      },
      {
        "Manufacturer Warranty": "1 year"
      },
      {
        "Operating System": "Windows 11 Home"
      },
      {
        "Connectivity": "USB 2.0, HDMI 2.0b, microphone input, headPhone outputs"
      },
      {
        "Features": "Supported operating systems Windows 11, 64-bit*, Windows 10, 64-bit. Chassis dimensions 115 x 111 x 51mm."
      },
      {
        "Processor": "Intel Celeron N"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:10.025Z",
    "updatedAt": "2022-12-04T01:20:12.607Z",
    "imageId": "un2hvawdwsxvy5nkduhh",
    "stock": 18,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48212d1e40079396c43",
    "title": "Logitech K400 Plus Tv Wireless Keyboard",
    "price": 100,
    "description": "Designed for relaxed control. Wireless keyboard with integrated touchpad",
    "category": "Keyboard",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48212d1e40079396c44",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322422/ouggksx4gpxaql4ivfir.webp",
    "details": [
      {
        "Connection type": "Logitech Unifying Protocol (2.4 GHz)"
      },
      {
        "Color": "Black"
      },
      {
        "Buttons/Stick Keys": "Mute and Volume Adjustment"
      },
      {
        "Manufacturer Warranty": "6 months"
      },
      {
        "Supported operating systems/platforms": "Windows® 7, Windows 8, Windows 10 or later, Android™ 5.0 or later, Chrome OS™"
      },
      {
        "Connectivity": "USB"
      },
      {
        "Dimensions General": "Height: 139.9mm (5.5in), Width: 354.3 mm (14.0 in), Depth: 23.5mm (1.0in), Weight: 380g (with batteries)"
      },
      {
        "Touch pad": "Height: 76mm (3.0in), Width: 47mm (2.0in)"
      },
      {
        "Battery details": "2 AA batteries"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:10.099Z",
    "updatedAt": "2022-12-04T01:20:12.727Z",
    "imageId": "ouggksx4gpxaql4ivfir",
    "stock": 3,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48212d1e40079396c46",
    "title": "Smart TV Wireless Keyboard Nisuta Wireless With Touch Pad",
    "price": 60,
    "description": "This Nisuta keyboard is the best complement to do all kinds of activities. It is comfortable and practical when writing documents, browsing and searching the Internet, whether at work or in the comfort of your home.",
    "category": "Keyboard",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48212d1e40079396c47",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322448/pygvrcwakcfcvrwnnx1o.webp",
    "details": [
      {
        "Connection type": "USB 2.0"
      },
      {
        "Color": "Black"
      },
      {
        "Buttons/Stick Keys": "Mute and Volume Adjustment"
      },
      {
        "Manufacturer Warranty": "6 months"
      },
      {
        "Supported operating systems/platforms": "Windows® 7, Windows 8, Windows 10 or later, Android™ 5.0 or later, Chrome OS™"
      },
      {
        "Dimensions General": "Height: 139.9mm (5.5in), Width: 354.3 mm (14.0 in), Depth: 23.5mm (1.0in), Weight: 380g (with batteries)"
      },
      {
        "Touch pad": "Height: 76mm (3.0in), Width: 47mm (2.0in)"
      },
      {
        "Features": "With its built-in touchpad you can easily control the cursor and maintain comfortable navigation in any interface."
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:10.172Z",
    "updatedAt": "2022-12-04T01:20:12.824Z",
    "imageId": "pygvrcwakcfcvrwnnx1o",
    "stock": 14,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637eb48212d1e40079396c49",
    "title": "Mini Led Keyboard With Backlit Lights Tv Smart Android!",
    "price": 150,
    "description": "The i8b model is the best known in mini wireless keyboards, and in this version it not only has the function of backlighting in green, blue or red, but it also has a rechargeable lithium battery to forget about batteries.",
    "category": "Keyboard",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637eb48212d1e40079396c4a",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322474/knylgeux1bmqhmlbket1.webp",
    "details": [
      {
        "Model": "i8B"
      },
      {
        "Device Type": "Keyboard and Mouse Pad"
      },
      {
        "Color": "Red, Green, Blue"
      },
      {
        "Buttons/Stick Keys": "Mute and Volume Adjustment"
      },
      {
        "Manufacturer Warranty": "6 months"
      },
      {
        "Supported operating systems/platforms": "Windows/Android/MAC OS/Linux, Projectors, Notebooks, Tablets, PC, Smart TV, TV Box"
      },
      {
        "Dimensions General": "keyboard height(10cm), keyboard width(14.7cm), Keyboard depth(2cm)"
      },
      {
        "Features": "Smart energy saving. Built-in rechargeable battery. Average maximum range up to 5 meters approximate."
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T00:02:10.248Z",
    "updatedAt": "2022-12-04T01:20:12.913Z",
    "imageId": "knylgeux1bmqhmlbket1",
    "stock": 3,
    "available": true
  },
  {
    "sales": 0,
    "_id": "637fcf7aea05d1600289455c",
    "title": "Illuminated Keyboard Wired Illuminated keyboards Mechanical Electronics 87-Key",
    "price": 35,
    "description": "Description: Backlit: The gaming keyboard features backlit design, which makes it eye-catching and stylish, suitable for both boys and girls. 87-key: The mechanical keyboard is designed with 87 keys, precisely produced, providing a more comfortable touch and operation. Ergonomic: The wired keyboard features ergonomic design, which reduces fatigue of your arms and wrist after using for a long time. Wide compatibility: This gaming keyboard is compatible with most operation systems, suitable for homes, offices, net bars, and more. Special present: This computer keyboard is a perfect gift for boyfriends and girlfriends who like playing computer games, for birthdays, anniversaries, and more.",
    "category": "Keyboard",
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "637fcf7aea05d1600289455d",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669322530/txzvp8tuqga77ikpa597.jpg",
    "details": [
      {
        "Type": "Wired"
      },
      {
        "Color": "Black"
      },
      {
        "Antenna Style": "Gaming"
      },
      {
        "Compatibility": "Replacement for Windows XP/2000/VISTA/7/8/10"
      },
      {
        "nterface Type": "USB"
      }
    ],
    "reviews": [],
    "createdAt": "2022-11-24T20:09:30.737Z",
    "updatedAt": "2022-12-04T01:20:13.019Z",
    "imageId": "txzvp8tuqga77ikpa597",
    "stock": 5,
    "available": true
  },
  {
    "sales": 0,
    "_id": "6384eb5a9d08736b7fe75d1f",
    "title": "Joystick de play 2",
    "price": 200,
    "description": "El mejor joystick",
    "category": "Joysticks",
    "stock": 4,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "6384eb5a9d08736b7fe75d20"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1669655384/ifyvuott9vuzniigxwzk.jpg",
    "imageId": "ifyvuott9vuzniigxwzk",
    "details": [],
    "reviews": [],
    "createdAt": "2022-11-28T17:09:46.592Z",
    "updatedAt": "2022-12-04T01:20:13.139Z",
    "available": true
  },
  {
    "_id": "638bc53637832ed9a26175c7",
    "title": "Thrustmaster FCS Flight Stick",
    "price": 59,
    "description": "Thrustmaster has devoted its 25 years of expertise in flight sim controllers to meet the growing demand from flight simmers in general  and space simmers in particular. The T.16000M FCS has been designed for advanced fliers looking for comprehensive, realistic controls as an alternative to using a mouse and keyboard.",
    "category": "Joysticks",
    "stock": 10,
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "638bc53637832ed9a26175c8",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670104374/dmxtsinztdep0midwbvv.jpg",
    "available": true,
    "imageId": "dmxtsinztdep0midwbvv",
    "details": [
      {
        "Manufacturer": "Thrustmaster VG"
      },
      {
        "Series": "T16000M FCS"
      },
      {
        "Product Dimensions": "8.18 x 9.44 x 7.79 inches; 2.58 Pounds"
      },
      {
        "Color": "Black"
      },
      {
        "Item Weight": "2.58 pounds"
      },
      {
        "Country of Origin": "China"
      }
    ],
    "sales": 0,
    "cart": [],
    "reviews": [],
    "createdAt": "2022-12-03T21:52:54.879Z",
    "updatedAt": "2022-12-04T01:20:13.583Z"
  },
  {
    "_id": "638d1e0f34e6603426d3cd29",
    "title": "Amazon Basics USB Keyboard",
    "price": 9.65,
    "description": "Keyboard with low profile keys for a comfortable, quiet typing experience, includes a matte black keyboard with US layout QWERTY and a simple wired USB connection",
    "category": "Keyboard",
    "stock": 99,
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "638d1e0f34e6603426d3cd2a",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670192654/wluzay60c4r64dsdghw9.jpg",
    "available": true,
    "imageId": "wluzay60c4r64dsdghw9",
    "details": [
      {
        "Connection type": "USB 2.0"
      },
      {
        "Color": "Black"
      },
      {
        "Buttons/Stick Keys": "Mute and Volume Adjustment"
      },
      {
        "Manufacturer Warranty": "6 months"
      },
      {
        "Supported operating systems/platforms": "Windows® 7, Windows 8, Windows 10 or later, Android™ 5.0 or later, Chrome OS™"
      },
      {
        "Dimensions General": "Height: 139.9mm (5.5in), Width: 354.3 mm (14.0 in), Depth: 23.5mm (1.0in), Weight: 380g (with batteries)"
      },
      {
        "Item Weight": "15.7 ounces"
      }
    ],
    "sales": 0,
    "cart": [],
    "reviews": [],
    "createdAt": "2022-12-04T22:24:15.279Z",
    "updatedAt": "2022-12-04T22:24:15.279Z"
  },
  {
    "_id": "638d1fc54f50b774d667884f",
    "title": "Office Gaming Chair, PU Leather Computer Chair, Comfortable Swivel Task Home Office Desk Chair High Back with Adjustable Footrest",
    "price": 98.99,
    "description": "Play games in comfort and style with our gaming chair! With our gaming chairs, you can recline and relax while you play, and our footrest will make your experience even better. With 90 to 155 reclining and adjustable backrest, these chairs will make sure that you're comfortable while you play.",
    "category": "Gaming chair",
    "stock": 5,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "638d1fc54f50b774d6678850"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670193092/yevogqcebvkiornbvxci.jpg",
    "available": true,
    "imageId": "yevogqcebvkiornbvxci",
    "details": [],
    "sales": 0,
    "cart": [],
    "reviews": [],
    "createdAt": "2022-12-04T22:31:33.447Z",
    "updatedAt": "2022-12-04T22:31:33.447Z"
  },
  {
    "_id": "638d1fea93df3a0da0cc321a",
    "title": "Sony Playstation PS4",
    "price": 322,
    "description": "The PlayStation 4 (PS4) is a home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America, November 29, 2013 in Europe, South America and Australia, and on February 22, 2014 in Japan. A console of the eighth generation, it competes with the Microsoft's Xbox One and the Nintendo's Wii U and Switch.",
    "category": "Consoles",
    "stock": 42,
    "rating": {
      "points": 0,
      "votes": 0,
      "_id": "638d1fea93df3a0da0cc321b",
      "rating": 0
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670193130/tble2w5olnz1n0qndhos.jpg",
    "available": true,
    "imageId": "tble2w5olnz1n0qndhos",
    "details": [
      {
        "Manufacturer": "Sony"
      },
      {
        "Color": "Black"
      },
      {
        "Batteries": "1 Lithium Ion batteries required. (included)"
      },
      {
        "Manufacturer Warranty": "6 months"
      },
      {
        "Item Weight": "10.36 pounds"
      },
      {
        "Dimensions General": "Height: 139.9mm (5.5in), Width: 354.3 mm (14.0 in), Depth: 23.5mm (1.0in), Weight: 380g (with batteries)"
      }
    ],
    "sales": 0,
    "cart": [],
    "reviews": [],
    "createdAt": "2022-12-04T22:32:10.808Z",
    "updatedAt": "2022-12-04T22:40:54.833Z"
  },
  {
    "_id": "638d27899160e96c9a0056c0",
    "title": "Gaming Chair  Office Chair Desk Chairs with Wheels Computer Chair with Flip up Armrest and Height Adjustable Swivel Chair Splicing PU Leather Chair Home Office Chair with Lumbar Support",
    "price": 94.99,
    "description": "The overall size of 28.35 25.98 42.13 46.0, using high quality PU leather, with dirt resistant, wear resistant, easy to clean, skin friendly non irritating characteristics, and easy to take care of. Ideal for entertainment, watching movies, working, resting, to meet your multi faceted needs. Weighing only 30 pounds, it meets the need to carry on the go",
    "category": "Gaming chair",
    "stock": 10,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "638d27899160e96c9a0056c1"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670195082/dczbgwklfe50uesilftr.jpg",
    "available": true,
    "imageId": "dczbgwklfe50uesilftr",
    "details": [],
    "sales": 0,
    "cart": [],
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "Muy comoda",
        "_id": "639248464ccb2bb7b304bd28"
      }
    ],
    "createdAt": "2022-12-04T23:04:41.993Z",
    "updatedAt": "2022-12-08T20:25:42.534Z"
  },
  {
    "_id": "638d27e29160e96c9a0056c3",
    "title": "Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair",
    "price": 105.99,
    "description": "This gaming chair is wrapped in black and red leatherette and carbon fiber in a sleek, race inspired shap, providing immersive gaming experience",
    "category": "Gaming chair",
    "stock": 9,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "638d27e29160e96c9a0056c4"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670195170/u0yyniqnm7fnkfmgsqso.jpg",
    "available": true,
    "imageId": "u0yyniqnm7fnkfmgsqso",
    "details": [],
    "sales": 0,
    "cart": [],
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "excelente <3",
        "_id": "639248a04ccb2bb7b304bd4c"
      }
    ],
    "createdAt": "2022-12-04T23:06:10.077Z",
    "updatedAt": "2022-12-08T20:27:12.344Z"
  },
  {
    "_id": "638d28789160e96c9a0056c6",
    "title": "Ergonomic Gaming Chair with Footrest Recliner  Racing Style High Back PC Computer Desk Office Chair  360 Swivel, Adjustable Lumbar Support, Headrest Pillow, Padded Armrests  2019 Green",
    "price": 260.33,
    "description": "GAMIFIED SEATING A racecar style gaming chair that provides luxury and comfort, whether its used for intense gaming sessions and climbing to the top of the leaderboards, or long work days.",
    "category": "Gaming chair",
    "stock": 1,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "638d28789160e96c9a0056c7"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670195320/fd7rn2gnt5vlu4nvbamb.jpg",
    "available": true,
    "imageId": "fd7rn2gnt5vlu4nvbamb",
    "details": [],
    "sales": 0,
    "cart": [],
    "reviews": [],
    "createdAt": "2022-12-04T23:08:40.185Z",
    "updatedAt": "2022-12-04T23:08:40.185Z"
  },
  {
    "_id": "638d5dc83141e7132404c38b",
    "title": "asd",
    "price": 22,
    "description": "asd",
    "category": "Notebook",
    "stock": 2,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "638d5dc83141e7132404c38c"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670208968/ek6zwpay5uoihng8egrs.jpg",
    "available": true,
    "imageId": "ek6zwpay5uoihng8egrs",
    "details": [],
    "sales": 0,
    "cart": [],
    "reviews": [
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "Que horrible, el peor rosquete que comi en mi vida",
        "_id": "63911bcdf56e4b2d8e83730b"
      },
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "Ojala nadie compre esto nunca",
        "_id": "63911d29f56e4b2d8e83732e"
      },
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "probando probando... se escucha?",
        "_id": "63911de0f56e4b2d8e837337"
      },
      {
        "user": "auth0|638d430d1f2a815a71110c21",
        "review": "1...2...3",
        "_id": "63911e26f56e4b2d8e83734d"
      }
    ],
    "createdAt": "2022-12-05T02:56:08.868Z",
    "updatedAt": "2022-12-07T23:13:42.433Z"
  },
  {
    "_id": "638e261dde0ade46224b8c78",
    "title": "Compu",
    "price": 500,
    "description": "La mas mejor",
    "category": "Pc",
    "stock": 1,
    "rating": {
      "points": 0,
      "votes": 0,
      "rating": 0,
      "_id": "638e261dde0ade46224b8c79"
    },
    "image": "https://res.cloudinary.com/ddmdopmzf/image/upload/v1670260253/skb2rofwxphu0q9p4xr1.jpg",
    "available": true,
    "imageId": "skb2rofwxphu0q9p4xr1",
    "details": [],
    "sales": 0,
    "cart": [],
    "reviews": [],
    "createdAt": "2022-12-05T17:10:53.648Z",
    "updatedAt": "2022-12-05T17:10:53.648Z"
  }
]

