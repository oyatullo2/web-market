import { Link } from "react-router-dom"

export const Sport = () => {
    return(
        <>
        <div className="main">
            <div className="header">
                <div className="header-logo">
                    <Link className="header-logo" to={'/home.jsx'}>Web-Market</Link>
                </div>
                <div className="header-menu">
                    <Link className="header-href" to={'./kiyimlar.jsx'}>Kiyimlar</Link>
                    <Link className="header-href" to={'./kitoblar.jsx'}>Kitoblar</Link>
                    <Link className="header-href" to={'./elektronika.jsx'}>Elektronika</Link>
                    <Link className="header-href" to={'./mexanika.jsx'}>Mexanika</Link>
                    <Link className="header-href" to={'#'}>Sport</Link>
                    <Link className="header-href" to={"./o'quv.jsx"}>O'quv-Qurollar</Link>
                </div>
            </div>
            </div>
        </>
    )
}