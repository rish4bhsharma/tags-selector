// first get the value which are enterd in the input box

// using dom

document.getElementById("inputtag").addEventListener('keyup' , 
function(event){
    if(event.key === 'Enter'){
        addtag(this.value.trim() ); // to pass the clean value to function 
        this.value = '' ; // to clear the input field ;
    }
});

document.getElementsByTagName("button").addEventListener('click' , 
function(){
        addtag(this.value.trim() ); // to pass the clean value to function 
        this.value = '' ; // to clear the input field ;
});

function addtag(newtag){
    if(newtag !==''){

        // first select under which container we have to add tags
        const tagbox = document.getElementById("tagContainer");

        // now create a inner div in the selected tag
        const newelement = document.createElement('div');

        // now add class to the new tag
        newelement.className = 'tag'
        newelement.textContent = newtag ;

        // adding remove button 

        const removeButton = document.createElement('span');
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', function() {
            tagbox.removeChild(newelement);
    });
    // adding the new element in the selected container
    newelement.appendChild(removeButton);
    tagbox.appendChild(newelement);
    }
}