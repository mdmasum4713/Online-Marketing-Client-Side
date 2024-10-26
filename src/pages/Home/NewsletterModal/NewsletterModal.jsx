import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open the modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400); // Change to desired time in milliseconds (e.g., 5000ms = 5 seconds)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Modal Background */}
      {isOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
       {/* Modal Content */}
       <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
         {/* Close Button with Icon */}
         <button 
           onClick={handleClose}
           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-200"
         >
           <FontAwesomeIcon icon={faTimes} className="text-xl" />
         </button>
         <h2 className="text-xl text-center font-bold mb-4">Newsletter</h2>
         <p className="mb-4 text-center">Subscribe with us to get special offers and other discount information</p>
         <input
           type="email"
           placeholder="Enter your mail"
           className="border border-gray-300 rounded-lg p-2 w-full mb-4"
         />
         <div className="flex justify-center">
           <button 
             onClick={handleClose}
             className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
           >
             Subscribe
           </button>
         </div>
       </div>
     </div>
      )}
    </>
  );
};

export default NewsletterModal;
