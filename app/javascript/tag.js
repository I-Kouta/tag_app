document.addEventListener("DOMContentLoaded", () => {
  const tagNameInput = document.querySelector("#post_form_tag_name");
  if (tagNameInput){
    const inputElement = document.getElementById("post_form_tag_name");
    inputElement.addEventListener("input", () => {
      const keyword = document.getElementById("post_form_tag_name").value;
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/search/?keyword=${keyword}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        const tagName = XHR.response.keyword;
        // タグを表示させる場所の取得
        const searchResult = document.getElementById("search-result");
        // 検索結果があるだけ繰り返す
        tagName.forEach((tag) => {
          // タグ名を格納するための要素を作成
          const childElement = document.createElement("div");
          // 生成した要素にclassとidを指定
          childElement.setAttribute("class", "child");
          childElement.setAttribute("id", tag.id);
          // 生成した要素の内容に検索結果のタグ名を指定
          childElement.innerHTML = tag.tag_name;
          searchResult.appendChild(childElement);
          const clickElement = document.getElementById(tag.id);
          clickElement.addEventListener("click", () => {
            document.getElementById("post_form_tag_name").value = clickElement.textContent;
            clickElement.remove();
          });
        });
      };
    });
  };
});