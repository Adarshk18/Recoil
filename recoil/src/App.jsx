import { useState } from "react";
import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationsAtom } from "./atoms";

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
  const [messageNotoificationCount, setMessageNotificationCount] = useRecoilState(messagesAtom);

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
        setMessageNotificationCount(messageNotoificationCount+1);
      }}>Me</button>
    </>
  );
}

export default App;
