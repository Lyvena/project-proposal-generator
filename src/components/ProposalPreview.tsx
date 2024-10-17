import React from 'react';

const ProposalPreview = ({ proposal }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{proposal.title}</h3>
      <p><strong>Summary:</strong> {proposal.summary}</p>
      <p><strong>Description:</strong> {proposal.description}</p>
      <p><strong>Budget:</strong> {proposal.budget}</p>
      <p><strong>Timeline:</strong> {proposal.timeline}</p>
      <p><strong>Team:</strong> {proposal.team}</p>
      <p><strong>Impact:</strong> {proposal.impact}</p>
    </div>
  );
};

export default ProposalPreview;