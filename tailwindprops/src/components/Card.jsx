import React from 'react'

function Card({ username, btnText="Add to card" }) {
  console.log("props: ", username);
  return (
    <div class="flex font-sans bg-white">
      <div class="flex font-sans">
        <div class="flex-none w-48 relative">
          <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/6/vbRaFEsE_c6e6814d5df843a297d234608a6d79cb.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              {username}
            </h1>
            <div class="text-lg font-semibold text-slate-500">
              $110.00
            </div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="m" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="l" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xl" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                Buy now
              </button>
              <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white" type="button">
                {btnText}
              </button>
            </div>
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-white shadow-lg hover:border-red-500 transition-all duration-300" type="button" aria-label="Wishlist">
              <svg width="20" height="20" fill="red" aria-hidden="true" class="transition-transform transform hover:scale-125">
                <path d="M6 2C4.34315 2 3 3.34315 3 5V17.5858C3 18.4767 4.07714 18.9229 4.70711 18.2929L10 13L15.2929 18.2929C15.9229 18.9229 17 18.4767 17 17.5858V5C17 3.34315 15.6569 2 14 2H6Z" />
              </svg>
            </button>

          </div>
          <p class="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Card