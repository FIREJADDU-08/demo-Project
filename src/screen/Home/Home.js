function Home(){
    
    let userInfo={
        name:"kiruba",
        age:"20",
        mobile:"9876543210",
        mail:"kirubajadu08@gmail.com"

    }
    return(
        
        <div>
            <Child data={userInfo}></Child>
            <p>This is my home ..screen</p>
        </div>
    )
}
//Destructuring

function Child({data}){
    return(
        <div>
                <p>How are you ?  {data.name},{data.age},{data.mobile},{data.mail} </p>
        </div>
    )
}

export default Home;

/*function Child(props){
    return(
        <div>
                <p>How are you ?  {props.data.name},{props.data.age},{props.data.mobile},{props.data.mail} </p>
        </div>
    )
}*/



/*function Child(props){
    return(
        <div>
                <p>How are you ?  Name: {props.data.name},Age: {props.data.age},Mobile: {props.data.mobile},mail: {props.data.mail} </p>
        </div>
    )
}*/



/*function Child(props){
    return(
        <div>
                <p>How are you? </p>
                    <p> Name: {props.data.name}</p>
                    <p>Age: {props.data.age}</p>
                    <p>Mobile: {props.data.mobile}</p>
                    <p>mail: {props.data.mail}</p>
        </div>
    )
}*/


