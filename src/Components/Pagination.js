import React from "react";
import { TESTMONIALS } from "../utils/data";

function Pagination({ active }) {
    return (
        <div className="flex items-center justify-center gap-3">
            {TESTMONIALS.map((item, index) => (
                <div key={item.id} className={`w-8 h-1 ${active === index ? "bg-blue-900" : "bg-blue-300"} rounded-md transition-all duration-500`} />
            ))}
        </div>
    );
}

export default Pagination;