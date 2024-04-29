
const initialState = {
    Movies: [],
    pages: 0,
};

export const ReduxMovies = (state = initialState, action) => {
    switch (action.type) {
        case 'getMovies':
            return {
                Movies: action.data,
                pages: action.page,
            };
        default:
            return state;
    }
};
