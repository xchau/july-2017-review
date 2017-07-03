class HashTable {
  constructor(max) {
    this.max = max || 15;
    this.length = 0;
    this.dataStore = new Array(this.max);
  }

  __hashFn(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }

    return sum % this.max; // returns hash/idx
  }

  hasProp(key) {
    const idx = this.__hashFn(key, this.max);

    if (this.dataStore[idx].length) {
      for (let i = 0; i < this.datastore[idx].length; i++) {
        if (this.datastore[idx][i][0] === key) {
          return true;
        }
      }
    }
    else {
      return false;
    }
  }

  printHT() {
    return this.dataStore;
  }

  insert(key, value) {
    const idx = this.__hashFn(key, this.max);

    if (!this.dataStore[idx]) {
      this.dataStore[idx] = [[key, value]];
      this.length += 1;
    }
    else if (this.dataStore[idx].length >= 0) {
      this.dataStore[idx].push([key, value]);
      this.length += 1;
    }
    else {
      for (const keyValue of this.dataStore[idx]) {
        if (keyValue[0] === key) {
          keyValue[1] = value;
          break;
        }
      }
    }

    return this.dataStore;
  }

  remove(key) {
    const idx = this.__hashFn(key, this.max);

    if (!this.dataStore[idx].length) {
      throw Error('key does not exist');
    }
    else if (this.dataStore[idx].length === 1 && this.dataStore[idx][0][0] === key) {
      delete this.dataStore[idx];
    }
    else {
      for (let i = 0; i < this.dataStore[idx].length; i++) {
        if (this.dataStore[idx][i][0] === key) {
          delete this.dataStore[idx][i];
        }
      }
    }

    return this.dataStore;
  }
};

const ht = new HashTable(20);

ht.insert('zzb', 43);
ht.insert('zzb', 22);
ht.insert('aac', 23);
ht.insert('goa', 11);
ht.insert('blue', 93);
ht.remove('blue');
console.log(ht.printHT());
