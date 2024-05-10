// 23: Create a function findDuplicates that finds and logs all duplicates in an array.

function findDuplicates(arr: any[]): void {
    const duplicates: { [key: string]: number } = {};


    arr.forEach((item) => {
        if (duplicates[item] === undefined) {
            duplicates[item] = 1;
        } else {
            duplicates[item]++;
        }
    });


    for (const key in duplicates) {
        if (duplicates[key] > 1) {
            console.log(`Duplicate ${key}: ${duplicates[key]} times`);
        }
    }
}


const array = [2, 2, 3, 4, 5, 2, 3, 6, 7, 7, 8, 8,3,3];
findDuplicates(array);
