const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const cont = document.querySelector("#container");
for (let i = 1; i <= 500; i++) {
  const poki = document.createElement("img");
  poki.src = `${baseUrl}${i}.png`;
  poki.alt = `#${i}`;
  poki.addEventListener('click',()=>{
    //for (let y = 1; y<=i;y++) {
      alert(`Pokemon ke ${i}`); 
    //}
  })

  const pokemon = document.createElement("div");
  const nama = document.createElement("span");
    nama.innerText = `#${i}`;
    // nama.addEventListener('dragend',()=>{
    //   alert(`Pokemon ke ${i}`);
    //   nama.color='red'
    // })
    pokemon.appendChild(poki);
    pokemon.appendChild(nama);
  cont.appendChild(pokemon);
}
