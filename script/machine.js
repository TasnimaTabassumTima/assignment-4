// Total count 
let totalCount = getElement('total-count');
const allCards = cards('all-cards');
totalCount.innerText = allCards;

let intCount = getElement('interview-count');
const allInterviewCards = cards('interview-parent');
intCount.innerText = allInterviewCards-1;

let rejectCount = getElement('rejected-count');
const allRejectedCards = cards('rejected-parent');
rejectCount.innerText = allRejectedCards-1;

// Get Element
function getElement(id){
    const element = document.getElementById(id);
    return element;
}
/* 
// Card Count
function cards(id){
    const allCards = document.getElementById(id);
    const cardCount = allCards.children.length; 
    return cardCount; 
}
 */
// 3 buttons toggle and section hidden
function toggle(id){
   /*  let countJobs = getElement('count');
    if(id === 'rejected-btn'){
        const allCards = cards('rejected-parent');
        countJobs.innerText = allCards;
    }
    else if(id === 'interview-btn'){
        const allCards = cards('interview-parent');
        countJobs.innerText = allCards;
    }
    else{
        const allCards = cards('all-cards');
        countJobs.innerText = allCards;
    } */
    // get 2 buttons
    const all = getElement('all-btn');
    const interview = getElement('interview-btn');
    const rejected = getElement('rejected-btn');
    
    // remove classes of all buttons
    all.classList.remove('btn-active', 'btn-error', 'border', 'border-3');
    interview.classList.remove('btn-active', 'btn-error', 'border', 'border-3');
    rejected.classList.remove('btn-active', 'btn-error', 'border', 'border-3');

    // all.classList.add('btn-active', 'btn-error');
    // interview.classList.add('btn-active', 'btn-error');
    // rejected.classList.add('btn-active', 'btn-error');

    // Add class on the clicked button
    const perform = getElement(id);
    perform.classList.add('btn-active', 'btn-error', 'border', 'border-3');

    // get 3 sections
    const allHidden = getElement('all');
    const interviewHidden = getElement('interview');
    const rejectHidden = getElement('rejected');

    // unclicked section hidden
    if(id == 'interview-btn'){
        allHidden.classList.add('hidden');
        interviewHidden.classList.remove('hidden');
        rejectHidden.classList.add('hidden');
    }
    else if(id == 'rejected-btn'){
        allHidden.classList.add('hidden');
        interviewHidden.classList.add('hidden');
        rejectHidden.classList.remove('hidden');
    }
    else{
        allHidden.classList.remove('hidden');
        interviewHidden.classList.add('hidden');
        rejectHidden.classList.add('hidden');
    }
}
/* 
// Find parent
function parent(id){
    const child = getElement(id);
    const parent = child.parentNode.parentNode;
    return parent;
}

// find status
function statusFun(interviewCard, status){
    const span = interviewCard.querySelector("span");
    if(span.innerText != 'INTERVIEW' && status === 'Interview'){
        // change interview count
        const interviewCards = cards('interview-parent');
        getElement('interview-count').innerText = interviewCards-1;
        // console.log(getElement('interview-count').innerText);
    }
    else if(span.innerText != 'REJECTED' && status ===  'Rejected'){
        // change interview count
        const rejectedCards = cards('rejected-parent');
        getElement('rejected-count').innerText = rejectedCards-1;
        // console.log(getElement('interview-count').innerText);
    }

    if(status === 'Interview'){
        span.innerText = 'INTERVIEW';
        span.classList.remove('border-3', 'border-red-600', 'text-red-600', 'bg-white')
        span.classList.add('border-3', 'border-green-600', 'text-green-600', 'bg-white')
    }
    else{
        span.innerText = 'REJECTED';
        span.classList.remove('border-3', 'border-green-600', 'text-green-600', 'bg-white')
        span.classList.add('border-3', 'border-red-600', 'text-red-600', 'bg-white')
    }
    
    
    // console.log(span.innerText);
}

// Interview section
function interview(id){
    // hide interview pages default content
    const contect1 = getElement('content1');
    contect1.classList.add('hidden');

    // get interview parent container
    const interviewContainer = getElement('interview-parent');

    // Get full card
    const interviewCard = parent(id);
    const copyCard = interviewCard.cloneNode(true);

    // push the card into parent container
    // console.log(copyCard.innerText);
    // console.log(interviewContainer.children[0].innerText);
    let flag = 0;
    for(let i = 0; i<interviewContainer.children.length; i++){
        if(copyCard.innerText === interviewContainer.children[i].innerText){
            flag+=1;
        }
    }
    if(flag === 0){
        interviewContainer.appendChild(copyCard);
    }


    // change status
    const status = statusFun(interviewCard, 'Interview');
    
}


// Reject section
function rejected(id){
    // hide interview pages default content
    const contect2 = getElement('content2');
    contect2.classList.add('hidden');

    // get interview parent container
    const rejectContainer = getElement('rejected-parent');

    // Get full card
    const rejectCard = parent(id);
    const copyCard = rejectCard.cloneNode(true);

    // push the card into parent container
    rejectContainer.appendChild(copyCard);

    // change status
    const status = statusFun(rejectCard, 'Rejected');

}
 */
const mainContainer =  document.querySelector('main');
console.log()
mainContainer.ad