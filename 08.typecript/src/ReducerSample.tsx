import React, {useReducer, useState} from 'react'
import {useSampleDispatch,useSampleState }from './SampleContext'


function ReducerSample() {

    const dispatch = useSampleDispatch();
    const state = useSampleState();


    const setCount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => dispatch({type: 'SET_COUNT',count:5 });
    const setColor = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => dispatch({type: 'SET_COLOR', color:'blue'});
    const setText = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => dispatch({type: 'SET_TEXT', text:'blablablabla'});


    return (
        <div>
            <p>
                <code>count:{state.count}</code>
            </p>
            <p>
                <code>text:{state.text}</code>
            </p>
            <p>
                <code>color:{state.color}</code>
            </p>
            <p>
                <code>isGood:{`${state.isGood}`}</code>
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={setText}>SET_TEXT</button>
            </div>
        </div>
    )
}


export default ReducerSample;