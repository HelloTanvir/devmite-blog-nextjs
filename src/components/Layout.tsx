import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    const router = useRouter();

    const isAuthPage = router.pathname.match(/(\/login|\/register)/g);

    // if the rendered page is login or register page, no need to render header here
    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <div className="fixed inset-0 flex flex-col overflow-y-auto">
            <Header />
            <main className="my-[100px]">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;

// this layout is added to the _app.js and used to wrap aroud the app.
