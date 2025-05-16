import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notoficationsAtom",
  default: 12,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  value: ({get})=>{
    const networkAtom = get(networkAtom);
    const jobsAtom = get(jobsAtom);
    const notificationsAtom = get(notificationsAtom);
    const messagesAtom = get(messagesAtom);

    return networkAtom + jobsAtom + notificationsAtom + messagesAtom;
  },
});
