import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  padding: 20px;

  a {
    text-decoration: none;
    color: #FFF;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 80px;
  input {
    width: 500px;
    height: 60px;
    background: #D9D9D9;
    border-radius: 20px;
    border: none;

    padding-left: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #838383;

    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #838383;
    }
  }
`

export const ListRepos = styled.div`
  width: 55%;
  height: 680px;
  background: #D9D9D9;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  gap: 2rem;
  
  div {
    margin-left: 0.6rem;
    cursor: pointer;
    width: 98%;
    height: 50%;
  }
  overflow: auto;

 ::-webkit-scrollbar {
  width: 12px;              
}

::-webkit-scrollbar-track {
  background: transparent;        
}

::-webkit-scrollbar-thumb {
  background-color: transparent;    
  border-radius: 20px;      
  border: none; 
}
  
`

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70px;
  background: #BCB7B7;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
  
  span {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
  }
`