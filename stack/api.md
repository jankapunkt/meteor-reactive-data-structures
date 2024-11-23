<a name="jkuester_reactive-stack"></a>

## jkuester:reactive-stack

* [jkuester:reactive-stack](#jkuester_reactive-stack)
    * [.ReactiveStack](#jkuester_reactive-stack.ReactiveStack)
        * [.items](#jkuester_reactive-stack.ReactiveStack+items) : <code>Array.&lt;any&gt;</code>
        * [.push(item)](#jkuester_reactive-stack.ReactiveStack+push) ⇒ <code>number</code>
        * [.pop()](#jkuester_reactive-stack.ReactiveStack+pop) ⇒ <code>any</code>
        * [.peek()](#jkuester_reactive-stack.ReactiveStack+peek) ⇒ <code>any</code>
        * [.size()](#jkuester_reactive-stack.ReactiveStack+size) ⇒ <code>number</code>
        * [.all()](#jkuester_reactive-stack.ReactiveStack+all) ⇒ <code>Array.&lt;any&gt;</code>

<a name="jkuester_reactive-stack.ReactiveStack"></a>

### jkuester:reactive-stack.ReactiveStack
A simple reactive version of the classic stack
implementation.

**Kind**: static class of [<code>jkuester:reactive-stack</code>](#jkuester_reactive-stack)  

* [.ReactiveStack](#jkuester_reactive-stack.ReactiveStack)
    * [.items](#jkuester_reactive-stack.ReactiveStack+items) : <code>Array.&lt;any&gt;</code>
    * [.push(item)](#jkuester_reactive-stack.ReactiveStack+push) ⇒ <code>number</code>
    * [.pop()](#jkuester_reactive-stack.ReactiveStack+pop) ⇒ <code>any</code>
    * [.peek()](#jkuester_reactive-stack.ReactiveStack+peek) ⇒ <code>any</code>
    * [.size()](#jkuester_reactive-stack.ReactiveStack+size) ⇒ <code>number</code>
    * [.all()](#jkuester_reactive-stack.ReactiveStack+all) ⇒ <code>Array.&lt;any&gt;</code>

<a name="jkuester_reactive-stack.ReactiveStack+items"></a>

#### reactiveStack.items : <code>Array.&lt;any&gt;</code>
**Kind**: instance property of [<code>ReactiveStack</code>](#jkuester_reactive-stack.ReactiveStack)  
<a name="jkuester_reactive-stack.ReactiveStack+push"></a>

#### reactiveStack.push(item) ⇒ <code>number</code>
Pushes an item to the stack.

**Kind**: instance method of [<code>ReactiveStack</code>](#jkuester_reactive-stack.ReactiveStack)  
**Returns**: <code>number</code> - new size of the stack after push  

| Param | Type |
| --- | --- |
| item | <code>any</code> | 

<a name="jkuester_reactive-stack.ReactiveStack+pop"></a>

#### reactiveStack.pop() ⇒ <code>any</code>
remoces the top-most item from
the stack and returns it.

**Kind**: instance method of [<code>ReactiveStack</code>](#jkuester_reactive-stack.ReactiveStack)  
<a name="jkuester_reactive-stack.ReactiveStack+peek"></a>

#### reactiveStack.peek() ⇒ <code>any</code>
Returns the top-most item from
the stack without removing it.

**Kind**: instance method of [<code>ReactiveStack</code>](#jkuester_reactive-stack.ReactiveStack)  
<a name="jkuester_reactive-stack.ReactiveStack+size"></a>

#### reactiveStack.size() ⇒ <code>number</code>
Returns the current size of the stack
reactively.

**Kind**: instance method of [<code>ReactiveStack</code>](#jkuester_reactive-stack.ReactiveStack)  
<a name="jkuester_reactive-stack.ReactiveStack+all"></a>

#### reactiveStack.all() ⇒ <code>Array.&lt;any&gt;</code>
Returns a copy of all the items in the stack.

**Kind**: instance method of [<code>ReactiveStack</code>](#jkuester_reactive-stack.ReactiveStack)  
