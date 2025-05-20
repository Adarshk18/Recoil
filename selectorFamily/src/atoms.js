import {atomFamily, selectorFamily} from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => async({get}) =>{
            await new Promise(r=>setTimeout(r,5000));
            const res = await axios.get(`https://run.mocky.io/v3/90d5fcac-affd-418f-9bbc-90b4a9e412d8?id=${id}`);
            return res.data.todo;
        },
    })
})
