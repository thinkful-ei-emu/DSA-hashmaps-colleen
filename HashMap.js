class HashMap {
  constructor(initialCapacity = 8){
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }
 
  static _hashString(string){
    let hash = 5381; 
    for(let i = 0; i < string.length; i++){
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash
    }
    //makes hash + number
    return hash >>> 0;
  }

  set(key, value){
    //check if load is bigger tham max
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO){
      this._resize(this._capacity * HashMap.SIZE_RATIO)
    }
    //then finds slot and adds object, increasing length
    //of the hash table
    const index = this._findSlot(key);
    if(!this._hashTable[index]){
      this.length++
    }
    this._hashTable[index] = {
      key,
      value,
      DELETED: false
    };
  }

  get(key){
    const index = this._findSlot(key);
    if(this._hashTable[index]=== undefined){
      //throw new Error('Key error')
      return null
    }
    
    return this._hashTable[index].value;
   
  }

  delete(key){
    const index = this._findSlot(key);
    const slot = this._hashTable[index];

    if(slot === undefined){
     // throw new Error('Key error')
      return undefined
    }
    //mark slot as deleted
    //on resizing clear out deleted items
    slot.DELETED = true;
    this.length--;
    this._deleted++
  }

  _findSlot(key){
    const hash = HashMap._hashString(key);
    //find the starting index point for the loop:
    const start = hash % this._capacity;
    //open addressing happening in this for loop: 
    for(let i=start; i<start + this._capacity; i++){
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if(slot === undefined || (slot.key === key && !slot.DELETED))
      return index;
    }
  }

  _resize(size){
    //recreates hashmap with new larger capacity
    const oldSlots = this._hashTable;
    this._capacity = size;
    //reset length--rebuild (and clear deleted slots)
    this.length = 0;
    this._deleted = 0;
    this._hashTable = []

    for(const slot of oldSlots){
      if (slot!== undefined && !slot.DELETED){
        this.set(slot.key, slot.value)
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap