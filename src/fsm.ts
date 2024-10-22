/**
 * FSM (Finite State Machine) class
 * 
 * This class models a FSM that processes input strings,
 * transition between states, and output a result based on the final state.
 * 
 * Properties:
 * `states`: A finite list of states (Q).
 * `alphabet`: A set of input symbols (Σ).
 * `initialState`: The initial state of the FSM (q0).
 * `acceptingStates`: the set of accepting/final states (F).
 * `transitionFunction`: The function that defines state transitions (δ).
 * `currentState`: The state the FSM is currently in during the input processing.
 * 
 * Methods:
 * - `constructor`: Initializes the FSM.
 * - `transition`: Executes the transition function to move between states.
 */
export class FiniteStateMachine {
    states: Set<string>;
    alphabet: Set<string>;
    initialState: string;
    finalStates: Set<string>;
    transitionFunction: Map<string, Map<string, string>>;
    currentState: string;

    constructor(
        states: Set<string>,
        alphabet: Set<string>,
        initialState: string,
        finalStates: Set<string>,
        transitionFunction: Map<string, Map<string, string>>
    ) {
        this.states = states;
        this.alphabet = alphabet;
        this.initialState = initialState;
        this.finalStates = finalStates;
        this.transitionFunction = transitionFunction;
        this.currentState = initialState;
    }

    // This finds the number input and determines the next state
    transition(number: string): void {
        const stateTransitions = this.transitionFunction.get(this.currentState);
        if (stateTransitions && stateTransitions.has(number)) {
            this.currentState = stateTransitions.get(number)!;
        } else {
            throw new Error(`Transition state: ${this.currentState} with number: ${number} does not exist`);
        }
    }

    // This iterates through the input string and transitions the state based on the symbol
    processInput(inputInteger: string): string {
        for(const number of inputInteger) {
            this.transition(number);
        }
        return this.currentState;
    }

    reset(): void {
        this.currentState = this.initialState;
    }
}
