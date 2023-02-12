
const initState = {
    Botto_Option: "job",
}



export const FooterReducer = (state = initState, { type, payload }) => {
    console.log('payload', payload);
    switch (type) {
        case "BOTTOM_OPTION_STATUS":
            return { ...state, Botto_Option: payload }
        default:
            return state
    }
}


// const Botto_Option_Selected = useSelector((store)=>store.FooterReducer.Botto_Option)