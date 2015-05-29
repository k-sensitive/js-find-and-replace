describe('findAndReplace', function(){
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