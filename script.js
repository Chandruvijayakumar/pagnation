const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function createPagination() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const itemsPerPage = 10;
  const container = document.getElementById("pagination-container");

  const paginationList = document.createElement("ul");
  paginationList.classList.add("pagination");

  Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => {
    const listItem = document.createElement("li");
    listItem.textContent = i + 1;
    listItem.addEventListener("click", () =>
      onPageClick(i + 1, data, itemsPerPage, paginationList)
    );
    paginationList.appendChild(listItem);
  });

  container.appendChild(paginationList);
  onPageClick(1, data, itemsPerPage, paginationList);
}

function onPageClick(pageNumber, data, itemsPerPage, paginationList) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  renderDataTable(data.slice(startIndex, endIndex));
  paginationList
    .querySelectorAll("li")
    .forEach((item, i) =>
      item.classList.toggle("active", i + 1 === pageNumber)
    );
}

function renderDataTable(data) {
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = data.reduce(
    (html, post) =>
      html +
      (
        <tr>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
        </tr>
      ),
    ""
  );
}

function goToFirstPage() {
  document.querySelector(".pagination li:first-child").click();
}
function goToPreviousPage() {
  document.querySelector(".pagination .active").previousElementSibling?.click();
}
function goToNextPage() {
  document.querySelector(".pagination .active").nextElementSibling?.click();
}
function goToLastPage() {
  document.querySelector(".pagination li:last-child").click();
}

createPagination();
