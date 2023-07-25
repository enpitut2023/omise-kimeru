import React from 'react';


function UserSwitch(props){
    const userIndex = props.userIndex
    const setUserIndex = props.setUserIndex

    return (
        <>
          { userIndex > 0 && (
        <button onClick={() => {
          setUserIndex(userIndex-1)
       } }>
          前の人
        </button>
        )}
        
        <p>{userIndex+1}人目</p>
        <button onClick={() => {
          setUserIndex(userIndex+1)
          } }>
          次の人
        </button>
        </>
    );
}

export default UserSwitch;