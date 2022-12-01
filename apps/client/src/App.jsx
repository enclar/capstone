import { useReducer, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import dashboardReducer from "./reducer/dashboardReducer";

import Landing from "./components/Landing";
import Enquiry from "./components/Enquiry";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export const DataContext = createContext();

const App = () => {
    const [dashboard, dispatch] = useReducer(dashboardReducer, {
        list: []
    });

    return (
        <div>
            <DataContext.Provider value={{ dashboard, dispatch }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/enquiry" element={<Enquiry />} />
                        <Route path="/" element={<Navbar />}>
                            <Route path="/home" element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </DataContext.Provider>
        </div>
    )
}

export default App;