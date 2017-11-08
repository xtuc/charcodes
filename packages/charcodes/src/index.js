// @flow

export const backSpace = 8;
export const lineFeed = 10; //  '\n'
export const carriageReturn = 13; //  '\r'
export const shiftOut = 14;
export const space = 32;
export const exclamationMark = 33; //  '!'
export const quotationMark = 34; //  '"'
export const numberSign = 35; //  '#'
export const dollarSign = 36; //  '$'
export const percentSign = 37; //  '%'
export const ampersand = 38; //  '&'
export const apostrophe = 39; //  '''
export const leftParenthesis = 40; //  '('
export const rightParenthesis = 41; //  ')'
export const asterisk = 42; //  '*'
export const plusSign = 43; //  '+'
export const comma = 44; //  ','
export const dash = 45; //  '-'
export const dot = 46; //  '.'
export const slash = 47; //  '/'
export const digit0 = 48; //  '0'
export const digit1 = 49; //  '1'
export const digit2 = 50; //  '2'
export const digit3 = 51; //  '3'
export const digit4 = 52; //  '4'
export const digit5 = 53; //  '5'
export const digit6 = 54; //  '6'
export const digit7 = 55; //  '7'
export const digit8 = 56; //  '8'
export const digit9 = 57; //  '9'
export const colon = 58; //  ':'
export const semicolon = 59; //  ';'
export const lessThan = 60; //  '<'
export const equalsTo = 61; //  '='
export const greaterThan = 62; //  '>'
export const questionMark = 63; //  '?'
export const atSign = 64; //  '@'
export const uppercaseA = 65; //  'A'
export const uppercaseB = 66; //  'B'
export const uppercaseC = 67; //  'C'
export const uppercaseD = 68; //  'D'
export const uppercaseE = 69; //  'E'
export const uppercaseF = 70; //  'F'
export const uppercaseG = 71; //  'G'
export const uppercaseH = 72; //  'H'
export const uppercaseI = 73; //  'I'
export const uppercaseJ = 74; //  'J'
export const uppercaseK = 75; //  'K'
export const uppercaseL = 76; //  'L'
export const uppercaseM = 77; //  'M'
export const uppercaseN = 78; //  'N'
export const uppercaseO = 79; //  'O'
export const uppercaseP = 80; //  'P'
export const uppercaseQ = 81; //  'Q'
export const uppercaseR = 82; //  'R'
export const uppercaseS = 83; //  'S'
export const uppercaseT = 84; //  'T'
export const uppercaseU = 85; //  'U'
export const uppercaseV = 86; //  'V'
export const uppercaseW = 87; //  'W'
export const uppercaseX = 88; //  'X'
export const uppercaseY = 89; //  'Y'
export const uppercaseZ = 90; //  'Z'
export const leftSquareBracket = 91; //  '['
export const backslash = 92; //  '\    '
export const rightSquareBracket = 93; //  ']'
export const caret = 94; //  '^'
export const underscore = 95; //  '_'
export const graveAccent = 96; //  '`'
export const lowercaseA = 97; //  'a'
export const lowercaseB = 98; //  'b'
export const lowercaseC = 99; //  'c'
export const lowercaseD = 100; //  'd'
export const lowercaseE = 101; //  'e'
export const lowercaseF = 102; //  'f'
export const lowercaseG = 103; //  'g'
export const lowercaseH = 104; //  'h'
export const lowercaseI = 105; //  'i'
export const lowercaseJ = 106; //  'j'
export const lowercaseK = 107; //  'k'
export const lowercaseL = 108; //  'l'
export const lowercaseM = 109; //  'm'
export const lowercaseN = 110; //  'n'
export const lowercaseO = 111; //  'o'
export const lowercaseP = 112; //  'p'
export const lowercaseQ = 113; //  'q'
export const lowercaseR = 114; //  'r'
export const lowercaseS = 115; //  's'
export const lowercaseT = 116; //  't'
export const lowercaseU = 117; //  'u'
export const lowercaseV = 118; //  'v'
export const lowercaseW = 119; //  'w'
export const lowercaseX = 120; //  'x'
export const lowercaseY = 121; //  'y'
export const lowercaseZ = 122; //  'z'
export const leftCurlyBrace = 123; //  '{'
export const verticalBar = 124; //  '|'
export const rightCurlyBrace = 125; //  '}'
export const tilde = 126; //  '~'
export const nonBreakingSpace = 160;
export const oghamSpaceMark = 5760; // ' '
export const lineSeparator = 8232;
export const paragraphSeparator = 8233;

export function isDigit(code: Char): boolean {
  return code >= digit0 && code <= digit9;
}
