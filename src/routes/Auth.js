import React from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e) => {
        console.log(e.target.name);
    };
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form >
                <input 
                    name="email"
                    type="text" 
                    placeholder="Email" 
                    required 
                    value={email}
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password" 
                    required 
                    value={password}
                />
                <input 
                    type="submit" 
                    placeholder="Log In" 
                    required
                />        
            </form>
            <div>
                <button>Continue with Google</button>    
                <button>Continue with Github</button>    
            </div>  
        </div>;
    );
}
export default Auth; 