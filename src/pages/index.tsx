import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/auth/signin");
    }, [navigate]);

    return null;
};

export default Default;