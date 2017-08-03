window.onload = layoutAdjust

function layoutAdjust() {
    var img_containers = document.getElementsByClassName("img-container");
    var cw = img_containers[0].getBoundingClientRect().width;
    for ( var i = 0; i < img_containers.length; i++ ) {
        img_containers[i].style.height = cw + 'px';
    }
/*
    var post_imgs = document.getElementsByClassName("post-img");
    for ( var i = 0; i < post_imgs.length; i++ ) {
        var eh = post_imgs[i].height;
        console.log(eh, cw);
        if ( eh < cw ) {
            post_imgs[i].style.marginTop = (cw - eh)/2 + 'px';
        }
    }
*/
}
