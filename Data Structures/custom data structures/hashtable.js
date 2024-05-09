// class HashMap{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,val){
//         const index = this.hash(key)
//         this.table[index] = val
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
// }


// const Hash = new HashMap(6)

// Hash.set("Name","Ali")
// Hash.set("Age",21)
// console.log(Hash.get("Age"));


/************************************************************Hash Map With Collision***************************************************************/

// class HashMap{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,val){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,val]]
//         }else{
//             const sameKeyValue = bucket.find(item => item[0] == key)
//             if(sameKeyValue){
//                 sameKeyValue[1] = val
//             }else{
//                 bucket.push([key,val])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             return "No Element Present"
//         }else{
//             const value = bucket.find(item => item[0] == key)
//             return value
//         }
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
// }


// const Hash = new HashMap(6)

// Hash.set("Name","Ali")
// Hash.set("Name","Amber")
// Hash.set("Age",21)
// console.log(Hash.get("Name"));