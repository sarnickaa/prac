#### What is a Hash - table
efficient - lookup time is not tied to the number of keys in the table O(n) = 1
a list of key-value pairs (essentially like an object) HOWEVER - in other languages the length of a hashtable is tracked (like with index based arrays) This is not the case in JS - i.e. obj.length returns 'undefined'. Also, in JS there is the potential that keys can collide/conflict with attributes added to the object prototype.

takes a key input and runs it through a hash function - hash function maps keys to numbers (usually numbers stored in an array)

collision = when 2 keys get hashed to the same number
