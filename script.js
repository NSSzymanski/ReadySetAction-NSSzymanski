function main() {
  const bigClass = document.getElementsByClassName("big");
  const growMePara = document.getElementById("grow-me");
  const shrinkMePara = document.getElementById("shrink-me");

  growMePara.append(bigClass);

  shrinkMePara.removeChild(bigClass);

  const listItems = document.getElementsByClassName("list-item");

  console.log(listItems);

  document.getElementsByClassName("link").href = "https://www.example.com";

  const linkParagraph = document.getElementById("linkPara");
  element.innerHTML = " A link to somewhere";

  document.getElementById("hide-me").style.display = "none";

  document.getElementById("show-me").style.display = "block";
}
