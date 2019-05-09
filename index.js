

// let add = document.getElementById('add')

let total = 0
function add() {
    let amount = document.getElementById('amount').value
    amount = +amount
    total += amount
    let budget = document.getElementById('budgetTotal')
    //  ********** Adding to budget total 
    // amount = +amount;
    // total = amount + amount
    budget.innerHTML = total;
    //   ********************************


    let name = document.getElementById('name').value
    var li = document.createElement('li')
    var t = document.createTextNode(name)
    let span = document.createElement('span')


    li.appendChild(t)
    console.log(li)
    if (name === '' || amount === '') {
        alert('write something..')
    } else {
        var trashkun = document.createElement('div')
        trashkun.classList.add('trash')
        document.getElementById('myUl').appendChild(li)
        document.getElementsByTagName("ul")[0].appendChild(trashkun);
        li.classList.add('nums2')
        let txt = document.createTextNode('$')
        span.classList.add('spanfix')
        // span.appendChild(trashkun)
        span.appendChild(txt)
        li.appendChild(span)
        span.innerHTML = amount
        document.getElementById('name').value = ''
        document.getElementById('amount').value = ''
    }
}

let close = document.getElementsByClassName("trash");
close.addEventListener('click', function(){
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            console.log('sup')
            var div = this.parentElement;
            div.style.display = "none";

        }
    }
})
