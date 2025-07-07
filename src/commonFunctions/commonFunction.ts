import { EmailExtractor } from "./commonInterface";

const extractEmail: EmailExtractor = (address: string) => {
    const match = address.trim().match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    return match ? match[1] : address.trim();
};

export { extractEmail };