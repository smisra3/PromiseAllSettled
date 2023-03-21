This is not sequential execution of promises. Just the order of the result is maintained.

arrayOfPromises: Is the array of promises passed to this method which will return a new promise

optionsObject.criticalIndex:Array of Numbers : Is the additional parameter passed which contains critical Index which is of type array of numbers. This defines that if the promise index mentioned in the "criticalIndex" array is rejected, then only reject the complete promise. 

Use case: 
Loading a page requires 4 API calls, of which 1 is critical for rendering page, other are not-so-important. So pass critical index array value as [0] if the first promise pushed is that of the critical one. 

Returns Promise: Which can be utilised and the reponse will be in the same order in an array in which the promises were index in the passed array.