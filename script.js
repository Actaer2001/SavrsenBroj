const proveri = () => {
    let delioci = new Array();
    let sumaDelioca = 0;
    let dobarFlag = false;
    let input = parseInt(document.getElementById("input").value);
    
    for (let i = 1; i < input; i++){
        if (input % i == 0)
            delioci.push(i);
    }    
    delioci.forEach(e => sumaDelioca += e);
    
    delioci.forEach(e => {
        if ((sumaDelioca - (2 * e)) === input)
            dobarFlag = true;
    });

    if (input === sumaDelioca) {
        console.log("Broj je savrsen");
        alert("Broj je savrsen");
    } else if (dobarFlag) {
        console.log("Broj je dobar");
        alert("Broj je dobar");
    } else {
        console.log("Broj je obican");
        alert("Broj je obican");
    }
}