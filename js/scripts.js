document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".background-video");
  video.play();
});

var estadoForward;
var estadoBack;

var estado;

// Almacenar funciones en un objeto para acceso dinámico
const pasos = {
  paso0: paso0,
  paso1: paso0_01,
  paso2: paso0_02,
  paso3: paso1,
  paso4: paso1_1,
  paso5: paso1_2,
  paso6: paso1_3,
  paso7: paso1_4,
  paso8: paso2,
  paso9: paso2_1,
  paso10: paso2_2,
  paso11: paso2_3,
  paso12: paso2_4,
  paso13: paso2_5,
  paso14: paso3,
  paso15: paso3_1,
  paso16: paso3_2,
  paso17: paso3_3,
  paso18: paso3_4,
  paso19: paso4,
  paso20: paso4_1,
  paso21: paso4_2,
  paso22: paso4_3,
  paso23: paso4_4,
  paso24: paso5,
  paso25: paso5_1,
  paso26: paso5_2,
  paso27: paso5_3,
  paso28: paso5_4,
  paso29: paso5_5,
  paso30: paso6,
  paso31: paso6_1,
  paso32: paso6_2,
  paso33: paso6_3,
  paso34: paso6_4,
  paso35: paso6_5,
  paso36: paso6_6,
  paso37: paso6_7,
  paso38: paso7,
  paso39: paso7_1,
  paso40: paso7_2,
  paso41: paso8,
  paso42: paso8_1,
  paso43: paso9,
  paso44: paso9_1,
  paso45: paso9_2,
  paso46: paso9_3,
  paso47: paso9_4,
  paso48: paso9_5,
  paso49: paso10,
  paso50: paso10_1,
  paso51: paso10_2,
  paso52: paso10_3,
  paso53: paso10_4,
  paso54: paso10_5,
};

