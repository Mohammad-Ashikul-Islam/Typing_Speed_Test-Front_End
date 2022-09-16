import { configureStore } from "@reduxjs/toolkit";
import TTCreducer from "../State/TTCslice";

export default configureStore({

    reducer: {
        startingvalue: TTCreducer
    }

})