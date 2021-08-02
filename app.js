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
            <form action="mailto:singhbrahmbind@gmail.com" method="POST" >
            <span>Drop a Message ;)</span>
                <input type="text" name="name" id="name" required autocapitalize="words" placeholder="Name">
                <input type="email" name="email" id="email" required placeholder="Email">
                <input id="phoneno" type="tel" name="phoneno" required placeholder="Phone No"/>
                <textarea name="message" id="message" cols="30" rows="3" placeholder="Message..."></textarea>
                <input type="submit">
            </form>
        </div>
    </div>`;
    div.style.animation = `magicAppear .5s`;
    body.append(div);
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click",function(){
        div.style.animation = `magicDisappear .5s`;
        div.remove();
    })
    contact.addEventListener("click",function(){
        div.style.animation = `magicDisappear .5s`;
        div.remove(); 
    })
})

let about = document.querySelectorAll(".nav-links li");
about[0].addEventListener("click",function(){
    let preModal = document.querySelector(".contact-modal");
    if(preModal!=null) return;
    let div = document.createElement("div");
    div.classList.add("contact-modal");
    div.innerHTML = `<div class="close-btn">
                        <span>[X]</span>
                    </div>
                    <div class="contact-container">
                    <div class="cola">
                        <div class="profile-pic"></div>
                        <div style="text-align: center; font-weight: 700; font-size: 20px;">Brahm Bind Singh</div>
                        <div style="text-align: center; font-weight: 400; font-size: 16px;">Full Stack Developer</div>
                        <ul class="professional-links">
                            <li>
                                <a href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div class="cola">
                            <div class="about-me-txt">
                                <span>Hi,</span>
                                <p>I'm a software engineer based in India, who enjoys building things. I have done 300+ DSA questions on various platforms like <a href="https://pepcoding.com/" target="_blank">Pepcoding</a>, <a href="https://leetcode.com/" target="_blank">Leetcode</a>, etc</p>
                                <br>
                                <p>
                                    In 2019, I worked in <a href="https://www.booksforall.org.in/">Guzarish Ngo</a> under the fellowship program by <a href = "https://www.yesbank.in/">Yes Bank</a> as a web developer and increased it's reach by 20%, now its helps people from all over the country to easily discover books at minimal costs.
                                </p>
                                <br>
                                <p>
                                    Don't hesitate to reach out by <a href="mailto:singhbrahmbind@gmail.com" target="_blank">email</a>. I'll be happy to talk!
                                </p>
                            </div>
                        </div>
                    </div>`;
    div.style.animation = `magicAppear .5s`;
    body.append(div);
    let closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click",function(){
        div.style.animation = `magicAppear .5s reverse`;
        div.remove();
    })
    about[0].addEventListener("click",function(){
        div.style.animation = `magicAppear .5s reverse`;
        div.remove(); 
    })

})

const navSlide = ()=>{
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click",function(){
        nav.classList.toggle("nav-active");
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade .5s ease forwards ${index/7+.3}s`
            }
        });
        burger.classList.toggle("toggle");
    });
    
}

navSlide();