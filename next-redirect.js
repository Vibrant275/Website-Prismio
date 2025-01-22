async function redirect(){
    return [
        {
            source: "/docs",
            destination: "/docs/home",
            permanent: true,
        },
    ]
}

module.exports=redirect;