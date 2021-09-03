export class ArrayUtility {

    /** Removes empty ("") values from string array. */
    getNonEmptyValues(originalArray: string[]): Array<string> {
        let trimmedArray: Array<string> = [];

        originalArray.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {
            if(value.toString().trim() !== "") {
            trimmedArray.push(value);
            }
        }      
        });
        return trimmedArray;
    }

    /**
     * @returns a numeric count of all values in a 1D array that are >= 50% 
     * higher/lower than the moving average of the nearest 10-20 elements. */
    getAbnormalValues(temperatureArray: string[]): number {
        const convertedArray = this.convertToNumArray(temperatureArray);
        let countAbnormalValues = 0;

        for(let currElement = 0; currElement < convertedArray.length; currElement++) {
            let sum = 0 + convertedArray[currElement];         
      
            //Find moving average of first 10 elements
            if (currElement < 10) {
              let avg = 0;
              let numIterations = 0;      
              for(let j =0; j < 10; j++) {
                sum += convertedArray[currElement + j + 1];
                numIterations++;
              }
              avg = sum / (numIterations + 1);
              if (convertedArray[currElement] > (1.5 * avg) || convertedArray[currElement] < (0.5 * avg)) {
                countAbnormalValues++;
              }
            }
      
            //Find moving average of inner elements
            if (currElement >= 10 && currElement < convertedArray.length - 10) {
              let avg = 0;
              let numIterations = 0;      
              for (let j = 0; j < 10; j++) {
                //sum += convertedArray[currElement + j + 1] + convertedArray[currElement- Math.abs(j-currElement)];
                sum += convertedArray[currElement + j + 1] + convertedArray[currElement-j-1];
                numIterations++;
              }
              avg = sum / ((numIterations * 2) + 1);
              if (convertedArray[currElement] > (1.5 * avg) || convertedArray[currElement] < (0.5 * avg)) {
                countAbnormalValues++;
              }
            }
            
            //Find moving average of last 10 elements
            if (currElement >= convertedArray.length - 10) {
              let avg = 0;
              let numIterations = 0;      
              for(let j = convertedArray.length - 1; j > convertedArray.length - 11; j--) {
                sum += convertedArray[j] + convertedArray[currElement-(j-currElement)];
                numIterations++;                
              }
              avg = sum / ((numIterations * 2) + 1);
              if (convertedArray[0][currElement] > (1.5 * avg) || convertedArray[0][currElement] < (0.5 * avg)) {
                countAbnormalValues++;
              }
            }
            sum = 0;
          }
        return countAbnormalValues;
    }

    /**Converts a string array to a number array. */
    convertToNumArray(originalArray: string[]): number[] {
        const numArray: number[] = [];
        for (let element of originalArray) {
            //Verify original array is parse-able
            if (isNaN(parseInt(element))) {
                console.error("convertToNumArray() error: Failed to correctly convert string[] into number[] - please check source data.");
                return;
            }
            numArray.push(parseInt(element));
        }
        return numArray;
    }
}