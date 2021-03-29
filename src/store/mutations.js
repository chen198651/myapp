let mutations={
    increment(state,payload){
        console.log("mutations",state,payload)
        if(payload==="+")state.num++;
        if(payload==="-")state.num--;
    }
};

export default mutations;