const enterBtn = document.getElementById('enterBtn');

// Listeners
enterBtn.addEventListener('click', (login));

const user = [
     'io',
     'matteo',
     'federico',
     'giuseppe',
     'anna',
     'pietro',
     'martina',
     'emma',
     'tonio',
     'cinzia',
     'marco',
     'ernesto',
     'fred'
];

function login(e) {
     e.preventDefault();

     const userName = document.getElementById('operetor').value;

     console.log(userName);

     let invitato = "";

     for (let i = 0; i < user.length; i++) {
          if (user[i].toLowerCase() === userName.toLowerCase()) {
               invitato = user[i];
               break;
          }
     }
     if (invitato != "") {
          document.getElementById('message').innerHTML = `
          <div class="green"><h3>benvenuto!!</h3></div>
          `;
     }
     else {
          document.getElementById('message').innerHTML = `
          <div class="red"><h3> tu non puoi passaaaareeeeeeeeeeee!!!!</h3></div
          `;
     }
}
