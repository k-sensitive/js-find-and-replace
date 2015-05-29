describe('findAndReplace', function(){
  it("handles puntuation", function(){
    expect(findAndReplace("can can, can't, cant!",'can', 'test')).to.equal("test test, can't, cant!");
  });

  it("replaces 'cat' with 'dog' in the string input 'cat tiger cat'", function(){
    expect(findAndReplace('cat tiger cat','cat', 'dog')).to.equal('dog tiger dog');
  });

  it("replaces 'cat' with 'dog' in the string input 'cat tiger'", function(){
    expect(findAndReplace('cat tiger','cat', 'dog')).to.equal('dog tiger');
  });

  it("replaces 'cat' with 'dog' in the string input 'cat'", function(){
    expect(findAndReplace('cat','cat', 'dog')).to.equal('dog');
  });
});