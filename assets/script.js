let yourName = "Dalya Sohl" 

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gb= gb+1
total = gb+cc+sugar
document.getElementById("qty-gb").textContent = gb
document.getElementById("qty-total").textContent = total
console.log ('gb:' + gb)
console.log ('total:' + total)
})

gbMinusBtn.addEventListener('click', function() {
    console.log ('gingergerbread minus button clicked')

    if (gb>0) {
        gb=gb-1
    }
total = gb+cc+sugar
document.getElementById("qty-gb").textContent = gb
document.getElementById("qty-total").textContent = total
console.log ('gb:' + gb)
console.log ('total:' + total)
})

ccPlusBtn.addEventListener('click', function(){
    console.log ('cc plus button clicked')
    cc = cc+1
    total = cc+gb+sugar
    document.getElementById("qty-cc").textContent = cc
    document.getElementById("qty-total").textContent = total
    console.log('cc:' + cc)
    console.log ('total:' + total)
})

ccMinusBtn.addEventListener('click', function(){
console.log('cc minus clicked')
if (cc>0) {
    cc=cc-1
}
total = cc+gb+sugar
document.getElementById("qty-cc").textContent = cc
    document.getElementById("qty-total").textContent = total
    console.log('cc:' + cc)
    console.log ('total:' + total)
})

sugarPlusBtn.addEventListener('click', function(){
    console.log('sugar plus btn')
    sugar = sugar+1
    total = cc+gb+sugar
    document.getElementById("qty-sugar").textContent = sugar
    document.getElementById("qty-total").textContent = total
    console.log('sugar:' + sugar)
    console.log ('total:' + total)
})

sugarMinusBtn.addEventListener('click', function(){
    console.log('sugar minus btn')
    if (sugar>0) {
        sugar=sugar-1
    }
    total = cc+gb+sugar
    document.getElementById("qty-sugar").textContent = sugar
        document.getElementById("qty-total").textContent = total
        console.log('sugar:' + sugar)
        console.log ('total:' + total)
})



// TODO: Hook up event listeners for the rest of the buttons