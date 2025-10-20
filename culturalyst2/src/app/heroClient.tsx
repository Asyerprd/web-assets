'use client';

import { useEffect } from 'react';

// Optional: declare global vars so TypeScript doesn’t complain
declare global {
  interface Window {
    $: any;
    Swiper: any;
    Lenis: any;
  }
}

export default function HeroClient() {
  useEffect(() => {
    // Wait until jQuery, Swiper, and Lenis exist
    const interval = setInterval(() => {
      if (window.$ && window.Swiper && window.Lenis) {
        const $ = window.$;

        // ✅ Swiper init
        const swiper = new window.Swiper('.swiper.hero_section', {
          direction: 'horizontal',
          allowTouchMove: false,
          loop: true,
          speed: 1000,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

        // ✅ Dropdown animation logic
        function getEmWidth($el: any, text: string) {
          const $temp = $('<span>')
            .text(text)
            .css({
              visibility: 'hidden',
              position: 'absolute',
              whiteSpace: 'nowrap',
              font: $el.css('font'),
            })
            .appendTo('body');
          const pxWidth = $temp.width();
          const fontSizePx = parseFloat($el.css('font-size'));
          $temp.remove();
          return pxWidth / fontSizePx + 'em';
        }

        function animateLabel($label: any, newText: string) {
          const newWidth = getEmWidth($label, newText);
          $label.animate({ opacity: 0 }, 150, 'swing', function () {
            $label.animate({ width: newWidth }, 250, 'swing', function () {
              $label.text(newText).animate({ opacity: 1 }, 150, 'swing');
            });
          });
        }

        $('.nav-item').each(function () {
          const firstOption = $(this).find('.dropdown-option:first').text();
          const $label = $(this).find('.filter-label');
          $label.text(firstOption);
          $label.css('width', getEmWidth($label, firstOption));
        });

        $('.dropdown-toggle').on('click.hero', function (e: any) {
          e.preventDefault();
          $(this).siblings('.dropdown-menu').stop(true, true).slideToggle(300);
        });

        $('.dropdown-option').on('click.hero', function () {
          const selectedText = $(this).text();
          const $navItem = $(this).closest('.nav-item');
          const group = $navItem.data('group');
          const $relatedNavItems = group ? $(`.nav-item[data-group="${group}"]`) : $navItem;

          $relatedNavItems.each(function () {
            const $label = $(this).find('.filter-label');
            animateLabel($label, selectedText);
          });

          $(this).parent('.dropdown-menu').slideUp(300);
        });

        $(document).on('click.hero', function (e) {
          if (!$(e.target).closest('.nav-item').length) {
            $('.dropdown-menu').slideUp(300);
          }
        });

        // ✅ Lenis setup
        const lenis = new window.Lenis({
          lerp: 0.1,
          wheelMultiplier: 0.7,
          gestureOrientation: 'vertical',
          normalizeWheel: false,
          smoothTouch: false,
        });

        function raf(t: number) {
          lenis.raf(t);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        $('[data-lenis-start]').on('click.hero', () => lenis.start());
        $('[data-lenis-stop]').on('click.hero', () => lenis.stop());
        $('[data-lenis-toggle]').on('click.hero', function () {
          $(this).toggleClass('stop-scroll');
          $(this).hasClass('stop-scroll') ? lenis.stop() : lenis.start();
        });

        clearInterval(interval); // stop waiting
      }
    }, 200); // check every 200ms

    return () => clearInterval(interval);
  }, []);

  return null; // this component only runs script
}
