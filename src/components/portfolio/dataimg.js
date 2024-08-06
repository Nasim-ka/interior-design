import dining from "../../../public/images/portfolio/dining.jpg"
import Wallshelf from "../../../public/images/portfolio/Wallshelf.jpg"
import Stoneware from "../../../public/images/portfolio/Stoneware.jpg"
import TableStool from "../../../public/images/portfolio/TableStool.jpg"
import Dining4seats from "../../../public/images/portfolio/Dining4seats.jpg"
import Chair from "../../../public/images/portfolio/Chair.jpg"
import  Cushion from "../../../public/images/portfolio/Cushion.jpg"
import Lamp from "../../../public/images/portfolio/Lamp.jpg"
import sofas from "../../../public/images/portfolio/sofas.jpg"

const Data = [
  {
    id:1,
    imgURL:dining,
    category: "Kitchen",
    name:"Dining sets up to 2 seats",
    price:"$179",
    Material:"Wood",
    Description:"This table suits many people from the minimalist to the family demanding everyday strength and durability. Put it in the kitchen or in the dining room. The clean design coordinates well with many styles.Small dimensions make the table easy to furnish with, even when space is limited.",
    title:"Description",

},
{
    id:2,
    imgURL:Wallshelf,
    category: "Kitchen",
    name:"Wall shelf",
    price:"$300",
    Material:"Wood",
    Description:"Wall shelf with seven hooks. Two holes for hanging. Wall shelf in lacquered medium-density fiberboard with different options for mounting. Hole for hanging at back. Screws not included. Depth 3 1/4 in. Height 4 3/4 in. Length 21 1/2 in.",
    title:"Description",
}, {
    id:3,
    imgURL:Stoneware,
    category: "Kitchen",
    name:"Large Stoneware Vase",
    price:"$150",
    Material:"Ceramic",
    Description:"Vase in glazed stoneware with a timeless, classic design. Crafted with a wide shoulder, neck ring, and elegantly flared opening. An eye-catcher that is perfect for displaying your favorite flowers. Diameter of opening 6 in. Diameter at widest point approx. 8 3/4 in. Height 13 3/4 in.",
    title:"Description",
}, {
    id:4,
    imgURL:TableStool,
    category: "Hallway",
    name:"Small Side Table & Stool",
    price:"$70",
    Material:"Wood",  
    Description:"Small side table in painted wood for indoor or outdoor use. Round top with a low rim. Supplied flat-packed, ready to assemble. Height approx. 16 1/2 in. Diameter 11 3/4 in.Stool has a rich brown color and distinctive grain pattern. It is highly durable, resistant to scratches and water, ideal for heavy-use. Acacia slightly darkens with age.",
    title:"Description",
    
    
    
}, {
    id:5,
    imgURL:Dining4seats,
    category: "Hallway",
    name:"Dining sets up to 4 seats",
    price:"$700",
    Material:"wood",
    Description:"A simple and sturdy set that’s perfect for your breakfast nook or smaller dining area. The solid pine holds up well over time and will endure all the family meals and activities around the table.Durable solid wood and antique color finish will outlast many years of use.",
    title:"Description",

}, {
    id:6,
    imgURL:Chair,
    category: "Hallway",
    name:"Wooden Folding Chair",
    price:"$200",
    Material:"Wood",
    Description:"Folding chair in beech with a rattan seat and back. Adjustable back for added comfort. Folds easily to save space. Supplied fully assembled. Seat depth approx. 15 1/4 in. Seat height approx. 17 1/4 in. Width 17 1/4 in. Depth 19 3/4 in. Height 30 3/4 in. Weight approx. 10 lb.",
    title:"Description",

}, {
    id:7,
    imgURL:Cushion,
    category: "Living",
 name:"Canvas Cushion Cover",
    price:"$70",
    Material:"Polyester 90%, Wool 10%",    
    Description:"Cushion cover in canvas with wool content. Contrasting velvet piping and a concealed zipper at one side.The total weight of the product is calculated by adding the weight of all layers and main components together. Based on that, we calculate how much of that weight is made out by each material.",
    title:"Description",
}, {
    id:8,
    imgURL:Lamp,
    category: "Living",
    name:"Chrome-finish Uplighter Floor Lamp",
    price:"$160",
    Material:"Metal",
    Description:"Sleek, stylish uplighter floor lamp in metal with a polished chrome finish, casting a soft, upward glow, perfect for ambient lighting. Place in a corner or behind furniture to illuminate and enhance your space. Fabric-covered cord with a plastic switch. E26 socket. Max 15 W LED. Diameter of shade approx. 14 1/4 in. Diameter of base 15 1/4 in. Height 5 ft. 7 in.",
    title:"Description",
}, {
    id:9,
    imgURL:sofas,
    category: "Living",
    name:"sofas",
    price:"$300",
    Material:"Cotton",
    Description:"Modular sofa: Put together your dream sofa from many different modules, fabric and color variants.Ultimate seating experience Made in Europe Back cushion made of granular foam mixture Seat with cold foam core Cover for back cushions and seat cushions can be removed Can be set up freely in the room: All of our sofas are fully covered High quality wooden frame",
    title:"Description",
},
  ];
   
  export default Data;


  export const getProduct = (pID) =>{

    return  Data.find((item)=> item.id == pID)

  }
