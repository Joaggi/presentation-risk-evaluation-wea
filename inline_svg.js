// setTimeout(function () {
//     Reveal.getSlides().forEach((s) => {
        
//         let elements = document.querySelectorAll("object");

//         for(let i = 0; i< elements.length; i++){
//             let e = elements[i];
//             if (e.contentDocument){
//                 let cloneNode = e.contentDocument.documentElement.cloneNode(true);
//                 let parentElement = e.parentElement;
//                 parentElement.replaceChild(cloneNode, e);
//             }
//         };
        
//     });

//     // const objects = document.querySelectorAll('object');
//     // for(let i = 0; i< objects.length; i++){
//     //     const el = objects[i];
//     //     const imgID = el.getAttribute('id');
//     //     const imgClass = el.getAttribute('class');
//     //     const imgURL = el.getAttribute('src');
        
//     //     request({url: imgURL}).then((data) => {
//     //       const parser = new DOMParser();
//     //       const xmlDoc = parser.parseFromString(data, 'text/html');
//     //       let svg = xmlDoc.querySelector('svg');
    
//     //       if (typeof imgID !== 'undefined') {
//     //         svg.setAttribute('id', imgID);
//     //       }
    
//     //       if(typeof imgClass !== 'undefined') {
//     //         svg.setAttribute('class', imgClass + ' replaced-svg');
//     //       }
    
//     //       svg.removeAttribute('xmlns:a');
    
//     //       el.parentNode.replaceChild(svg, el);
//     //     })
//     //   };

// }, 3000);

 setTimeout(function () {
 $(document).ready(function() {
     $('img[src$=".svg"]').each(function() {
         var $img = jQuery(this);
         var imgURL = $img.attr('src');
         var attributes = $img.prop("attributes");

         $.get(imgURL, function(data) {
             // Get the SVG tag, ignore the rest
             var $svg = jQuery(data).find('svg');

             // Remove any invalid XML tags
             $svg = $svg.removeAttr('xmlns:a');

             // Loop through IMG attributes and apply on SVG
             $.each(attributes, function() {
                 $svg.attr(this.name, this.value);
             });

             // Replace IMG with SVG
             $img.replaceWith($svg);
         }, 'xml');
     });
 });
 }, 3000);
