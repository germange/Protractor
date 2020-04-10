class TextBox {

    constructor(protractorElement,name){
this.protractorElement = protractorElement;
this.elementName = name;
    }

     async getText(){
        return this.protractorElement.getText();
    };
    
}


module.exports = TextBox;