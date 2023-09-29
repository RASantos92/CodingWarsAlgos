class Node{
    constructor(value,priority){
        this.val = value;
        this.pri = priority;
        this.next = null;
    }
}

class SLLPriority{
    constructor(){
        this.head = null;
    }
    append(){
        newNode = SLNodePri(value,priority);
        if (!this.head){
            this.head = newNode
        }
        if(node1.pri < this.head.pri){
            node.next = this.head
            this.head = node
            return this
        }
        var runner = this.head 
        while ( runner.next && runner.next.pri <= node.pri){
            runner = runner.next
        }
    }
    enqueue(value, pri) {
        var node = new SLNodePri(value,pri)
        if (!this.head) {
            this.head = node
            return this
        }
        if (node.pri < this.head.pri) {
            node.next = this.head
            this.head = node
            return this
        }
        var runner = this.head
        while (runner.next && runner.next.pri <= node.pri) {
            runner = runner.next
        }
        if (!runner.next) {
            runner.next = node
        } else {
            node.next = runner.next
            runner.next = node
        }
        return this
    }
    print(){
        var runner = this.head;
        var output = "";
        while(runner){
            output += `|| Val: ${runner.val} Priority: ${runner.pri} ||`;
            if(runner.next){
                output += " => "
            }
            runner = runner.next;
        }
        console.log(output);
    }
    
    maxToBack(head) {
      if (head === null || head.next === null) {
        return head;
      }
      
      let max = head.value;
      let beforeMax = null;
      let runner = head;
      while (runner.next !== null) {
        if (runner.next.value > max) {
          max = runner.next.value;
          beforeMax = runner;
        }
        runner = runner.next;
      }
      if (beforeMax === null) {
        runner.next = head;
        var temp = head.next;
        head.next = null;
        return temp;
      }
      let maxNode = beforeMax.next;
      beforeMax.next = beforeMax.next.next;
      runner.next = maxNode;
      maxNode.next = null;
      return head; 
    }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
  }









function trim(str,start = str[0],end = str[0]){
    for (let i = 0; str[i] == " "; i++) start = i+1
    for (let i = str.length-1; str[i] == " "; i--) end = i
    return str.slice(start,end)
}




console.log(trim("   hello world     "))













