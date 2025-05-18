import { useEffect, useState } from "react";
import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";
import axios from 'axios';



function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(()=>{
  //   axios.get("https://run.mocky.io/v3/90d5fcac-affd-418f-9bbc-90b4a9e412d8").then(res =>{
  //     setNetworkCount(res.data);
  //   })
  // },[])

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>
        Messaging (
        {networkCount.messaging})
      </button>
      <button>Notifications ({networkCount.notifications})</button>

      <button onClick={(e)=> {
        
      }}>Me {totalNotificationCount}</button>
    </>
  );
}

export default App;
