import { Outlet, Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <div
            id="admin-navbar-tabs"
            className="my-5 py-4 px-10 border-y-4 border-lime-900/30 flex gap-20 items-center justify-center text-teal-900 font-serif text-md tracking tracking-wider italic"
        >
            <Link to="/enquiries" className="hover:underline hover:semibold">enquiries</Link>
            <Link to="/new-account" className="hover:underline hover:semibold">create new account</Link>
            <Link to="/all-accounts" className="hover:underline hover:semibold">all accounts</Link>
        </div>
    );
};

export default AdminNavbar;