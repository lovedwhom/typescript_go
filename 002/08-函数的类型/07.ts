function buildName (firstName:string,lastName?:string):string {
    if(lastName) {
        return firstName + " " + lastName
    }else {
        return firstName
    }
}

let yang = buildName('yang')

let yangshuai = buildName('yang','shuai')