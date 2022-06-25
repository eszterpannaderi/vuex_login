import {createStore} from 'vuex'

export default createStore({
    state:{
        user:{
            email:'',
            username:'',
            status:false
        }
    },
    getters:{},
    mutations:{
        setStatus(state, loggedInUser){
            state.user.email = loggedInUser.email
            state.user.username= loggedInUser.username
            state.user.status=loggedInUser.status

        }
    },
    actions:{},
    modules:{}
})