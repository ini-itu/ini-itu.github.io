import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all hover:shadow-lg">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="font-semibold text-foreground mb-2">{name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-primary">${price}</p>
            <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
