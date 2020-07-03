function getFirstSelector(selector) {
    const firstSel = document.querySelector(selector)
    return firstSel
}    

function nestedTarget() {
    const nestedTarget = document.getElementById("nested").querySelector(".target")
    return nestedTarget
}

function increaseRankBy(n) {
    const rankList = document.querySelectorAll('ul.ranked-list li');
  
    for (var i = 0; i < rankList.length; i++) {
      rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + parseInt(n);
    }
  }
  
  function deepestChild(){
    const dChild = document.getElementById('grand-node').querySelectorAll('div')
    return dChild[dChild.length-1]
  
  }