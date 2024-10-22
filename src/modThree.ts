import { FiniteStateMachine } from './fsm';

function createModThreeFSM(): FiniteStateMachine {
    const states = new Set(['S0', 'S1', 'S2']);
    const alphabet = new Set(['0', '1']);
    const initialState = 'S0';
    const finalStates = new Set(['S0', 'S1', 'S2']);

    const transitionFunction = new Map<string, Map<string, string>>();
    transitionFunction.set('S0', new Map([['0', 'S0'], ['1', 'S1']]));
    transitionFunction.set('S1', new Map([['0', 'S2'], ['1', 'S0']]));
    transitionFunction.set('S2', new Map([['0', 'S1'], ['1', 'S2']]));

    return new FiniteStateMachine(states, alphabet, initialState, finalStates, transitionFunction);
}

export function modThree(input: string): number {
    const fsm = createModThreeFSM();
    const finalState = fsm.processInput(input);
    const remainderMapping: { [key: string]: number } = {
        'S0': 0,
        'S1': 1,
        'S2': 2
    }
    if(remainderMapping[finalState] !== undefined){
        return remainderMapping[finalState]
    } else {
        throw new Error('Invalid final state');
    }

}
