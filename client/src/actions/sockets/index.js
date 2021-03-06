import { NEW_MESSAGE, IS_TYPING, NOT_TYPING, NEW_ROOM, LOAD_ROOMS, ACTIVE_ROOM, USER_JOIN, USER_LEFT } from "../socketTypes";


export const subscribeToMessageFromServer = () => dispatch => {    
    dispatch({
        event: "serverToClientMessage",
        handle: data => {
            dispatch({
                type: NEW_MESSAGE,
                payload: data,
            })
        },
    });

    dispatch({
        event: "userJoinMessage",
        handle: data => {
            dispatch({
                type: USER_JOIN,
                payload: data,
            })
        },
    });

    dispatch({
        event: "userLeftMessage",
        handle: data => {
            dispatch({
                type: USER_LEFT,
                payload: data,
            })
        },
    });

    dispatch({
        event: "userTyping",
        handle: data => {
            dispatch({
                type: IS_TYPING,
                payload: data,
            })
        },
    });

    dispatch({
        event: "userNotTyping",
        handle: data => {
            dispatch({
                type: NOT_TYPING,
                payload: data,
            })
        },
    });

    dispatch({
        event: "activeRoom",
        handle: data => dispatch({
            type: ACTIVE_ROOM,
            payload: data,
        }),
    });
}

export const subscribeToRoomFromServer = () => dispatch => {
    dispatch({
        event: "serverToClientRoom",
        handle: data => dispatch({
            type: NEW_ROOM,
            payload: data,
        }),
    });
    dispatch({
        event: "loadAllRooms",
        handle: data => dispatch({
            type: LOAD_ROOMS,
            payload: data,
        }),
    });

    dispatch({
        event: "activeRoom",
        handle: data => dispatch({
            type: ACTIVE_ROOM,
            payload: data,
        }),
    });
};

export const sendMessage = data => {
    return {
        event: "message",
        payload: data,
        emit: true
    };
};

export const isTyping = data => {
    return {
        event: "isTyping",
        payload: data,
        emit: true
    };
};

export const notTyping = data => {
    return {
        event: "notTyping",
        payload: data,
        emit: true
    };
};

export const unsubscribeMessage = (message) => {
    return {
        event: "message",
        leave: true,
    };
};

export const createRoom = data => {
    return {
        event: "createRoom",
        payload: data,
        emit: true,
    };
};

export const getAllRooms = () => {
    return {
        event: "getAllRooms",
        payload: null,
        emit: true,
    };
};

export const deleteRoom = id => {
    return {
        token: localStorage.getItem("token"),
        event: "deleteRoom",
        payload: id,
        emit: true,
    }
}

export const getActiveRoom = data => {
    return {
        event: "getActiveRoom",
        payload: data,
        emit: true,
    };
};

export const leaveRoom = data => {
    return {
        event: "leaveRoom",
        payload: data,
        emit: true,
    };
};

export const deleteMessage = data => {
    return {
        event: "deleteMessage",
        payload: data,
        emit: true,
    }
}


