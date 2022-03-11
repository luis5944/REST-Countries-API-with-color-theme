import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    transition: all 0.25s linear;
    
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration:none ;
  }

  ul{
      background-color: ${({ theme }) => theme.appBar};
      display: flex;
      list-style: none;
      justify-content: space-between;
      padding: 1.5rem 1rem;
      box-shadow: 1px 10px 32px #00000018;
      font-weight:800;
      font-size: 20px;
  }

  .container{
      display: flex;
      flex-direction: column;
  }
  .main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
}

img{
  width: 350px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
    
}
.country{
    background-color:  ${({ theme }) => theme.appBar};
    border-radius: 5px;
    margin: 1rem 1rem ;
    cursor: pointer;
    max-width: 350px;
    transition: transform .5s;
}
.country:hover{
  transform: scale(1.1);
}
.information{
    display:flex ;
    flex-direction: column;
    padding: 1rem 0 2rem 1rem;
    gap: 1px;
}
span{
   font-weight: bold;
}

.search-input{
display: flex;
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.appBar};
padding: 1rem 1rem;
border-radius: 5px;
gap: 5px;
}
.search-input input{
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.appBar};
}

::placeholder { 
  color: ${({ theme }) => theme.text};
  opacity: 1; 
}

.search-input input:focus{
  outline: none;
}

.container-search{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
}

.button-toggle{
  background:${({ theme }) => theme.appBar} ;
  border:  none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 16px;

}
.button-toggle div {
  display: flex;
  align-items: center;
  gap:.5rem ;
}
.button-toggle span{
  font-size: 14px;
}

.button-back{
  background:${({ theme }) => theme.appBar} ;
  border:  none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 16px;
  padding: .5rem 1.5rem;
  margin: 1rem;
  border-radius: 5px;
  display:flex ;
  gap: 10px;
}

.container-page{
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 4rem;
  max-width: 100%;
}
.container-page img {
  width: 100%;
  height:100% ;
}

.info{
  font-size: 14px;
  font-weight:300;
  display: flex;
  gap: 20px;
}

.info p{
  font-weight: 800;
  padding-bottom: .5rem;
}
.info span{
  font-weight:300;
  color: ${({ theme }) => theme.text};
}

.container-logo{
  display: flex;
  gap: 10px;
}
.world{
  font-size: 28px;
  display: inline-block;
  transition: transform .8s;
}

.world:hover{

  transform: rotateY(180deg);
}
.borders{
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-items:center ;
  gap:10px ;

}
.borders p{
  font-size: 14px;
  font-weight:800 ;
}

.button-border{
  margin-left: .5rem;
  padding: .5rem 1rem;
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.appBar} ;
  cursor: pointer;
}


@media (min-width: 678px) { 

.container-page{
  flex-direction:row ;
}
ul{
  padding: 1.5rem 5rem;
}
.container-page img {
  width: 80%;
  height:100% ;
}
}
`;
