import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { Droplets, Home } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Droplets className="text-blue-600" size={48} />
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate("/")} className="gap-2">
          <Home size={18} />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
