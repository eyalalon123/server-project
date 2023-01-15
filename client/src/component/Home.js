
function Home(){
    const getUsername = async ()=> {
        let res = await fetch("localhost:5000/manage")
        let data = await res.json();
        
    }

    return(
        <>
            <h2>hello</h2>
        </>
    )
}

export default Home;