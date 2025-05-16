import { useState } from "react";
import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const messageNotoificationCount = useRecoilValue(messagesAtom);
  const totalCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>
        Messaging (
        {messageNotoificationCount >= 10 ? "9+" : messageNotoificationCount})
      </button>
      <button>Notifications ({notificationCount})</button>

      <button onClick={(e)=> {
        
      }}>Me {totalCount}</button>
    </>
  );
}

export default App;
