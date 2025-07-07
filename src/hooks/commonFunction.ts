import { Calendar, CheckCircle, Mail, MessageSquare, Ticket, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

type IntentLabel = {
  text: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

const useScreenResolution = () => {
  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // To update the resolution state on window resize
  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return resolution;
};

const getIntentLabel = (intent: string): IntentLabel => {
    const lower = intent.toLowerCase();

    if (lower.includes("get")) {
      return {
        text: "Get Info",
        icon: Calendar,
        color: "bg-blue-100 text-blue-800",
        iconColor: "text-blue-600",
      };
    }

    if (
      lower.includes("approve") ||
      lower.includes("success") ||
      lower.includes("confirmed")
    ) {
      return {
        text: "Approved",
        icon: CheckCircle,
        color: "bg-green-100 text-green-800",
        iconColor: "text-green-600",
      };
    }

    if (
      lower.includes("cancel") ||
      lower.includes("rejected") ||
      lower.includes("failed")
    ) {
      return {
        text: "Cancelled",
        icon: XCircle,
        color: "bg-red-100 text-red-800",
        iconColor: "text-red-600",
      };
    }

    if (
      lower.includes("ticket") ||
      lower.includes("booking") ||
      lower.includes("reservation")
    ) {
      return {
        text: "Ticketing",
        icon: Ticket,
        color: "bg-yellow-100 text-yellow-800",
        iconColor: "text-yellow-600",
      };
    }

    if (lower.includes("feedback") || lower.includes("report")) {
      return {
        text: "Feedback",
        icon: MessageSquare,
        color: "bg-orange-100 text-orange-800",
        iconColor: "text-orange-600",
      };
    }

    // default fallback
    return {
      text: "new",
      icon: Mail,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600",
    };
  };

  export const getSenderName = (fromAddress: string): string => {
    if (!fromAddress) return "";
  
    // Step 1: Extract display name if in format "Name <email>"
    const match = fromAddress.match(/^(.*?)\s*<.*?>$/);
    let namePart = match ? match[1] : fromAddress;
  
    // Step 2: Remove quotes, content inside parentheses, brackets, etc.
    namePart = namePart
      .replace(/["']/g, "") // Remove quotes
      .replace(/\(.*?\)/g, "") // Remove content in ()
      .replace(/\[.*?\]/g, "") // Remove content in []
      .trim();
  
    // Step 3: Return cleaned name
    return namePart;
  };


export { useScreenResolution , getIntentLabel };