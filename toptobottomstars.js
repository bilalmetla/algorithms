/**
 * problem:
 * we want to print stars from top to bottom like
 
    *
    * *
    * * *
    * * * *
    * * * * *
    
    to a given number.
    n = 5
 */
/**
 * solution:
 * loop through the n number and print the star
 * like
    n = 5
    i = 5
    i starts with 1
    console.log('*') for i times. 
    increment the i++
    terminate when i <= n
    *
    * *
    * * *
    * * * *
    *  * * * *
 */

    function printstars (n){
        
        for(let i = 1; i <= n; i++){
            let stars = i
            while (stars) {
                console.log('* *')
                stars--
            }
           
        }
    }

    printstars(5)

    /**
     * stars = 1
     * console.log()
     */