let actions={
    jia({commit,state},payload){
        //处理业务逻辑
        console.log("action",commit,state,payload,"payload就是传递的数据");
        // commit("类型","数据")//发给mutations
        commit("increment",payload)
    },
    jian({commit},payload){
        commit("increment",payload)
    }
};

export default actions;