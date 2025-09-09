import { useState } from "react";
import { Search, Send, Paperclip, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  // Mock conversations data
  const conversations = [
    {
      id: 1,
      domain: "defi.eth",
      tokenId: "12345",
      participants: ["0x1234...5678", "0x9876...5432"],
      lastMessage: "Would you consider 14 ETH for this domain?",
      timestamp: "2 hours ago",
      unread: 2,
      messages: [
        {
          sender: "0x9876...5432",
          content: "Hi! I'm interested in purchasing defi.eth. What's your best price?",
          timestamp: "Yesterday 2:30 PM",
          isOffer: false,
        },
        {
          sender: "You",
          content: "Thanks for your interest! The listing price is 15.5 ETH.",
          timestamp: "Yesterday 3:15 PM",
          isOffer: false,
        },
        {
          sender: "0x9876...5432",
          content: "Would you consider 14 ETH for this domain?",
          timestamp: "2 hours ago",
          isOffer: true,
          offerDetails: {
            amount: "14 ETH",
            expires: "5 days",
          },
        },
      ],
    },
    {
      id: 2,
      domain: "crypto.dao",
      tokenId: "67890",
      participants: ["0x1234...5678", "0x5555...1111"],
      lastMessage: "Let me think about your offer and get back to you.",
      timestamp: "1 day ago",
      unread: 0,
      messages: [
        {
          sender: "0x5555...1111",
          content: "Interested in crypto.dao. Is it still available?",
          timestamp: "2 days ago",
          isOffer: false,
        },
        {
          sender: "You", 
          content: "Yes, it's still available for 22 ETH.",
          timestamp: "2 days ago",
          isOffer: false,
        },
        {
          sender: "0x5555...1111",
          content: "Let me think about your offer and get back to you.",
          timestamp: "1 day ago",
          isOffer: false,
        },
      ],
    },
  ];

  const currentConversation = conversations[selectedConversation];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message via XMTP
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Messages</h1>
          <p className="text-muted-foreground">
            Secure, domain-linked conversations powered by XMTP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conv, index) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedConversation(index)}
                      className={`p-4 cursor-pointer border-b border-border hover:bg-muted/50 transition-smooth ${
                        selectedConversation === index ? "bg-muted" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-sm">{conv.domain}</div>
                        {conv.unread > 0 && (
                          <Badge className="text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">
                        #{conv.tokenId}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {conv.lastMessage}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {conv.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-soft h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{currentConversation.domain}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Token ID: #{currentConversation.tokenId} • {currentConversation.participants.length} participants
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View Domain
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {currentConversation.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-xs lg:max-w-md ${message.sender === "You" ? "order-2" : "order-1"}`}>
                        <div className="text-xs text-muted-foreground mb-1">
                          {message.sender} • {message.timestamp}
                        </div>
                        <div
                          className={`p-3 rounded-2xl ${
                            message.sender === "You"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted"
                          }`}
                        >
                          {message.content}
                          
                          {message.isOffer && message.offerDetails && (
                            <div className="mt-3 p-3 border border-border rounded-lg bg-background/50">
                              <div className="text-sm font-semibold mb-1">Offer Details</div>
                              <div className="text-sm">
                                Amount: <span className="font-semibold">{message.offerDetails.amount}</span>
                              </div>
                              <div className="text-sm">
                                Expires: {message.offerDetails.expires}
                              </div>
                              {message.sender !== "You" && (
                                <div className="flex gap-2 mt-3">
                                  <Button size="sm" variant="wallet" className="text-xs">
                                    Accept Offer
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-xs">
                                    Counter
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t border-border p-4">
                <div className="flex items-end gap-3">
                  <Button variant="ghost" size="icon" className="mb-2">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      className="min-h-[40px] max-h-32 resize-none rounded-2xl"
                      rows={1}
                    />
                  </div>
                  <Button 
                    variant="wallet" 
                    size="icon" 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="mb-2"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Quick Actions */}
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm">
                    Propose Terms
                  </Button>
                  <Button variant="outline" size="sm">
                    Share Offer PDF
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;