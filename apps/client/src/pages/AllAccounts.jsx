import { useState, useEffect } from "react";
import StaffAccounts from "../components/AllAccounts/StaffAccounts";

const AllAccounts = () => {
    // setting up state
    const [accountType, setAccountType] = useState("staff");

    const whichAccounts = () => {
        if (accountType === "staff") {
            return <StaffAccounts />
        }
    };

    return (
        <div id="all-accounts" className="my-12 flex flex-col items-center gap-10">
            <label className="flex flex-col items-center">
                view all accounts for:
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
            { whichAccounts() }
        </div>
    )
}

export default AllAccounts;