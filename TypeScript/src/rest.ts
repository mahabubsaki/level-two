// We can take all functions parameter as array by rest parameter like ...parameters and it will give us all parameters in 

function foo(...params: string[]): void {
    console.log();
}

const names = 's';
foo('s', 'D', 'a', 's');