// Checkout JS

document.getElementById('createAcc').addEventListener('click', acc);
document.getElementById('diffAddress').addEventListener('click', address);


function acc()    {
    let check = document.getElementById("createAcc").checked;
    if(check == true)   
        document.getElementById("makeAcc").style.display="block";
    else
        document.getElementById("makeAcc").style.display="none";
}

function address()    {
    let check = document.getElementById("diffAddress").checked;
    if(check == true)
        document.getElementById("showDiffAddress").style.display="block";
    else
        document.getElementById("showDiffAddress").style.display="none";
}