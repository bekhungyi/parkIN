import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';
import { SignMessage } from './SignMessage';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
            <Link href="/" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
            <svg width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2059 22.3753C9.12624 22.3753 7.63212 21.7166 6.72353 20.3992C6.78411 20.9516 6.81439 21.8547 6.81439 23.1084V27.5708H0V5.73727H6.42067L6.3601 7.33095C7.57155 6.056 9.18681 5.41853 11.2059 5.41853C13.3663 5.41853 15.0926 6.226 16.3848 7.84093C17.677 9.41337 18.3231 11.432 18.3231 13.8969C18.3231 16.3406 17.677 18.3699 16.3848 19.9848C15.0724 21.5785 13.3461 22.3753 11.2059 22.3753ZM11.4179 13.8013C11.4179 12.9301 11.1857 12.2501 10.7213 11.7614C10.2771 11.2514 9.70168 10.9964 8.995 10.9964C8.30851 10.9964 7.73307 11.2514 7.26869 11.7614C6.8043 12.2714 6.5721 12.9513 6.5721 13.8013C6.5721 14.6513 6.8043 15.3313 7.26869 15.8412C7.73307 16.33 8.30851 16.5743 8.995 16.5743C9.70168 16.5743 10.2771 16.33 10.7213 15.8412C11.1857 15.3313 11.4179 14.6513 11.4179 13.8013ZM35.5911 13.0682V21.9929H29.1401L28.9887 20.5585C27.8378 21.7697 26.5254 22.3753 25.0515 22.3753C23.3958 22.3753 22.0026 21.9504 20.8719 21.1004C19.7211 20.2504 19.1456 18.9011 19.1456 17.0524C19.1456 16.2875 19.287 15.6075 19.5696 15.0125C19.8523 14.4175 20.2056 13.9501 20.6296 13.6101C21.0537 13.2488 21.5483 12.9513 22.1137 12.7176C22.679 12.4839 23.204 12.3245 23.6885 12.2395C24.1933 12.1333 24.6981 12.0695 25.2029 12.0483L28.7767 11.8889V11.7295C28.7767 10.7096 27.9388 10.1996 26.263 10.1996C24.6274 10.1996 23.0122 10.6777 21.4171 11.6339L19.7513 7.10784C22.1137 5.98163 24.587 5.41853 27.1715 5.41853C30.0588 5.41853 32.1789 6.056 33.5316 7.33095C34.9046 8.6059 35.5911 10.5183 35.5911 13.0682ZM28.8373 17.3712V15.3631L27.4744 15.4587C26.4649 15.5012 25.9601 15.9262 25.9601 16.7337C25.9601 17.5837 26.4649 18.0086 27.4744 18.0086C27.9792 18.0086 28.4335 17.7962 28.8373 17.3712ZM49.8511 5.67352L49.9723 5.73727L49.6694 12.2714H49.3665C48.7608 11.9526 48.1046 11.7933 47.3979 11.7933C46.4691 11.7933 45.7625 12.1439 45.2779 12.8451C44.8741 13.3976 44.6722 14.3219 44.6722 15.6181V21.9929H37.8578V5.73727H44.6722L44.5813 7.80906C45.4899 6.21537 46.7821 5.41853 48.4579 5.41853C49.104 5.41853 49.5684 5.50353 49.8511 5.67352ZM69.0654 5.73727L63.7653 11.7933L69.2169 21.9929H61.4939L59.071 17.0524L58.0715 18.168V21.9929H51.2571V0H58.0715V10.0402L61.3424 5.73727H69.0654ZM70.1328 0H76.9774V21.9929H70.1328V0ZM93.337 0H100V21.9929H92.8828L86.5226 9.72148C86.6236 11.4852 86.6741 12.8132 86.6741 13.7057V21.9929H80.0111V0H87.4312L93.4885 12.2714C93.3875 10.5077 93.337 9.17963 93.337 8.28716V0Z" fill="white"/>
            </svg>
            </Link>
          </div>
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
          <NavElement
            label="Home"
            href="/"
            navigationStarts={() => setIsNavOpen(false)}
          />
          <NavElement
            label="parkIN"
            href="/basics"
            navigationStarts={() => setIsNavOpen(false)}
          />
          {/* <NavElement
            label="My parkINs"
            href="/order-success"
            navigationStarts={() => setIsNavOpen(false)}
          /> */}
          <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
        </div>
          <label
              htmlFor="my-drawer"
              className="btn-gh items-center justify-between md:hidden mr-6"
              onClick={() => setIsNavOpen(!isNavOpen)}>
              <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div className={`h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`} />
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(45deg)" }}>
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(135deg)" }}>
            </div>
        </label>
      <div>
        <span className="absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"></span>
      </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-square btn-ghost text-right mr-4">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
            <li>
              <div className="form-control bg-opacity-100">
                <label className="cursor-pointer label">
                  <a>Autoconnect</a>
                  <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                </label>
                <NetworkSwitcher />
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};
