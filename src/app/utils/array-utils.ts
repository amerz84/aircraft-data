export class ArrayUtility {

    /** Removes empty ("") values from string array. */
    getNonEmptyValues(obj: string[]): Array<string> {
        let trimmedArray: Array<string> = [];

        obj.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {
            if(value.toString().trim() !== "") {
            trimmedArray.push(value);
            }
        }      
        });
        return trimmedArray;
    }
}