import { useState } from "react";
import { Button, Input, RegisterBox } from "./Box.style";
import { Link, useNavigate } from "react-router-dom";
import "./login-register.css";

export function BoxRegister() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const { signup } = useAuth();
  
    const handleRegister = () => {
      if (!name || !email || !senha) {
        setError("Preencha todos os campos");
        return;
      }
  
      const res = signup(name, email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      alert("Usuário cadatrado com sucesso!");
      navigate("/onboarding");
    };

    return (
        <RegisterBox>
            <div>
                <h1 className="h1register">Criar conta</h1>
                <form action="">
                    <span>Nome</span>
                    <Input 
                        type="name" 
                        placeholder="Nome/Nome Social" 
                        value={name} 
                        onChange={(e) => [setName(e.target.value), setError("")]}
                    />
                    <span>Email*</span>
                    <Input 
                        type="email" 
                        placeholder="seuemail@site.com" 
                        value={email} 
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <span>Senha*</span>
                    <Input
                        type="password"
                        placeholder="Min. 6 caracteres"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <br></br><br></br>
                    <Button onClick={handleRegister} className="enter">Criar conta</Button>
                </form>
                <Link to={'/onboarding'}><Button className="visitante">Entrar como visitante</Button></Link>
            </div>
        </RegisterBox>
    );
}

