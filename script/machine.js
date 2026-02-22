// console.log('machine')

// Delete
function delete(id){
    const deleteCard = document.getElementById(id);
    deleteCard.parentElement.parentElement.remove();
}