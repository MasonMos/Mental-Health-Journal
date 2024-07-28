const modal = document.querySelector('#modal');
const responseModal = document.getElementById("response-modal")
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');      

// Function to open modal
function openModalFunction(event) {
    event.preventDefault();
    modal.showModal();
}

function openResponseModal(event){
    event.preventDefault();
    const clickedElement = event.target;
    

    const closestAnchor = clickedElement.closest('.ag-courses-item_link');

    // Then find the .ag-courses-item_title within that anchor
    let promptText = closestAnchor.querySelector('.ag-courses-item_title').textContent;
    
    const modalTitle = responseModal.querySelector('h2');
    modalTitle.textContent = `${promptText}`;

    responseModal.showModal();
}

// Add event listener to "Publish a prompt" button
openModal.addEventListener('click', openModalFunction);

// Add event listeners to all elements with class "open-response"
document.querySelectorAll('.open-response').forEach(item => {
    item.addEventListener('click', openResponseModal);
});

// Function to close modal and add new prompt
closeModal.addEventListener('click', () => {
    modal.close();
    const question = document.getElementById("question").value;
    const newPrompt = `<div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link open-response">
                        <div class="ag-courses-item_bg"></div>
                
                        <div class="ag-courses-item_title">
                            ${question}
                        </div>
                
                        <div class="ag-courses-item_date-box">
                            Start:
                            <span class="ag-courses-item_date">
                            04.11.2022
                            </span>
                        </div>
                        </a>
                    </div>`;
    document.getElementById("grid-container").innerHTML += newPrompt;

    // Re-add event listeners to the newly created element
    document.querySelectorAll('.open-response').forEach(item => {
        item.addEventListener('click', openResponseModal);
    });
});
