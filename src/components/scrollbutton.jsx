import React, { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="ScrollButton">
        <ExpandCircleDownIcon
           
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            
        /></div>
    );
};