
const form = document.querySelector("form");
const submitButton = document.querySelector(".send");


submitButton.addEventListener("click", function() {
    
  const surname = document.querySelector("#suruname").value;
  const name = document.querySelector("#name").value;
  const dob = document.querySelector("#date").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const city = document.querySelector("#city-select").value;
  const address = document.querySelector("#address").value;
  const languages = [];

  
  const checkboxes = document.querySelectorAll("input[name='lang']:checked");
  checkboxes.forEach((checkbox) => {
    languages.push(checkbox.value);
  });

  
  const tableRow = `
    <tr>
      <td>${surname}</td>
      <td>${name}</td>
      <td>${dob}</td>
      <td>${gender}</td>
      <td>${city}</td>
      <td>${address}</td>
      <td>${languages.join(", ")}</td>
    </tr>
  `;
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML += tableRow;
   form.reset();
   
});

document.querySelector('.send').onclick = function(){
  document.querySelector('table').style.display='block';
}
  





