let list = document.querySelectorAll(".socialLinks li");
let bg = document.querySelector(".socialMedia");

list.forEach(elements => {
    elements.addEventListener('mouseenter',function(e){
        let color = e.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
    elements.addEventListener('mouseleave',function(e){
        bg.style.backgroundColor = '#fff';
    })
})

let nav = document.querySelector("nav");
let navLinks = nav.querySelectorAll(".nav-links li a");
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener("click",function(e){
        for(let j=0;j<navLinks.length;j++){
            navLinks[j].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    })
}

let body = document.querySelector("body");
let contact = document.querySelector(".milo");
contact.addEventListener("click",function(){
    let preModal = document.querySelector(".contact-modal");
    if(preModal!=null) return;
    let div = document.createElement("div");
    div.classList.add("contact-modal");
    div.innerHTML = `<div class="close-btn">
    <span>[X]</span>
    </div>
    <div class="contact-container">
        <div class="col">
            <div class="left-cont">
                <h1>Get In Touch</h1>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4626177826303!2d77.11968431455992!3d28.64586379022945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036db29ec915%3A0xedef93b6a56b06fa!2sJ-6%2C%20Rajouri%20Garden%20Marg%2C%20Block%20J%2C%20Rajouri%20Garden%2C%20New%20Delhi%2C%20Delhi%20110027!5e0!3m2!1sen!2sin!4v1627502557993!5m2!1sen!2sin" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <ul class="form-icon">
                    <li class="instagram">
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="facebook">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="mail">
                        <a href=""><i class="fas fa-envelope"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col">
            <form action="/list.php" method="POST" >
            <span>Drop a Message ;)</span>
                <input type="text" name="name" id="name" required autocapitalize="words" placeholder="Name">
                <input type="email" name="email" id="email" required placeholder="Email">
                <input id="phoneno" type="tel" name="phoneno" required placeholder="Phone No"/>
                <textarea name="message" id="message" cols="30" rows="3" placeholder="Message..."></textarea>
                <input type="submit">
            </form>
        </div>
    </div>`;
    body.append(div);
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click",function(){
        div.remove();
    })
    contact.addEventListener("click",function(){
        div.remove(); 
    })
})

