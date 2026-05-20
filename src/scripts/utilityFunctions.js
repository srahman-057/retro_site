export function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleTimeString();
    document.querySelector('#datetime').textContent = currentDateTime;
  }

export function toggleShow() {
  var x = document.getElementById("mainDiv");
  if (x.style.visibility === "hidden") 
  {
    x.style.visibility = "visible";
  } 
  else 
  {
    x.style.visibility = "hidden";
  }
}