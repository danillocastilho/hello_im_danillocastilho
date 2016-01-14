var DisplayList = {};

function DisplayObject (name, container, displayList) {
	this.name = name;
    this.container = container;

    this.width = this.container.width();
    this.height = this.container.height();

    this.init = function () {

    };

    if(!displayList){ DisplayList[name] = this } else { displayList[name] = this }
    return this;
}