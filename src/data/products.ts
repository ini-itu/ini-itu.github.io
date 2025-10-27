import sofaImage from "@/assets/sofa-beige.jpg";
import tableImage from "@/assets/table-wood.jpg";
import chairImage from "@/assets/chair-green.jpg";
import bookshelfImage from "@/assets/bookshelf.jpg";
import lampImage from "@/assets/lamp.jpg";
import coffeeTableImage from "@/assets/coffee-table.jpg";
import sofaGrayImage from "@/assets/sofa-gray.jpg";
import bedFrameImage from "@/assets/bed-frame.jpg";
import dresserImage from "@/assets/dresser.jpg";
import diningTableRoundImage from "@/assets/dining-table-round.jpg";
import diningChairsImage from "@/assets/dining-chairs.jpg";
import sideboardImage from "@/assets/sideboard.jpg";
import officeChairImage from "@/assets/office-chair.jpg";
import officeDeskImage from "@/assets/office-desk.jpg";
import floorLampImage from "@/assets/floor-lamp.jpg";
import pendantLightImage from "@/assets/pendant-light.jpg";
import loveseatBlueImage from "@/assets/loveseat-blue.jpg";
import tvStandImage from "@/assets/tv-stand.jpg";
import nightstandImage from "@/assets/nightstand.jpg";
import barStoolImage from "@/assets/bar-stool.jpg";
import consoleTableImage from "@/assets/console-table.jpg";
import ottomanBeigeImage from "@/assets/ottoman-beige.jpg";
import reclinerBrownImage from "@/assets/recliner-brown.jpg";
import sideTableMarbleImage from "@/assets/side-table-marble.jpg";
import buffetCabinetImage from "@/assets/buffet-cabinet.jpg";
import wineRackImage from "@/assets/wine-rack.jpg";
import diningBenchImage from "@/assets/dining-bench.jpg";
import counterTableImage from "@/assets/counter-table.jpg";
import kitchenIslandImage from "@/assets/kitchen-island.jpg";
import fileCabinetImage from "@/assets/file-cabinet.jpg";
import deskOrganizerImage from "@/assets/desk-organizer.jpg";
import taskChairImage from "@/assets/task-chair.jpg";
import standingDeskImage from "@/assets/standing-desk.jpg";
import computerHutchImage from "@/assets/computer-hutch.jpg";
import officeStorageImage from "@/assets/office-storage.jpg";
import executiveDeskImage from "@/assets/executive-desk.jpg";
import chandelierCrystalImage from "@/assets/chandelier-crystal.jpg";
import wallSconceImage from "@/assets/wall-sconce.jpg";
import deskLampImage from "@/assets/desk-lamp.jpg";
import ledStripImage from "@/assets/led-strip.jpg";
import ceilingLightImage from "@/assets/ceiling-light.jpg";
import cornerLampImage from "@/assets/corner-lamp.jpg";
import readingLampImage from "@/assets/reading-lamp.jpg";
import wardrobeImage from "@/assets/wardrobe.jpg";
import vanityTableImage from "@/assets/vanity-table.jpg";
import chestDrawersImage from "@/assets/chest-drawers.jpg";
import bedBenchImage from "@/assets/bed-bench.jpg";
import fullMirrorImage from "@/assets/full-mirror.jpg";
import bedsideLampImage from "@/assets/bedside-lamp.jpg";
import storageOttomanImage from "@/assets/storage-ottoman.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  dimensions: string;
  material: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Beige Sofa",
    price: 1299,
    image: sofaImage,
    category: "Living Room",
    description: "Elegant modern sofa with clean lines and comfortable cushioning. Perfect for contemporary living spaces.",
    dimensions: "84\" W x 36\" D x 32\" H",
    material: "Premium fabric upholstery with solid wood frame",
  },
  {
    id: 2,
    name: "Oak Dining Table",
    price: 899,
    image: tableImage,
    category: "Dining",
    description: "Handcrafted dining table featuring beautiful natural oak wood grain. Seats 6-8 people comfortably.",
    dimensions: "72\" W x 40\" D x 30\" H",
    material: "Solid oak wood with natural finish",
  },
  {
    id: 3,
    name: "Velvet Accent Chair",
    price: 549,
    image: chairImage,
    category: "Living Room",
    description: "Luxurious velvet accent chair in sage green with elegant gold legs. Adds a touch of sophistication to any room.",
    dimensions: "30\" W x 32\" D x 34\" H",
    material: "Velvet upholstery with brass legs",
  },
  {
    id: 4,
    name: "Scandinavian Bookshelf",
    price: 679,
    image: bookshelfImage,
    category: "Office",
    description: "Clean-lined bookshelf with ample storage space. Inspired by Scandinavian design principles.",
    dimensions: "48\" W x 16\" D x 72\" H",
    material: "Solid wood with natural finish",
  },
  {
    id: 5,
    name: "Modern Table Lamp",
    price: 129,
    image: lampImage,
    category: "Lighting",
    description: "Elegant brass table lamp with white linen shade. Perfect for bedside or desk illumination.",
    dimensions: "12\" W x 12\" D x 22\" H",
    material: "Brass base with linen shade",
  },
  {
    id: 6,
    name: "Marble Coffee Table",
    price: 799,
    image: coffeeTableImage,
    category: "Living Room",
    description: "Stunning coffee table featuring genuine marble top with wooden base. A centerpiece for your living room.",
    dimensions: "48\" W x 28\" D x 18\" H",
    material: "Marble top with solid wood frame",
  },
  {
    id: 7,
    name: "Gray Sectional Sofa",
    price: 1899,
    image: sofaGrayImage,
    category: "Living Room",
    description: "Spacious sectional sofa with chaise lounge. Modular design perfect for large living spaces.",
    dimensions: "120\" W x 85\" D x 32\" H",
    material: "Premium fabric upholstery with wooden frame",
  },
  {
    id: 8,
    name: "Blue Velvet Loveseat",
    price: 849,
    image: loveseatBlueImage,
    category: "Living Room",
    description: "Cozy tufted loveseat in rich blue velvet. Classic design with modern comfort.",
    dimensions: "60\" W x 34\" D x 36\" H",
    material: "Velvet upholstery with wooden legs",
  },
  {
    id: 9,
    name: "TV Entertainment Center",
    price: 599,
    image: tvStandImage,
    category: "Living Room",
    description: "Modern entertainment center with ample storage and shelving for media devices.",
    dimensions: "70\" W x 18\" D x 24\" H",
    material: "Walnut wood with metal accents",
  },
  {
    id: 10,
    name: "Console Table",
    price: 449,
    image: consoleTableImage,
    category: "Living Room",
    description: "Elegant console table with marble top and gold frame. Perfect for entryways.",
    dimensions: "48\" W x 14\" D x 32\" H",
    material: "Marble top with brass frame",
  },
  {
    id: 11,
    name: "Round Glass Dining Table",
    price: 749,
    image: diningTableRoundImage,
    category: "Dining",
    description: "Modern round dining table with glass top and wooden base. Seats 4 people comfortably.",
    dimensions: "48\" Diameter x 30\" H",
    material: "Tempered glass top with oak base",
  },
  {
    id: 12,
    name: "Dining Chair Set",
    price: 599,
    image: diningChairsImage,
    category: "Dining",
    description: "Set of 4 modern dining chairs with cushioned seats and wooden legs.",
    dimensions: "18\" W x 22\" D x 36\" H (each)",
    material: "Fabric upholstery with wooden legs",
  },
  {
    id: 13,
    name: "Walnut Sideboard",
    price: 899,
    image: sideboardImage,
    category: "Dining",
    description: "Elegant sideboard with sleek design. Perfect for storing dining essentials.",
    dimensions: "60\" W x 18\" D x 30\" H",
    material: "Solid walnut with brass handles",
  },
  {
    id: 14,
    name: "Bar Stool Set",
    price: 399,
    image: barStoolImage,
    category: "Dining",
    description: "Set of 2 modern bar stools with adjustable height and velvet upholstery.",
    dimensions: "16\" W x 16\" D x 30-36\" H (each)",
    material: "Velvet upholstery with gold legs",
  },
  {
    id: 15,
    name: "Ergonomic Office Chair",
    price: 459,
    image: officeChairImage,
    category: "Office",
    description: "Professional office chair with mesh back and leather seat. Adjustable height and lumbar support.",
    dimensions: "26\" W x 26\" D x 42\" H",
    material: "Mesh back with leather seat and chrome base",
  },
  {
    id: 16,
    name: "L-Shaped Office Desk",
    price: 799,
    image: officeDeskImage,
    category: "Office",
    description: "Spacious L-shaped desk with ample workspace. Perfect for home office setups.",
    dimensions: "60\" W x 60\" D x 30\" H",
    material: "Wood top with metal frame",
  },
  {
    id: 17,
    name: "Arc Floor Lamp",
    price: 299,
    image: floorLampImage,
    category: "Lighting",
    description: "Modern arc floor lamp with adjustable height. Brass finish adds elegance.",
    dimensions: "12\" W x 72\" H",
    material: "Brass with fabric shade",
  },
  {
    id: 18,
    name: "Geometric Pendant Light",
    price: 199,
    image: pendantLightImage,
    category: "Lighting",
    description: "Industrial pendant light with geometric cage design. Perfect for dining areas.",
    dimensions: "16\" W x 18\" H",
    material: "Black metal with Edison bulb",
  },
  {
    id: 19,
    name: "Platform Bed Frame",
    price: 999,
    image: bedFrameImage,
    category: "Bedroom",
    description: "Modern platform bed with upholstered headboard. Queen size with sturdy construction.",
    dimensions: "64\" W x 84\" D x 42\" H",
    material: "Wood frame with fabric headboard",
  },
  {
    id: 20,
    name: "Modern Dresser",
    price: 649,
    image: dresserImage,
    category: "Bedroom",
    description: "Scandinavian style dresser with 6 drawers. Clean lines and ample storage.",
    dimensions: "48\" W x 18\" D x 32\" H",
    material: "White finish with wooden handles",
  },
  {
    id: 21,
    name: "Nightstand",
    price: 199,
    image: nightstandImage,
    category: "Bedroom",
    description: "Minimalist nightstand with drawer and open shelf. Perfect beside companion.",
    dimensions: "20\" W x 16\" D x 24\" H",
    material: "White with wood accents",
  },
  {
    id: 22,
    name: "Round Ottoman Pouf",
    price: 249,
    image: ottomanBeigeImage,
    category: "Living Room",
    description: "Versatile ottoman pouf with fabric upholstery. Perfect as footrest or extra seating.",
    dimensions: "28\" W x 28\" D x 18\" H",
    material: "Beige fabric with wooden legs",
  },
  {
    id: 23,
    name: "Leather Recliner",
    price: 1299,
    image: reclinerBrownImage,
    category: "Living Room",
    description: "Luxury swivel recliner in premium leather. Ultimate comfort with modern style.",
    dimensions: "35\" W x 40\" D x 42\" H",
    material: "Genuine leather with metal base",
  },
  {
    id: 24,
    name: "Marble Side Table",
    price: 349,
    image: sideTableMarbleImage,
    category: "Living Room",
    description: "Elegant side table with white marble top and gold metal frame. Modern accent piece.",
    dimensions: "20\" Diameter x 22\" H",
    material: "Marble top with brass frame",
  },
  {
    id: 25,
    name: "Glass Door Buffet",
    price: 1199,
    image: buffetCabinetImage,
    category: "Dining",
    description: "Elegant buffet cabinet with glass doors and interior lighting. Perfect for dining room display.",
    dimensions: "72\" W x 18\" D x 78\" H",
    material: "Solid wood with glass doors",
  },
  {
    id: 26,
    name: "12-Bottle Wine Rack",
    price: 179,
    image: wineRackImage,
    category: "Dining",
    description: "Compact wine rack with modern design. Holds 12 bottles with style.",
    dimensions: "18\" W x 12\" D x 24\" H",
    material: "Wood with metal accents",
  },
  {
    id: 27,
    name: "Upholstered Dining Bench",
    price: 449,
    image: diningBenchImage,
    category: "Dining",
    description: "Tufted dining bench with comfortable cushioning. Seats 2-3 people.",
    dimensions: "52\" W x 18\" D x 20\" H",
    material: "Gray fabric with wooden legs",
  },
  {
    id: 28,
    name: "Counter Height Table",
    price: 649,
    image: counterTableImage,
    category: "Dining",
    description: "Modern counter height table with marble top. Ideal for casual dining.",
    dimensions: "42\" W x 42\" D x 36\" H",
    material: "Marble top with metal base",
  },
  {
    id: 29,
    name: "Kitchen Island",
    price: 999,
    image: kitchenIslandImage,
    category: "Dining",
    description: "Functional kitchen island with storage cabinets and wooden top. Additional counter space.",
    dimensions: "60\" W x 30\" D x 36\" H",
    material: "Wood top with white base",
  },
  {
    id: 30,
    name: "File Cabinet",
    price: 229,
    image: fileCabinetImage,
    category: "Office",
    description: "Modern file cabinet with three drawers. Organize your documents with style.",
    dimensions: "16\" W x 20\" D x 28\" H",
    material: "White finish with metal handles",
  },
  {
    id: 31,
    name: "Desk Organizer Set",
    price: 89,
    image: deskOrganizerImage,
    category: "Office",
    description: "Complete wooden desk organizer set. Keep your workspace tidy and efficient.",
    dimensions: "16\" W x 8\" D x 6\" H",
    material: "Natural wood with multiple compartments",
  },
  {
    id: 32,
    name: "Ergonomic Task Chair",
    price: 399,
    image: taskChairImage,
    category: "Office",
    description: "Modern task chair with headrest and adjustable features. All-day comfort.",
    dimensions: "26\" W x 26\" D x 48\" H",
    material: "Gray fabric with mesh back",
  },
  {
    id: 33,
    name: "Electric Standing Desk",
    price: 899,
    image: standingDeskImage,
    category: "Office",
    description: "Adjustable height standing desk with electric motor. Promote healthy work habits.",
    dimensions: "60\" W x 30\" D x 25-50\" H",
    material: "Wood top with metal frame",
  },
  {
    id: 34,
    name: "Computer Desk Hutch",
    price: 549,
    image: computerHutchImage,
    category: "Office",
    description: "Space-saving computer hutch with multiple shelves and storage. Complete workstation.",
    dimensions: "48\" W x 24\" D x 72\" H",
    material: "White finish with ample storage",
  },
  {
    id: 35,
    name: "Office Storage Cabinet",
    price: 699,
    image: officeStorageImage,
    category: "Office",
    description: "Tall storage cabinet with doors and drawers. Maximize office organization.",
    dimensions: "36\" W x 20\" D x 72\" H",
    material: "Walnut wood with metal accents",
  },
  {
    id: 36,
    name: "Executive Desk",
    price: 1599,
    image: executiveDeskImage,
    category: "Office",
    description: "Traditional executive desk with leather inlay and multiple drawers. Professional elegance.",
    dimensions: "72\" W x 36\" D x 30\" H",
    material: "Dark wood with leather inlay",
  },
  {
    id: 37,
    name: "Crystal Chandelier",
    price: 899,
    image: chandelierCrystalImage,
    category: "Lighting",
    description: "Elegant crystal chandelier with gold finish. Statement lighting for dining rooms.",
    dimensions: "24\" W x 28\" H",
    material: "Crystal with brass frame",
  },
  {
    id: 38,
    name: "Modern Wall Sconce",
    price: 149,
    image: wallSconceImage,
    category: "Lighting",
    description: "Minimalist wall sconce with brass finish and frosted glass. Perfect accent lighting.",
    dimensions: "6\" W x 10\" H",
    material: "Brass with glass shade",
  },
  {
    id: 39,
    name: "LED Desk Lamp",
    price: 99,
    image: deskLampImage,
    category: "Lighting",
    description: "Adjustable LED desk lamp with modern design. Energy efficient task lighting.",
    dimensions: "8\" W x 18\" H",
    material: "Matte black with LED",
  },
  {
    id: 40,
    name: "Smart LED Strip Lights",
    price: 79,
    image: ledStripImage,
    category: "Lighting",
    description: "Color-changing LED strip lights with remote control. Ambient mood lighting.",
    dimensions: "16.4 ft length",
    material: "LED strips with remote",
  },
  {
    id: 41,
    name: "Flush Mount Ceiling Light",
    price: 159,
    image: ceilingLightImage,
    category: "Lighting",
    description: "Modern flush mount ceiling light with frosted glass. Clean and bright illumination.",
    dimensions: "14\" Diameter x 5\" H",
    material: "Glass with chrome finish",
  },
  {
    id: 42,
    name: "Tripod Floor Lamp",
    price: 249,
    image: cornerLampImage,
    category: "Lighting",
    description: "Scandinavian-style tripod floor lamp with white shade. Corner accent lighting.",
    dimensions: "20\" W x 60\" H",
    material: "Wood tripod with fabric shade",
  },
  {
    id: 43,
    name: "Flexible Reading Lamp",
    price: 119,
    image: readingLampImage,
    category: "Lighting",
    description: "Adjustable brass reading lamp with flexible arm. Perfect for focused lighting.",
    dimensions: "8\" W x 16\" H",
    material: "Brass with flexible neck",
  },
  {
    id: 44,
    name: "Mirrored Wardrobe",
    price: 1399,
    image: wardrobeImage,
    category: "Bedroom",
    description: "Large wardrobe with mirrored doors and ample storage. Complete closet solution.",
    dimensions: "72\" W x 24\" D x 84\" H",
    material: "White finish with mirror doors",
  },
  {
    id: 45,
    name: "Vanity Table with Mirror",
    price: 599,
    image: vanityTableImage,
    category: "Bedroom",
    description: "Elegant vanity table with lighted mirror and drawers. Perfect makeup station.",
    dimensions: "40\" W x 18\" D x 54\" H",
    material: "White with mirror and lighting",
  },
  {
    id: 46,
    name: "Tall Chest of Drawers",
    price: 549,
    image: chestDrawersImage,
    category: "Bedroom",
    description: "Tall chest with 5 spacious drawers. Maximize bedroom storage space.",
    dimensions: "32\" W x 18\" D x 48\" H",
    material: "Natural wood finish",
  },
  {
    id: 47,
    name: "Tufted Bed Bench",
    price: 399,
    image: bedBenchImage,
    category: "Bedroom",
    description: "Upholstered bed bench with button tufting. Elegant bedroom accent piece.",
    dimensions: "48\" W x 18\" D x 20\" H",
    material: "Beige fabric with wooden legs",
  },
  {
    id: 48,
    name: "Full Length Mirror",
    price: 349,
    image: fullMirrorImage,
    category: "Bedroom",
    description: "Standing full length mirror with ornate gold frame. Classic elegance.",
    dimensions: "30\" W x 72\" H",
    material: "Mirror with gold frame",
  },
  {
    id: 49,
    name: "Ceramic Bedside Lamp",
    price: 139,
    image: bedsideLampImage,
    category: "Bedroom",
    description: "Classic bedside lamp with ceramic base and linen shade. Warm bedroom lighting.",
    dimensions: "12\" W x 24\" H",
    material: "White ceramic with linen shade",
  },
  {
    id: 50,
    name: "Storage Ottoman",
    price: 299,
    image: storageOttomanImage,
    category: "Bedroom",
    description: "Tufted storage ottoman with hidden compartment. Functional bedroom seating.",
    dimensions: "36\" W x 18\" D x 18\" H",
    material: "Gray velvet with brass legs",
  },
];
