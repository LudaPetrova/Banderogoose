
$(".goose-launch").click(function(){
  $("#modal-contacts").addClass("modal-active");
})

$(".close-btn").click(function(event){
  event.stopPropagation();
  $("#modal-contacts").removeClass("modal-active");
  $("#success").removeClass("modal-active");
})

const form = $("#contact-form");
form.submit(function(event){
    event.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(function(){
        $("#modal-contacts").removeClass("modal-active");
        setTimeout(function(){
          $("#success").addClass("modal-active");
        }, 700);
        setTimeout(function(){
          $("#success").removeClass("modal-active");
        }, 3000);
      })
      .catch((error) => console.log('Sending form failed'));
})
