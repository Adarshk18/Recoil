import { atom, atomFamily, selector } from "recoil";
import axios from "axios";
import { TODOS } from "./todos";

// export const notifications = atom({
//   key: "networkAtom",
//   default: selector({
//     key: "networkSelector",
//     get: async () => {
//       const res = await axios.get(
//         "https://run.mocky.io/v3/90d5fcac-affd-418f-9bbc-90b4a9e412d8"
//       );
//       return res.data;
//     },
//   }),
// });

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const allNotifications = get(notifications);
//     return (
//       allNotifications.network +
//       allNotifications.jobs +
//       allNotifications.notifications +
//       allNotifications.messaging
//     );
//   },
// });

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: id => {
    return TODOS.find(x => x.id === id)
  }
})