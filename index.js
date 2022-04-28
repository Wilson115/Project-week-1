

let itemList = [];
let taskaddcount = 0;
let taskremovecount = 0;

function createItem () {

    let plusitem = document.getElementById('itemInput')
    if (plusitem.value === ''){
        alert('Please Add Task')
    } else {
    itemList.push(plusitem.value);
    plusitem.value = '';
    const newline = document.createElement('p');
    const deletebtn = document.createElement('i');
    const donebtn = document.createElement('i');

    taskaddcount +=1;
      for (let i = 0; i < itemList.length; i++){
          document.body.append(newline);
          newline.innerHTML = itemList[i];
          newline.setAttribute('class', 'item');
          document.getElementById('itemlist').appendChild(newline);

          newline.appendChild(donebtn);
          donebtn.setAttribute('id', 'donebtnid'+i);
          donebtn.setAttribute('class', 'donebtn');
          document.getElementById('donebtnid'+i).style.float = 'left';
          donebtn.innerHTML = '<i class="fa-solid fa-circle-check" style = "font-size: 100%">';

          newline.appendChild(deletebtn);
          deletebtn.setAttribute('id', 'btnid'+i);
          deletebtn.setAttribute('class', 'deletebtn');
          document.getElementById('btnid'+i).style.float = 'right';
          deletebtn.innerHTML = '<i class="fa-solid fa-trash-can" style = "font-size: 100%">';
        }

    document.getElementById(deletebtn.id).addEventListener('click', deleteItem);
      function deleteItem() {
          deletebtn.parentElement.remove();
          if (deletebtn.parentElement.classList.contains('checked')){
          } else {
          taskremovecount += 1;
          document.getElementById('taskno').innerHTML = taskaddcount- taskremovecount;                   
          }
        }

    document.getElementById(donebtn.id).addEventListener('click', doneItem);
        function doneItem() {
          if (donebtn.parentElement.classList.contains('checked')){
            donebtn.parentElement.classList.remove('checked');
            taskaddcount +=1;
            document.getElementById('taskno').innerHTML = taskaddcount- taskremovecount;
          } else {
          donebtn.parentElement.classList.add('checked');
          taskremovecount += 1;
          document.getElementById('taskno').innerHTML = taskaddcount- taskremovecount;                   
          }
        }

    document.getElementById('clearbtn').addEventListener('click', clearItem);
      function clearItem() {
        newline.remove(); 
        document.getElementById('taskno').innerHTML = 0;
        taskaddcount = 0;
        taskremovecount = 0;
      }

    document.getElementById('taskno').innerHTML = taskaddcount- taskremovecount;
    }
}
