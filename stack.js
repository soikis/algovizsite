class Stack {

    constructor (maxStackSize) 
    {   
        this.maxStackSize = 5;
        this.data = [];
    }

    // Insert item to the stack.
    push(item) 
    {
        this.data.push(item);
    }

    // Remove the top item in the stack and return it.
    pop() {
        if (this.data.length == 0) 
            return "Underflow - This stack is empty!"
        return this.data.pop();
    }

    // Get the top item in the stack. 
    peek() {
        return this.data[this.data.length - 1];
    }

    // Return true if the stack is empty.
    isEmpty() {
        return this.data.length == 0;
    }

    // Return the values of this.data in the correct (reversed) order as a generator.
    *stackItems() {
        const iter_data = [this.data].reverse()
        for (let item of iter_data) {
            yield item
        }
    }
}

function addSVGItem() {
    const stackFrame = document.getElementById("visuals")
    let svgBounds = svg.getBoundingClientRect(); // Maybe use svg.parentNode.clientWidth; or offsetWidth for border and padding
    
    svg.appendChild(stackFrame);
    console.log("finished")
    
}

function createCircle()
{
    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS(null,"id","mycircle");
    myCircle.setAttributeNS(null,"cx",100);
    myCircle.setAttributeNS(null,"cy",100);
    myCircle.setAttributeNS(null,"r",50);
    myCircle.setAttributeNS(null,"fill","black");
    myCircle.setAttributeNS(null,"stroke","none");

    document.getElementById("mySVG").appendChild(myCircle);
}     

function addItemToStack() {

}