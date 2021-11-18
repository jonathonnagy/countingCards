function counter(num) {
    let fillLength = num.toString().length;
    let numbArr = [];
    
    for (let i = 0; i < num; i++) {
        let lastNumLength = i.toString().length;
        
        numbArr.push(new Array(fillLength - lastNumLength).fill('0').concat(i.toString()).join(''));
    }

    return numbArr
}

function loadEvent() {
    const arr = counter(200);

    for (const arrElement of arr) {
        root.insertAdjacentHTML('beforeend', `<p>${arrElement}</p>`)
    }
}

window.addEventListener('load', loadEvent)