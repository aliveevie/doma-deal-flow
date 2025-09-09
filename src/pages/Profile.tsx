import { useParams } from "react-router-dom";
import { ExternalLink, MessageCircle, Settings, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const { address } = useParams();
  const isOwnProfile = address === "0x123..."; // Mock check

  // Mock profile data
  const profile = {
    address: address || "0x1234...5678",
    ensName: "alice.eth",
    avatar: null,
    joinDate: "March 2024",
    totalDeals: 23,
    reputation: 4.8,
    verified: true,
  };

  const listings = [
    {
      name: "defi.eth",
      tokenId: "12345",
      price: "15.5 ETH",
      status: "active",
      offers: 23,
    },
    {
      name: "crypto.dao",
      tokenId: "67890", 
      price: "22.1 ETH",
      status: "active",
      offers: 12,
    },
  ];

  const offers = [
    {
      domain: "gaming.xyz",
      tokenId: "11111",
      offerPrice: "8.0 ETH",
      listingPrice: "10.0 ETH",
      status: "pending",
      expires: "3 days",
    },
    {
      domain: "nft.crypto",
      tokenId: "22222",
      offerPrice: "12.5 ETH", 
      listingPrice: "15.0 ETH",
      status: "rejected",
      expires: "expired",
    },
  ];

  const messageThreads = [
    {
      domain: "defi.eth",
      participant: "0x9876...5432",
      lastMessage: "Would you consider 14 ETH?",
      timestamp: "2 hours ago",
      unread: 2,
    },
    {
      domain: "crypto.dao",
      participant: "0x5555...1111", 
      lastMessage: "Let me think about it",
      timestamp: "1 day ago",
      unread: 0,
    },
  ];

  const savedSearches = [
    { query: "defi + eth", results: 234 },
    { query: "gaming + under 10 ETH", results: 89 },
    { query: "new listings + verified", results: 156 },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8 shadow-soft">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {profile.ensName ? profile.ensName[0].toUpperCase() : profile.address[2].toUpperCase()}
                </span>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">
                    {profile.ensName || profile.address}
                  </h1>
                  {profile.verified && (
                    <Badge className="bg-success text-success-foreground">Verified</Badge>
                  )}
                </div>
                
                <div className="text-muted-foreground mb-4">
                  {profile.ensName && (
                    <div className="mb-1">Address: {profile.address}</div>
                  )}
                  <div>Member since {profile.joinDate}</div>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">{profile.totalDeals}</span>
                    <span className="text-muted-foreground ml-1">Total Deals</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">{profile.reputation}</span>
                    <span className="text-muted-foreground ml-1">Reputation</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center gap-3">
                {!isOwnProfile && (
                  <>
                    <Button variant="wallet">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </>
                )}
                {isOwnProfile && (
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="offers">My Offers</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="saved">Saved Searches</TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Active Listings</h2>
              <Button variant="wallet">Create New Listing</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listings.map((listing, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{listing.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">#{listing.tokenId}</p>
                      </div>
                      <Badge className="bg-success text-success-foreground capitalize">
                        {listing.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                          {listing.price}
                        </div>
                        <div className="text-sm text-muted-foreground">Listed Price</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">{listing.offers}</div>
                        <div className="text-sm text-muted-foreground">Offers</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit Listing
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="offers" className="space-y-4">
            <h2 className="text-2xl font-bold">My Offers</h2>
            
            <div className="space-y-4">
              {offers.map((offer, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{offer.domain}</h3>
                        <p className="text-sm text-muted-foreground">Token ID: #{offer.tokenId}</p>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-lg font-bold">{offer.offerPrice}</div>
                          <div className="text-sm text-muted-foreground">Your Offer</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold">{offer.listingPrice}</div>
                          <div className="text-sm text-muted-foreground">Listed At</div>
                        </div>
                        <div className="text-center">
                          <Badge 
                            className={
                              offer.status === "pending" 
                                ? "bg-warning text-warning-foreground" 
                                : "bg-destructive text-destructive-foreground"
                            }
                          >
                            {offer.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            {offer.expires}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit Offer
                          </Button>
                          <Button variant="ghost" size="sm">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <h2 className="text-2xl font-bold">Message Threads</h2>
            
            <div className="space-y-4">
              {messageThreads.map((thread, index) => (
                <Card key={index} className="shadow-soft cursor-pointer hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{thread.domain}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          with {thread.participant}
                        </p>
                        <p className="text-sm">{thread.lastMessage}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-2">
                          {thread.timestamp}
                        </div>
                        {thread.unread > 0 && (
                          <Badge className="bg-primary">
                            {thread.unread} new
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <h2 className="text-2xl font-bold">Saved Searches</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedSearches.map((search, index) => (
                <Card key={index} className="shadow-soft cursor-pointer hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{search.query}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {search.results} results
                    </p>
                    <div className="flex gap-2">
                      <Button variant="wallet" size="sm" className="flex-1">
                        Run Search
                      </Button>
                      <Button variant="ghost" size="sm">
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;