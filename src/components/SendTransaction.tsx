import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, TransactionMessage, VersionedTransaction } from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { useRouter } from 'next/router'; // Assuming you're using Next.js
import { notify } from "../utils/notifications";

export const SendTransaction: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const router = useRouter(); // For navigation

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        let signature = '';
        try {
            const instructions = [
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: Keypair.generate().publicKey, // Replace with the actual recipient
                    lamports: 1 * 1e8, // Amount in lamports (0.1 SOL)
                }),
            ];

            const latestBlockhash = await connection.getLatestBlockhash();
            const messageLegacy = new TransactionMessage({
                payerKey: publicKey,
                recentBlockhash: latestBlockhash.blockhash,
                instructions,
            }).compileToLegacyMessage();

            const transaction = new VersionedTransaction(messageLegacy);
            signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');

            console.log(signature);
            notify({ type: 'success', message: 'Transaction successful!', txid: signature });

            // Store the order details in local storage
            const orderDetails = {
                transactionId: signature,
                amount: 0.1, // Amount in SOL
                timestamp: new Date().toISOString(),
            };
            localStorage.setItem('order', JSON.stringify(orderDetails));

            // Redirect to the order success page
            router.push('/order-success');
        } catch (error: any) {
            notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
        }
    }, [publicKey, connection, sendTransaction, router]);

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={onClick}
                    disabled={!publicKey}
                >
                    <div className="hidden group-disabled:block">
                        Wallet not connected
                    </div>
                    <span className="block group-disabled:hidden">
                        Get parkIN
                    </span>
                </button>
            </div>
        </div>
    );
};

