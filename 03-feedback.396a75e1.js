function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,u=setTimeout(w,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function w(){var e=v();if(j(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function S(e){return u=void 0,p&&r?b(e):(r=i=void 0,a)}function O(){var e=v(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},O.flush=function(){return void 0===u?a:S(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),h=b.querySelector("input[name='email']"),j=b.querySelector("textarea[name='message']"),w=e(t)((()=>{const e={email:h.value.trim(),message:j.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",w);(()=>{const e=localStorage.getItem("feedback-form-state");if(e)try{const t=JSON.parse(e);h.value=t.email,j.value=t.message}catch(e){console.log(e.message)}})(),b.addEventListener("submit",(e=>{if(e.preventDefault(),(()=>{const e=h.value.trim(),t=j.value.trim();return!(!e||!t)||(alert("Proszę wypełnić oba pola formularza!"),!1)})()){const e={email:h.value.trim(),message:j.value.trim()};console.log("Email, Message:",e),localStorage.removeItem("feedback-form-state"),b.reset()}}));
//# sourceMappingURL=03-feedback.396a75e1.js.map