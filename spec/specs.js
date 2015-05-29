describe('replace', function(){
  it("replaces 'cat' with 'dog' in the string input 'cat'", function(){
    expect(replace('cat','cat', 'dog')).to.equal('dog');
  });
});