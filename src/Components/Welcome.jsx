import React, { Component } from 'react'
class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
            valid:false
        }
    }

    componentDidMount() {
        var token= localStorage.getItem('token') 
        token=JSON.parse(token)
        var valid=localStorage.getItem('valid')
        console.log("value",token);
        this.setState({
            valid:valid
          })
        //   if(this.state.token){

        // }
        // else{
        //   window.location.assign("http://localhost:3000");
        // }
          
    var myHeaders = new Headers();
    myHeaders.append("auth", token);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://interlace.interlockgroup.sg:3000/api/v1/data", requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result))
        // .then(res=>  JSON.stringify(res))
        .then(res=>  localStorage.setItem('storedValues', JSON.stringify(res)))
        .catch(error => console.log('error', error));
}

logout=()=>{
    localStorage.clear();
    window.location.assign("http://localhost:3000");
}

render(){
    return (
    <div>
        {this.state.valid ? <div><h1>Welcome</h1><button onClick={this.logout}>Logout</button></div>
                            : <div> <h1>Invalid</h1> <a href="http://localhost:3000"> Click Here to login</a> </div>}
    </div>
    );
}
}
export default Welcome