export class BidirectionalMap<K, V> {
  private readonly keyToValue = new Map<K, V>()
  private readonly valueToKey = new Map<V, K>()

  constructor(entries?: readonly (readonly [K, V])[] | null) {
    if (entries) {
      for (const [key, value] of entries) {
        this.set(key, value)
      }
    }
  }

  set(key: K, value: V) {
    if (this.keyToValue.has(key)) {
      const oldValue = this.keyToValue.get(key)!
      this.valueToKey.delete(oldValue)
    }
    if (this.valueToKey.has(value)) {
      const oldKey = this.valueToKey.get(value)!
      this.keyToValue.delete(oldKey)
    }
    this.keyToValue.set(key, value)
    this.valueToKey.set(value, key)
    return this
  }

  get(key: K): V | undefined {
    return this.keyToValue.get(key)
  }

  getKey(value: V): K | undefined {
    return this.valueToKey.get(value)
  }

  has(key: K): boolean {
    return this.keyToValue.has(key)
  }

  hasValue(value: V): boolean {
    return this.valueToKey.has(value)
  }

  delete(key: K): boolean {
    if (this.keyToValue.has(key)) {
      const value = this.keyToValue.get(key)!
      this.keyToValue.delete(key)
      this.valueToKey.delete(value)
      return true
    }
    return false
  }

  deleteValue(value: V): boolean {
    if (this.valueToKey.has(value)) {
      const key = this.valueToKey.get(value)!
      this.valueToKey.delete(value)
      this.keyToValue.delete(key)
      return true
    }
    return false
  }

  get size(): number {
    return this.keyToValue.size
  }

  clear() {
    this.keyToValue.clear()
    this.valueToKey.clear()
  }

  keys(): IterableIterator<K> {
    return this.keyToValue.keys()
  }

  values(): IterableIterator<V> {
    return this.keyToValue.values()
  }

  entries(): IterableIterator<[K, V]> {
    return this.keyToValue.entries()
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.keyToValue.entries()
  }
}
