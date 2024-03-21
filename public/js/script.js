const cardList = [
    {
        title: "Akita Inu Puppy",
        image: "images/puppy2.jpg",
        link: "About this cute puppy",
        description: "Akitas have webbed toes to help walk on snow. These webbed toes distribute their weight more effectively."
    },
    {
        title: "Corgi Puppy",
        image: "images/puppy3.jpg",
        link: "About this cute puppy",
        description: "Corgi means dwarf dog in Welsh. According to the Oxford English Dictionary, cor means dwarf and gi means dog."
    }
]

//function opens message when run
const clickMe = () => {
    alert("Thanks for clicking me. WOOF WOOF!")
}

//function captures entered form data and prints submitted data
//in console
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

//dynamic addition of content to cards
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend =
            '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="class-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';

        $("#card-section").append(itemToAppend)
    });
}

//loader functions for loading form on click of button 
$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(function () {
        $('#modal1').modal('open');
    });
    $('#formSubmit').click(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});






