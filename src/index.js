#!/usr/bin/node
import readlineSync from 'readline-sync';
export const questionName = () => {
const userName = readlineSync.question('May I have your name? ');
return console.log(`Hello, ${userName}!`) 
};
