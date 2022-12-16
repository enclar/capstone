import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { staffAtom } from "../../pages/NewProject";

const StaffAccounts = () => {
    const [staff, setStaff] = useAtom(staffAtom);
    const [editing, setEditing] = useState("");

    // function to fetch all staff accounts
    useEffect(() => {
        const getStaff = async () => {
            try {
                const response = await fetch("/api/staff/all", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        token: JSON.parse(localStorage.getItem("token"))
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    console.log("fetched all staff:", data);
                    setStaff(data);
                } else {
                    console.log("server error:", data.error);
                }
            } catch (error) {
                console.log("client error:", error);
            }
        };

        getStaff();
    }, []);

    // function to update staff account details
    const updateStaff = async (id) => {
        const updatedStaff = {
            name: document.getElementById("staff-name").value,
            email: document.getElementById("staff-email").value,
            contactNum: document.getElementById("staff-num").value
        };

        console.log("updated staff:", updatedStaff);

        const url = "/api/staff/update/" + id;

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    token: JSON.parse(localStorage.getItem("token"))
                },
                body: JSON.stringify(updatedStaff)
            });

            const data = await response.json();

            if (response.ok) {
                console.log("updated staff info:", data);
                const index = staff?.map(staff => staff?.id).indexOf(data?.id);
                const updatedStaff = staff?.map(staff => staff);
                updatedStaff[index] = data;
                setStaff(updatedStaff);
                setEditing("");
            } else {
                console.log("server error:", data?.error);
            }
        } catch (error) {
            console.log("client error:", error);
        }
    }

    return (
        <table id="staff-accounts" className="tracking-wider">
            <thead>
                <tr className="text-teal-900 italic">
                    <th className="px-10 py-2 border-y-4 border-r-2 border-double">name</th>
                    <th className="px-10 py-2 border-y-4 border-r-2  border-double">email</th>
                    <th className="px-10 py-2 border-y-4 border-double">contact number</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    staff?.map((staff, index) => {
                        if (staff?.id !== editing) {
                            return (
                                <tr key={index} className="text-stone-600">
                                    <td className="px-10 py-2 border-b-2 border-r-2 text-center">{staff?.name}</td>
                                    <td className="px-10 py-2 border-b-2 border-r-2 text-center">{staff?.email}</td>
                                    <td className="px-10 py-2 border-b-2 text-center">{staff?.contactNum}</td>
                                    <td className="px-5 flex gap-2 items-center justify-center hover:cursor-pointer">
                                        <ion-icon name="create-outline" size="small" style={{ color: "darkGrey", marginTop: "10px" }} onClick={() => setEditing(staff?.id)}></ion-icon>
                                    </td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr key={index} className="text-stone-600">
                                    <td className="px-10 py-2 border-b-2 border-r-2 text-center">
                                        <input id="staff-name" defaultValue={staff?.name} required className="bg-orange-50 text-slate-900 w-full p-1" />
                                    </td>

                                    <td className="px-10 py-2 border-b-2 border-r-2 text-center">
                                        <input id="staff-email" defaultValue={staff?.email} required className="bg-orange-50 text-slate-900 w-full p-1" />
                                    </td>

                                    <td className="px-10 py-2 border-b-2 text-center">
                                        <input id="staff-num" defaultValue={staff?.contactNum} required className="bg-orange-50 text-slate-900 w-full p-1" />
                                    </td>

                                    <td className="px-5 flex gap-2 items-center justify-center hover:cursor-pointer">
                                        <button
                                            className="bg-teal-900 text-slate-50 mt-2 rounded-full px-5 py-1"
                                            onClick={() => updateStaff(staff?.id)}
                                        >update info</button>
                                    </td>
                                </tr>
                            )
                        }
                    })
                }
            </tbody>
        </table>
    )
}

export default StaffAccounts;