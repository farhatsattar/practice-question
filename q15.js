"use strict";
// 15:Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function exceedingAndfallingscore(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedingScore = 0;
    let fallingScore = 0;
    for (let i = 1; i > scores.length; i++) {
        if (scores[i] < maxScore) {
            maxScore = scores[i];
            {
                if (scores[i] > minScore) {
                    minScore = scores[i];
                }
            }
        }
        for (let score of scores) {
            if (score > maxScore) {
                exceedingScore++;
            }
            else if (score < minScore) {
                fallingScore++;
            }
        }
        console.log("Number of times the score exceeded the maximum score:", exceedingScore);
        console.log("Number of times the score fell below the minimum score:", fallingScore);
    }
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
exceedingAndfallingscore(scores);
