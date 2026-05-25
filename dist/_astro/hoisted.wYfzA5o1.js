import{g as c}from"./BaseLayout.astro_astro_type_script_index_0_lang.OSy_epOm.js";import{getCart as p,getCartTotals as v,updateQty as b,removeFromCart as g}from"./cart.CH7E40pI.js";const m=document.getElementById("cart-header");requestAnimationFrame(()=>requestAnimationFrame(()=>{c.set(m,{opacity:0,y:24}),c.to(m,{opacity:1,y:0,duration:.9,ease:"power2.out"})}));function x(){const{subtotal:t,shipping:o,total:a}=v(),s=document.getElementById("summary-subtotal"),n=document.getElementById("summary-shipping"),d=document.getElementById("summary-total"),e=document.getElementById("shipping-note");s&&(s.textContent=`$${t}`),n&&(n.textContent=o===0?"Free":`$${o}`),d&&(d.textContent=`$${a}`),e?.classList.toggle("hidden",o===0||t===0)}function f(){document.querySelectorAll(".cart-item").forEach(t=>{const o=Number(t.dataset.id),a=t.dataset.color??"",s=t.dataset.size??"";t.querySelectorAll(".qty-btn").forEach(n=>{n.addEventListener("click",()=>{const d=n.dataset.action==="increase"?1:-1;b(o,a,s,d);const e=p().find(i=>i.id===o&&i.color===a&&i.size===s);if(e){const i=t.querySelector(".qty-display"),r=t.querySelector(".item-total");i&&(i.textContent=String(e.qty)),r&&(r.textContent=`$${e.price*e.qty}`)}x();const l=p().reduce((i,r)=>i+r.qty,0),u=document.getElementById("cart-count-label");u&&(u.textContent=`${l} items`)})}),t.querySelector(".remove-btn")?.addEventListener("click",()=>{c.to(t,{opacity:0,height:0,paddingTop:0,paddingBottom:0,duration:.4,ease:"power2.in",onComplete:()=>{g(o,a,s),y()}})})})}function y(){const t=p(),o=document.getElementById("cart-items"),a=document.getElementById("cart-content"),s=document.getElementById("empty-cart"),n=document.getElementById("cart-count-label");if(!o)return;if(t.length===0){a?.classList.add("hidden"),s?.classList.remove("hidden"),n&&(n.textContent="0 items");return}a?.classList.remove("hidden"),s?.classList.add("hidden");const d=t.reduce((e,l)=>e+l.qty,0);n&&(n.textContent=`${d} items`),o.innerHTML=t.map(e=>`
      <div class="cart-item grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] gap-3 sm:gap-6 py-6"
        data-id="${e.id}" data-color="${e.color}" data-size="${e.size}">
        <a href="/product/${e.id}">
          <div class="aspect-[3/4] bg-void-surface w-full overflow-hidden hover:opacity-80 transition-opacity duration-300">
            ${e.image?`<img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" />`:""}
          </div>
        </a>
        <div class="flex flex-col justify-between min-w-0">
          <div class="flex justify-between items-start gap-2">
            <div class="min-w-0">
              <a href="/product/${e.id}" class="text-void-white text-xs sm:text-sm hover:text-void-muted transition-colors duration-300 block truncate">${e.name}</a>
              <p class="label-caps text-void-muted mt-1 text-[9px] sm:text-xs">${e.category}</p>
            </div>
            <p class="item-total text-void-white text-xs sm:text-sm whitespace-nowrap ml-2">$${e.price*e.qty}</p>
          </div>
          <div class="flex flex-col gap-3 mt-3">
            <div class="flex gap-3">
              <div><p class="label-caps text-void-muted mb-0.5 text-[9px]">Color</p><p class="label-caps text-void-white text-[9px] sm:text-xs">${e.color}</p></div>
              <div><p class="label-caps text-void-muted mb-0.5 text-[9px]">Size</p><p class="label-caps text-void-white text-[9px] sm:text-xs">${e.size}</p></div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center border border-void-border">
                <button class="qty-btn px-2 py-1 label-caps text-void-muted hover:text-void-white transition-colors duration-200 text-xs" data-action="decrease">−</button>
                <span class="qty-display label-caps text-void-white px-2 py-1 border-x border-void-border min-w-[28px] text-center text-xs">${e.qty}</span>
                <button class="qty-btn px-2 py-1 label-caps text-void-muted hover:text-void-white transition-colors duration-200 text-xs" data-action="increase">+</button>
              </div>
              <button class="remove-btn label-caps text-void-muted hover:text-void-white underline underline-offset-4 transition-colors duration-300 text-[9px] sm:text-xs">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `).join(""),x(),f(),c.set(".cart-item",{opacity:0,y:16}),c.to(".cart-item",{opacity:1,y:0,duration:.6,ease:"power2.out",stagger:.08,delay:.2})}document.getElementById("promo-btn")?.addEventListener("click",()=>{const t=document.getElementById("promo-input"),o=document.getElementById("promo-btn");!t||!o||(t.value.trim().toUpperCase()==="VOID10"?(o.textContent="Applied —",o.classList.add("text-void-midnight"),t.disabled=!0):c.to(t,{x:-6,duration:.05,yoyo:!0,repeat:5,ease:"power2.inOut"}))});document.getElementById("checkout-btn")?.addEventListener("click",()=>{const t=document.getElementById("checkout-btn");t&&(t.textContent="Coming Soon —",setTimeout(()=>{t.textContent="Proceed to Checkout"},2e3))});y();
