import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";

const runPage = () => {
  makePage();
  makeHeader();
  makeFooter();
};

const makePage = () => {
  const id = window.location.search.split("?=")
  console.log(id[1]);

  let main = document.querySelector("main");

  let container = document.createElement("div");
  container.className = "container";

  let imageBox = document.createElement("div");
  imageBox.className = "postImageContainer"

  let postImage = document.createElement("img");
  postImage.className = "postImage"
  postImage.src = "https://francecentral1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=190421&inputFormat=jpg&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!L-n7G34RCUWwPMg__KkLnMRaK58CTq9Bmt2s3p-QYycbR2I2KbbISLJVZLUhA_4E%2Fitems%2F01DFUAIVEJPWGZ72FT3NBKMSFRR4WLAYTY%3Ftempauth%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJDb25zdW1lciBBcHA6IDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImFwcGlkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL215Lm1pY3Jvc29mdHBlcnNvbmFsY29udGVudC5jb21AOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MDAwMzAwMDA1N2E2NDhlNkBsaXZlLmNvbSIsImVuZHBvaW50dXJsIjoiQUF4Z2k5d2d1TTg1bXNGSldzdDlZOWRxU1pJeHJlNExZdk9ldkhrY0VUcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE2NCIsImV4cCI6IjE3MTQwNjgwMDAiLCJpcGFkZHIiOiI4OC44OC4xNDUuMjE3IiwiaXNsb29wYmFjayI6IlRydWUiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzE0MDQ2NDAwIiwicHVpZCI6IjAwMDMwMDAwNTdBNjQ4RTYiLCJzY3AiOiJhbGxzaXRlcy5mdWxsY29udHJvbCIsInNpZCI6IjgxNzc2MjgxNTA3MTQwMDUxNjYiLCJzaXRlaWQiOiJNV0ptWW1VNU1tWXRNVEUzWlMwME5UQTVMV0l3TTJNdFl6Z3pabVpqWVRrd1lqbGoiLCJ0aWQiOiI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJ0dCI6IjIiLCJ1cG4iOiJsYXVyYS5ibGVpQG91dGxvb2suY29tIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiJ9.ybHs7dEKz73mfjsh1YMTz4upGrAqYXhCZpYdy1tMkfI%26version%3DPublished&cb=63849552259&encodeFailures=1&width=1630&height=1223"

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "smallBrownButton position-right";

  let postTitle = document.createElement("h1");
  postTitle.innerText = "Post Title";
  postTitle.className = "headerOne";

  let textContainer = document.createElement("div");
  textContainer.className = "flex flex-col gap10 textBox"


  let authorContainer = document.createElement("div");
  authorContainer.className = "flex gap10"

  let authorText = document.createElement("p");
  authorText.innerText = "Author:";

  let author = document.createElement("p");
  author.innerText = "Author name";

  let publicationContainer = document.createElement("div");
  publicationContainer.className = "flex gap10"

  let publicationDateText = document.createElement("p");
  publicationDateText.innerText = "Publication date:";

  let publicationDate = document.createElement("p");
  publicationDate.innerText = "17.04.2024";

  let postText = document.createElement("p");
  postText.innerText =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ";

  main.appendChild(container);
  container.append(imageBox, editButton, postTitle, textContainer);
  imageBox.appendChild(postImage);
  textContainer.append(authorContainer, publicationContainer, postText);
  authorContainer.append(authorText, author);
  publicationContainer.append(publicationDateText, publicationDate);
};

runPage();
