let myResume ={
    name: "Moulish",
    age: "24",
    gender : "male",
    contactNumber:"8667219992",
    address:{
        city:"Tirucgengoe",
        district:"Namakkal",
        state:"TanilNadu",
    },
    education :{
        school:"KSR matriculation higher secondary school",
        college:"KPR institute of engineering and technology",
        degree:"Computer science and engineering",
        year:"2021"
    },
    skill:["js","python","block chain","c++"],
    hobbies:["listening music","playing","exploring new places"],
    internship:"Worked in BSH Household Appliance as a intern for a year "

}
 for(let key of Object.keys(myResume)){
    console.log(key,myResume[key])
 }