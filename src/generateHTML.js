const testTeam = [
     {
      id: '1',
      name: 'm',
      email: 'em',
      type: 'Manager',
      officeNum: '33'
    },
     {
      id: '2',
      name: 'engin',
      email: 'em',
      type: 'Engineer',
      gitHubName: 'rep'
    },
     {
      id: '3',
      name: 'inter1',
      email: 'em',
      type: 'Intern',
      school: 'school'
    },
     {
      id: '5',
      name: 'engin2',
      email: 'em',
      type: 'Engineer',
      gitHubName: 're'
    }
  ];

  
function generateHTML(team){
    // console.log(team);
    var html = `
    <!DOCTYPE html>
<html>
    <head>
        <title>Team Profile</title>
        <link rel='stylesheet' type='text/css' href='./style.css'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team Profile</h1>
        </header>
        <main>
            <div id="cards-container">
                `

                for(let i=0; i<team.length; i++){
                  var third_listItem = ""
                  if(team[i].type == "Manager") {
                    third_listItem = team[i].officeNum
                  } else if(team[i].type == "Engineer") {
                    third_listItem = `<a  href='https://github.com/${team[i].gitHubName}'>${team[i].gitHubName}</a>`
                  } else {
                    third_listItem = team[i].school 
                  }     
                                    
                  let html_card = ` 
                              <div id="card">
                                <div id="card-header">
                                    <ul>
                                        <li>${team[i].name}</li>
                                        <li>${team[i].type}</li>
                                    </ul>                                    
                                </div>
                                <div id="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">${team[i].id}</li>
                                        <li class="list-group-item"><a href=mailto:${team[i].email}>${team[i].email}</a></li>
                                        <li class="list-group-item">${third_listItem}</li> 
                                    </ul>
                                </div>
                              </div>`
                  html += html_card
                }
       let html_footer = `         
            </div>
        </main>
    </body>
</html>`;

html += html_footer
    return html;
}
console.log(generateHTML(testTeam));
module.exports = generateHTML;