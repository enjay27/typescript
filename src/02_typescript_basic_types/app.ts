let userInput: unknown;
let userName: string;

userInput = 0;
userInput = 'a';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occured', 500);