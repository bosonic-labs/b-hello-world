(function () {
    var BHelloWorldPrototype = Object.create(HTMLElement.prototype, {
            createdCallback: {
                enumerable: true,
                value: function () {
                    var root = this.createShadowRoot();
                    root.appendChild(this.template.content.cloneNode(true));
                }
            }
        });
    window.BHelloWorld = document.registerElement('b-hello-world', { prototype: BHelloWorldPrototype });
    Object.defineProperty(BHelloWorld.prototype, '_super', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: HTMLElement.prototype
    });
    Object.defineProperty(BHelloWorldPrototype, 'template', {
        get: function () {
            var fragment = document.createDocumentFragment();
            var div = fragment.appendChild(document.createElement('div'));
            div.innerHTML = ' <p>Hello world!</p> ';
            while (child = div.firstChild) {
                fragment.insertBefore(child, div);
            }
            fragment.removeChild(div);
            return { content: fragment };
        }
    });
}());