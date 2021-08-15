export class DateTimeConversion {
    //Return seconds argument to time string in "HH:MM:SS" format
    //Ex) 100 seconds -> "00:01:40"
    public toSeconds(seconds: number) {
        const date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }

    //Calculate the difference (in seconds) from the first row to last row of spreadsheet local time column
    public getTimeDiff(flightTimeArray: string[]) {
        const startTime = new Date("January 1, 1999 " + flightTimeArray[0]).getTime();
        const finishTime = new Date("January 1, 1999 " + flightTimeArray[1]).getTime();
        return this.toSeconds(Math.abs(finishTime - startTime) / 1000);
    }
}