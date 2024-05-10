// 27 : Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
const names1: string[] = ["Ali", "Babar", "Ahmad"];
const names2: string[] = ["Ibrahim"];
const names3: string[] = ["Maryum", "Jamil"];

function formatNames(names: string[]): string {
    if (names.length === 0) {
        return "";
    } else if (names.length === 1) {
        return names[0];
    } else if (names.length === 2) {
        return names.join(" and ");
    } else {
        const lastTwoNames = names.slice(-2).join(" and ");
        const remainingNames = names.slice(0, -2).join(", ");
        return `${remainingNames}, ${lastTwoNames}`;
    }
}

console.log(formatNames(names1));  
console.log(formatNames(names2));  
console.log(formatNames(names3));  
