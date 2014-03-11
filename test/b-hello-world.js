describe("b-hello-world", function() {
    var hello = document.createElement('b-hello-world');
    document.body.appendChild(hello);

    it("have 'Hello World!' content", function() {
        expect(hello.innerHTML).to.contain("Hello world!");
    });
});