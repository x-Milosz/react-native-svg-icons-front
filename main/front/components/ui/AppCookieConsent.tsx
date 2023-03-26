import React from "react";
import CookieConsent from "react-cookie-consent";
import useGetStrings from "../../hooks/useGetStrings.hook";

const AppCookieConsent = () => {
    const strings = useGetStrings("appCookieConsent");

    return (
        <CookieConsent
            location="bottom"
            buttonText={strings["buttonText"]}
            style={{ background: "white", color: "black", borderTopWidth: "1px", borderTopColor: "black", borderTopStyle: "solid" }}
            buttonStyle={{ color: "black", fontSize: "13px", backgroundColor: "white",
                borderWidth: "1px", borderColor: "black", borderStyle: "solid",
                fontWeight: "bold"
            }}
            expires={150}
        >
            {strings["text"]}
        </CookieConsent>
    );
};

export default AppCookieConsent;
