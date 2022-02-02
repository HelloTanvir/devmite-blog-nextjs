import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <div className="flex flex-col fixed overflow-y-auto inset-0">
            <Header />
            <main className="my-[100px]">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;

// this layout is added to the _app.js and used to wrap aroud the app.
