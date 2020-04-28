function deepEqual(obj1, obj2){
    if (typeof(obj1) == typeof(obj2)){
        if (typeof(obj1) != "object")
            return obj1 === obj2
        

        if (obj1 == null && obj2 == null)
            return true

        if (obj1 != null && obj2 != null){
            if(obj1 == null && obj2 == null)
                return true

            keysobj1 = Object.keys(obj1)
            keysobj2 = Object.keys(obj2)
            if(keysobj1.length != keysobj2.length)
                return false

            set = true
            for (let i = 0; i < keysobj1.length;i++){
                key = keysobj1[i]
                if (typeof(obj1[key]) != "object"){
                    if(obj1[key] === obj2[key]){}
                    else{
                        set = false
                        break
                }
            } 
                else{
                    temp = deepEqual(obj1[key],obj2[key])
                    if(!temp){
                        set = false
                        break
                }
            }
        }
        return set
    }
}
return false
}
console.log(deepEqual({key: "obj1", value: 10}, {key:"obj1", value: 10}));