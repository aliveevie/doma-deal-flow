import { useState } from "react";
import { Filter, Search, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const DealsHub = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock deals data
  const deals = [
    {
      name: "crypto.eth",
      tokenId: "11111",
      price: "25.0 ETH",
      offers: 34,
      tld: "ETH",
      verified: true,
      newListing: false,
    },
    {
      name: "defi.crypto",
      tokenId: "22222", 
      price: "18.5 ETH",
      offers: 12,
      tld: "CRYPTO",
      verified: false,
      newListing: true,
    },
    {
      name: "nft.dao",
      tokenId: "33333",
      price: "12.8 ETH", 
      offers: 28,
      tld: "DAO",
      verified: true,
      newListing: false,
    },
    {
      name: "gaming.xyz",
      tokenId: "44444",
      price: "8.2 ETH",
      offers: 15,
      tld: "XYZ",
      verified: false,
      newListing: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Deals Hub</h1>
          <p className="text-muted-foreground">
            Discover and negotiate the best domain deals on the marketplace
          </p>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-end">
              {/* Search */}
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search Domains</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Domain name or token ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* TLD Filter */}
              <div className="w-full lg:w-48">
                <label className="text-sm font-medium mb-2 block">TLD</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select TLD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All TLDs</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="crypto">CRYPTO</SelectItem>
                    <SelectItem value="dao">DAO</SelectItem>
                    <SelectItem value="xyz">XYZ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="w-full lg:w-48">
                <label className="text-sm font-medium mb-2 block">Price Range</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-10">0-10 ETH</SelectItem>
                    <SelectItem value="10-25">10-25 ETH</SelectItem>
                    <SelectItem value="25-50">25-50 ETH</SelectItem>
                    <SelectItem value="50+">50+ ETH</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Currency Filter */}
              <div className="w-full lg:w-32">
                <label className="text-sm font-medium mb-2 block">Currency</label>
                <Select defaultValue="eth">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="usdc">USDC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <div className="w-full lg:w-48">
                <label className="text-sm font-medium mb-2 block">Sort By</label>
                <Select defaultValue="newest">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="offers">Most Offers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* View Toggle and Bulk Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {deals.length} domains found
            </span>
            <Button variant="outline">
              Bulk Message Sellers
            </Button>
          </div>
        </div>

        {/* Deals Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {deal.name}
                    </CardTitle>
                    <div className="flex gap-1">
                      {deal.newListing && (
                        <Badge className="text-xs bg-success text-success-foreground">
                          New
                        </Badge>
                      )}
                      {deal.verified && (
                        <Badge variant="outline" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>#{deal.tokenId}</span>
                    <span>•</span>
                    <Badge variant="secondary" className="text-xs">
                      .{deal.tld}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                        {deal.price}
                      </div>
                      <div className="text-sm text-muted-foreground">Current Price</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-foreground">
                        {deal.offers}
                      </div>
                      <div className="text-sm text-muted-foreground">Offers</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="wallet" size="sm" className="flex-1">
                      Make Offer
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {deals.map((deal, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{deal.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            .{deal.tld}
                          </Badge>
                          {deal.newListing && (
                            <Badge className="text-xs bg-success text-success-foreground">
                              New
                            </Badge>
                          )}
                          {deal.verified && (
                            <Badge variant="outline" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Token ID: #{deal.tokenId}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                          {deal.price}
                        </div>
                        <div className="text-sm text-muted-foreground">Price</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-foreground">
                          {deal.offers}
                        </div>
                        <div className="text-sm text-muted-foreground">Offers</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="wallet" size="sm">
                          Make Offer
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsHub;