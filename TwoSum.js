//Brute Force Approch
/**
 * @param {number[]} array
 * @param {number} targetNumber
 * @return {number[]}
 */
 var twoSum = (array, targetNumber) => {
        //check length to make sure it is not less than or equalto 1
        if(array.length <=1) return null;
        //we will create two loops nested
        for(let i = 0; i < array.length; i++){
            // we will start our second index at index1 + 1
            for(let j = i+1; j < array.length; j++){
                //and check if the array values at each index equal the targetNumber
                if(array[i]+array[j] === targetNumber){ 
                   return [i+1,j+1]
                }
             }
        }
    };

const result = twoSum([2,7,11,15], 9)
console.log(result);