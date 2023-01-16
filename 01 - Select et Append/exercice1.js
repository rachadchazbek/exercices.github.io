const h1 = d3.select("h1");
h1.text("")
h1.append("span").text(" Ceci est le début  d'un paragraphe :");

const p = d3.selectAll("p").nodes();
console.log(p);
p[3].remove();
p[5].remove();
