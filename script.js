var data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }];

 


var clear = document.querySelector('.cleared');
var filter = document.querySelector('.filters');
var boxFrame = document.querySelector('.boxesFrame');


var filters = [];
display();


// function that dispays all data value
function display(){
  data.forEach((e)=>{
     outputText(e);
  });
}

// function that listens to the filter click and transfers its value to the setfilter function
function addfilter(tagname){
  if(filters.includes(tagname)== false){
      filters.push(tagname);
      setfilter();
    }
}

var filtered;
// function that filters the data
function filteredOutput(filterShow){
  boxFrame.innerHTML = '';
  filtered = data.filter(item=> item.languages.includes(filterShow)||
  item.tools.includes(filterShow)||
  item.role.includes(filterShow)||
  item.level.includes(filterShow)
  )

  if(filtered.length > 0){
    filtered.forEach((e)=>{
      outputText(e);
   });
  }
}

// function that removes a particular filter option
function removefilter(data){
  var dataRemoved;
  data.parentElement.parentElement.style.display = 'none';
  dataRemoved = data.parentElement.parentElement.textContent;

  for(var i=0; i<filters.length; i++){
    if(filters[i] == dataRemoved){
      filters.splice(i,1);
    }
    if(filters[i] !== undefined){
      filteredOutput(filters[i]);
    }
    if(filters.length == 0){
      boxFrame.innerHTML = '';
      display();
    }
  } 
};

// function that clears all filter from the top_div
clear.addEventListener('click', ()=>{
  filters = [];
  filter.innerHTML ='';
  boxFrame.innerHTML = '';
  display();
});


// function handling the text displayed
function outputText(e){
  var boxes = document.createElement('div');
  boxes.classList.add('boxes', 'feature');

  var left = document.createElement('div');
  left.classList.add('left');

  var bio = document.createElement('div');
  bio.classList.add('bio');

  var first = document.createElement('div');
  first.classList.add('first');

  var img = document.createElement('img');
  img.src = e.logo;
  img.classList.add('profile')

  var companyName = document.createElement('p');
  companyName.classList.add('company');
  companyName.innerHTML = e.company;
    

  var role = document.createElement('div');
  role.classList.add('role');
  role.innerHTML = e.position;

  var second = document.createElement('div');
  second.classList.add('second');

  var day = document.createElement('p');
  day.innerHTML = e.postedAt;

  var contract = document.createElement('p');
  contract.innerHTML = e.contract;

  var location = document.createElement('p');
  location.innerHTML = e.location;

  var right = document.createElement('div');
  right.classList.add('right');

  var roles = document.createElement("p");
  roles.textContent = e.role;
  roles.setAttribute('onclick', "addfilter('"+e.role+"')");

  var level = document.createElement('p');
  level.setAttribute('onclick', "addfilter('"+e.level+"')");
  level.innerHTML = e.level;


  boxes.appendChild(left);
  left.appendChild(img);
  left.appendChild(bio);
  boxes.appendChild(right);


  bio.appendChild(first);
  first.appendChild(companyName);

  if(e.new ==true ){
    var newStatus = document.createElement('p');
    newStatus.innerHTML = 'New';
    newStatus.classList.add('new')    
    first.appendChild(newStatus);
  }

  if(e.featured == true ){
    var featuredStatus = document.createElement('p');
    featuredStatus.innerHTML = 'Featured';
    featuredStatus.classList.add('featured');
    boxes.classList.add('boxes1');
    first.appendChild(featuredStatus);
  }
    
    
  first.insertAdjacentElement('afterend', role);
  role.insertAdjacentElement('afterend', second);
  second.appendChild(day);
  second.appendChild(contract);
  second.appendChild(location);
  
  right.appendChild(roles);
  right.appendChild(level);

  e.languages.forEach((s)=>{
    var stack = document.createElement("p");
    stack.setAttribute('onclick', "addfilter('"+s+"')");
    stack.textContent = s;
    right.appendChild(stack);
  });

  e.tools.forEach((tool)=>{
    var tools = document.createElement("p");
    tools.setAttribute('onclick', "addfilter('"+tool+"')");
    tools.textContent = tool;
    right.appendChild(tools);
  });
  
  boxFrame.append(boxes);
}


// function displaying the text in the top-div and passing value to the filer function
function setfilter(){
  var filterShow = filters[filters.length -1];
  if(filterShow == undefined||filterShow.length <1){
    // do nothing
  }
  else{
  var filterValues = document.createElement('div');
  filterValues.classList.add('filterValues');

  var cross = document.createElement('div');
  cross.classList.add('cross');

  var value = document.createElement('p');
    value.textContent = filterShow;
  

  var img = document.createElement('img');
  img.src = 'images/icon-remove.svg';
  img.setAttribute('onclick', 'removefilter(this)')


  filter.appendChild(filterValues);
  filterValues.appendChild(value);
  filterValues.appendChild(cross);
  cross.appendChild(img);

  filter.appendChild(filterValues);
  filteredOutput(filterShow);
  };
};