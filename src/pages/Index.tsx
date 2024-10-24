import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import ProposalForm from '@/components/ProposalForm';
import ProposalPreview from '@/components/ProposalPreview';
import { Lightbulb, Sparkles, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [idea, setIdea] = React.useState('');
  const [proposal, setProposal] = React.useState(null);
  const { toast } = useToast();

  const handleGenerateProposal = async () => {
    if (!idea.trim()) {
      toast({
        title: "Error",
        description: "Please enter an AI-PGF idea.",
        variant: "destructive",
      });
      return;
    }

    const apiKey = localStorage.getItem("openai_api_key");
    if (!apiKey) {
      toast({
        title: "Error",
        description: "Please add your OpenAI API key in settings first.",
        variant: "destructive",
      });
      return;
    }

    try {
      // TODO: Implement actual OpenAI API call here
      const mockProposal = {
        title: "AI-Generated Proposal",
        summary: "This is a summary of the AI-generated proposal based on your idea.",
        description: "This is a detailed description of the proposal, including its goals, implementation plan, and expected outcomes.",
        budget: "$50,000",
        timeline: "6 months",
        team: "John Doe (Project Lead), Jane Smith (AI Researcher)",
        impact: "This project aims to revolutionize the field of AI ethics by...",
      };

      setProposal(mockProposal);
      toast({
        title: "Success",
        description: "Proposal generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate proposal. Please try again.",
        variant: "destructive",
      });
    }
  };

  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "AI-Powered Proposals",
      description: "Transform your ideas into comprehensive proposals using advanced AI technology."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Smart Analysis",
      description: "Get intelligent insights and suggestions to improve your proposals."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-500" />,
      title: "Automated Generation",
      description: "Generate professional proposals in minutes, not hours."
    },
    {
      icon: <Rocket className="h-8 w-8 text-green-500" />,
      title: "Quick Start",
      description: "Easy to use interface with step-by-step guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            AI-PGF Proposal Generator
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Create professional proposals in minutes using the power of AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="text-center h-full flex flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-primary/40 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col items-center flex-1">
                  <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Enter your AI-PGF idea</h2>
            <Textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your AI-PGF idea here..."
              className="mb-4 min-h-[120px]"
            />
            <Button 
              onClick={handleGenerateProposal}
              className="w-full md:w-auto"
              size="lg"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Proposal
            </Button>
          </Card>

          {proposal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Generated Proposal</h2>
                <ProposalPreview proposal={proposal} />
                <ProposalForm proposal={proposal} />
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
