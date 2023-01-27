import React, { useState } from 'react'

function Button(props){
    //hooks
    const [filterBtnState, setFilterBtnState] = useState('')
    const {typeBtn, filterObject} = props

    let buttonEl
    switch (typeBtn) {
        case 'filterBtn':
                const {filterType, filterTitle} = props
                const spanBg = filterObject.filterColorsClass[filterType]
                const OnClickFilterBtn = () => {
                    if(filterBtnState===''){filterObject.setFilter(filterType)}
                    else{filterObject.removeFilter(filterType)}
                    
                    setFilterBtnState(filterBtnState===''?'filter-active':'')
                }
                buttonEl = (
                    <button className={`filter-button anim-el ${filterBtnState}`} onClick={OnClickFilterBtn}><span className={`span-color-block ${spanBg}`}></span> {filterTitle} </button>
                )
            break;

        case 'activeFilterBtn':
                const {clickFilterFunc} = props
                console.log(typeof(clickFilterFunc));
                buttonEl = (
                    <button className="filter-show-button anim-el" onClick={()=>{clickFilterFunc()}}>Show</button>
                )
            break;
        default:
            break;
    }
    return buttonEl
}

export default Button