import React,{ useState }  from "react";

function Nav(){
    const [selectedLink, setSelectedLink] = useState(null);
    return(
        <header className="header">
            <div className="Logo">
                <a href="#"> City</a>
                <a href="#" className="ic"><i class='bx bxs-medal' ></i></a>
            </div>
            <nav className="navb">
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                </div>
        
                <div className="icons">
                    <a
                        href="#"
                        className={selectedLink === "search" ? "selected" : ""}
                        onClick={() => setSelectedLink("search")}
                    >
                        <i class='bx bx-search'></i>
                    </a>
                    <a
                        href="#"
                        className={selectedLink === "archive" ? "selected" : ""}
                        onClick={() => setSelectedLink("archive")}
                    >
                        <i class='bx bx-archive'></i>
                    </a>
                    <a
                        href="#"
                        className={selectedLink === "user" ? "selected" : ""}
                        onClick={() => setSelectedLink("user")}
                    >
                        <i class='bx bx-user'></i>
                    </a>
                </div>

            </nav>
        </header>
    );
}
export default Nav;