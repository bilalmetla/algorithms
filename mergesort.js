/**
 * rule: array of 1 element is sorted. so split array into sub arrays 
    until reached at single element.
    then merge back in sorted form.

examples:
[3,5,2,6,4,1]
split1 
left = [3,5,2] 
    split again 
    left = [3,5]
        split again
        left = [3]
        right = [5]
    right = [2]

    merge it back
    [3,5]
right = [6,4,1]


 * merge function
    sudo code:

 */


    function merge(arr1, arr2) {
        let results = []
        let i = 0
        let j = 0
        while(i < arr1.length && j < arr2.length){
            if(arr1[i] > arr2[j]){
                results.push(arr2[j])
                j++
            }
            else{
                results.push(arr1[i])
                i++
            }
        }

        while (i < arr1.length) {
            results.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            results.push(arr2[j])
            j++
        }

        return results
    }


    function mergeSort(arr){
        if(arr.length <= 1) return arr 

        let mid = Math.floor(arr.length/2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))

        let mergedArr = merge(left, right)
        return mergedArr
    }

    //testing
    //let res = merge([2,3,4,5,6], [3,4,8])
    let res = merge([3,4,8], [2,3,4,5,6])
    console.log('merge fn: ', res)

    let sortedArr =  mergeSort([6,4,8,5,3,2,4,3])
    console.log('sortedArr: ', sortedArr)