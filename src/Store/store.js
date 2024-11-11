import { configureStore} from "@reduxjs/toolkit";
import products from "./reducers/products/products"
import user from "./reducers/user/user"


const store = configureStore({
    reducer: {
        products,
        user
    }
})

export default store