let line = document.querySelector("#line")
let bar = document.querySelector("#bar")
let slider = document.getElementById("myRange");
let output = document.getElementById("range");
let myInput = document.querySelector("#myInput");

output.innerHTML = slider.value;
myInput.value = 1

//let valueRange = document.querySelector("#valueSlider")
//let showRangeValue = document.querySelector("#showRangeValue")

const labels = [ //X VÄRDEN
    '1 år',
    '2 år',
    '3 år',
    '4 år',
    '5 år',
]

const data = 
{
    labels: labels,
    datasets: [
    {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 255, 0)',
        borderColor: 'rgb(161, 161, 161)',
        data: [ 
            300, 
            700, 
            8000, 
            400, 
            2000, 
            11000
        ], //Y VÄRDEN
    }]
}

const basedata = [ 
    300, 
    700, 
    8000, 
    400, 
    2000, 
    11000
]; 

const config = 
{
    type: 'bar',
    data: data,
    options: {}
}

const myChart = new Chart( document.getElementById('myChart'), config)


line.addEventListener("click", () => 
{
    //console.log(myChart)
    myChart.config.type = "line"
    myChart.update()
})

bar.addEventListener("click", () =>
{
    myChart.config.type = "bar"
    myChart.update()
})

myInput.addEventListener("input", () => 
{
    //let basedata = parseInt(myInput.value)
    data.datasets[0].data[0] = /*numPanels*/myInput.value * basedata[0];
    data.datasets[0].data[1] = /*numPanels*/myInput.value * basedata[1];
    data.datasets[0].data[2] = /*numPanels*/myInput.value * basedata[2];
    data.datasets[0].data[3] = /*numPanels*/myInput.value * basedata[3];
    data.datasets[0].data[4] = /*numPanels*/myInput.value * basedata[4];
    myChart.update()
    //console.log(basedata[0,1,2,3,4])
    console.log(myInput.value)
    data.datasets[0].data[0] = parseInt(myInput.value) * basedata[0]

    console.log(typeof(data.datasets[0].data[0]))
    console.log(typeof(basedata[0]))
    slider.value = myInput.value
    output.innerHTML = myInput.value
})

slider.oninput = function() 
//slider.addEventListener("input", () =>
{
    output.innerHTML = this.value;
    //let numPanels = this.value;

    data.datasets[0].data[0] = /*numPanels*/this.value * basedata[0];
    data.datasets[0].data[1] = /*numPanels*/this.value * basedata[1];
    data.datasets[0].data[2] = /*numPanels*/this.value * basedata[2];
    data.datasets[0].data[3] = /*numPanels*/this.value * basedata[3];
    data.datasets[0].data[4] = /*numPanels*/this.value * basedata[4];
    console.log(typeof(data.datasets[0].data[0]))
    console.log(typeof(basedata[0]))
    myInput.value = this.value
    myChart.update()
}//)

//let solpanel = document.querySelector("#solPanel")


//   let linjeDiagram = document.querySelector("#linje")

//   linjeDiagram.addEventListener("click", () => 
// {
//     console.log("hej")
// }) 



 //RÄTTA SÄTTET  

/*showRangeValue.innerHTML = valueRange.value

valueRange.addEventListener("input", () => 
{
    showRangeValue.innerHTML = this.value
    console.log("Hej")*/

