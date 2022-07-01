$(document).ready(function() {

  // Progress bar
  let containerA = document.getElementById('circleA');
  
  let circleA = new ProgressBar.Circle(containerA, {

    color: '#FFF',
    strokeWidth: 8,
    duration: 1400,
    from: {color: '#AAA'},
    to: {color: '#640000'},

    step: function(state, circle) {

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 60);

      circle.setText(value);

    }

  });

  let containerB = document.getElementById('circleB');
  
  let circleB = new ProgressBar.Circle(containerB, {

    color: '#FFF',
    strokeWidth: 8,
    duration: 1600,
    from: {color: '#AAA'},
    to: {color: '#640000'},

    step: function(state, circle) {

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 254);

      circle.setText(value);

    }

  });

  let containerC = document.getElementById('circleC');
  
  let circleC = new ProgressBar.Circle(containerC, {

    color: '#FFF',
    strokeWidth: 8,
    duration: 1800,
    from: {color: '#AAA'},
    to: {color: '#640000'},

    step: function(state, circle) {

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 680);

      circle.setText(value);

    }

  });

  let containerD = document.getElementById('circleD');
  
  let circleD = new ProgressBar.Circle(containerD, {

    color: '#FFF',
    strokeWidth: 8,
    duration: 2000,
    from: {color: '#AAA'},
    to: {color: '#640000'},

    step: function(state, circle) {

      circle.path.setAttribute('stroke', state.color);

      let value = Math.round(circle.value() * 840);

      circle.setText(value);

    }

  });

  // Iniciando o loader quando o usario chega no elemento

  let dataAreaOffset = $('#data-area').offset();
  let stop = 0;

  $(window).scroll(function(e) {

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500) && stop == 0);{


      circleD.animate(1.0);
      circleC.animate(1.0);
      circleB.animate(1.0);
      circleA.animate(1.0);

      stop = 1;

    }

  

  });
  // Parallax
  setTimeout(function(){

    $('#data-area').parallax({imageSrc: 'img/background-parallax.jpg'});

    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

  }, 250);

  //filtro dos equipamentos

  $('.filter-btn').on('click', function(){

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'aerobicos-btn') {
      eachBoxes('aerobicos', boxes)
    } else if(type == 'superiores-btn') {
      eachBoxes('superiores', boxes);
    } else if(type == 'inferiores-btn') {
      eachBoxes('inferiores', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all'){
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

});