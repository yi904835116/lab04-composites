interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text : string;
  constructor(text : string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}


class DomElement implements IDomElement {
  name : string;
  content: string;
  elements: IDomElement[] = [];

  constructor(name : string, content?: string) {
    this.name = name;
    this.content = content;
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.name}>`);
    if (this.content) {
      console.log(this.content);
    }
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.name}>`);
  }
}

let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");
div.add(p1);
div.add(p2);
p1.add(new TextNode("Hi, I am a TextNode being printed!"));
p2.add(new TextNode("TextNode == leaf"));
html.add(div);
html.print();