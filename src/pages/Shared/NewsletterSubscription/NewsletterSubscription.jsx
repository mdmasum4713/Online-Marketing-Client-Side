import { useState } from "react";

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log(`Subscribed with email: ${email}`);
        setEmail('');
    };

    return (
        <div className="bg-white p-4 flex flex-col shadow-md">
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col">
                    <h2 className="text-xl mb-2 text-blue-900">Subscribe to Our Newsletter</h2>
                    <div className="flex items-center mb-2">
                        {/* Replace with your desired SVG icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-300 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 2a8 8 0 11-6.32 13.32 7.97 7.97 0 001.22-1.73A5.5 5.5 0 0010 7.5a5.5 5.5 0 00-4.11 9.44A7.98 7.98 0 0110 18a8 8 0 000-16z" />
                        </svg>
                        <span className="text-sm text-blue-900">Bank Account</span>
                    </div>
                    <div className="flex space-x-4 text-blue-900 text-sm mb-2">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-blue-300 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 2a8 8 0 11-6.32 13.32 7.97 7.97 0 001.22-1.73A5.5 5.5 0 0010 7.5a5.5 5.5 0 00-4.11 9.44A7.98 7.98 0 0110 18a8 8 0 000-16z" />
                            </svg>
                          
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-blue-300 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 2a8 8 0 11-6.32 13.32 7.97 7.97 0 001.22-1.73A5.5 5.5 0 0010 7.5a5.5 5.5 0 00-4.11 9.44A7.98 7.98 0 0110 18a8 8 0 000-16z" />
                            </svg>
                           
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-blue-300 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 2a8 8 0 11-6.32 13.32 7.97 7.97 0 001.22-1.73A5.5 5.5 0 0010 7.5a5.5 5.5 0 00-4.11 9.44A7.98 7.98 0 0110 18a8 8 0 000-16z" />
                            </svg>
                            
                        </div>
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-blue-300 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 2a8 8 0 11-6.32 13.32 7.97 7.97 0 001.22-1.73A5.5 5.5 0 0010 7.5a5.5 5.5 0 00-4.11 9.44A7.98 7.98 0 0110 18a8 8 0 000-16z" />
                            </svg>
                         
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubscribe} className="flex items-center flex-grow ml-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow p-2 rounded border border-blue-300 text-blue-900 bg-white mr-2"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-300 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <p className="mt-2 text-end text-sm text-gray-500">© 2024 Powered by SpacingTech Template</p>
        </div>
    );
};

export default NewsletterSubscription;
