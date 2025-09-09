import { useParams } from "react-router-dom";
import { MessageCircle, ExternalLink, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const DomainDetail = () => {
  const { tokenId, name } = useParams();
  const domainIdentifier = name || tokenId;

  // Mock domain data
  const domain = {
    name: "defi.eth",
    tokenId: "12345",
    owner: "0x1234...5678",
    price: "15.5 ETH",
    offers: 23,
    views: 1247,
    watchlist: 89,
    verified: true,
    forSale: true,
    offersOpen: true,
  };

  const listings = [
    { price: "15.5 ETH", seller: "0x1234...5678", expires: "7 days" },
  ];

  const offers = [
    { price: "14.2 ETH", buyer: "0x9876...5432", expires: "5 days" },
    { price: "13.8 ETH", buyer: "0x5555...1111", expires: "3 days" },
    { price: "13.0 ETH", buyer: "0x7777...9999", expires: "1 day" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{domain.name}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Token ID: #{domain.tokenId}</span>
                <span>•</span>
                <span>Owner: {domain.owner}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                {domain.watchlist}
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                View on Explorer
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            {domain.forSale && (
              <Badge className="bg-success text-success-foreground">For Sale</Badge>
            )}
            {domain.offersOpen && (
              <Badge variant="secondary">Offers Open</Badge>
            )}
            {domain.verified && (
              <Badge variant="outline">Verified</Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pricing Section */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Current Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Listings */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Active Listings</h3>
                  {listings.length > 0 ? (
                    <div className="space-y-3">
                      {listings.map((listing, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-border rounded-xl">
                          <div>
                            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                              {listing.price}
                            </div>
                            <div className="text-sm text-muted-foreground">by {listing.seller}</div>
                          </div>
                          <div className="text-right">
                            <Button variant="wallet">Buy Now</Button>
                            <div className="text-xs text-muted-foreground mt-1">
                              Expires in {listing.expires}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No active listings</p>
                  )}
                </div>

                {/* Offers */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Recent Offers</h3>
                  <div className="space-y-3">
                    {offers.map((offer, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <div className="text-lg font-semibold">{offer.price}</div>
                          <div className="text-sm text-muted-foreground">by {offer.buyer}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">
                            Expires in {offer.expires}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button variant="wallet" className="flex-1">
                    Make Offer
                  </Button>
                  <Button variant="outline" className="flex-1">
                    List for Sale
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{domain.views}</div>
                    <div className="text-sm text-muted-foreground">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{domain.watchlist}</div>
                    <div className="text-sm text-muted-foreground">Watchlist</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{domain.offers}</div>
                    <div className="text-sm text-muted-foreground">Total Offers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat with Owner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Start a secure, domain-linked conversation with the owner or other interested parties.
                  </div>
                  
                  {/* Mock chat messages */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="text-sm">
                      <div className="font-semibold text-xs text-muted-foreground mb-1">
                        0x9876...5432
                      </div>
                      <div className="bg-muted p-2 rounded-lg">
                        Interested in negotiating for this domain. Would you consider 14 ETH?
                      </div>
                    </div>
                    <div className="text-sm text-right">
                      <div className="font-semibold text-xs text-muted-foreground mb-1">
                        You
                      </div>
                      <div className="bg-primary text-primary-foreground p-2 rounded-lg inline-block">
                        Thanks for your interest! Let's discuss.
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <Button variant="wallet" className="w-full">
                      Start Conversation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainDetail;