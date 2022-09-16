export function TodoRow(todo) {

    const $todoUl = document.createElement("ul");
    $todoUl.setAttribute('id','toList')
    const $titleList = document.createElement("li");
    $titleList.setAttribute('class','item');
    $todoUl.appendChild(
        $titleList
    );
    if(todo.completed){
        $titleList.innerHTML=todo.title;
    }else
    {
        $titleList.innerHTML="<strike>" + todo.title + "</strike>";
    }
    $titleList.addEventListener('click',()=>{
        window.location.href= `pages/todos-details.html?id=${todo.id}`;
    });


    /*let lis=document.querySelector('ul li');
    lis.forEach((li)=>{
        li.addEventListener('click',()=>{
            $viewDetails.setAttribute("href", `pages/todos-details.html?id=${todo.id}`)})
            $actionsColumn.appendChild($viewDetails);
    });*/
    return $todoUl;
  }