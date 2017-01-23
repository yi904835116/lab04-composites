interface IDomElement {
  add(element: DomElement);
  print();
}

class DomElement implements IDomElement {
  elementName : string;
  textContent: string;
  elements: DomElement[];

  constructor(elementName : string, textContent?: string) {
    this.elementName = elementName;
    this.elements = [];
    this.textContent = textContent;
  }

  add(element: DomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.elementName}>`);
    if (this.textContent) {
      console.log(this.textContent);
    }
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}

let p1 = new DomElement("p", "Hello world!");
let p2 = new DomElement("p", "How is it going?");
let div = new DomElement("div");
let html = new DomElement("html");

div.add(p1);
div.add(p2);
html.add(div);

html.print();