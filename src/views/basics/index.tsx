
// import { FC } from "react";
// import { SignMessage } from '../../components/SignMessage';
// import { SendTransaction } from '../../components/SendTransaction';
// import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
// import { SendSOLToRandomAddress } from "components/SendSOLToRandomAddress";
// import BuyButton from "components/BuyButton";

// export const BasicsView: FC = ({ }) => {

//   return (
//     <div className="md:hero mx-auto p-4">
//       <div className="md:hero-content flex flex-col">
//         <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
//           Basics
//         </h1>
//         {/* CONTENT GOES HERE */}
//         <div className="text-center">
//           <SignMessage />
//           <SendTransaction />
//           <SendVersionedTransaction />
//         </div>
//       </div>
//     </div>
//   );
// };

import { FC } from "react";
import { SendTransaction } from "../../components/SendTransaction";

export const BasicsView: FC = ({ }) => {
  return (
    <div className="md:hero mx-auto p-4 mb-20">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Discover parkINs
        </h1>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">

          <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x200.png?text=Property+1"
              alt="Property 1"
            />
            <div className="p-6">
              <p className="text-gray-700 font-bold mb-4">
                Property Name
              </p>
              <p className="text-gray-700 text-base mb-4">
                Property location, details, etc. Add any relevant details here.
              </p>
              <p className="text-gray-700 text-base font-bold mb-4">
                0.1 SOL per month
              </p>
              <div className="text-center">
                <SendTransaction />
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x200.png?text=Property+2"
              alt="Property 2"
            />
            <div className="p-6">
              <p className="text-gray-700 font-bold mb-4">
                Property Name
              </p>
              <p className="text-gray-700 text-base mb-4">
                Property location, details, etc. Add any relevant details here.
              </p>
              <p className="text-gray-700 text-base font-bold mb-4">
                0.1 SOL per month
              </p>
              <div className="text-center">
                <SendTransaction />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
