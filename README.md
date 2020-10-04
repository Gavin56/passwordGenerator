# passwordGenerator

This program requests the user to specify how long they would like their password to be, as well as which types of characters they 
would like their password to be composed of. Depending on which types the user selects, those types will then be dynamically 
pushed into an array that is then used to randomly generate a string of characters. To do this, the dynamically generated array is 
referenced by addressing it at an index that is randomly generated through math.random. This randomly selected character is then 
concatenated to the password variable which is then printed to the user's screen. A condition is implemented to make sure that the 
user selects a password length between 8 and 128 characters and another condition is implemented to ensure that the user selects 
at least one set of characters to generate from.