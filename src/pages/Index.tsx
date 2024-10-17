import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import ProposalForm from '@/components/ProposalForm';
import ProposalPreview from '@/components/ProposalPreview';

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

    // TODO: Replace this with actual AI generation logic
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
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">AI-PGF Proposal Generator</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter your AI-PGF idea</h2>
          <Textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your AI-PGF idea here..."
            className="mb-4"
          />
          <Button onClick={handleGenerateProposal}>Generate Proposal</Button>
        </div>
        {proposal && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Generated Proposal</h2>
            <ProposalPreview proposal={proposal} />
            <ProposalForm proposal={proposal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;