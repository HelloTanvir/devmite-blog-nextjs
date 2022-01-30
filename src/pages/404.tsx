import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PageNotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [router]);

    return (
        <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
            <div className="pt-6 pb-8 space-x-2 md:space-y-5">
                <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
                    404
                </h1>
            </div>
            <div className="max-w-md">
                <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                    Oooooops we couldn't find this page.
                </p>
                <p className="mb-8">
                    But dont worry, you can find plenty of other things on our homepage.
                </p>
                <Link href="/">
                    <button
                        type="button"
                        className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500"
                    >
                        Back to homepage
                    </button>
                </Link>
            </div>
        </div>
    );
}
