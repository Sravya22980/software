import Footer from "./common/footer";
import Header from "./common/header";
function Sign()
{
    var data={name:"",mobile:"",email:"",password:""}
    const sub=(event)=>
    {
        event.preventDefault();
        data.name=document.getElementById("name").value
        data.mobile=document.getElementById("mobile").value
        data.email=document.getElementById("em").value
        data.password=document.getElementById("pa").value
        const x=new XMLHttpRequest();
        x.open("POST","http://localhost:8085/c/signup",true);
        x.setRequestHeader("Content-Type","application/json");
        var res=JSON.stringify(data);
        x.send(res);
        console.log(x);
    }
 return(
    <div id="sig">
        <Header/>
        <div id="si">
                <h1>Signup</h1>
            <form onSubmit={sub}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mobile</label>
                    <input type="text" className="form-control" id="mobile"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="email" className="form-control" id="em"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="pa"/>
                </div>
                <button className="btn btn-primary btn-lg btn-block mt-2 mb-2">Signup</button>
                <p>Do not have an account?<a href="">Login</a></p>
            </form>
        </div>     
        <Footer/>
    </div>
 )
}
export default Sign;