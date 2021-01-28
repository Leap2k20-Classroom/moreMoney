var gishuuns = [
  {
    'name': 'Zoe',
    'uria': 'Ta hedig ur huuhed shigee hairlana',
    'money': 500,
    'id:': 4,
    "sanal_too": 1200,
  },
  {
    'name': 'baatraa',
    'uria': 'Hamtdaa edetsgeey',
    'money': 900,
    'id:': 1,
    "sanal_too": 300,
  },
  {
    'name': 'sodoo',
    'uria': 'Huniih ni toog maliinh tootoi tentsuu bolgono',
    'money': 1300,
    'id:': 3,
    "sanal_too": 300,
  },
  {
    'name': 'dolgoon',
    'uria': 'Namaig demjeerei tstserleg, yashlin anduuda!!!',
    'money': 9999,
    'id:': 2,
    "sanal_too": 9999,
  }

]

function search(maxPrecentage) {

  var max = 0, gishuunId;

  for(var i = 0; i < gishuuns.length; i ++) {
    let tempMax = 0;
    for(var j = 1; j <= maxPrecentage; j ++) {
      var score = gishuuns[i].money * (j / 100) + gishuuns[i].sanal_too * ( (100 - j) / 100);
      console.log(score)
      if(tempMax < score ) { 
        tempMax = score;
      }
    }
    if(max < tempMax) { 
      max = tempMax;
      gishuunId = gishuuns[i].id;
    }
  }
  return gishuunId;
  //return "some gishuun id"; 
}


console.log(search(process.argv[2]))