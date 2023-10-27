class MC {
    greet(event: string = 'party'): string {
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
console.log('[Exercise 4.1]', mc.greet('show'));