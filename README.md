# How to run

1. Copy the repo or unzip the folder
2. ensure you have the latest versions of Node and npm installed (https://nodejs.org/en)
2. in the main folder open a terminal run "npm install"
3. now run "npm install --save-dev jest ts-jest @types/jest"
4. now run "npm test", this will run all the tests 

# Explanation

So this is split up into a few files 

# fsm.ts

the FSM module, it contains all the attributes mentioned in the assignment sheet, that being 
- states
- alphabet
- initalState
- acceptingStates
- currentState (this not in the assignment sheet but was needed to ensure the state was tracked properly)

and it uses these to take an input and process it by transitioning the state of each number in the input

# modThree.ts

In this file the FSM class is initalized and set up for the mod-three example
Once it is set up it passes the value inputed and the correct remainder is returned 

# modThree.test.ts

this is a test suite with the tests mentioned in the assignment document as well as a few other test cases
the cases that are tested are 
'1101'
'1110'
'1101'
'0'
'1'
'102' (error expected)


# Notes

- I was not fully sure how this application was supposed to be interacted with from the assignment document 
   (input from the user console or a UI?) but from the rubric I could see that there was a section on unit test
   so I decided to simply add test to show how it worked 

- My function returns the remainder right now, I was not sure if it needed to return that or simlpy the state (S1, S2, ect...)
   This would be a very simple change to make if that was the case



