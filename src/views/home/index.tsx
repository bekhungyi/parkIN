// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className="mt-6">
          <div className="text-sm font-normal align-bottom text-right text-slate-600 mt-4">v1.0.1</div>
          <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
            Say hello to parkIN
          </h1>
        </div>
        <h4 className="md:w-full text-2xl md:text-3xl text-center text-slate-300 my-2">
          <p>Seamless, Convenient, and Efficient parkIN</p>
          <p className="text-slate-500 text-2xl leading-relaxed">Right at Your Fingertips</p>
        </h4>
        <div>
          <img src="/hero-illustration.png" alt="parkIN here section image" />
        </div>
        <div className="flex flex-col mt-0">
          <RequestAirdrop />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
            {wallet && (
              <div className="flex flex-row justify-center">
                <div>{(balance || 0).toLocaleString()}</div>
                <div className="text-slate-600 ml-2">SOL</div>
              </div>
            )}
          </h4>
        </div>

        {/* New Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10 pl-24">
          {/* Text Block */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
              Effortless Parking, Every Time
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
            parkIN uses blockchain technology to securely connect drivers with available parkIN in real-time, enhancing your parking experience through a peer-to-peer network. 
            </p>
          </div>

          {/* Graphics */}
          <div className="md:w-1/2 mt-8 md:mt-10 flex justify-center">
            <img src="/parking-3d-graphic.png" alt="Graphics showing parkIN" className="w-full max-w-md object-contain" />
          </div>
        </div>
      </div>
    </div>

    
    
  );
};
