import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const ProposalForm = ({ proposal }) => {
  const [formData, setFormData] = React.useState(proposal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted proposal:', formData);
    // TODO: Implement actual submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="summary">Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="budget">Budget</Label>
        <Input
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="timeline">Timeline</Label>
        <Input
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="team">Team</Label>
        <Input
          id="team"
          name="team"
          value={formData.team}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="impact">Impact</Label>
        <Textarea
          id="impact"
          name="impact"
          value={formData.impact}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Submit Proposal</Button>
    </form>
  );
};

export default ProposalForm;