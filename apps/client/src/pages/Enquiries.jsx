import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import EnquiryTable from "../components/Enquiries/EnquiryTable";

export const enquiriesAtom = atom([]);

const Enquiries = () => {
    const [enquiries, setEnquiries] = useAtom(enquiriesAtom);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("currUser"));

    // fetching all enquiries
    useEffect(() => {
        const getEnquiries = async () => {
            try {
                const response = await fetch("/api/enquiries/all", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        token: JSON.parse(localStorage.getItem("token"))
                    }
                });

                const data = await response.json();
                
                if (response.ok) {
                    console.log("successfully fetches all enquiries:", data);
                    setEnquiries(data.reverse());
                } else {
                    console.log("server error:", data.error);
                }
            } catch (error) {
                console.log("client error:", error);
            }
        }

        getEnquiries();
    }, []);

    if (!user) {
        return <Navigate replace to="/login" />
    } else if (user.accType !== "staff") {
        return <Navigate replace to="/unauthorized" />
    } else {
        return (
            <div id="enquiries" className="mb-20 w-4/5 flex flex-col items-center gap-4">
                <p className="font-serif text-teal-900 text-lg tracking-wider italic font-bold">enquiries</p>
                <EnquiryTable enquiries={enquiries} />
            </div>
        )
    }
}

export default Enquiries;