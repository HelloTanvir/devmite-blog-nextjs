import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children?: ReactNode;
}

function Layout({ children }: Props) {
    const router = useRouter();

    const isAuthPage = router.pathname.match(/(\/login|\/register)/g);

    // if the rendered page is login or register page, no need to render header here
    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <div className="fixed inset-0 flex flex-col overflow-y-auto">
            <Header />
            <main className="md:my-[100px] my-11">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;

// this layout is added to the _app.js and used to wrap aroud the app.
