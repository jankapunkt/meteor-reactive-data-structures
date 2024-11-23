import { Tracker } from 'meteor/tracker'

/**
 * @module jkuester:reactive-stack
 */

/**
 * A simple reactive version of the classic stack
 * implementation.
 *
 * @class
 */
export class ReactiveStack {

  constructor() {
    /**
     * @type {any[]}
     */
    this.items = []
    this.dep = new Tracker.Dependency()
  }

  /**
   * Pushes an item to the stack.
   * @param item {any}
   * @return {number} new size of the stack after push
   */
  push (item) {
    this.items.push(item)
    this.dep.changed()
    return this.items.length
  }

  /**
   * remoces the top-most item from
   * the stack and returns it.
   * @return {any}
   */
  pop () {
    if (this.items.length === 0) {
      return
    }
    this.dep.changed()
    return this.items.pop()
  }

  /**
   * Returns the top-most item from
   * the stack without removing it.
   * @return {any}
   */
  peek () {
    if (Tracker.active) this.dep.depend()
    return this.items.at(-1)
  }

  /**
   * Returns the current size of the stack
   * reactively.
   * @return {number}
   */
  size () {
    if (Tracker.active) this.dep.depend()
    return this.items.length
  }

  /**
   * Returns a copy of all the items in the stack.
   * @return {any[]}
   */
  all () {
    if (Tracker.active) this.dep.depend()
    return [].concat(this.items)
  }
}
