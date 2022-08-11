import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Content, ListRepos, Repository } from "./styles";

interface Repo {
  name: string;
  description: string;
}
interface RepositoriesProps{
  username: string
}

export function Repositories({username}: RepositoriesProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const listUsers = async () => {
      await fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data));
    };
    listUsers();
  }, []);

  const filteredRepos =
    search.length > 0 ? repos.filter((repo) => repo.name.includes(search)) : [];
  return (
    <Container>
      <Link to="/">
        <ArrowLeft size={32} weight="bold" />
      </Link>
      <Content>
        <input
          type="text"
          placeholder="Find a repositories..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <ListRepos>
          {search.length > 0 ? (
            <div>
              {filteredRepos.map((repo) => {
                return (
                  <Repository>
                    <span key={repo.name}>{repo.name}</span>
                    <p>{repo.description}</p>
                  </Repository>
                );
              })}
            </div>
          ) : (
            <div>
              {repos.map((repo) => {
                return (
                  <Repository>
                    <span key={repo.name}>{repo.name}</span>
                    <p>{repo.description}</p>
                  </Repository>
                );
              })}
            </div>
          )}
        </ListRepos>
      </Content>
    </Container>
  );
}
