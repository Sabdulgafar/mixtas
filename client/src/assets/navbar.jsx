import NavQuickLinks from "./navQuickLinks"

function NavBar(){
    const navlinks = [
        {id:1, name:"Home", href:"#"},
        {id:1, name:"Shop", href:"#"},
        {id:1, name:"Pages", href:"#"},
        {id:1, name:"Blog", href:"#"},
        {id:1, name:"Contact Us", href:"#"}
    ]
    const quicklinks = [
        {id:1, name:"FB", link:"#"},
        {id:1, name:"IG", link:"#"},
        {id:1, name:"PT", link:"#"}
    ]
    return(
        <nav>
            <div className="flex flex-3 justify-between">
                <div className="max-md:hidden">
                    {/* this section is for the navigation bar */}
                    <ul>
                    {navlinks.map(link=>(
                        <li className="inline">
                        <a className="p3 mx-2 text-md"
                        id={link.id}
                        href={link.href}
                        >{link.name}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    {/* this section is for the brand logo or text */}
                    <p className="text-xl"><span className="text-3xl">M</span>IX<span className="text-3xl">T</span>AS</p>
                </div>
                <div>
                    {quicklinks.map(Shortcut=>(
                        <NavQuickLinks
                        key={Shortcut.id}
                        name={Shortcut.name}
                        link={Shortcut.link}
                    />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar