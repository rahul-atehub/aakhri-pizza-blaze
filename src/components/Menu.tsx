import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface PizzaItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const Menu: React.FC<{ setActivePage: (page: string) => void }> = ({ setActivePage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const pizzas: PizzaItem[] = [
    {
      id: 1,
      name: "Margherita Supreme",
      description: "Classic margherita with fresh buffalo mozzarella, tomatoes, and basil",
      price: 299,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "vegetarian"
    },
    {
      id: 2,
      name: "Pepperoni Feast",
      description: "Loaded with premium pepperoni slices and extra cheese",
      price: 349,
      image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "non-vegetarian"
    },
    {
      id: 3,
      name: "Veggie Paradise",
      description: "A medley of fresh vegetables including bell peppers, onions, mushrooms, and olives",
      price: 329,
      image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "vegetarian"
    },
    {
      id: 4,
      name: "BBQ Chicken Delight",
      description: "Tender chicken pieces with BBQ sauce, onions, and cilantro",
      price: 379,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "non-vegetarian"
    },
    {
      id: 5,
      name: "Pesto Primavera",
      description: "Homemade pesto base with roasted vegetables and pine nuts",
      price: 359,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "vegetarian"
    },
    {
      id: 6,
      name: "Spicy Tandoori",
      description: "Tandoori spiced chicken with bell peppers and onions",
      price: 389,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4fe0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "non-vegetarian"
    },
    {
      id: 7,
      name: "Four Cheese Special",
      description: "Blend of mozzarella, cheddar, parmesan, and blue cheese",
      price: 369,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "vegetarian"
    },
    {
      id: 8,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, and ground beef for the ultimate meat feast",
      price: 399,
      image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "non-vegetarian"
    }
  ];

  const addToCart = (pizza: PizzaItem) => {
    toast({
      title: "Added to cart!",
      description: `${pizza.name} has been added to your cart.`,
    });
  };

  const handleOrderNow = (pizza: PizzaItem) => {
    toast({
      title: "Proceeding to checkout",
      description: `Your order for ${pizza.name} is being processed.`,
    });
    setActivePage('order-online');
  };

  const filteredPizzas = activeCategory === 'all' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === activeCategory);

  return (
    <div className="py-16 bg-pizza-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pizza-brown mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted pizzas made with love and the finest ingredients.
            Each pizza tells a story of tradition and innovation.
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-pizza-orange/20">
              <TabsTrigger value="all" className="data-[state=active]:bg-pizza-orange-dark data-[state=active]:text-white">
                All Pizzas
              </TabsTrigger>
              <TabsTrigger value="vegetarian" className="data-[state=active]:bg-pizza-orange-dark data-[state=active]:text-white">
                Vegetarian
              </TabsTrigger>
              <TabsTrigger value="non-vegetarian" className="data-[state=active]:bg-pizza-orange-dark data-[state=active]:text-white">
                Non-Vegetarian
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPizzas.map(pizza => (
                <PizzaCard 
                  key={pizza.id}
                  pizza={pizza}
                  onAddToCart={() => addToCart(pizza)}
                  onOrderNow={() => handleOrderNow(pizza)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vegetarian" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPizzas.map(pizza => (
                <PizzaCard 
                  key={pizza.id}
                  pizza={pizza}
                  onAddToCart={() => addToCart(pizza)}
                  onOrderNow={() => handleOrderNow(pizza)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="non-vegetarian" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPizzas.map(pizza => (
                <PizzaCard 
                  key={pizza.id}
                  pizza={pizza}
                  onAddToCart={() => addToCart(pizza)}
                  onOrderNow={() => handleOrderNow(pizza)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface PizzaCardProps {
  pizza: PizzaItem;
  onAddToCart: () => void;
  onOrderNow: () => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, onAddToCart, onOrderNow }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image for pizza: ${pizza.name}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        {!imageError ? (
          <img 
            src={pizza.image} 
            alt={pizza.name}
            onError={handleImageError}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-pizza-orange flex items-center justify-center text-pizza-brown">
            Image Unavailable
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-pizza-brown">{pizza.name}</CardTitle>
        <CardDescription className="line-clamp-2">{pizza.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold text-pizza-brown">₹{pizza.price}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button 
          onClick={onAddToCart}
          variant="outline" 
          className="flex-1 border-pizza-orange-dark text-pizza-brown hover:bg-pizza-orange/30"
        >
          Add to Cart
        </Button>
        <Button 
          onClick={onOrderNow}
          className="flex-1 bg-pizza-orange-dark hover:bg-pizza-brown text-white"
        >
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Menu;
