import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to AI-PGF</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Proposals</CardTitle>
            <CardDescription>View and manage your proposals</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">View Proposals</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create New</CardTitle>
            <CardDescription>Start a new AI-PGF proposal</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Create Proposal</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Open Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;