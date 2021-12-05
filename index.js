
// document.addEventListener("DOMContentLoaded",() => {
//     const title = document.querySelectorAll('.js-accordion-title');
    
//     for (let i = 0; i < title.length; i++){
//       let titleEach = title[i];
//       let content = titleEach.nextElementSibling;
//       titleEach.addEventListener('click', () => {
//         titleEach.classList.toggle('is-active');
//         content.classList.toggle('is-open');
//       });
//     }
  
//   });



// $(function(){
//   $("#sales_staff_question1").clone().appendTo($("#sales_staff_question2"));
// });

// $(function(){
//   $("div div").on("click", function() {
//   　　$("#answer").clone().appendTo($("#sales_staff_question2"));
//   })
//   });

// document.getElementById("answer").addEventListener("click", function() {
//   var clone_before = document.getElementByName("answer");
//   var clone_after = clone_before.cloneNode(true);
//   clone_before.appendChild(clone_after);
// })

// window.onload = function(){
//   　　$('nav div').clone().insertAfter($('#fnav'));
// };
window.onload = function(){
  $('.answer').clone().appendTo('.sales_staff_question');
}

// window.onload = function(){
//   $('#answer1').remove();
// }