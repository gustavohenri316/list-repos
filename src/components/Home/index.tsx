import { Container, Content } from "./styles";
import gitHubImg from "../../assets/github.svg";
import { Link } from "react-router-dom";
import { useState } from "react";


interface HomeProps {
  setUsername: any
  username: string
}
export function Home({setUsername, username}: HomeProps) {
  const [users, setUsers] = useState("");
  return (
    <Container>
      <Content>
        <img src={gitHubImg} alt="Logo do github" />
        <input
          type="text"
          onChange={(e) => setUsers(e.target.value)}
          value={users}
          placeholder='Uername github'
        />
        <Link to="/repositories">
          <button onClick={() => setUsername(users)}>ENTRAR</button>
        </Link>
      </Content>
    </Container>
  );
}
