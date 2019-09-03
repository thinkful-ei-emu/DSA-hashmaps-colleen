const HashMap = require("./HashMap");

function main() {
  const lor = new HashMap();
  

  lor.set("Hobbit", "Bilbo");
  lor.set("Hobbit", "Frodo");
  lor.set("Wizard", "Gandolf");
  lor.set("Human", "Aragon");
  lor.set("Elf", "Legolas");
  lor.set("Maiar", "The Necromancer");
  lor.set("Maiar", "Sauron");
  lor.set("Ringbearer", "Gollum");
  lor.set("LadyOfLight", "Galadriel");
  lor.set("HalfElven", "Arwen");
  lor.set("Ent", "Treebeard");

 //
console.log(lor)
lor.get('Hobbit')
}

//main()
/* 
Print your hash map and notice the length and items that are hashed in your hash map. Have you hashed all the items you were asked to?
--no. the duplicates are not there
Retrieve the value that is hashed in the key "Maiar" and Hobbit.
What are the values of Maiar and Hobbit that you have? Is there a discrepancy? 
Explain your answer.
--Hobbit gives Frodo. Maiar gives Sauron. There is a discrepancy because with a hash table you would expect that it would perform collision control and set the next item with a already existing key to the next available open slot
--the find slot function in the loop looks through and then essentialy is replacing the value of the existing key with the new key/value pair.
What is the capacity of your hash table after you have hashed all the above items? Explain your answer. 
The capacity of the hashtable is now 24--3x the size of the original table, because every time the capacity ratio is reached, the table is resized to accommodate. so because the ratio is 0.5, when the table is 1/2 full, it grows in size by 3 (the size ratio) */



const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  //make a new hashmap
  let map1 = new HashMap();
  //set key value pairs of two new items
  map1.set(str1,10);
  map1.set(str2,20);
  //create a new hashmap
  // helloworld 10 =str1 value
  //helloworld 20 =str2 value
  let map2 = new HashMap();
  let str3 = str1; //helloworld
  let str4 = str2; //helloworld
  //setting values to the opposite of what they were originally
  map2.set(str3,20); //helloworld 20
  map2.set(str4,10); //helloworld 10

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

//WhatDoesThisDo()

/* 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length m = 11 using open addressing and a hash function k mod m.

2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

 // m =11
// 10 mod 11 9;
 //  0 | 1|2 |3 |4 |5 |6 |7 |8 |9 |10 |11 | 
 // 22 88     4  15 28 17 59 31 10

 //2 m=9 
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 
    28 20  12       5  15      17
    19                 33
    10
 */

/* Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of". */

function deleteDuplicateOne(str){
  let stringMap = new HashMap()
let newStr = ''
  for(let i=0; i < str.length; i++){
    stringMap.set(i, str[i])
    if(!newStr.includes(str[i])){
      newStr += stringMap.get(i)
    }
  
  }
  console.log(newStr)
  console.log(stringMap)

}

deleteDuplicateOne('google')
deleteDuplicateOne('google all that you can think of')

function deleteDuplicate(str){
  let stringMap = new HashMap()
  let newStr = ''
  for(let i=0; i < str.length; i++){
    stringMap.set(str[i], str[i])
    if (!newStr.includes(stringMap.get(str[i]))){
      newStr += stringMap.get(str[i])
    }
    }
  
  
  console.log(newStr)
  console.log(stringMap)

}
deleteDuplicate('google')