import { throwError } from "rxjs";

export class DateTimeUtility {
    /** Return seconds argument to time string in "HH:MM:SS" format.
    Ex) 100 seconds -> "00:01:40" */
    public toSeconds(seconds: number) {
        const date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }

    /** Calculate the difference (in seconds) from the first row to last row of spreadsheet UTC time column. */
    public getTimeDiff(flightTimeArray: string[]): string {
        try {
            const startTime = new Date("January 1, 1999 " + flightTimeArray[0].substr(0,8)).getTime();
            const finishTime = new Date("January 1, 1999 " + flightTimeArray[1].substr(0,8)).getTime();
            return this.toSeconds(Math.abs(finishTime - startTime) / 1000);
        } catch (error) {
            throwError("Error processing flight duration: " + error);
        }        
    }

    public formatTimeArray(flightTimeArray: string[], rowToStartFrom: number, isNotArray = false) {
        //Leading zeros are truncated in the csv file, so values in the "UTC Time" column
        //may need to be reformatted to the full hh:mm:ss format
        //Ex: 41:23.8 -> 00:41:23.8 (12:41:23.8 a.m.)
        const formattedArray = [];
        let currElement;

        for (let i = rowToStartFrom; i < flightTimeArray.length; i++) {
            if (isNotArray) currElement = flightTimeArray[i]; //Called from time format custom pipe
            else currElement = flightTimeArray[i]['UTC Time'].trim();
            const indexOfColon = currElement.indexOf(":");
            
            //Check for 2nd colon character (i.e. check for truncation of zeros)
            if (currElement.indexOf(":", indexOfColon + 1) === -1) {
                if (indexOfColon === 2) {
                    formattedArray.push("00:".concat(currElement));
                }
                else if (indexOfColon === 1) {
                    formattedArray.push("00:0".concat(currElement));
                }
            }
            else formattedArray.push(currElement);
        }
        return formattedArray;
    }
}