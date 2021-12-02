import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }

  slides =[
    {
    imageSrc:'/asset/img/logo.png',
    imageAlt:'logo de la APP',
    title:'Escucha tu música',
    subTitle:'EN CUALQUIER LUGAR',
    description:'Los mejores álbunes, las mejores canciones.Escucha y comparte en cualquier momento, a todas horas.',
    icon:'play'
  },
  {
    imageSrc:'asset/img/logo.png',
    imageAlt:'logo de la APP',
    title:'Disfruta de nuestro reproductor',
    subTitle:'DE VIDEOS INCREIBLES',
    description:' Entra en el modo video de nuestro reproductor, y opten acceso a clips,documéntales y marketing offs increíbles de tus artistas favoritos.',
    icon:'videocam'
  },
  {
    imageSrc:'/asset/img/logo.png',
    imageAlt:'logo de la APP',
    title:'Accede al exclusivo',
    subTitle:'MODO DEPORTE',
    description:' Crea una playlist basada eb tu actividad fisica. ten reporte y acceso a lo que necesites, ingresando con GPS!',
    icon:'bicycle'
  }
]

  constructor(private router:Router,
              private storage:Storage) { }

  finish(){
    //mostrar los slides solo la primera vez, gracias a que queda guardado en el Ionic storage
    this.router.navigate(['/login']);
    this.storage.create();
    this.storage.set('isIntroShowed',true);
  }

}
