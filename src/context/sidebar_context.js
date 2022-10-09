import React, {useContext, useReducer} from "react";
import reducer from "../reducers/sidebar_reducer";
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions";

const initialState = {
    isSidebarOpen: false
}

const SidebarContext = React.createContext();

export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
    }

    return (
        <SidebarContext.Provider value = {{
            ...state,
            openSidebar, 
            closeSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(SidebarContext);
}
