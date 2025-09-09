import { useState } from "react";
import { Search, TrendingUp, Star, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for featured domains
  const featuredDomains = [
    {
      name: "defi.eth",
      tokenId: "12345",
      price: "15.5 ETH",
      offers: 23,
      trending: true,
      verified: true,
    },
    {
      name: "gaming.crypto",
      tokenId: "67890",
      price: "8.2 ETH",
      offers: 12,
      trending: false,
      verified: true,
    },
    {
      name: "nft.dao",
      tokenId: "54321",
      price: "22.1 ETH",
      offers: 45,
      trending: true,
      verified: false,
    },
  ];

  const collections = [
    { name: "ENS Domains", count: "2.1M", volume: "45K ETH" },
    { name: "Crypto Domains", count: "156K", volume: "12K ETH" },
    { name: "DAO Names", count: "89K", volume: "8K ETH" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Trade Tokenized Domains
              <span className="block gradient-primary bg-clip-text text-transparent">
                The DomainFi Revolution
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover, trade, and negotiate tokenized domains with integrated messaging. 
              Join the future of digital asset ownership on Doma Protocol.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search a domain (name or token ID)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 pr-4 text-lg rounded-2xl border-2 focus:border-primary shadow-medium"
                />
                <Button 
                  variant="wallet" 
                  size="lg" 
                  className="absolute right-2 top-2 bottom-2"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Globe className="mr-2" />
                List Your Domain
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Explore Orderbook
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the most popular domain collections and their trading volumes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {collections.map((collection, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{collection.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                    {collection.count}
                  </div>
                  <div className="text-sm text-muted-foreground">Domains</div>
                  <div className="text-lg font-semibold text-foreground">
                    {collection.volume} Volume
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Domains */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Trending Domains</h2>
              <p className="text-muted-foreground">Hot domains with recent activity</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDomains.map((domain, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {domain.name}
                    </CardTitle>
                    <div className="flex gap-1">
                      {domain.trending && (
                        <Badge variant="secondary" className="text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                      {domain.verified && (
                        <Badge variant="outline" className="text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">#{domain.tokenId}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                        {domain.price}
                      </div>
                      <div className="text-sm text-muted-foreground">Current Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-foreground">
                        {domain.offers}
                      </div>
                      <div className="text-sm text-muted-foreground">Offers</div>
                    </div>
                  </div>
                  <Button variant="wallet" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Doma Deals</h3>
              <p className="text-muted-foreground text-sm">
                The future of tokenized domain trading with integrated messaging and DeFi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/deals" className="hover:text-primary transition-smooth">Browse Deals</a></li>
                <li><a href="/messages" className="hover:text-primary transition-smooth">Messages</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">API</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Doma Deals. Built on Doma Protocol.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;