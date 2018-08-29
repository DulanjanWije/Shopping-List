import axios from 'axios'; //http client
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';


export const getItems = () => dispatch => {
   dispatch(setItemsLoading());
   axios
   .get('/api/items')
   .then(res => 
    dispatch({
        type: GET_ITEMS,
        payload: res.data
    })
    );
};

//picks the whole item
export const addItem = item => dispatch => {
    axios
    .post('/api/items', item)
    .then(res => dispatch({
        type: ADD_ITEM,
        payload: res.data
    })
);
};

//taking in an id to select which item to be deleted
export const deleteItem = id => dispatch => {
   axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
        type: DELETE_ITEM,
        payload: id
    })
)
};

export const setItemsLoading = () => {
    return{
        type:ITEMS_LOADING
    };
};