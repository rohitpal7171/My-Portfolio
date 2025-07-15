"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getNpcResponse } from '@/app/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface Message {
    sender: 'user' | 'npc';
    text: string;
}

export default function InteractiveNPC() {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'npc', text: "Greetings, traveler. I am Cyra, your guide in the NexusVerse. What mysteries can I help you unravel today?" }
    ]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: query };
        setMessages(prev => [...prev, userMessage]);
        setQuery('');
        setIsLoading(true);

        try {
            const result = await getNpcResponse({ query });
            const npcMessage: Message = { sender: 'npc', text: result.response };
            setMessages(prev => [...prev, npcMessage]);
        } catch (error) {
            const errorMessage: Message = { sender: 'npc', text: "My apologies, my connection to the core seems to be disrupted. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);


    return (
        <Card className="bg-card/50 backdrop-blur-sm hologram-border h-full flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                     <Avatar>
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Cyra" data-ai-hint="female robot" />
                        <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="font-headline text-2xl">Chat with Cyra</CardTitle>
                        <CardDescription>Your AI Guide in the NexusVerse</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-4">
                <ScrollArea className="flex-grow h-64 pr-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={cn("flex items-start gap-3", message.sender === 'user' ? "justify-end" : "justify-start")}>
                                {message.sender === 'npc' && (
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="https://placehold.co/100x100.png" alt="Cyra" data-ai-hint="female robot" />
                                        <AvatarFallback>C</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={cn(
                                    "max-w-xs md:max-w-md p-3 rounded-lg text-sm",
                                    message.sender === 'user' ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                )}>
                                    <p>{message.text}</p>
                                </div>
                                {message.sender === 'user' && (
                                    <Avatar className="w-8 h-8">
                                        <AvatarFallback><User size={18} /></AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex items-start gap-3 justify-start">
                                <Avatar className="w-8 h-8">
                                     <AvatarImage src="https://placehold.co/100x100.png" alt="Cyra" data-ai-hint="female robot"/>
                                     <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                               <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-muted space-y-2">
                                    <Skeleton className="h-4 w-48" />
                                    <Skeleton className="h-4 w-32" />
                               </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <Textarea
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask about the universe..."
                        className="flex-grow bg-background/80 focus:ring-accent"
                        rows={1}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}
                    />
                    <Button type="submit" size="icon" disabled={isLoading}>
                        <Send />
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
