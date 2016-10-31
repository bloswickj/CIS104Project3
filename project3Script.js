/**
 *   @author Bloswick, John (bloswickj@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 1 || created: 09.17.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueInput, earlyExit;
let userRating, numRatings, sumRatings, averageRating;

function main(){
    SetInitialValues();
    if (continueInput == null) {
        SetContinueInput();
    }
    if (continueInput === 1) {
        SetUserRating();
        if (earlyExit === 0) {
            calculateNumRatings();
            calculateSumRatings();
            SetContinueInput();
            if (earlyExit === 0) {
                return main();
            }
        }
    }
    if (earlyExit === 0) {
        calculateAverageRating();
        printAverageRating();
        printGoodbye();
    }
    if (earlyExit === 1){
        console.log('Too many failed attempts. Exiting program.')
    }
}

main();

function SetInitialValues(){
    if (numRatings == null) {
        numRatings = 0;
    }
    if (sumRatings == null)    {
        sumRatings = 0;
    }
}

function SetContinueInput(){
    if (continueInput === 1) {
        for (let i=0; i<3; i++) {
            continueInput = Number(PROMPT.question(`\nDo you want to enter another rating? [0=no, 1=yes]: `));
            if (continueInput !== 0 && continueInput !== 1) {
                console.log(`${continueInput} is not a valid response.`);
                earlyExit = 1;
            }
            else {
                earlyExit = 0;
                break;
            }
        }
    }
    else{
        continueInput = 1;
    }
}

function SetUserRating(){
    for (let i=0; i<3; i++){
        userRating = PROMPT.questionInt('\nPlease enter a rating on a scale of 0 to 5:');
        if (userRating < 0 || userRating > 5){
            console.log('That is not a valid response.');
            earlyExit = 1;
        }
        else{
            console.log('Thank you for rating the movie!');
            earlyExit = 0;
            break;
        }
    }
}

function calculateNumRatings(){
   numRatings = numRatings + 1;
}

function calculateSumRatings(){
    sumRatings = sumRatings + userRating;
}

function calculateAverageRating(){
    averageRating = sumRatings / numRatings;
}

function printAverageRating(){
    console.log(`The average rating for the movie is ${averageRating}`);
}

function printGoodbye(){
    console.log('\n\tgoodbye.');
}