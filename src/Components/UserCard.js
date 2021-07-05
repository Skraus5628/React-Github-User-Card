import React from "react";
import styled from 'styled-components';

const CardContainer = styled.section`

display: flex;
flex-direction: column;
align-items: center;


`
const Card = styled.div`
display: block;
position: relative;
flex-direction: column;
height: 300px;
width: 600px;
margin-bottom: 5rem;
border: 1px solid black;
border-radius: 3px;
box-shadow: 0px 0px 10px 1.5px black;
background-color: black;



`
const Imbox = styled.div`
// width: 40%;
// height: 80%;

`

const Textblock = styled.div`
position: relative;
float: right;
bottom: 240px;
right: 180px;
font-size: 19px;
color: ghostwhite;
text-shadow: 2px 2px indigo;

`

const Subtext = styled.div`
position: relative;
font-size: 19px;
width: 50%;
left: 255px;
bottom: 200px;
color: ghostwhite;
text-shadow: 2px 2px indigo;

`



const UserCard = ({user, img, bio, login, pubrepos, github}) => {
    return (
      
      
        <CardContainer>
      
            <Card>

                <Imbox> <img src={img} alt="user"/> </Imbox>
                <Textblock><p className="name">Name: {user}</p></Textblock>
                <Subtext>
                    <p>Login:{login}</p>
                    <p>Public Repos:{pubrepos}</p>
                    <p className="name">GithubLink: <a href={github}>{github}</a></p>
                    <p className="name">Bio: {bio}</p>
                </Subtext>

             </Card>
        </CardContainer>
    )
}

export default UserCard;