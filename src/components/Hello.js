import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Mbats</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'dummyclass'}, React.createElement('h1',null,'HEY MBATS'))
}

export default Hello