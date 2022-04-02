let vatiaDistricts = ["Lalmonirhat", "Kurigram", "Rangpur", "Gaibandha", "Bogra"];

let Rahatul, Rifat, Bikash, Lablu;
rahatul = {
    Name: "Rahatul",
    District: "Kurigram"
}
Lablu = {
    Name: "Lablu",
    District: "Nilphamari"
}
Rifat = {
    Name: "Rifat",
    District: "Thakurgaon"
}
Bikash = {
    Name: "Bikash",
    District: "Kurigram"
}


function isVatia(name){
        if (vatiaDistricts.includes(name.District)){
            console.log(name.Name + " is a vatia.");
        }else{
            console.log(name.Name + " is not a vatia.");
        }
}
isVatia(Bikash);