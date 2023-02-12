const initState = {
    Assign_cleaner_id: "",
}
export const NavbarRedcuer = (state = initState, { type, payload }) => {
    switch (type) {
        case "ASSIGN_CLEANER_ID":
            return { ...state, Assign_cleaner_id: payload }
        default:
            return state
    }
}