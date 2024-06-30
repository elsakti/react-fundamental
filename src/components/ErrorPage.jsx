import { useRouteError } from 'react-router-dom';
import { Link } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <div>Kamu Salah Halaman Bro!</div>
            <Link to="/" >Kembali Ke Halaman Utama</Link>
        </>
    )
}

export default ErrorPage