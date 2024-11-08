import React from 'react';

export default function Boardlist({datakey}) {
  React.useEffect(()=>{
    console.log(datakey);
  },[])
  return (
    <div>
      <h2>공지사항</h2>
      <ul>
        {
          datakey.map((v, i)=>{
            return(
              <li>
                <p>{v.title}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
