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
height: 218px;
width: 600px;
margin-bottom: 5rem;
border: 1px solid black;
border-radius: 3px;
box-shadow: 0px 0px 10px 1.5px black;
background-color: black;


`
const Imbox = styled.div`
width: 90%;
// height: 80%;

`



const Subtext = styled.div`
position: relative;
font-size: 17px;
width: 45%;
left: 230px;
bottom: 200px;
color: ghostwhite;
text-shadow: 2px 2px indigo;

`


const FollowersCard = ({followers, img, github, repos}) => {
    return (

        <CardContainer>

            <Card>

                <Imbox> <img src={img} alt="user"/> </Imbox>
                <Subtext>
                    <p className="name">Login: <a href={github}>{followers}</a></p> 
                    <p>Repo Link: <a href={repos}>{repos}</a></p>
                    <p className="name">GithubLink: <a href={github}>{github}</a></p>
                    <p></p>
                    </Subtext>

            </Card>

        </CardContainer>
    )
}

export default FollowersCard; 