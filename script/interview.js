document.getElementById('interview-btn').addEventListener('click', function(){
    // const interviewCardParent = getElement('interview-parent');
    // if (interviewCardParent.children.length === 0) {
    //     console.log("Container is empty");
    // } else {
    //     console.log("Container has some elements");
    // }
    // Total count 
    let jobCount = getElement('count');
    const allCards = cards('all-cards');
    totalCount.innerText = allCards;
    totalCount2.innerText = allCards;   
})