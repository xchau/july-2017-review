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

    if (this.dataStore[idx]) {
      return true;
    }
    else {
      return false;
    }
  }

  insert(key, value) {
    const idx = this.__hashFn(key, this.max);

    if (!this.dataStore[idx]) {
      this.dataStore[idx] = [key, value];
      this.length += 1;

      return this.dataStore;
    }
    else {
      throw Error('collision');
    }
  }

  remove(key) {
    const idx = this.__hashFn(key, this.max);

    if (this.dataStore[idx]) {
      this.dataStore[idx] = undefined;

      return this.dataStore;
    }
    else {
      throw Error('key does not exist');
    }
  }
};

const ht = new HashTable(20);

ht.insert('zzb', 43);
console.log(ht.insert('a', 1));
console.log(ht.hasProp('zzb'));
console.log(ht.remove('a'));
