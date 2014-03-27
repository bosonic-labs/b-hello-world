(function () {
    Bosonic.registerElement('b-hello-world', {
        readyCallback: function () {
            var root = this.createShadowRoot();
            root.appendChild(this.template.content.cloneNode(true));
        },
        template: ' <p>Hello world!</p> '
    });
}());