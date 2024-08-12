import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    coin: 0,
    totlQuestions: 1,
    sidebardishple: false,
    login: {
        name: "",
        email: "",
        photo: '',
        date: ''
    }
}

const Slice = createSlice({

    name: 'Data',
    initialState,

    reducers: {

        coinGet: (state, momet) => {

            state.coin = momet.payload
        },

        totlQuestions: (state, momet) => {

            state.totlQuestions = momet.payload
        },
        correctAnswer: (state, momet) => {
        },
        sidebardishple: (state, momet) => {
            state.sidebardishple = momet.payload
        },
        setUsreLogData: (state, action) => {

            state.login.name = action.payload.name
            state.login.email = action.payload.email
            state.login.photo = action.payload.photo
            state.login.date = action.payload.date

            localStorage.setItem('userData', btoa(JSON.stringify(state.login)))
        },

        setSignout: (state) => {
            state.login.name = '';
            state.login.email = '';
            state.login.photo = '';
            state.login.date = '';
            localStorage.setItem('userData', btoa(JSON.stringify(state.login)))
        },
    }
})

export const { coinGet, totlQuestions, correctAnswer, sidebardishple, setUsreLogData, setSignout } = Slice.actions;
export const selectUserName = (state) => state.login.name;
export const selectEmail = (state) => state.login.email;
export default Slice.reducer;