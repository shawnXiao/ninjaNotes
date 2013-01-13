# Wielding functions
## Anonymous functions
Anonymous functions are typially in cases where we wish to create a function

for later use, such as storing in a variable, as a method of an object, or using

it as a callback;
## Storing functions
When adding funcitons to such a collections, a challenge we can face is determing
which functions are actually new to the collection and should be added, and which
are already resident and should not be added
An obvious technique would be to store all the functinons in an array, and loop 
through the array checking for duplicate functions.However, this performs poorly
and as ninjas, we want to make things work well, not merely work.
Another useful trick that we can pull out of our sleeves using function properties
is giving a functino the ability to modify itself.This technique could be used to 
remember previously computed values; saving time during future computations
## Self-memoizing functinos
Memoization(no, that's not a typo)is the process of building a function that is 
capable of remembering its previously computed answers. This can markedly increase
performance by  avoiding needless complex computations that have already been 
performed once.
This approach has two major advantages:
* First, the elen user enjoys performance benefits for function calls asking
for a previously computed value
* Secondly, it happens compeltely seamlessy and behind the scenes; neither the 
user or the page author need to perform any special request or do any extra
initalization in order to make it all work
###Memoizing DOM Elements
We can store state and cache information in a single and encapsulated location,
gaining not only organizational advantages, but performatnce benefits without 
external storage or cacheing objects polluting the scope.
## Variable-length argument lists
###Function overloading
All functions are implicitly passed arguments parameter, which will give
our functions the power to handle any number of passed argumens. Even if 
we only define a certain number of parameters, we'll always be able to 
access all passed arguments through the argument parameter
####DETECING AND TRAVERSING ARGUMENTS
In JavaScript, we "overload" functions with a single implementation that
modifies its behavior by inspection the numeber and nature of the passed
arguments.
There is no proscriptin in JavaScript that enforces passing the same number
of arguments to a function as there are declared parammeters in the functon
declarationg.
 
