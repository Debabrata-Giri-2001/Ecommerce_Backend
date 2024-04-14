import React, { useState } from 'react'
import PrivateRt from "./PrivateRt";
import PublicRt from "./PublicRt";

const Routes = () => {
    const [hasToken, setHasToken] = useState(false);
    return (
        <>
            {hasToken ? <PublicRt /> : <PrivateRt />}
        </>
    )
}

export default Routes;
