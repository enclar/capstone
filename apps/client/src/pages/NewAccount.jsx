import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";
import { ToastContainer } from "react-toastify";

import NewStaffForm from "../components/NewAccount/NewStaffForm";
import NewClientForm from "../components/NewAccount/NewClientForm";
import NewVendorForm from "../components/NewAccount/NewVendorForm";

const NewAccount = () => {
    // setting up state
    const [accountType, setAccountType] = useState("staff");

    const displayForm = () => {
        if ( accountType === "staff" ) {
            return <NewStaffForm />
        } else if (accountType === "client") {
            return <NewClientForm />
        } else if (accountType === "vendor") {
            return <NewVendorForm />
        }
    };

    return (
        <div id="new-user" className="mt-12 flex flex-col items-center gap-10">
            <p>create a new account</p>
            <label className="flex flex-col items-center">
                account type:
                <div className="flex gap-5">
                    <label className="flex gap-2 items-center">
                        <input type="radio" name="account-type" onClick={() => setAccountType("staff")} defaultChecked={true} />
                        staff
                    </label>
                    <label className="flex gap-2 items-center">
                        <input type="radio" name="account-type" onClick={() => setAccountType("client")} />
                        client
                    </label>
                    <label className="flex gap-2 items-center">
                        <input type="radio" name="account-type" onClick={() => setAccountType("vendor")} />
                        vendor
                    </label>
                </div>
            </label>
            { displayForm() }
            <ToastContainer />
        </div>
    )
}

export default NewAccount;