// Función para actualizar la barra de progreso
function progress(stepNum) {
  // Obtener todos los elementos con la clase 'step'
  let els = document.getElementsByClassName("step");
  let steps = [];

  // Convertir la colección de elementos en un array y agregar un listener a cada paso
  Array.prototype.forEach.call(els, (e) => {
    steps.push(e);
  });

  // Actualizar la barra de progreso
  let p = stepNum * 10; // 25% de progreso por cada paso (0, 1, 2, 3, 4, 5, 6)
  if (stepNum == 11) {
    document.getElementsByClassName("percent")[0].style.width = `98%`;
  } else {
    document.getElementsByClassName("percent")[0].style.width = `${p}%`;
  }

  // Cambiar la clase de los pasos según el número actual
  steps.forEach((e) => {
    if (e.id == stepNum) {
      e.classList.add("selected");
      e.classList.remove("completed");
    }
    if (e.id < stepNum) {
      e.classList.add("completed");
    }
    if (e.id > stepNum) {
      e.classList.remove("selected", "completed");
    }
  });
}
// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("0").addEventListener("click", function () {
  ocultarPantallas();
  progress(0);
  paso0();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("1").addEventListener("click", function () {
  ocultarPantallas();
  progress(1);
  paso1();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("2").addEventListener("click", function () {
  ocultarPantallas();
  progress(2);
  paso2();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("3").addEventListener("click", function () {
  ocultarPantallas();
  progress(3);
  paso3();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("4").addEventListener("click", function () {
  ocultarPantallas();
  progress(4);
  paso4();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("5").addEventListener("click", function () {
  ocultarPantallas();
  progress(5);
  paso5();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("6").addEventListener("click", function () {
  ocultarPantallas();
  progress(6);
  paso6();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("7").addEventListener("click", function () {
  ocultarPantallas();
  progress(7);
  paso7();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("8").addEventListener("click", function () {
  ocultarPantallas();
  progress(8);
  paso8();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("9").addEventListener("click", function () {
  ocultarPantallas();
  progress(9);
  paso9();
});

// Añadir un event listener al último paso para que al hacer clic muestre el progreso
document.getElementById("10").addEventListener("click", function () {
  ocultarPantallas();
  progress(10);
  paso10();
});
// ***********************************************************************************************

// Funcion para ocultar las pantallas

function ocultarPantallas() {
  // Obtener todos los elementos que tienen la clase 'screen'
  let screens = document.querySelectorAll(".screen");

  // Recorrer cada elemento y agregar la clase 'hidden' si no la tiene
  screens.forEach((screen) => {
    if (!screen.classList.contains("hidden")) {
      screen.classList.add("hidden");
    }
  });
}

// Funcion para parar los videos

// Función para pausar todos los videos y reiniciarlos
function pauseAndResetVideos() {
  // Selecciona todos los videos de la página
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    const videobg = document.querySelector(".background-video");
    if (video == videobg) {
    } else {
      video.pause(); // Pausa el video
      video.currentTime = 0; // Reinicia el video al inicio
    }
  });

  const audios = document.querySelectorAll("audio"); // Selecciona todos los elementos de audio

  audios.forEach((audio) => {
    const audio_fondo = document.getElementById("audio_fondo");
    if (audio == audio_fondo) {
    } else {
      audio.pause(); // Pausa el audio
      audio.currentTime = 0; // Reinicia el audio desde el principio
    }
  });
}

// Contador

function contador(texto) {
  const div = document.getElementById("contador");

  // Verifica si el div tiene contenido
  if (div.textContent.trim() !== "") {
    // Borra el contenido
    div.textContent = "";
  }

  // Añade el nuevo texto
  div.textContent = texto;

  // Hace aparecer el div
  div.style.display = "flex"; // Lo muestra
}

function ocultar_contador() {
  const div = document.getElementById("contador");

  // Hace aparecer el div
  div.style.display = "none"; // Lo muestra
}

// ***********************************************************************************************

const backgroundAudio = document.getElementById("audio_fondo");
const muteButton = document.getElementById("mute-button");
const muteIcon = document.getElementById("mute-icon");

// Cambiar entre mute/unmute al presionar el botón
muteButton.addEventListener("click", () => {
  if (backgroundAudio.muted) {
    backgroundAudio.muted = false;
    muteIcon.src = "img/unmute-icon.png"; // Cambia al icono de no muteado
  } else {
    backgroundAudio.muted = true;
    muteIcon.src = "img/mute-icon.png"; // Cambia al icono de muteado
  }

  // Añade la clase para la animación y la elimina después de un corto tiempo
  muteIcon.classList.add("change");
  setTimeout(() => muteIcon.classList.remove("change"), 300); // Duración de la animación
});

const forward = document.getElementById("forward");
const back = document.getElementById("back");

forward.addEventListener("click", () => {
  estadoForward();
});

back.addEventListener("click", () => {
  estadoBack();
});

// ***********************************************************************************************

paso0();

function paso0() {
  ocultar_contador();
  pauseAndResetVideos();
  document.getElementById("start-screen").classList.remove("hidden");
  document.getElementById("video-screen-01").classList.add("hidden");
  // Inicializa el progreso
  progress(0);

  // Manejador para iniciar el curso
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      document.getElementById("background-image").classList.add("hidden");
      const muteButton = document
        .getElementById("mute-button")
        .classList.remove("hidden");
      const movingContainer = document
        .getElementById("container-moving")
        .classList.remove("hidden");
      const forward = document
        .getElementById("forward")
        .classList.remove("hidden");
      const back = document.getElementById("back").classList.remove("hidden");
      const audio_fondo = document.getElementById("audio_fondo");
      audio_fondo.muted = false; // Desactiva el silencio
      audio_fondo.volume = 0.02;
      audio_fondo.play(); // Reproduce el audio con sonido
      pauseAndResetVideos();
      progress(1);
      paso0_01();
    });
}

function paso0_01() {
  estado = 1;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado}`];
  ocultar_contador();
  pauseAndResetVideos();
  // Oculta la pantalla de inicio y muestra el video
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("video-screen-01").classList.remove("hidden");
  document.getElementById("interactive-screen-01").classList.add("hidden");
  const video01 = document.getElementById("course-video-01");
  video01.play();

  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  video01.addEventListener("ended", function () {
    paso0_02();
  });
}

function paso0_02() {
  estado = 2;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();
  document.getElementById("video-screen-01").classList.add("hidden");
  document.getElementById("interactive-screen-01").classList.remove("hidden");
  document.getElementById("video-screen-02").classList.add("hidden");

  const audioQuestion01 = document.getElementById("audioQuestion01");
  // Reproducción del audio con el volumen al 70%
  audioQuestion01.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion01.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 01
  const optionButtons01 = document.querySelectorAll(".option-button-01");
  console.log(optionButtons01);

  optionButtons01.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion01.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta01 = document.getElementById("audioRespuesta01");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta01.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta01.play(); // Reproducir el audio

      audioRespuesta01.addEventListener("ended", function () {
        button.classList.remove("green-button");
        button.classList.remove("hidden");
        paso1();
      });
    });
  });
}

function paso1() {
  progress(2);
  ocultar_contador();
  pauseAndResetVideos();

  estado = 3;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();

  // Oculta la parte interactiva 01 y muestra el video 02
  document.getElementById("interactive-screen-01").classList.add("hidden");
  document.getElementById("video-screen-02").classList.remove("hidden");
  document.getElementById("interactive-screen-02").classList.add("hidden");

  // Inicia la reproducción del video 02
  const video02 = document.getElementById("course-video-02");
  video02.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video02.addEventListener("ended", function () {
    paso1_1();
  });
}

function paso1_1() {
  estado = 4;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("video-screen-02").classList.add("hidden");
  document.getElementById("interactive-screen-03").classList.add("hidden");

  pauseAndResetVideos();

  contador("1/4");

  document.getElementById("interactive-screen-02").classList.remove("hidden");

  const audioQuestion02 = document.getElementById("audioQuestion02");
  // Reproducción del audio con el volumen al 70%
  audioQuestion02.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion02.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons02 = document.querySelectorAll(".option-button-02");

  optionButtons02.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion02.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta02 = document.getElementById("audioRespuesta02");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta02.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta02.play(); // Reproducir el audio

      audioRespuesta02.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso1_2();
      });
    });
  });
}

function paso1_2() {
  estado = 5;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("interactive-screen-02").classList.add("hidden");
  document.getElementById("interactive-screen-04").classList.add("hidden");
  ocultar_contador();

  pauseAndResetVideos();
  // Actualiza la barra de progreso al 80% al finalizar el segundo video
  contador("2/4");
  document.getElementById("interactive-screen-03").classList.remove("hidden");

  const audioQuestion03 = document.getElementById("audioQuestion03");
  // Reproducción del audio con el volumen al 70%
  audioQuestion03.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion03.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons03 = document.querySelectorAll(".option-button-03");

  optionButtons03.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion03.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      button.classList.remove("button-opciones-azul");
      button.classList.add("button-sin-hover");

      if (opciones_03 == 2) {
        const audioRespuesta03 = document.getElementById("audioRespuesta03");
        // Reproducción del audio con el volumen al 70%
        audioRespuesta03.volume = 0.5;
        pauseAndResetVideos();
        audioRespuesta03.play(); // Reproducir el audio

        audioRespuesta03.addEventListener("ended", function () {
          optionButtons03.forEach(function (button_selec) {
            button_selec.classList.remove("button-sin-hover");
            button_selec.classList.add("button-opciones-azul");
          });
          paso1_04();
        });
      } else {
        opciones_03 = opciones_03 + 1;
      }
    });
  });
}

let opciones_03 = 0;

function paso1_3() {
  estado = 6;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  opciones_03 = 0;

  pauseAndResetVideos();
  ocultar_contador();
  contador("3/4");
  document.getElementById("interactive-screen-03").classList.add("hidden");
  document.getElementById("interactive-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-04").classList.remove("hidden");

  const audioQuestion04 = document.getElementById("audioQuestion04");
  // Reproducción del audio con el volumen al 70%
  audioQuestion04.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion04.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons04 = document.querySelectorAll(".option-button-04");

  optionButtons04.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion04.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta04 = document.getElementById("audioRespuesta04");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta04.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta04.play(); // Reproducir el audio

      audioRespuesta04.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso1_05();
      });
    });
  });
}

function paso1_4() {
  estado = 7;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  ocultar_contador();
  contador("4/4");
  pauseAndResetVideos();

  document.getElementById("interactive-screen-04").classList.add("hidden");
  document.getElementById("interactive-screen-05").classList.remove("hidden");
  document.getElementById("video-screen-03").classList.add("hidden");

  const audioQuestion05 = document.getElementById("audioQuestion05");
  // Reproducción del audio con el volumen al 70%
  audioQuestion05.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion05.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons05 = document.querySelectorAll(".option-button-05");

  optionButtons05.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion05.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta05 = document.getElementById("audioRespuesta05");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta05.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta05.play(); // Reproducir el audio

      audioRespuesta05.addEventListener("ended", function () {
        button.classList.remove("green-button");
        pauseAndResetVideos();
        paso2();
      });
    });
  });
}

function paso2() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(3);
  pauseAndResetVideos();
  ocultar_contador();

  estado = 8;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  // Oculta la parte interactiva 01 y muestra el video 02
  document.getElementById("interactive-screen-05").classList.add("hidden");
  document.getElementById("video-screen-03").classList.remove("hidden");
  document.getElementById("interactive-screen-06").classList.add("hidden");

  // Inicia la reproducción del video 02
  const video03 = document.getElementById("course-video-03");
  video03.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video03.addEventListener("ended", function () {
    paso2_1();
  });
}

function paso2_1() {
  estado = 9;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("video-screen-03").classList.add("hidden");
  document.getElementById("interactive-screen-07").classList.add("hidden");
  pauseAndResetVideos();

  document.getElementById("interactive-screen-06").classList.remove("hidden");

  const audioQuestion06 = document.getElementById("audioQuestion06");
  // Reproducción del audio con el volumen al 70%
  audioQuestion06.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion06.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 06
  const optionButtons06 = document.querySelectorAll(".option-button-06");

  optionButtons06.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion06.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta06 = document.getElementById("audioRespuesta06");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta06.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta06.play(); // Reproducir el audio

      audioRespuesta06.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso2_2();
      });
    });
  });
}

function paso2_2() {
  estado = 10;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  pauseAndResetVideos();

  document.getElementById("interactive-screen-06").classList.add("hidden");
  document.getElementById("interactive-screen-08").classList.add("hidden");

  document.getElementById("interactive-screen-07").classList.remove("hidden");

  const audioQuestion07 = document.getElementById("audioQuestion07");
  // Reproducción del audio con el volumen al 70%
  audioQuestion07.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion07.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons07 = document.querySelectorAll(".option-button-07");

  optionButtons07.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion07.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta07 = document.getElementById("audioRespuesta07");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta07.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta07.play(); // Reproducir el audio

      audioRespuesta07.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso2_3();
      });
    });
  });
}

function paso2_3() {
  estado = 11;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  pauseAndResetVideos();

  document.getElementById("interactive-screen-07").classList.add("hidden");
  document.getElementById("interactive-screen-09").classList.add("hidden");

  document.getElementById("interactive-screen-08").classList.remove("hidden");

  const audioQuestion08 = document.getElementById("audioQuestion08");
  // Reproducción del audio con el volumen al 70%
  audioQuestion08.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion08.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons08 = document.querySelectorAll(".option-button-08");

  optionButtons08.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion08.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta08 = document.getElementById("audioRespuesta08");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta08.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta08.play(); // Reproducir el audio

      audioRespuesta08.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso2_4();
      });
    });
  });
}

function paso2_4() {
  estado = 12;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("interactive-screen-08").classList.add("hidden");
  document.getElementById("interactive-screen-10").classList.add("hidden");

  document.getElementById("interactive-screen-09").classList.remove("hidden");
  document.getElementById("video-screen-04").classList.add("hidden");

  const audioQuestion09 = document.getElementById("audioQuestion09");
  // Reproducción del audio con el volumen al 70%
  audioQuestion09.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion09.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons09 = document.querySelectorAll(".option-button-09");

  optionButtons09.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion09.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta09 = document.getElementById("audioRespuesta09");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta09.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta09.play(); // Reproducir el audio

      audioRespuesta09.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso2_5();
      });
    });
  });
}

function paso2_5() {
  estado = 13;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.add("hidden");

  pauseAndResetVideos();

  // Oculta la parte interactiva 01 y muestra el video 02
  document.getElementById("interactive-screen-09").classList.add("hidden");
  document.getElementById("video-screen-04").classList.remove("hidden");

  // Inicia la reproducción del video 02
  const video04 = document.getElementById("course-video-04");
  video04.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video04.addEventListener("ended", function () {
    document.getElementById("video-screen-04").classList.add("hidden");
    pauseAndResetVideos();
    paso3();
  });
}

// Selecciona el div por su ID
const titulo_caja_texto = document.getElementById("titulo-caja-texto");
const pregunta_caja_texto = document.getElementById("pregunta-caja-texto");
const btn_anterior_10_2 = document.getElementById("btn_anterior_10_2");
const btn_anterior_10_3 = document.getElementById("btn_anterior_10_3");
const btn_anterior_10_4 = document.getElementById("btn_anterior_10_4");
const btn_next_10_1 = document.getElementById("btn_next_10_1");
const btn_next_10_2 = document.getElementById("btn_next_10_2");
const btn_next_10_3 = document.getElementById("btn_next_10_3");
const btn_next_10_4 = document.getElementById("btn_next_10_4");

function ocultar_botones_paso6() {
  btn_anterior_10_2.style.display = "none";
  btn_anterior_10_3.style.display = "none";
  btn_anterior_10_4.style.display = "none";
  btn_next_10_1.style.display = "none";
  btn_next_10_2.style.display = "none";
  btn_next_10_3.style.display = "none";
  btn_next_10_4.style.display = "none";
}

function paso3() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  estado = 14;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  progress(4);

  document.getElementById("video-screen-05").classList.remove("hidden");
  document.getElementById("interactive-screen-10").classList.add("hidden");
  document.getElementById("interactive-screen-06").classList.add("hidden");
  document.getElementById("video-screen-04").classList.add("hidden");
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.remove("hidden");
  document.getElementById("interactive-screen-10").classList.add("hidden");
  ocultar_botones_paso6();

  // Inicia la reproducción del video 05
  const video05 = document.getElementById("course-video-05");
  video05.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video05.addEventListener("ended", function () {
    document.getElementById("video-screen-05").classList.add("hidden");
    pauseAndResetVideos();
    paso3_1();
  });
}

function paso3_1() {
  estado = 15;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-06").classList.add("hidden");
  ocultar_botones_paso6();

  var textarea = document.getElementById("text_area");
  // Borra el contenido del textarea
  textarea.value = "";
  pauseAndResetVideos();
  contador("1/4");
  document.getElementById("interactive-screen-10").classList.remove("hidden");

  const audioQuestion10_01 = document.getElementById("audioQuestion10_01");
  // Reproducción del audio con el volumen al 70%
  audioQuestion10_01.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion10_01.play(); // Reproducir el audio

  const div = document.getElementById("cuadro_texto");
  // Hace aparecer el div
  div.style.display = "block"; // Lo muestra

  // Elimina todo el contenido del div
  titulo_caja_texto.innerHTML = "";
  pregunta_caja_texto.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto.innerHTML = "1. Identifica la situación real";
  pregunta_caja_texto.innerHTML =
    "¿Quiénes están involucrados, situación exacta, dónde y cuándo y número de veces que ocurrió?";

  ocultar_botones_paso6();
  btn_next_10_1.style.display = "block"; // Lo muestra

  btn_next_10_1.addEventListener("click", function () {
    paso3_2();
  });
}

function paso3_2() {
  estado = 16;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-10").classList.remove("hidden");
  ocultar_botones_paso6();
  var textarea = document.getElementById("text_area");
  // Borra el contenido del textarea
  textarea.value = "";
  contador("2/4");

  const audioQuestion10_02 = document.getElementById("audioQuestion10_02");
  // Reproducción del audio con el volumen al 70%
  audioQuestion10_02.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion10_02.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto.innerHTML = "";
  pregunta_caja_texto.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto.innerHTML = "2. Identifica el objetivo";
  pregunta_caja_texto.innerHTML =
    "¿En qué aspecto se va a centrar el proceso de feedback? Y en una sola frase qué te gustaría lograr?";

  ocultar_botones_paso6();
  btn_anterior_10_2.style.display = "block"; // Lo muestra
  btn_next_10_2.style.display = "block"; // Lo muestra

  btn_anterior_10_2.addEventListener("click", function () {
    paso3_1();
  });

  btn_next_10_2.addEventListener("click", function () {
    paso3_3();
  });
}

function paso3_3() {
  estado = 17;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-10").classList.remove("hidden");
  ocultar_botones_paso6();
  var textarea = document.getElementById("text_area");
  // Borra el contenido del textarea
  textarea.value = "";
  contador("3/4");

  const audioQuestion10_03 = document.getElementById("audioQuestion10_03");
  // Reproducción del audio con el volumen al 70%
  audioQuestion10_03.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion10_03.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto.innerHTML = "";
  pregunta_caja_texto.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto.innerHTML = "3. Sustenta el feedback";
  pregunta_caja_texto.innerHTML = "¿En qué sustentas tu retroalimentación?";

  ocultar_botones_paso6();
  btn_anterior_10_3.style.display = "block"; // Lo muestra
  btn_next_10_3.style.display = "block"; // Lo muestra

  btn_anterior_10_3.addEventListener("click", function () {
    paso3_2();
  });

  btn_next_10_3.addEventListener("click", function () {
    paso3_4();
  });
}

function paso3_4() {
  estado = 18;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-10").classList.remove("hidden");
  document.getElementById("video-screen-06").classList.add("hidden");
  ocultar_botones_paso6();
  var textarea = document.getElementById("text_area");
  // Borra el contenido del textarea
  textarea.value = "";
  contador("4/4");

  const audioQuestion10_04 = document.getElementById("audioQuestion10_04");
  // Reproducción del audio con el volumen al 70%
  audioQuestion10_04.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion10_04.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto.innerHTML = "";
  pregunta_caja_texto.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto.innerHTML = "4. Genera el plan";
  pregunta_caja_texto.innerHTML = "¿Cuándo y dónde?";

  ocultar_botones_paso6();
  btn_anterior_10_4.style.display = "block"; // Lo muestra
  btn_next_10_4.style.display = "block"; // Lo muestra

  btn_anterior_10_4.addEventListener("click", function () {
    paso3_3();
  });

  btn_next_10_4.addEventListener("click", function () {
    ocultar_contador();
    document.getElementById("interactive-screen-10").classList.add("hidden");
    paso4();
  });
}

function paso4() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(5);
  estado = 19;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-10").classList.add("hidden");
  document.getElementById("interactive-screen-11").classList.add("hidden");
  document.getElementById("video-screen-06").classList.remove("hidden");
  ocultar_botones_paso4();
  ocultar_botones_paso6();

  ocultar_contador();
  pauseAndResetVideos();

  // Inicia la reproducción del video 06
  const video06 = document.getElementById("course-video-06");
  video06.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video06.addEventListener("ended", function () {
    document.getElementById("video-screen-06").classList.add("hidden");
    pauseAndResetVideos();
    paso4_1();
  });
}

const titulo_caja_texto_11 = document.getElementById("titulo-caja-texto_11");
const pregunta_caja_texto_11 = document.getElementById(
  "pregunta-caja-texto_11"
);
const btn_anterior_11_2 = document.getElementById("btn_anterior_11_2");
const btn_anterior_11_3 = document.getElementById("btn_anterior_11_3");
const btn_anterior_11_4 = document.getElementById("btn_anterior_11_4");
const btn_next_11_1 = document.getElementById("btn_next_11_1");
const btn_next_11_2 = document.getElementById("btn_next_11_2");
const btn_next_11_3 = document.getElementById("btn_next_11_3");
const btn_next_11_4 = document.getElementById("btn_next_11_4");

function ocultar_botones_paso4() {
  btn_anterior_11_2.style.display = "none";
  btn_anterior_11_3.style.display = "none";
  btn_anterior_11_4.style.display = "none";
  btn_next_11_1.style.display = "none";
  btn_next_11_2.style.display = "none";
  btn_next_11_3.style.display = "none";
  btn_next_11_4.style.display = "none";
}

function paso4_1() {
  estado = 20;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-06").classList.add("hidden");
  pauseAndResetVideos();
  var textarea_11 = document.getElementById("text_area_11");
  // Borra el contenido del textarea
  textarea_11.value = "";
  pauseAndResetVideos();
  contador("1/4");
  document.getElementById("interactive-screen-11").classList.remove("hidden");

  const audioQuestion11_01 = document.getElementById("audioQuestion11_01");
  // Reproducción del audio con el volumen al 70%
  audioQuestion11_01.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion11_01.play(); // Reproducir el audio

  const div_11 = document.getElementById("cuadro_texto_11");
  // Hace aparecer el div
  div_11.style.display = "block"; // Lo muestra

  // Elimina todo el contenido del div
  titulo_caja_texto_11.innerHTML = "";
  pregunta_caja_texto_11.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_11.innerHTML = "a. ¿Cómo describimos el comportamiento?";
  pregunta_caja_texto_11.innerHTML = "";

  ocultar_botones_paso4();
  btn_next_11_1.style.display = "block"; // Lo muestra

  btn_next_11_1.addEventListener("click", function () {
    paso4_2();
  });
}

function paso4_2() {
  estado = 21;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  var textarea_11 = document.getElementById("text_area_11");
  // Borra el contenido del textarea
  textarea_11.value = "";
  contador("2/4");

  const audioQuestion11_02 = document.getElementById("audioQuestion11_02");
  // Reproducción del audio con el volumen al 70%
  audioQuestion11_02.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion11_02.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_11.innerHTML = "";
  pregunta_caja_texto_11.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_11.innerHTML = "b. ¿Cómo te afectó la acción?";
  pregunta_caja_texto_11.innerHTML = "";

  ocultar_botones_paso4();
  btn_anterior_11_2.style.display = "block"; // Lo muestra
  btn_next_11_2.style.display = "block"; // Lo muestra

  btn_anterior_11_2.addEventListener("click", function () {
    paso4_1();
  });

  btn_next_11_2.addEventListener("click", function () {
    paso4_3();
  });
}

function paso4_3() {
  estado = 22;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  var textarea_11 = document.getElementById("text_area_11");
  // Borra el contenido del textarea
  textarea_11.value = "";
  contador("3/4");

  const audioQuestion11_03 = document.getElementById("audioQuestion11_03");
  // Reproducción del audio con el volumen al 70%
  audioQuestion11_03.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion11_03.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_11.innerHTML = "";
  pregunta_caja_texto_11.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_11.innerHTML =
    "c. ¿Preguntaste si te  entendieron  o comprendieron?";
  pregunta_caja_texto_11.innerHTML = "";

  ocultar_botones_paso4();
  btn_anterior_11_3.style.display = "block"; // Lo muestra
  btn_next_11_3.style.display = "block"; // Lo muestra

  btn_anterior_11_3.addEventListener("click", function () {
    paso4_2();
  });

  btn_next_11_3.addEventListener("click", function () {
    paso4_4();
  });
}

function paso4_4() {
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("interactive-screen-11").classList.remove("hidden");
  estado = 23;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  var textarea_11 = document.getElementById("text_area_11");
  // Borra el contenido del textarea
  textarea_11.value = "";
  contador("4/4");

  const audioQuestion11_04 = document.getElementById("audioQuestion11_04");
  // Reproducción del audio con el volumen al 70%
  audioQuestion11_04.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion11_04.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_11.innerHTML = "";
  pregunta_caja_texto_11.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_11.innerHTML =
    "d. ¿Sugeriste el tipo de comportamiento que te hubiera gustado observar?";
  pregunta_caja_texto_11.innerHTML = "";

  ocultar_botones_paso4();
  btn_anterior_11_4.style.display = "block"; // Lo muestra
  btn_next_11_4.style.display = "block"; // Lo muestra

  btn_anterior_11_4.addEventListener("click", function () {
    paso4_3();
  });

  btn_next_11_4.addEventListener("click", function () {
    pauseAndResetVideos();
    ocultar_contador();

    // Oculta la parte interactiva 01 y muestra el video 02
    document.getElementById("interactive-screen-11").classList.add("hidden");
    document.getElementById("video-screen-07").classList.remove("hidden");

    // Inicia la reproducción del video 07
    const video07 = document.getElementById("course-video-07");
    video07.play();

    // Cuando termine el video 07, mostrar la segunda parte interactiva
    video07.addEventListener("ended", function () {
      document.getElementById("video-screen-07").classList.add("hidden");
      pauseAndResetVideos();

      document
        .getElementById("interactive-screen-12")
        .classList.remove("hidden");

      const audioQuestion12 = document.getElementById("audioQuestion12");
      // Reproducción del audio con el volumen al 70%
      audioQuestion12.volume = 0.5;
      pauseAndResetVideos();
      audioQuestion12.play(); // Reproducir el audio

      // Manejadores para las opciones de la parte interactiva 12
      const optionButtons12 = document.querySelectorAll(".option-button-12");

      optionButtons12.forEach(function (button) {
        button.classList.add("hidden");
        audioQuestion12.addEventListener("ended", function () {
          button.classList.remove("hidden");
        });
        button.addEventListener("click", function () {
          button.classList.add("green-button");
          const audioRespuesta12 = document.getElementById("audioRespuesta12");
          // Reproducción del audio con el volumen al 70%
          audioRespuesta12.volume = 0.5;
          pauseAndResetVideos();
          audioRespuesta12.play(); // Reproducir el audio

          audioRespuesta12.addEventListener("ended", function () {
            button.classList.remove("green-button");
            pauseAndResetVideos();

            document
              .getElementById("interactive-screen-12")
              .classList.add("hidden");

            document
              .getElementById("interactive-screen-13")
              .classList.remove("hidden");

            const audioQuestion13 = document.getElementById("audioQuestion13");
            // Reproducción del audio con el volumen al 70%
            audioQuestion13.volume = 0.5;
            pauseAndResetVideos();
            audioQuestion13.play(); // Reproducir el audio

            // Manejadores para las opciones de la parte interactiva 02
            const optionButtons13 =
              document.querySelectorAll(".option-button-13");

            optionButtons13.forEach(function (button) {
              button.classList.add("hidden");
              audioQuestion13.addEventListener("ended", function () {
                button.classList.remove("hidden");
              });
              button.addEventListener("click", function () {
                button.classList.add("green-button");
                const audioRespuesta13 =
                  document.getElementById("audioRespuesta13");
                // Reproducción del audio con el volumen al 70%
                audioRespuesta13.volume = 0.5;
                pauseAndResetVideos();
                audioRespuesta13.play(); // Reproducir el audio

                audioRespuesta13.addEventListener("ended", function () {
                  button.classList.remove("green-button");
                  pauseAndResetVideos();

                  document
                    .getElementById("interactive-screen-13")
                    .classList.add("hidden");

                  document
                    .getElementById("interactive-screen-14")
                    .classList.remove("hidden");

                  const audioQuestion14 =
                    document.getElementById("audioQuestion14");
                  // Reproducción del audio con el volumen al 70%
                  audioQuestion14.volume = 0.5;
                  pauseAndResetVideos();
                  audioQuestion14.play(); // Reproducir el audio

                  // Manejadores para las opciones de la parte interactiva 14
                  const optionButtons14 =
                    document.querySelectorAll(".option-button-14");

                  optionButtons14.forEach(function (button) {
                    button.classList.add("hidden");
                    audioQuestion14.addEventListener("ended", function () {
                      button.classList.remove("hidden");
                    });
                    button.addEventListener("click", function () {
                      button.classList.add("green-button");
                      const audioRespuesta14 =
                        document.getElementById("audioRespuesta14");
                      // Reproducción del audio con el volumen al 70%
                      audioRespuesta14.volume = 0.5;
                      pauseAndResetVideos();
                      audioRespuesta14.play(); // Reproducir el audio

                      audioRespuesta14.addEventListener("ended", function () {
                        button.classList.remove("green-button");
                        document
                          .getElementById("interactive-screen-14")
                          .classList.add("hidden");
                        paso5();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function paso5() {
  estado = 24;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(6);
  ocultar_contador();
  pauseAndResetVideos();

  document.getElementById("video-screen-05").classList.add("hidden");
  document.getElementById("interactive-screen-10").classList.add("hidden");
  document.getElementById("interactive-screen-11").classList.add("hidden");
  document.getElementById("video-screen-06").classList.add("hidden");
  document.getElementById("video-screen-08").classList.remove("hidden");
  document.getElementById("interactive-screen-15").classList.add("hidden");
  ocultar_botones_paso4();
  ocultar_botones_paso5();

  // Inicia la reproducción del video 08
  const video08 = document.getElementById("course-video-08");
  video08.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video08.addEventListener("ended", function () {
    document.getElementById("video-screen-08").classList.add("hidden");
    pauseAndResetVideos();
    paso5_1();
  });
}

const titulo_caja_texto_15 = document.getElementById("titulo-caja-texto_15");
const pregunta_caja_texto_15 = document.getElementById(
  "pregunta-caja-texto_15"
);
const btn_anterior_15_2 = document.getElementById("btn_anterior_15_2");
const btn_anterior_15_3 = document.getElementById("btn_anterior_15_3");
const btn_anterior_15_4 = document.getElementById("btn_anterior_15_4");
const btn_anterior_15_5 = document.getElementById("btn_anterior_15_5");
const btn_next_15_1 = document.getElementById("btn_next_15_1");
const btn_next_15_2 = document.getElementById("btn_next_15_2");
const btn_next_15_3 = document.getElementById("btn_next_15_3");
const btn_next_15_4 = document.getElementById("btn_next_15_4");
const btn_next_15_5 = document.getElementById("btn_next_15_5");

function ocultar_botones_paso5() {
  btn_anterior_15_2.style.display = "none";
  btn_anterior_15_3.style.display = "none";
  btn_anterior_15_4.style.display = "none";
  btn_anterior_15_5.style.display = "none";
  btn_next_15_1.style.display = "none";
  btn_next_15_2.style.display = "none";
  btn_next_15_3.style.display = "none";
  btn_next_15_4.style.display = "none";
  btn_next_15_5.style.display = "none";
}

function paso5_1() {
  estado = 25;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  pauseAndResetVideos();

  document.getElementById("video-screen-08").classList.add("hidden");
  ocultar_botones_paso4();
  ocultar_botones_paso5();
  var textarea_15 = document.getElementById("text_area_15");
  // Borra el contenido del textarea
  textarea_15.value = "";
  pauseAndResetVideos();
  contador("1/5");
  document.getElementById("interactive-screen-15").classList.remove("hidden");

  const audioQuestion15_01 = document.getElementById("audioQuestion15_01");
  // Reproducción del audio con el volumen al 70%
  audioQuestion15_01.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion15_01.play(); // Reproducir el audio

  const div_15 = document.getElementById("cuadro_texto_15");
  // Hace aparecer el div
  div_15.style.display = "block"; // Lo muestra

  // Elimina todo el contenido del div
  titulo_caja_texto_15.innerHTML = "";
  pregunta_caja_texto_15.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_15.innerHTML = "1. Traza una meta";
  pregunta_caja_texto_15.innerHTML = "";

  ocultar_botones_paso5();
  btn_next_15_1.style.display = "block"; // Lo muestra

  btn_next_15_1.addEventListener("click", function () {
    paso5_2();
  });
}

function paso5_2() {
  estado = 26;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  pauseAndResetVideos();

  document.getElementById("video-screen-08").classList.add("hidden");
  var textarea_15 = document.getElementById("text_area_15");
  // Borra el contenido del textarea
  textarea_15.value = "";
  contador("2/5");

  const audioQuestion15_02 = document.getElementById("audioQuestion15_02");
  // Reproducción del audio con el volumen al 70%
  audioQuestion15_02.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion15_02.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_15.innerHTML = "";
  pregunta_caja_texto_15.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_15.innerHTML = "2. Cómo medirás el avance";
  pregunta_caja_texto_15.innerHTML = "";

  ocultar_botones_paso5();
  btn_anterior_15_2.style.display = "block"; // Lo muestra
  btn_next_15_2.style.display = "block"; // Lo muestra

  btn_anterior_15_2.addEventListener("click", function () {
    paso5_1();
  });

  btn_next_15_2.addEventListener("click", function () {
    paso5_3();
  });
}

function paso5_3() {
  estado = 27;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  pauseAndResetVideos();

  document.getElementById("video-screen-08").classList.add("hidden");
  var textarea_15 = document.getElementById("text_area_15");
  // Borra el contenido del textarea
  textarea_15.value = "";
  contador("3/5");

  const audioQuestion15_03 = document.getElementById("audioQuestion15_03");
  // Reproducción del audio con el volumen al 70%
  audioQuestion15_03.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion15_03.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_15.innerHTML = "";
  pregunta_caja_texto_15.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_15.innerHTML = "3. Genera una lista de acciones a mejorar";
  pregunta_caja_texto_15.innerHTML = "";

  ocultar_botones_paso5();
  btn_anterior_15_3.style.display = "block"; // Lo muestra
  btn_next_15_3.style.display = "block"; // Lo muestra

  btn_anterior_15_3.addEventListener("click", function () {
    paso5_2();
  });

  btn_next_15_3.addEventListener("click", function () {
    paso5_4();
  });
}

function paso5_4() {
  estado = 28;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  pauseAndResetVideos();

  document.getElementById("video-screen-08").classList.add("hidden");
  var textarea_15 = document.getElementById("text_area_15");
  // Borra el contenido del textarea
  textarea_15.value = "";
  contador("4/5");

  const audioQuestion15_04 = document.getElementById("audioQuestion15_04");
  // Reproducción del audio con el volumen al 70%
  audioQuestion15_04.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion15_04.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_15.innerHTML = "";
  pregunta_caja_texto_15.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_15.innerHTML =
    "4. Genera una lista de acciones para motivar";
  pregunta_caja_texto_15.innerHTML = "";

  ocultar_botones_paso5();
  btn_anterior_15_4.style.display = "block"; // Lo muestra
  btn_next_15_4.style.display = "block"; // Lo muestra

  btn_anterior_15_4.addEventListener("click", function () {
    paso5_3();
  });

  btn_next_15_4.addEventListener("click", function () {
    paso5_5();
  });
}

function paso5_5() {
  estado = 29;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  pauseAndResetVideos();

  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("interactive-screen-15").classList.remove("hidden");
  var textarea_15 = document.getElementById("text_area_15");
  // Borra el contenido del textarea
  textarea_15.value = "";
  contador("5/5");

  const audioQuestion15_05 = document.getElementById("audioQuestion15_05");
  // Reproducción del audio con el volumen al 70%
  audioQuestion15_05.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion15_05.play(); // Reproducir el audio

  // Elimina todo el contenido del div
  titulo_caja_texto_15.innerHTML = "";
  pregunta_caja_texto_15.innerHTML = "";

  // Inserta el nuevo texto
  titulo_caja_texto_15.innerHTML =
    "5. Ahora coloca una fecha y lugar para medir progreso";
  pregunta_caja_texto_15.innerHTML = "";

  ocultar_botones_paso5();
  btn_anterior_15_5.style.display = "block"; // Lo muestra
  btn_next_15_5.style.display = "block"; // Lo muestra

  btn_anterior_15_5.addEventListener("click", function () {
    paso5_4();
  });

  btn_next_15_5.addEventListener("click", function () {
    ocultar_contador();
    document.getElementById("interactive-screen-15").classList.add("hidden");
    paso6();
  });
}

function paso6() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(7);
  ocultar_contador();
  pauseAndResetVideos();
  estado = 30;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("interactive-screen-15").classList.add("hidden");

  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.remove("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");

  // Inicia la reproducción del video 09
  const video09 = document.getElementById("course-video-09");
  video09.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  video09.addEventListener("ended", function () {
    paso6_1();
  });
}

function paso6_1() {
  estado = 31;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("caso-uso-01").classList.remove("hidden");
  document.getElementById("interactive-screen-16").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");

  // Inicia la reproducción del video 09
  const caso01 = document.getElementById("course-caso-01");
  caso01.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso01.addEventListener("ended", function () {
    paso6_2();
  });
}

function paso6_2() {
  estado = 32;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("interactive-screen-16").classList.remove("hidden");
  document.getElementById("respuesta-01").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");

  const audioQuestion16 = document.getElementById("audioQuestion16");
  // Reproducción del audio con el volumen al 70%
  audioQuestion16.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion16.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons16 = document.querySelectorAll(".option-button-16");

  optionButtons16.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion16.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      paso6_3();
    });
  });
}

function paso6_3() {
  estado = 33;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");
  pauseAndResetVideos();

  // Oculta la parte interactiva 01 y muestra el video 02
  document.getElementById("interactive-screen-16").classList.add("hidden");
  document.getElementById("respuesta-01").classList.remove("hidden");
  document.getElementById("interactive-screen-17").classList.add("hidden");

  // Inicia la reproducción del video 02
  const caso01_respuesta01 = document.getElementById("course-respuesta-01");
  caso01_respuesta01.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso01_respuesta01.addEventListener("ended", function () {
    paso6_4();
  });
}

function paso6_4() {
  estado = 34;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");
  document.getElementById("respuesta-01").classList.add("hidden");

  pauseAndResetVideos();
  document.getElementById("caso-uso-01").classList.add("hidden");
  document.getElementById("respuesta-01").classList.add("hidden");
  document.getElementById("respuesta-02").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("interactive-screen-17").classList.remove("hidden");

  const audioQuestion17 = document.getElementById("audioQuestion17");
  // Reproducción del audio con el volumen al 70%
  audioQuestion17.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion17.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons17 = document.querySelectorAll(".option-button-17");

  optionButtons17.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion17.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      paso6_5();
    });
  });
}

function paso6_5() {
  estado = 35;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");
  pauseAndResetVideos();
  // Oculta la parte interactiva 01 y muestra el video 02
  document.getElementById("interactive-screen-17").classList.add("hidden");
  document.getElementById("interactive-screen-18").classList.add("hidden");
  document.getElementById("respuesta-02").classList.remove("hidden");

  // Inicia la reproducción del video 02
  const caso01_respuesta02 = document.getElementById("course-respuesta-02");
  caso01_respuesta02.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso01_respuesta02.addEventListener("ended", function () {
    paso6_6();
  });
}

function paso6_6() {
  estado = 36;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");
  document.getElementById("respuesta-02").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("caso-uso-01").classList.add("hidden");
  document.getElementById("respuesta-03").classList.add("hidden");
  document.getElementById("interactive-screen-18").classList.remove("hidden");

  const audioQuestion18 = document.getElementById("audioQuestion18");
  // Reproducción del audio con el volumen al 70%
  audioQuestion18.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion18.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 02
  const optionButtons18 = document.querySelectorAll(".option-button-18");

  optionButtons18.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion18.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      paso6_7();
    });
  });
}

function paso6_7() {
  estado = 37;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-08").classList.add("hidden");
  document.getElementById("video-screen-09").classList.add("hidden");
  document.getElementById("caso-uso-01").classList.add("hidden");
  document.getElementById("caso-uso-02").classList.add("hidden");
  pauseAndResetVideos();
  // Oculta la parte interactiva 01 y muestra el video 02
  document.getElementById("interactive-screen-18").classList.add("hidden");
  document.getElementById("respuesta-03").classList.remove("hidden");

  // Inicia la reproducción del video 02
  const caso01_respuesta03 = document.getElementById("course-respuesta-03");
  caso01_respuesta03.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso01_respuesta03.addEventListener("ended", function () {
    document.getElementById("respuesta-03").classList.add("hidden");
    pauseAndResetVideos();
    paso7();
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Interactivo 19

let selectedOrder = [];

function selectBlock(element) {
  if (selectedOrder.includes(element)) return;

  selectedOrder.push(element);
  element.style.backgroundColor = "#031795"; // Color de selección
  element.style.color = "#ffffff"; // Color de selección
}

function checkOrder() {
  // Convertimos el orden en data-order para comparar
  const order = selectedOrder.map((block) => parseInt(block.dataset.order));
  const correctOrder = [1, 2, 3];

  if (JSON.stringify(order) === JSON.stringify(correctOrder)) {
    document.getElementById("verificar").classList.add("hidden");
    const audioQuestion19_1 = document.getElementById("audioQuestion19_1");
    // Reproducción del audio con el volumen al 70%
    audioQuestion19_1.volume = 0.5;
    pauseAndResetVideos();
    audioQuestion19_1.play(); // Reproducir el audio
    showNotification(
      "¡Felicidades! Ordenaste las partes del feedback correctamente.",
      "#4caf50"
    );
    audioQuestion19_1.addEventListener("ended", function () {
      document.getElementById("interactive-screen-19").classList.add("hidden");
      pauseAndResetVideos();
      document
        .getElementById("respuesta-caso-uso-02")
        .classList.remove("hidden");

      // Inicia la reproducción del video 09
      const caso02respuesta = document.getElementById(
        "course-respuesta-caso-02"
      );
      caso02respuesta.play();

      // Cuando termine el video 02, mostrar la segunda parte interactiva
      caso02respuesta.addEventListener("ended", function () {
        document
          .getElementById("respuesta-caso-uso-02")
          .classList.add("hidden");
        pauseAndResetVideos();
        paso8();
      });
    });
  } else {
    showNotification("Intenta de nuevo. El orden no es correcto.", "#f44336");
    // Reiniciar después de la verificación
    resetGame();
  }
}

function resetGame() {
  selectedOrder.forEach((block) => {
    block.style.backgroundColor = "#ffffff"; // Restaurar color de fondo original
    block.style.color = "#031795"; // Restaurar color de texto original
  }); // Restaurar color original
  selectedOrder = [];
}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 5000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function paso7() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(8);
  ocultar_contador();
  pauseAndResetVideos();
  estado = 38;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("respuesta-03").classList.add("hidden");
  document.getElementById("interactive-screen-19").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("caso-uso-02").classList.remove("hidden");
  document.getElementById("interactive-screen-19").classList.add("hidden");

  // Inicia la reproducción del video 09
  const caso02 = document.getElementById("course-caso-02");
  caso02.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso02.addEventListener("ended", function () {
    paso7_1();
  });
}

function paso7_1() {
  estado = 39;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("caso-uso-02").classList.add("hidden");
  document.getElementById("respuesta-caso-uso-02").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("interactive-screen-19").classList.remove("hidden");
  const audioQuestion19 = document.getElementById("audioQuestion19");
  // Reproducción del audio con el volumen al 70%
  audioQuestion19.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion19.play(); // Reproducir el audio
}

function paso7_2() {
  estado = 40;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("interactive-screen-19").classList.add("hidden");
  document.getElementById("caso-uso-03").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("respuesta-caso-uso-02").classList.remove("hidden");

  // Inicia la reproducción del video 09
  const caso02respuesta = document.getElementById("course-respuesta-caso-02");
  caso02respuesta.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso02respuesta.addEventListener("ended", function () {
    paso8();
  });
}

function paso8() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(9);
  ocultar_contador();
  pauseAndResetVideos();
  estado = 41;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("respuesta-caso-uso-02").classList.add("hidden");
  document.getElementById("caso-uso-03").classList.remove("hidden");
  document.getElementById("interactive-screen-20").classList.add("hidden");

  // Inicia la reproducción del video 09
  const caso03 = document.getElementById("course-caso-03");
  caso03.play();

  // Cuando termine el video 02, mostrar la segunda parte interactiva
  caso03.addEventListener("ended", function () {
    paso8_1();
  });
}

function paso8_1() {
  estado = 42;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("caso-uso-03").classList.add("hidden");
  document.getElementById("video-screen-10").classList.add("hidden");
  pauseAndResetVideos();
  document.getElementById("interactive-screen-20").classList.remove("hidden");
  const audioQuestion20 = document.getElementById("audioQuestion20");
  // Reproducción del audio con el volumen al 70%
  audioQuestion20.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion20.play(); // Reproducir el audio
}

// interactive-screen-20

function checkAnswer(element, isCorrect) {
  const notification = document.getElementById("notification");
  const cardPregunta = element.querySelector(".card-pregunta");

  if (isCorrect) {
    cardPregunta.style.color = "#ffffff";
    cardPregunta.style.backgroundColor = "#4caf50";

    showNotification(
      "¡Felicidades! Seleccionaste la respuesta correcta.",
      "#4caf50"
    );

    const audioQuestion20_1 = document.getElementById("audioQuestion20_1");
    audioQuestion20_1.volume = 0.5;
    pauseAndResetVideos();
    audioQuestion20_1.play();

    audioQuestion20_1.addEventListener("ended", function () {
      document.getElementById("interactive-screen-20").classList.add("hidden");
      pauseAndResetVideos();
      paso9();
    });
  } else {
    cardPregunta.style.color = "#ffffff";
    cardPregunta.style.backgroundColor = "#f44336";

    showNotification("Respuesta incorrecta. Inténtalo de nuevo.", "#f44336");

    setTimeout(() => {
      cardPregunta.style.color = "#031795";
      cardPregunta.style.backgroundColor = "";
    }, 1000);
  }
}

function showNotification(message, color) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.backgroundColor = color;
  notification.classList.add("show");

  // Ocultar notificación después de 5 segundos
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}
////////////////////////////////////////////////////////////////////////////////////////////////////

function paso9() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(10);
  ocultar_contador();
  pauseAndResetVideos();
  estado = 43;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("video-screen-10").classList.remove("hidden");
  document.getElementById("caso-uso-04").classList.add("hidden");
  document.getElementById("interactive-screen-20").classList.add("hidden");

  // Inicia la reproducción del video 01
  const video10 = document.getElementById("course-video-10");
  video10.play();

  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  video10.addEventListener("ended", function () {
    paso9_1();
  });
}

function paso9_1() {
  document.getElementById("video-screen-10").classList.add("hidden");
  document.getElementById("caso-uso-04").classList.remove("hidden");
  document.getElementById("interactive-screen-21").classList.add("hidden");
  pauseAndResetVideos();
  estado = 44;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  // Inicia la reproducción del video 01
  const caso04 = document.getElementById("course-caso-04");
  caso04.play();

  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  caso04.addEventListener("ended", function () {
    paso9_2();
  });
}

function paso9_2() {
  document.getElementById("caso-uso-04").classList.add("hidden");
  document.getElementById("interactive-screen-21").classList.remove("hidden");
  document.getElementById("video-screen-caso-4-1").classList.add("hidden");
  estado = 45;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  const audioQuestion21 = document.getElementById("audioQuestion21");
  // Reproducción del audio con el volumen al 70%
  audioQuestion21.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion21.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 01
  const optionButtons21 = document.querySelectorAll(".option-button-21");

  optionButtons21.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion21.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      paso9_3();
    });
  });
}

function paso9_3() {
  pauseAndResetVideos();
  document.getElementById("interactive-screen-21").classList.add("hidden");
  document.getElementById("video-screen-caso-4-1").classList.remove("hidden");
  document.getElementById("video-screen-caso-4-2").classList.add("hidden");
  estado = 46;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  const audioQuestion22 = document.getElementById("audioQuestion22");
  // Reproducción del audio con el volumen al 70%
  audioQuestion22.volume = 0.5;
  audioQuestion22.play(); // Reproducir el audio
  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  audioQuestion22.addEventListener("ended", function () {
    pauseAndResetVideos();
    // Agregar clase para mostrar los botones con la animación
    const buttonContainercaso41 = document.getElementById(
      "buttonContainercaso41"
    );
    buttonContainercaso41.classList.add("show-buttons");
    // Inicia la reproducción del video 01
    const caso4_1 = document.getElementById("course-caso-4-1");
    caso4_1.play();
    // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
    caso4_1.addEventListener("ended", function () {
      const caso4_respuesta1 = document.getElementById("caso4_respuesta1");
      caso4_respuesta1.addEventListener("click", function () {
        paso9_4();
      });
    });
  });
}

function paso9_4() {
  pauseAndResetVideos();
  estado = 47;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-caso-4-1").classList.add("hidden");
  document.getElementById("video-screen-caso-4-2").classList.remove("hidden");
  document.getElementById("video-screen-caso-4-3").classList.add("hidden");
  // Agregar clase para mostrar los botones con la animación
  const buttonContainercaso42 = document.getElementById(
    "buttonContainercaso42"
  );
  buttonContainercaso42.classList.add("show-buttons");
  // Inicia la reproducción del video 01
  const caso4_2 = document.getElementById("course-caso-4-2");
  caso4_2.play();
  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  caso4_2.addEventListener("ended", function () {
    const caso4_respuesta2 = document.getElementById("caso4_respuesta2");
    caso4_respuesta2.addEventListener("click", function () {
      paso9_5();
    });
  });
}

function paso9_5() {
  pauseAndResetVideos();
  estado = 48;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-caso-4-2").classList.add("hidden");
  document.getElementById("video-screen-caso-4-3").classList.remove("hidden");
  document.getElementById("video-screen-11").classList.add("hidden");
  // Inicia la reproducción del video 01
  const caso4_3 = document.getElementById("course-caso-4-3");
  caso4_3.play();
  // Agregar clase para mostrar los botones con la animación
  const buttonContainercaso43 = document.getElementById(
    "buttonContainercaso43"
  );
  buttonContainercaso43.classList.add("show-buttons");
  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  caso4_3.addEventListener("ended", function () {
    const caso4_respuesta3 = document.getElementById("caso4_respuesta3");
    caso4_respuesta3.addEventListener("click", function () {
      pauseAndResetVideos();
      document.getElementById("video-screen-caso-4-3").classList.add("hidden");
      paso10();
    });
  });
}

function highlight(type) {
  const feedbackText = document.querySelectorAll("#feedback-text .part");
  const message = document.getElementById("message");

  // Limpia mensaje y elimina las clases de resaltado previas
  message.innerHTML = "";
  feedbackText.forEach((part) => {
    part.classList.remove(
      "highlighted-red",
      "highlighted-green",
      "highlighted-blue"
    );
  });

  // Define el color de resaltado para cada tipo de feedback
  const highlightClasses = {
    Situación: "highlighted-red",
    Comportamiento: "highlighted-green",
    Impacto: "highlighted-blue",
  };

  // Encuentra la parte correspondiente y aplica el color
  feedbackText.forEach((part) => {
    if (part.dataset.part === type) {
      part.classList.add(highlightClasses[type]);
      message.innerHTML = `Parte correspondiente a: <strong>${type}</strong>`;
    }
  });
}

function paso10() {
  // Actualiza la barra de progreso al 50% al pasar a la siguiente etapa
  progress(11);
  ocultar_contador();
  pauseAndResetVideos();
  estado = 49;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];

  document.getElementById("video-screen-caso-4-3").classList.add("hidden");
  document.getElementById("video-screen-11").classList.remove("hidden");
  document.getElementById("interactive-screen-24").classList.add("hidden");
  // Inicia la reproducción del video 01
  const video11 = document.getElementById("course-video-11");
  video11.play();
  // Cuando termine el video, ocultarlo y mostrar la parte interactiva 01
  video11.addEventListener("ended", function () {
    paso10_1();
  });
}

function paso10_1() {
  document.getElementById("video-screen-11").classList.add("hidden");
  document.getElementById("interactive-screen-24").classList.remove("hidden");
  document.getElementById("video-screen-12").classList.add("hidden");
  pauseAndResetVideos();
  estado = 50;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  // Lista de preguntas
  const questions = [
    "Se sabe lo que se quiere lograr al dar retroalimentación.",
    "Se justifica la retroalimentación.",
    "Se elige el momento y lugar adecuados para hablar.",
    "Se centra en un comportamiento específico.",
    "Se formula las frases en primera persona.",
    "Se es sincer@, abiert@ y direct@.",
    "Se establece objetivos realistas junto con la persona a la que da retroalimentación.",
    "Se motiva a la otra persona para que logre sus metas.",
    "Se evalúa los progresos que se van haciendo.",
  ];

  let currentQuestion = 0;

  // Seleccionar elementos de la página
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");

  const stars = document.querySelectorAll(".star");
  const audioPlayer24 = document.getElementById("audioPlayer24");

  // Función para cargar la siguiente pregunta y su audio
  function loadQuestion() {
    // Mostrar la pregunta
    questionElement.textContent = questions[currentQuestion];

    // Configurar el audio para la pregunta actual
    audioPlayer24.src = `audios/pregunta${currentQuestion + 1}.mp3`;
    audioPlayer24.play();
  }

  // Función para resaltar estrellas hasta la seleccionada
  function highlightStars(rating) {
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= rating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  }

  // Agrega evento a cada estrella
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      // Detener el audio si el usuario selecciona una calificación
      audioPlayer24.pause();
      audioPlayer24.currentTime = 0;

      // Obtener el valor de la estrella seleccionada
      const rating = star.getAttribute("data-value");

      // Mostrar las estrellas seleccionadas
      highlightStars(rating);

      // Realizar acciones con el valor de calificación si se desea
      console.log(`Pregunta ${currentQuestion + 1}: ${rating} estrellas`);

      // Esperar un breve momento antes de avanzar a la siguiente pregunta
      setTimeout(() => {
        // Incrementar el índice de pregunta y verificar si hay más preguntas
        currentQuestion++;
        if (currentQuestion < questions.length) {
          // Cargar la siguiente pregunta y resetear las estrellas
          loadQuestion();
          resetStars();
        } else {
          // Si no hay más preguntas, muestra un mensaje de finalización
          questionContainer.innerHTML =
            "<div class='question-estrellas' style='margin:0;'>¡Gracias por responder!</div>";
          audioPlayer24.src = `audios/gracias.mp3`;
          audioPlayer24.play();
          audioPlayer24.addEventListener("ended", function () {
            paso10_2();
          });
        }
      }, 300);
    });
  });

  // Función para resetear las estrellas
  function resetStars() {
    stars.forEach((star) => {
      star.classList.remove("selected");
    });
  }

  // Cargar la primera pregunta al iniciar
  loadQuestion();
}

function paso10_2() {
  pauseAndResetVideos();
  estado = 51;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("interactive-screen-24").classList.add("hidden");
  document.getElementById("video-screen-12").classList.remove("hidden");
  document.getElementById("interactive-screen-25").classList.add("hidden");
  // Inicia la reproducción del video 01
  const video12 = document.getElementById("course-video-12");
  video12.play();
  video12.addEventListener("ended", function () {
    paso10_3();
  });
}

function paso10_3() {
  pauseAndResetVideos();
  estado = 52;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-12").classList.add("hidden");
  document.getElementById("interactive-screen-25").classList.remove("hidden");
  document.getElementById("video-screen-13").classList.add("hidden");

  const audioQuestion25 = document.getElementById("audioQuestion25");
  // Reproducción del audio con el volumen al 70%
  audioQuestion25.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion25.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 01
  const optionButtons25 = document.querySelectorAll(".option-button-25");
  console.log(optionButtons25);

  optionButtons25.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion25.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta25 = document.getElementById("audioRespuesta25");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta25.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta25.play(); // Reproducir el audio

      audioRespuesta25.addEventListener("ended", function () {
        button.classList.remove("green-button");
        paso10_4();
      });
    });
  });
}

function paso10_4() {
  pauseAndResetVideos();
  estado = 53;
  estadoForward = pasos[`paso${estado + 1}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("interactive-screen-25").classList.add("hidden");
  document.getElementById("video-screen-13").classList.remove("hidden");
  document.getElementById("interactive-screen-26").classList.add("hidden");
  // Inicia la reproducción del video 01
  const video13 = document.getElementById("course-video-13");
  video13.play();
  video13.addEventListener("ended", function () {
    paso10_5();
  });
}

function paso10_5() {
  pauseAndResetVideos();
  estado = 54;
  estadoForward = pasos[`paso${estado}`];
  estadoBack = pasos[`paso${estado - 1}`];
  document.getElementById("video-screen-13").classList.add("hidden");
  document.getElementById("interactive-screen-26").classList.remove("hidden");

  const audioQuestion26 = document.getElementById("audioQuestion26");
  // Reproducción del audio con el volumen al 70%
  audioQuestion26.volume = 0.5;
  pauseAndResetVideos();
  audioQuestion26.play(); // Reproducir el audio

  // Manejadores para las opciones de la parte interactiva 01
  const optionButtons26 = document.querySelectorAll(".option-button-26");
  console.log(optionButtons26);

  optionButtons26.forEach(function (button) {
    button.classList.add("hidden");
    audioQuestion26.addEventListener("ended", function () {
      button.classList.remove("hidden");
    });
    button.addEventListener("click", function () {
      button.classList.add("green-button");
      const audioRespuesta26 = document.getElementById("audioRespuesta26");
      // Reproducción del audio con el volumen al 70%
      audioRespuesta26.volume = 0.5;
      pauseAndResetVideos();
      audioRespuesta26.play(); // Reproducir el audio

      audioRespuesta26.addEventListener("ended", function () {
        button.classList.remove("green-button");
        console.log("termiando");
      });
    });
  });
}
