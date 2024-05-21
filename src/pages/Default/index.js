
import { useNavigate } from "react-router-dom"

const Default = () => {
    const navigate = useNavigate();
    setTimeout(() => navigate("/main"),100);
}

export default Default