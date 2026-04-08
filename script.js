document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
(function(){
  emailjs.init("gR57vWbIZSm9jkDXw");
})();

const form = document.getElementById("contact-form");
const btn = document.getElementById("send-btn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  btn.innerText = "Sending...";
btn.disabled = true;
  emailjs.sendForm("service_04jsux8", "template_vhhpa7k", this)
.then(function() {
    alert("Message sent successfully!");
    btn.innerText = "Send Message";
    btn.disabled = false;
})
.catch(function(error) {
    alert("Failed to send message");
    btn.innerText = "Send Message";
    btn.disabled = false;
    console.log("FULL ERROR:", error);
});

  form.reset();
});