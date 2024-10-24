import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center gap-2 justify-center">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@lyvena.xyz" className="text-blue-600 hover:underline">
              info@lyvena.xyz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;