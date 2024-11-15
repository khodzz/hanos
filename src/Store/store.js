import { configureStore} from "@reduxjs/toolkit";
import products from "./reducers/products/products"
import user from "./reducers/user/user"
import favorites from "./reducers/favorit/favorit"


const store = configureStore({
    reducer: {
        products,
        user,
        favorites
    }
})

export default store