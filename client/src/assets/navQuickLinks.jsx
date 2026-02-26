function NavQuickLinks({name, link}){
    const colorScheme = {
        FB: "bg-blue-500",
        IG: "bg-red-300",
        PT: "bg-red-500"
    }
    return(
        <a className={`${colorScheme[name]} rounded-full p-3 mx-2`} href={link}>
            {name}
        </a>
    )
}

export default NavQuickLinks