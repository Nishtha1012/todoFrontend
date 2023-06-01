import todoSlice from "./slice/todoSlice";
import userSlice from "./slice/userSlice";

const { configureStore } = require("@reduxjs/toolkit");
const reducer = {
    user: userSlice,
    todo:todoSlice
}

const store = configureStore({
    reducer
})

export default store