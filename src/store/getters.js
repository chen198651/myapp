let getters={
    num(state){
        //state仓库
        console.log("getters",state)
        return state.num
    }
};
export default getters;