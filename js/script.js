$(document).ready(function(){

    let sidebar = document.querySelector('header');
    sidebar.classList.add('headernew');

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>100){
            $('.top').show();
        }
        else {
            $('.top').hide();
        }
    });

    //smooth scrolling
    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },500, 'linear');
    });


    let previewContainer = document.querySelector('.section-preview');
    let previewBox = previewContainer.querySelectorAll('.preview');
    
    document.querySelectorAll('.products-container .box').forEach(product =>{
        product.onclick = () =>{
            previewContainer.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBox.forEach(preview =>{
                let target = preview.getAttribute('data-target');
                if (name == target){
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBox.forEach(close=>{
        close.querySelector('.fa-times').onclick = ()=>{
            close.classList.remove('active');
            previewContainer.style.display='none';
        }
    })

    var types = new Typed(".auto-input", {
        strings: ["Ajay Babu Sappa", "a Software Engineer", "a Full Stack Developer", "a Java Developer"],
        typeSpeed:70,
        backSpeed:70,
        loop:true
      })

});