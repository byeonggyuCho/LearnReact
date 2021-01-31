import React from 'react';

type GreetingsProps =   {
    
    name:string;
    mark:string
}



/**
 * Reac.FC의 이점 
 * 1. children을 탑재
 * 
 * React.FC의 단점
 * 1. defaultProps를 인식하지 못한다.
 */
const Greetings:React.FC<GreetingsProps> = ({name,mark})=>{

    return <div>{name} {mark}</div>
}

export default Greetings;


Greetings.defaultProps = {
    name:'!'
}