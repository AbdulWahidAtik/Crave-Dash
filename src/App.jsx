import React, { useEffect, useState } from "react";

const profileImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtrRPLA_IzyP5hgp3N1FgFeXOA1YVGFlSK3AZtIxvryTMswUagk72xgkn0UGG2mkC2I7pvUkE4DeokAo_dAiFUvBlbMaAqJDc8sgr99Z-B0tLqHeucLVCiXrJ2r6s8gNb0P-QcsbQSP3NPIkEW3vzJfE9xYixlPs5WJ2LcsQ5PJUPHgNgF7xOU5EpED0CUEzVfHjZLkLCVKideigYImQ0QIWKttv8KnmMALjTcHhjQngqJI3MWE9uhAIwEC7_cdTiATqKVuwnAog";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDft398D1CH4N7oNlL7pOUss6Mku2ZxMzsemVOXsO8XtutKV2jZpPiyCXKKrXFq5VldV8NgPp1diopVdPr0o5RXKbQzL2ElhE7UkA7w2YDWk0oONimCmej4vNCeZdmTEmc-706RsJTLIaOuffd3_1OTd2sQ-9naBaSvo9dGDyT2H39dr_DckA2lfw2OsLlWY9hl1R4CzOy15JCzeu1arhn74_3KUl-mR120U032ZdZP0T7NLGIDbtGyroGEuIQg9LaydEmhX2nA_g";

const categories = [
  {
    name: "Pizza",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1I4V4FO4FDtLP3gotcr9HKgcrbtbFr_UljKzqzkw1uJpfRuogPO15SzP3DUcf1N3woCzRBQNNaA02mIcOExx8SEiQbXugZQmmnTsCJl7UG_hCGPS3bbp-7Q8FlHb6TIK0GPKMCL61ZbJoNX71oN6bOO_FHKq35vsALYHXhJJBhgg164pSYgn6w72GcQxr9_-U8hOeqY0MDzFCjggPXWNomw40lDoTtUJ4pUZbGBlSVYQT0oxLzxd1vnPUnXLlInkXYwtbd_AEqQ",
  },
  {
    name: "Sushi",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-0QYxzS88DmiP6AZvXcG4qhP5V9Tyhq9xeFOOupR0r4V6N68dU57oAplgdZSE-a4kp8xbdh2ImtT-7HuAAn4gtPuGd18-9utCmE7ioMc3ltp6vhKukaabY0CwKM7beMNjMcNdXOX515ieib4pS3WsMawUDk7SobVN-fHXiRTAC0WZX5bIbwsa8aEDl1NiK-EX50J6q5kgGFG8UUmiQMSZp_LMJQRXJQmJP4ygPbzghj4lO_7yyqd93Ww5Pyhc3OOtcv1tRtz39w",
  },
  {
    name: "Burgers",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCE41C0ys-ApyrKZ8xEy3h5XKnHwEJ96WsW9b7vfAwI7bWz6Ircq84Z3YFqjMU6CpNyb6NLGolO4HkxmdX4KrrhXjaIhX_L58DqrCK2oD78HxJd-H93WNCxic36INwjh4_XYDWVL2xR0uf0j453ypWHZrEg17P6kf4G6WFKs9C-dK1IbHjViCl1C85HDTjd3IgFxvfAvGfzZg0ow2gFR4aerOAT70cA-c6SnntjO9y84vaARQNUhVxjP-wCEaWyiHE7QlQMDRyLKw",
  },
  {
    name: "Healthy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2P76RVIAHQags8zZH3F9IsdWQ94suLIaEkrCiPZu5aToxLHz5X-jPepbNmjZB8MGa-zRvvEZT6jjeMVThsWvYhFygoDsnrEpohQn3lPBrAUhHNu8fyarbqBzjo5r9bk5BrPNaCmnT67NrJ1jtkynFfwt-nTuzhxpzLJlzZYQkzK9m5v7Lnfjov6X1T8_dD_rO4d1Kdq71vprJBbzpAb3nTa6OA0mZmSwWHDYL_mmm5Lun7FDDuV0zZcyYbVPxv7gN6zUtWFFXPA",
  },
];

const trendingRestaurants = [
  {
    name: "The Artisan Grill",
    meta: "Gourmet Burgers - American - $$$",
    note: "Free delivery over $25",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-1KAabXGQm3MdUYfK_Urh8rWpdtUqxT7lc2V6rNh8tUAH9V7sgx7I1LUIIkxMU6StF7Mi4Zx7xI1N8esxMpMssknr30m8uVQB8GVM4QxAwQ3413Nl15FhUFz6o6CTo0Ew4-O31L7B0t1Vf2UOWKmeYF0iSq_eLfAyNKsFR4iq_pIo1yJXgBjOcLfkWb-2CigaKj202DJXBmg-s7HSm6Knyft8oyq-0o6kFQJ17ZBomxo1oaHyRzfGk2hmfAF5yomRi3Q4qTBy8A",
  },
  {
    name: "Pasta & Co",
    meta: "Italian - Homemade Pasta - $$",
    note: "Fastest in your area",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAwpkJBC3JnDhESUMb6gD0ZFyWqVoHTbUUcOgJGabTIgE44gPFHG79EXzwSCEL-N41RggKOJhXzO91vBypSrBcdAsSDxIwDuVy0-v0108RIWqHs47Zv2n4pzrWEwwW4_f-LibLUkEFvyZkcDDVnWcuSerodp3MIzh5FdgvW1MDk2F7WXRBPdt5eLXlNF8-a7T8HmT9o9d7OYgA573l33o_mxby_JJ1UFHafeM_2NuxcKGsHbX5XgR8-v7dfo4D0SYX0oVjx-Qoug",
  },
  {
    name: "Sakura Sushi",
    meta: "Japanese - Sushi & Ramen - $$$",
    note: "Highly rated for quality",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADAI5ICNS2QlChbE_vYSalkcaUcpRKNDRXCksjforLNVnE2hRSwcU8yokPqSDpaf7mlKGY73UwuEYv8NcQ9Vs0bS9xvRpSgvH4mHdxK9d6RNIlQurOu11mZ7F1Apy3AC7CBcOEqCElLBWNlyo17pBxXzZ0QbbTSumYU07cRIztwHcbBHRIMKKKBS43aHJuj68D1p4HUJfdGznmMAMnSk8YBXp2Tn7HnSNX_CBOJozqHEvtKdC_V7kHUZSZQO90YB1gh7wfE1l0Jw",
  },
];

const restaurants = [
  {
    name: "Artisan Hearth Pizza",
    meta: "Italian - Gourmet - $$",
    note: "4.8 - 20-30 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5mX-G2Le9tPpAq-neJvwLArGtT5nrffcvBetdQ1SbPjQuBFJXVL3ykDlpYvoSX1u95YFACfUnCg1jblzqVR_pzQJKjXoJ57jeTh79neDroscXQtEr4wuYCmxpprtv4PDZsQNhp5F8X6SnD5hh8gVnPMeaZupniGAAoids0kk4HQE7vWCPkHnaZR831pRmZt7lQpRB5cEvTkYUsHOTcMrE7OjwosVv-dBbL1h0f4LG2UPiOK4RIVcNylZtamfYwJOVX9dezeCVjw",
  },
  {
    name: "Green Wave Bowls",
    meta: "Healthy - Vegan Friendly - $$",
    note: "4.9 - 15-25 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKG0uohuNx2toksr3Ffr5qMsGpWlLwP1WBalTTd3D798hNb1cByQB7gv07CDHtofKaf1RYAvG9tS2hA5KxhandZkAkSwrT-QgjBvPCyr9rvmzW8Yq6AfakRVACVUkqKQRzXVKk63k_VUAUq30CKi30JTTERgEQIYuXMSEGAM5e9DEb15UkRciszoA-jKwVMn-Y2CrvhgVxCF-RIm7eRby0HKZ_hcc33h5n8N3yjj4cLB9WQt-Y0CFNcbOC0vNVo_vIqJEdSgJnVg",
  },
  {
    name: "The Burger Foundry",
    meta: "Burgers - American - $",
    note: "4.6 - 25-35 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClzRaY2HgZqFwg2_Chb0bMtF4fPAowE7Az-cUDZlmtMd0mPbWnEf3c1XaOzbDDFB16bNoDqcSOo9QVhgCQluO3M6089VdPTu2YE6s4F3gPCNXuE3MH544P2XBwegx9uythq0oqzEpBnp59SDUojP0lurRq5GuFTMB-MRCynO_zNrYsLWJLUK4qyWYLYjLfM8qaUGlaMF-ojIQHRoyX-ZkahnifsoAKuQkvj6_hz001rPa4ojXIoznt-hSxCPaHfWWa2EiVcBANJQ",
  },
  {
    name: "Citrus & Leaf",
    meta: "Salads - Mediterranean - $$",
    note: "4.5 - 15-25 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfGBJvYHdwqRuSd_Javx7hcUaClKp61GaBJtF8gP9VR2L792RBwhX-_fIy7aoP4jfDx8c4T9h-lWOQDT_rePg3misYuPVCKgwOVjBuZZGBqusoWTw7wBOs7TN0opTJIlR39RqiAdpAIr4Ncjzb4bmKFSreAX5fewMmT7_Qkx2Ir1Mbs9igt7mw2guoxPPn7R3nYNgLbtmmmWd0WDS7nZetDG6oqNAZ6Zua-ciDtZJNMwqNr2Bx3f5Y_vFlNAU4oorIPzyj04IgOA",
  },
  {
    name: "Sakura Sushi",
    meta: "Japanese - Sushi - $$$",
    note: "4.7 - 30-45 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrcj0y4-D37BAHwY5TPu0qh__rxIRrmAtubq_iqkoDrrzabLxJLegZ42idsE_AyYLijit6F9ApEdeUDER6UIm4nwwtpPRLyT5leKvVNGT1VyHMeTcTscpOjw49x5OlwgS6t-ONu6EMzxLxODgDqn9it2i5qiPMl-lRortesW7D5AuCObcOuB4E-grqLrd3LsCydZguBQru1Rwu8XPpOMJJnR4E8vdEVgbnMFlM_fDuSMpG3So6h8uHXTi7CCiQwsypPLXiQBlGQ",
  },
  {
    name: "Taco Theory",
    meta: "Mexican - Street Food - $",
    note: "4.4 - 10-20 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARJrWUTdbPYQkredZz2CJEJXvl34-TWYCLjEaeHrdfYhvtaAVHncdiKi_dL4kHYDaM53JTre9xzs7Y58oGjeeg8JPpDHn8cXZ5a487-Ctg3kHCUlbWN160MeVsS3E27ia8zUvaixAgcqQF2eRniw9D_VQ89swcYz6Y9F2myZcr6Ik9MY-pD5AOMsSXEEdXKhx1GKWed3Ft_pAiHv26pfooeVi8IFWWr4IIz3IIDvsOFfyD_fNdUUm0B2NC3LIfyZjDzEoo0LvUNw",
  },
];

// Customization options per category — reused across restaurants
const burgerAddons = [
  { id: "add-cheese", label: "Extra Cheese", price: 1.50 },
  { id: "add-bacon", label: "Crispy Bacon", price: 2.00 },
  { id: "add-avocado", label: "Fresh Avocado", price: 1.75 },
  { id: "add-egg", label: "Fried Egg", price: 1.00 },
];
const pastaAddons = [
  { id: "add-truffle", label: "Extra Truffle Oil", price: 2.50 },
  { id: "add-parmesan", label: "Extra Parmesan", price: 1.00 },
  { id: "add-chicken", label: "Grilled Chicken", price: 3.50 },
];
const sushiAddons = [
  { id: "add-spicy", label: "Extra Spicy", price: 0.50 },
  { id: "add-avocado-s", label: "Avocado Topping", price: 1.25 },
  { id: "add-wasabi", label: "Extra Wasabi", price: 0.00 },
];
const saladAddons = [
  { id: "add-protein", label: "Double Protein", price: 3.00 },
  { id: "add-dressing", label: "Extra Dressing", price: 0.75 },
  { id: "add-croutons", label: "Sourdough Croutons", price: 0.50 },
];
const genericAddons = [
  { id: "add-sauce", label: "Extra Sauce", price: 0.75 },
  { id: "add-portion", label: "Large Portion", price: 2.50 },
];

const menusByRestaurant = {
  "The Artisan Grill": [
    { id: "tag-1", name: "Signature Truffle Burger", price: 16.99, description: "Aged beef patty, black truffle aioli, wild mushrooms, Swiss cheese on a toasted brioche bun.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE41C0ys-ApyrKZ8xEy3h5XKnHwEJ96WsW9b7vfAwI7bWz6Ircq84Z3YFqjMU6CpNyb6NLGolO4HkxmdX4KrrhXjaIhX_L58DqrCK2oD78HxJd-H93WNCxic36INwjh4_XYDWVL2xR0uf0j453ypWHZrEg17P6kf4G6WFKs9C-dK1IbHjViCl1C85HDTjd3IgFxvfAvGfzZg0ow2gFR4aerOAT70cA-c6SnntjO9y84vaARQNUhVxjP-wCEaWyiHE7QlQMDRyLKw", popular: true, addons: burgerAddons },
    { id: "tag-2", name: "Sweet Potato Fries", price: 5.50, description: "Crispy sweet potato fries served with a side of house honey mustard sauce.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_lo2-foa7U2AGW9nqte9X8D3FR9IZkfOWInu45CEnf9V6D6ztRrEntK2jhX6cTiuLnSM7iVBl8tljzljl3bGcOClDYq9igF60f02yDdMJuQ7UfaQ3jQhjp6C5TYu-uBC-S_oajjeKst28AImg8uq6OlgCHyaS95uPP9IyHehetVUNxyFBB17tQESZMSsC6CfpZLHzjoTQD6IE3hDx-752QSL1GfJCpm13aSwQj4jtwJIPquj95TVScwouHm-6e_e3E4PJZ8Y-sw", popular: false, addons: genericAddons },
    { id: "tag-3", name: "Classic Caesar Salad", price: 11.99, description: "Crisp romaine, parmesan garlic croutons, house dressing, topped with grilled free-range chicken.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfGBJvYHdwqRuSd_Javx7hcUaClKp61GaBJtF8gP9VR2L792RBwhX-_fIy7aoP4jfDx8c4T9h-lWOQDT_rePg3misYuPVCKgwOVjBuZZGBqusoWTw7wBOs7TN0opTJIlR39RqiAdpAIr4Ncjzb4bmKFSreAX5fewMmT7_Qkx2Ir1Mbs9igt7mw2guoxPPn7R3nYNgLbtmmmWd0WDS7nZetDG6oqNAZ6Zua-ciDtZJNMwqNr2Bx3f5Y_vFlNAU4oorIPzyj04IgOA", popular: true, addons: saladAddons }
  ],
  "Pasta & Co": [
    { id: "pc-1", name: "Truffle Mushroom Fettuccine", price: 19.50, description: "Handmade pasta tossed in creamy parmesan sauce, wild mushrooms, white truffle oil, fresh parsley.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAwpkJBC3JnDhESUMb6gD0ZFyWqVoHTbUUcOgJGabTIgE44gPFHG79EXzwSCEL-N41RggKOJhXzO91vBypSrBcdAsSDxIwDuVy0-v0108RIWqHs47Zv2n4pzrWEwwW4_f-LibLUkEFvyZkcDDVnWcuSerodp3MIzh5FdgvW1MDk2F7WXRBPdt5eLXlNF8-a7T8HmT9o9d7OYgA573l33o_mxby_JJ1UFHafeM_2NuxcKGsHbX5XgR8-v7dfo4D0SYX0oVjx-Qoug", popular: true, addons: pastaAddons },
    { id: "pc-2", name: "Slow-Cooked Beef Lasagna", price: 18.00, description: "Layered sheets of fresh pasta, slow-cooked beef ragu, creamy bechamel, mozzarella and grana padano.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5mX-G2Le9tPpAq-neJvwLArGtT5nrffcvBetdQ1SbPjQuBFJXVL3ykDlpYvoSX1u95YFACfUnCg1jblzqVR_pzQJKjXoJ57jeTh79neDroscXQtEr4wuYCmxpprtv4PDZsQNhp5F8X6SnD5hh8gVnPMeaZupniGAAoids0kk4HQE7vWCPkHnaZR831pRmZt7lQpRB5cEvTkYUsHOTcMrE7OjwosVv-dBbL1h0f4LG2UPiOK4RIVcNylZtamfYwJOVX9dezeCVjw", popular: true, addons: pastaAddons },
    { id: "pc-3", name: "Classic Tiramisu", price: 7.99, description: "Ladyfingers dipped in espresso, layered with whipped mascarpone cheese and dusted with dark cocoa.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1I4V4FO4FDtLP3gotcr9HKgcrbtbFr_UljKzqzkw1uJpfRuogPO15SzP3DUcf1N3woCzRBQNNaA02mIcOExx8SEiQbXugZQmmnTsCJl7UG_hCGPS3bbp-7Q8FlHb6TIK0GPKMCL61ZbJoNX71oN6bOO_FHKq35vsALYHXhJJBhgg164pSYgn6w72GcQxr9_-U8hOeqY0MDzFCjggPXWNomw40lDoTtUJ4pUZbGBlSVYQT0oxLzxd1vnPUnXLlInkXYwtbd_AEqQ", popular: false, addons: genericAddons }
  ],
  "Sakura Sushi": [
    { id: "ss-1", name: "Chef's Premium Sashimi Set", price: 28.00, description: "15 pieces of assorted fresh sashimi including bluefin tuna, salmon, yellowtail, and red snapper.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-0QYxzS88DmiP6AZvXcG4qhP5V9Tyhq9xeFOOupR0r4V6N68dU57oAplgdZSE-a4kp8xbdh2ImtT-7HuAAn4gtPuGd18-9utCmE7ioMc3ltp6vhKukaabY0CwKM7beMNjMcNdXOX515ieib4pS3WsMawUDk7SobVN-fHXiRTAC0WZX5bIbwsa8aEDl1NiK-EX50J6q5kgGFG8UUmiQMSZp_LMJQRXJQmJP4ygPbzghj4lO_7yyqd93Ww5Pyhc3OOtcv1tRtz39w", popular: true, addons: sushiAddons },
    { id: "ss-2", name: "Spicy Tuna & Crunch Roll", price: 14.50, description: "Spicy tuna, cucumber, topped with crunchy tempura flakes, spicy mayo and sweet unagi drizzle.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrcj0y4-D37BAHwY5TPu0qh__rxIRrmAtubq_iqkoDrrzabLxJLegZ42idsE_AyYLijit6F9ApEdeUDER6UIm4nwwtpPRLyT5leKvVNGT1VyHMeTcTscpOjw49x5OlwgS6t-ONu6EMzxLxODgDqn9it2i5qiPMl-lRortesW7D5AuCObcOuB4E-grqLrd3LsCydZguBQru1Rwu8XPpOMJJnR4E8vdEVgbnMFlM_fDuSMpG3So6h8uHXTi7CCiQwsypPLXiQBlGQ", popular: true, addons: sushiAddons },
    { id: "ss-3", name: "Crispy Pork Gyoza", price: 8.50, description: "Pan-fried pork and vegetable dumplings served with dynamic soy-vinegar dipping sauce.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADAI5ICNS2QlChbE_vYSalkcaUcpRKNDRXCksjforLNVnE2hRSwcU8yokPqSDpaf7mlKGY73UwuEYv8NcQ9Vs0bS9xvRpSgvH4mHdxK9d6RNIlQurOu11mZ7F1Apy3AC7CBcOEqCElLBWNlyo17pBxXzZ0QbbTSumYU07cRIztwHcbBHRIMKKKBS43aHJuj68D1p4HUJfdGznmMAMnSk8YBXp2Tn7HnSNX_CBOJozqHEvtKdC_V7kHUZSZQO90YB1gh7wfE1l0Jw", popular: false, addons: genericAddons }
  ],
  "Artisan Hearth Pizza": [
    { id: "ahp-1", name: "Burrata & Prosciutto Pizza", price: 18.99, description: "Creamy fresh burrata cheese, prosciutto di Parma, wild arugula, extra virgin olive oil.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1I4V4FO4FDtLP3gotcr9HKgcrbtbFr_UljKzqzkw1uJpfRuogPO15SzP3DUcf1N3woCzRBQNNaA02mIcOExx8SEiQbXugZQmmnTsCJl7UG_hCGPS3bbp-7Q8FlHb6TIK0GPKMCL61ZbJoNX71oN6bOO_FHKq35vsALYHXhJJBhgg164pSYgn6w72GcQxr9_-U8hOeqY0MDzFCjggPXWNomw40lDoTtUJ4pUZbGBlSVYQT0oxLzxd1vnPUnXLlInkXYwtbd_AEqQ", popular: true },
    { id: "ahp-2", name: "Classic Pepperoni & Hot Honey", price: 16.50, description: "Artisan cup-and-char pepperoni, whole milk mozzarella, house red sauce, drizzled with spicy hot honey.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5mX-G2Le9tPpAq-neJvwLArGtT5nrffcvBetdQ1SbPjQuBFJXVL3ykDlpYvoSX1u95YFACfUnCg1jblzqVR_pzQJKjXoJ57jeTh79neDroscXQtEr4wuYCmxpprtv4PDZsQNhp5F8X6SnD5hh8gVnPMeaZupniGAAoids0kk4HQE7vWCPkHnaZR831pRmZt7lQpRB5cEvTkYUsHOTcMrE7OjwosVv-dBbL1h0f4LG2UPiOK4RIVcNylZtamfYwJOVX9dezeCVjw", popular: true },
    { id: "ahp-3", name: "Garlic Knot Bites", price: 6.99, description: "Baked pizza dough tossed in garlic butter, fresh parsley, and parmesan, served with warm marinara.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5mX-G2Le9tPpAq-neJvwLArGtT5nrffcvBetdQ1SbPjQuBFJXVL3ykDlpYvoSX1u95YFACfUnCg1jblzqVR_pzQJKjXoJ57jeTh79neDroscXQtEr4wuYCmxpprtv4PDZsQNhp5F8X6SnD5hh8gVnPMeaZupniGAAoids0kk4HQE7vWCPkHnaZR831pRmZt7lQpRB5cEvTkYUsHOTcMrE7OjwosVv-dBbL1h0f4LG2UPiOK4RIVcNylZtamfYwJOVX9dezeCVjw", popular: false }
  ],
  "Green Wave Bowls": [
    { id: "gwb-1", name: "Tropical Dragon Fruit Bowl", price: 12.99, description: "Organic pitaya blend topped with gluten-free vanilla granola, kiwi, raw honey, and hemp seeds.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2P76RVIAHQags8zZH3F9IsdWQ94suLIaEkrCiPZu5aToxLHz5X-jPepbNmjZB8MGa-zRvvEZT6jjeMVThsWvYhFygoDsnrEpohQn3lPBrAUhHNu8fyarbqBzjo5r9bk5BrPNaCmnT67NrJ1jtkynFfwt-nTuzhxpzLJlzZYQkzK9m5v7Lnfjov6X1T8_dD_rO4d1Kdq71vprJBbzpAb3nTaOA0mZmSwWHDYL_mmm5Lun7FDDuV0zZcyYbVPxv7gN6zUtWFFXPA", popular: true },
    { id: "gwb-2", name: "Ultimate Avocado & Egg Toast", price: 11.50, description: "Thick-cut sourdough bread, smashed organic avocado, heirloom tomatoes, microgreens, and two poached eggs.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKG0uohuNx2toksr3Ffr5qMsGpWlLwP1WBalTTd3D798hNb1cByQB7gv07CDHtofKaf1RYAvG9tS2hA5KxhandZkAkSwrT-QgjBvPCyr9rvmzW8Yq6AfakRVACVUkqKQRzXVKk63k_VUAUq30CKi30JTTERgEQIYuXMSEGAM5e9DEb15UkRciszoA-jKwVMn-Y2CrvhgVxCF-RIm7eRby0HKZ_hcc33h5n8N3yjj4cLB9WQt-Y0CFNcbOC0vNVo_vIqJEdSgJnVg", popular: true },
    { id: "gwb-3", name: "Kale & Ginger Glow Smoothie", price: 7.99, description: "Cold-pressed kale, fresh baby spinach, green apple, cucumber, lemon, and a hint of spicy ginger root.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2P76RVIAHQags8zZH3F9IsdWQ94suLIaEkrCiPZu5aToxLHz5X-jPepbNmjZB8MGa-zRvvEZT6jjeMVThsWvYhFygoDsnrEpohQn3lPBrAUhHNu8fyarbqBzjo5r9bk5BrPNaCmnT67NrJ1jtkynFfwt-nTuzhxpzLJlzZYQkzK9m5v7Lnfjov6X1T8_dD_rO4d1Kdq71vprJBbzpAb3nTaOA0mZmSwWHDYL_mmm5Lun7FDDuV0zZcyYbVPxv7gN6zUtWFFXPA", popular: false }
  ],
  "The Burger Foundry": [
    { id: "tbf-1", name: "Double Foundry Smash", price: 13.99, description: "Two smashed beef patties, cheddar, grilled onions, pickles, and signature Foundry sauce.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE41C0ys-ApyrKZ8xEy3h5XKnHwEJ96WsW9b7vfAwI7bWz6Ircq84Z3YFqjMU6CpNyb6NLGolO4HkxmdX4KrrhXjaIhX_L58DqrCK2oD78HxJd-H93WNCxic36INwjh4_XYDWVL2xR0uf0j453ypWHZrEg17P6kf4G6WFKs9C-dK1IbHjViCl1C85HDTjd3IgFxvfAvGfzZg0ow2gFR4aerOAT70cA-c6SnntjO9y84vaARQNUhVxjP-wCEaWyiHE7QlQMDRyLKw", popular: true },
    { id: "tbf-2", name: "Spicy Buttermilk Chicken Sandwich", price: 12.50, description: "Crispy fried chicken breast, Nashville hot dust, coleslaw, pickles, and spicy aioli on a brioche bun.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClzRaY2HgZqFwg2_Chb0bMtF4fPAowE7Az-cUDZlmtMd0mPbWnEf3c1XaOzbDDFB16bNoDqcSOo9QVhgCQluO3M6089VdPTu2YE6s4F3gPCNXuE3MH544P2XBwegx9uythq0oqzEpBnp59SDUojP0lurRq5GuFTMB-MRCynO_zNrYsLWJLUK4qyWYLYjLfM8qaUGlaMF-ojIQHRoyX-ZkahnifsoAKuQkvj6_hz001rPa4ojXIoznt-hSxCPaHfWWa2EiVcBANJQ", popular: true },
    { id: "tbf-3", name: "Beer-Battered Onion Rings", price: 5.50, description: "Golden, extra crispy beer-battered sweet onion rings served with BBQ sauce.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_lo2-foa7U2AGW9nqte9X8D3FR9IZkfOWInu45CEnf9V6D6ztRrEntK2jhX6cTiuLnSM7iVBl8tljzljl3bGcOClDYq9igF60f02yDdMJuQ7UfaQ3jQhjp6C5TYu-uBC-S_oajjeKst28AImg8uq6OlgCHyaS95uPP9IyHehetVUNxyFBB17tQESZMSsC6CfpZLHzjoTQD6IE3hDx-752QSL1GfJCpm13aSwQj4jtwJIPquj95TVScwouHm-6e_e3E4PJZ8Y-sw", popular: false }
  ],
  "Citrus & Leaf": [
    { id: "cal-1", name: "Superfood Mediterranean Salad", price: 13.99, description: "Baby spinach, romaine, grilled chicken, kalamata olives, feta, chickpeas, quinoa, lemon-herb vinaigrette.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfGBJvYHdwqRuSd_Javx7hcUaClKp61GaBJtF8gP9VR2L792RBwhX-_fIy7aoP4jfDx8c4T9h-lWOQDT_rePg3misYuPVCKgwOVjBuZZGBqusoWTw7wBOs7TN0opTJIlR39RqiAdpAIr4Ncjzb4bmKFSreAX5fewMmT7_Qkx2Ir1Mbs9igt7mw2guoxPPn7R3nYNgLbtmmmWd0WDS7nZetDG6oqNAZ6Zua-ciDtZJNMwqNr2Bx3f5Y_vFlNAU4oorIPzyj04IgOA", popular: true },
    { id: "cal-2", name: "Roasted Falafel Wrap", price: 11.50, description: "House-made baked herb falafel, organic hummus, cucumber, pickled red onions, tahini drizzle in warm pita.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfGBJvYHdwqRuSd_Javx7hcUaClKp61GaBJtF8gP9VR2L792RBwhX-_fIy7aoP4jfDx8c4T9h-lWOQDT_rePg3misYuPVCKgwOVjBuZZGBqusoWTw7wBOs7TN0opTJIlR39RqiAdpAIr4Ncjzb4bmKFSreAX5fewMmT7_Qkx2Ir1Mbs9igt7mw2guoxPPn7R3nYNgLbtmmmWd0WDS7nZetDG6oqNAZ6Zua-ciDtZJNMwqNr2Bx3f5Y_vFlNAU4oorIPzyj04IgOA", popular: true },
    { id: "cal-3", name: "Warm Hummus Plate", price: 7.99, description: "Creamy traditional hummus topped with roasted pine nuts and olive oil, served with 2 warm pita breads.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2P76RVIAHQags8zZH3F9IsdWQ94suLIaEkrCiPZu5aToxLHz5X-jPepbNmjZB8MGa-zRvvEZT6jjeMVThsWvYhFygoDsnrEpohQn3lPBrAUhHNu8fyarbqBzjo5r9bk5BrPNaCmnT67NrJ1jtkynFfwt-nTuzhxpzLJlzZYQkzK9m5v7Lnfjov6X1T8_dD_rO4d1Kdq71vprJBbzpAb3nTaOA0mZmSwWHDYL_mmm5Lun7FDDuV0zZcyYbVPxv7gN6zUtWFFXPA", popular: false }
  ],
  "Taco Theory": [
    { id: "tt-1", name: "Slow-Braised Beef Birria Tacos", price: 14.50, description: "Three corn tortillas stuffed with braised beef, melted cheese, cilantro, onions, served with rich consomme.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARJrWUTdbPYQkredZz2CJEJXvl34-TWYCLjEaeHrdfYhvtaAVHncdiKi_dL4kHYDaM53JTre9xzs7Y58oGjeeg8JPpDHn8cXZ5a487-Ctg3kHCUlbWN160MeVsS3E27ia8zUvaixAgcqQF2eRniw9D_VQ89swcYz6Y9F2myZcr6Ik9MY-pD5AOMsSXEEdXKhx1GKWed3Ft_pAiHv26pfooeVi8IFWWr4IIz3IIDvsOFfyD_fNdUUm0B2NC3LIfyZjDzEoo0LvUNw", popular: true },
    { id: "tt-2", name: "Crispy Avocado Tacos", price: 12.00, description: "Two warm flour tortillas with beer-battered avocado slices, lime-cilantro crema, shredded cabbage, cotija.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARJrWUTdbPYQkredZz2CJEJXvl34-TWYCLjEaeHrdfYhvtaAVHncdiKi_dL4kHYDaM53JTre9xzs7Y58oGjeeg8JPpDHn8cXZ5a487-Ctg3kHCUlbWN160MeVsS3E27ia8zUvaixAgcqQF2eRniw9D_VQ89swcYz6Y9F2myZcr6Ik9MY-pD5AOMsSXEEdXKhx1GKWed3Ft_pAiHv26pfooeVi8IFWWr4IIz3IIDvsOFfyD_fNdUUm0B2NC3LIfyZjDzEoo0LvUNw", popular: true },
    { id: "tt-3", name: "Cinnamon Sugar Churros", price: 6.50, description: "Four crispy fried dough pastries rolled in cinnamon sugar, served with thick warm cajeta sauce.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARJrWUTdbPYQkredZz2CJEJXvl34-TWYCLjEaeHrdfYhvtaAVHncdiKi_dL4kHYDaM53JTre9xzs7Y58oGjeeg8JPpDHn8cXZ5a487-Ctg3kHCUlbWN160MeVsS3E27ia8zUvaixAgcqQF2eRniw9D_VQ89swcYz6Y9F2myZcr6Ik9MY-pD5AOMsSXEEdXKhx1GKWed3Ft_pAiHv26pfooeVi8IFWWr4IIz3IIDvsOFfyD_fNdUUm0B2NC3LIfyZjDzEoo0LvUNw", popular: false }
  ]
};

function Icon({ children, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}

function Header({ route, onRouteChange, cartCount, cartBump, onCartOpen, theme, onThemeToggle }) {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 dark:bg-zinc-950/80 shadow-sm backdrop-blur-xl border-b dark:border-zinc-900 transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <button className="font-display text-3xl font-black italic text-primary dark:text-primary-container" onClick={() => onRouteChange("home")}>
          CraveDash
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {[
            ["home", "Home"],
            ["browse", "Restaurants"],
            ["checkout", "Checkout"],
          ].map(([id, label]) => (
            <button
              key={id}
              className={`border-b-2 pb-1 text-sm font-bold transition hover:text-primary dark:hover:text-primary-container ${
                route === id ? "border-primary text-primary dark:border-primary-container dark:text-primary-container" : "border-transparent text-on-surface-variant dark:text-zinc-400"
              }`}
              onClick={() => onRouteChange(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-outline-variant dark:border-zinc-800 bg-surface-container-low dark:bg-zinc-900 px-3 py-2 lg:flex">
            <Icon className="text-primary dark:text-primary-container">location_on</Icon>
            <span className="px-1 text-sm font-semibold dark:text-zinc-200">New York, NY</span>
          </div>
          
          {/* Dark Mode Switcher */}
          <button 
            onClick={onThemeToggle}
            className="rounded-full p-2 hover:bg-surface-container-high dark:hover:bg-zinc-800 text-on-surface-variant dark:text-zinc-400 transition"
            aria-label="Toggle dark mode"
          >
            <Icon>{theme === "dark" ? "light_mode" : "dark_mode"}</Icon>
          </button>

          {/* Cart Icon with badge animation */}
          <button 
            className="relative rounded-full p-2 transition hover:bg-surface-container-high dark:hover:bg-zinc-800 text-on-surface-variant dark:text-zinc-400" 
            onClick={onCartOpen} 
            aria-label="Open cart"
          >
            <Icon>shopping_cart</Icon>
            {cartCount > 0 && (
              <span className={`absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary-container text-xs font-bold text-white shadow-sm transition-all duration-300 ${cartBump ? "animate-cart-bump" : ""}`}>
                {cartCount}
              </span>
            )}
          </button>
          <img className="h-10 w-10 rounded-full border-2 border-primary-container object-cover" alt="User profile" src={profileImage} />
        </div>
      </nav>
    </header>
  );
}

function Home({ onRouteChange, onSelectRestaurant }) {
  return (
    <div className="animate-fade-in">
      <section className="relative flex h-[520px] items-center overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover brightness-[0.58]" alt="Burger and fries hero" src={heroImage} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 text-white">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              Fastest delivery for your <span className="text-primary-container">favorite cravings.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-95">Order from over 5,000 restaurants in your city with just one tap.</p>
            <div className="mt-8 flex flex-col gap-2 rounded-xl bg-white dark:bg-zinc-900 p-2 shadow-2xl md:flex-row md:rounded-full border dark:border-zinc-800 transition-colors duration-300">
              <label className="flex flex-1 items-center gap-2 border-b border-outline-variant dark:border-zinc-800 px-4 py-3 md:border-b-0 md:border-r">
                <Icon className="text-primary dark:text-primary-container">location_on</Icon>
                <input className="w-full border-none text-on-surface dark:text-zinc-200 bg-transparent focus:ring-0 text-sm" defaultValue="Downtown Manhattan, NY" aria-label="Delivery address" />
              </label>
              <label className="flex flex-[1.4] items-center gap-2 px-4 py-3">
                <Icon className="text-primary dark:text-primary-container">search</Icon>
                <input className="w-full border-none text-on-surface dark:text-zinc-200 bg-transparent focus:ring-0 text-sm" placeholder="Search food or restaurants" aria-label="Search food" />
              </label>
              <button className="rounded-lg bg-primary-container hover:bg-primary px-8 py-3 font-bold text-white transition duration-200 md:rounded-full" onClick={() => onRouteChange("browse")}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-5">
        <SectionHeading title="What are you craving?" action="View all" onAction={() => onRouteChange("browse")} />
        <div className="hide-scrollbar flex gap-6 overflow-x-auto pb-3">
          {categories.map((category, index) => (
            <button key={category.name} className="category-item text-center flex-shrink-0 group" onClick={() => onRouteChange("browse")}>
              <img className={`mb-2 h-24 w-24 rounded-full object-cover ring-2 transition-transform duration-200 group-hover:scale-105 ${index === 0 ? "ring-primary-container" : "ring-surface-container-high dark:ring-zinc-850"}`} alt={category.name} src={category.image} />
              <span className="font-semibold text-on-surface-variant dark:text-zinc-400 group-hover:text-primary transition">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-5">
        <SectionHeading title="Trending Near You" action="See restaurants" onAction={() => onRouteChange("browse")} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} variant="restaurant-card" onClick={() => onSelectRestaurant(restaurant.name)} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Browse({ onRouteChange, onSelectRestaurant }) {
  const [activeFilters, setActiveFilters] = useState(["$$", "Vegan"]);

  function toggleFilter(filter) {
    setActiveFilters((current) => (current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]));
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 animate-fade-in">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display text-3xl font-black dark:text-white">64 Restaurants nearby</h1>
          <p className="mt-1 text-on-surface-variant dark:text-zinc-400">Filter, compare, and choose tonight's fastest bite.</p>
        </div>
        <label className="flex max-w-md items-center rounded-xl bg-surface-container-high dark:bg-zinc-800 px-4 py-3 border dark:border-zinc-800">
          <Icon className="text-on-surface-variant dark:text-zinc-400">search</Icon>
          <input className="w-full border-none bg-transparent focus:ring-0 text-sm dark:text-zinc-200" placeholder="Search restaurants..." />
        </label>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-64 md:flex-shrink-0">
          <h2 className="mb-3 font-display text-2xl font-bold dark:text-white">Filters</h2>
          <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
            <div className="min-w-max rounded-xl bg-surface-container-low dark:bg-zinc-900 border dark:border-zinc-800 p-2 flex gap-1">
              {["$", "$$", "$$$"].map((price) => (
                <button key={price} className={`filter-chip transition ${activeFilters.includes(price) ? "active-filter" : "dark:text-zinc-400 hover:bg-surface-container-high dark:hover:bg-zinc-800"}`} onClick={() => toggleFilter(price)}>
                  {price}
                </button>
              ))}
            </div>
            {["4.5+", "Vegan"].map((filter) => (
              <button key={filter} className={`pill transition ${activeFilters.includes(filter) ? "active-pill" : "dark:border-zinc-750 dark:text-zinc-300 hover:bg-surface-container-high dark:hover:bg-zinc-800"}`} onClick={() => toggleFilter(filter)}>
                {filter} <Icon className="text-base">{filter === "Vegan" ? "check_circle" : "star"}</Icon>
              </button>
            ))}
            <select className="rounded-xl border-outline-variant dark:border-zinc-800 bg-surface-container-low dark:bg-zinc-900 text-sm dark:text-zinc-350 p-2">
              <option>Any time</option>
              <option>Under 20 min</option>
              <option>Under 30 min</option>
            </select>
          </div>
        </aside>
        <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} restaurant={restaurant} variant="browse-card" onClick={() => onSelectRestaurant(restaurant.name)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Checkout({ cart, currentRestaurant, onPlaceOrder, onRouteChange, promoCodes }) {
  const [payment, setPayment] = useState("visa");

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-16 text-center animate-fade-in">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-low dark:bg-zinc-800 text-on-surface-variant dark:text-zinc-400 text-4xl mx-auto mb-6">
          <Icon className="text-5xl opacity-40">shopping_cart_off</Icon>
        </div>
        <h1 className="font-display text-3xl font-black dark:text-white">Your cart is empty</h1>
        <p className="text-on-surface-variant dark:text-zinc-400 mt-2 max-w-md mx-auto">You don't have any items in your cart to checkout. Browse our selection and add some delicious meals first!</p>
        <button 
          onClick={() => onRouteChange("browse")}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-container hover:bg-primary text-white font-bold px-6 py-3 transition duration-150 shadow-md"
        >
          Browse Restaurants <Icon>restaurant</Icon>
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-black dark:text-white">Review Your Order</h1>
        <p className="mt-1 text-lg text-on-surface-variant dark:text-zinc-400">Check your details before placing your order.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <Panel title="Delivery Address" icon="location_home" iconClassName="text-primary dark:text-primary-container">
            <div className="grid gap-5 md:grid-cols-2">
              <p className="dark:text-zinc-350 text-sm leading-relaxed">
                <strong className="dark:text-white text-base">Home</strong>
                <br />
                4521 Sunset Blvd, Apt 4B
                <br />
                Los Angeles, CA 90027
                <br />
                <em className="text-on-surface-variant dark:text-zinc-400 text-xs">Gate code: 1234. Please leave at the door.</em>
              </p>
              <div className="relative h-36 overflow-hidden rounded-lg border border-outline-variant dark:border-zinc-800">
                <img
                  className="h-full w-full object-cover"
                  alt="Delivery map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeVVtvmDL1Q-7iEzZ7CLhuinqiqOmkQhuGHz9XibLZSSNY5tM1iWCJ_pt2g_v8Me25BAHYL_3ecz86DntqRY8pr-E7mBe_8fxoMN9vlLeoHANhWIoIU3vijMfCjubH4TFolqFPpUE5voCncSgyxP6XNyu9Ylrwj5U6gLrZw3z8qpdMmy9eO1uyx9Y5Yz6y_iDPTrwNsUkTeXrhbgGFXrKS7E_4cmYKAZfb46afaYIiTuy1XQE8m0Zd4v4XOHRh75L6ssb3buaaw"
                />
                <Icon className="absolute inset-0 grid place-items-center text-5xl text-primary-container animate-pulse-ring">location_on</Icon>
              </div>
            </div>
          </Panel>
          <Panel title="Estimated Delivery Time" icon="schedule" iconClassName="text-secondary dark:text-green-400">
            <div className="mt-4 flex items-center rounded-lg border border-secondary-container bg-secondary-container/20 dark:bg-green-950/20 p-4">
              <div>
                <strong className="font-display text-2xl text-secondary dark:text-green-400">25 - 35 min</strong>
                <p className="text-sm text-on-surface-variant dark:text-zinc-400">Fastest delivery from {currentRestaurant}</p>
              </div>
              <Icon className="ml-auto text-5xl dark:text-green-400">delivery_dining</Icon>
            </div>
          </Panel>
          <Panel title="Payment Method" icon="payments" iconClassName="text-primary dark:text-primary-container">
            <div className="grid gap-3 sm:grid-cols-2">
              <PaymentOption id="visa" label="Visa ending in 4242" note="Expires 12/26" icon="credit_card" payment={payment} setPayment={setPayment} />
              <PaymentOption id="apple" label="Apple Pay" note="Secure checkout" icon="apps" payment={payment} setPayment={setPayment} />
            </div>
          </Panel>
        </div>
        <OrderSummary cart={cart} currentRestaurant={currentRestaurant} onPlaceOrder={onPlaceOrder} promoCodes={promoCodes} />
      </div>
    </section>
  );
}

function SectionHeading({ title, action, onAction }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="font-display text-2xl font-bold dark:text-white">{title}</h2>
      <button className="flex items-center gap-1 font-semibold text-primary dark:text-primary-container hover:underline text-sm" onClick={onAction}>
        {action} <Icon className="text-sm">arrow_forward</Icon>
      </button>
    </div>
  );
}

function RestaurantCard({ restaurant, variant, onClick }) {
  return (
    <article className={`${variant} bg-white dark:bg-zinc-900 border dark:border-zinc-800 transition-all duration-200 hover:shadow-lg`} onClick={onClick}>
      <img alt={restaurant.name} src={restaurant.image} />
      <div>
        <h3 className="dark:text-white font-bold leading-tight">{restaurant.name}</h3>
        <p className="text-on-surface-variant dark:text-zinc-400 text-xs mt-1">{restaurant.meta}</p>
        <span className="text-secondary dark:text-green-400 font-bold text-xs mt-2 flex items-center gap-1">
          <Icon className="text-xs">local_shipping</Icon> {restaurant.note}
        </span>
      </div>
    </article>
  );
}

function Panel({ title, icon, iconClassName = "text-primary", children }) {
  return (
    <section className="panel bg-white dark:bg-zinc-900 border dark:border-zinc-800 shadow-sm p-6">
      <div className="mb-4 flex items-center justify-between border-b dark:border-zinc-800 pb-3">
        <h2 className="dark:text-white font-display text-xl font-bold">
          <Icon className={iconClassName}>{icon}</Icon> {title}
        </h2>
        {title !== "Estimated Delivery Time" && <button className="font-semibold text-primary dark:text-primary-container hover:underline text-xs">{title === "Payment Method" ? "Manage" : "Change"}</button>}
      </div>
      {children}
    </section>
  );
}

function PaymentOption({ id, label, note, icon, payment, setPayment }) {
  const selected = payment === id;

  return (
    <label className={`payment-option transition-all border rounded-xl p-4 flex items-center gap-3 cursor-pointer ${selected ? "border-primary dark:border-primary-container bg-primary/5 dark:bg-zinc-850" : "border-outline-variant dark:border-zinc-800 dark:text-zinc-300"}`}>
      <input checked={selected} name="payment" type="radio" className="sr-only" onChange={() => setPayment(id)} />
      <Icon className={selected ? "text-primary dark:text-primary-container" : "text-on-surface-variant dark:text-zinc-400"}>{icon}</Icon>
      <span className="flex-1">
        <strong className="block text-sm dark:text-white font-bold">{label}</strong>
        <small className="block text-xs text-on-surface-variant dark:text-zinc-400 mt-0.5">{note}</small>
      </span>
      {selected && <Icon className="text-primary dark:text-primary-container text-sm">check_circle</Icon>}
    </label>
  );
}

function OrderSummary({ cart, currentRestaurant, onPlaceOrder, promoCodes }) {
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 25 || subtotal === 0 ? 0 : 2.99;
  const serviceFee = subtotal > 0 ? 1.50 : 0;
  const tax = subtotal * 0.088;
  const discountPct = appliedPromo ? (promoCodes[appliedPromo] || 0) : 0;
  const discountAmt = subtotal * (discountPct / 100);
  const total = subtotal - discountAmt + deliveryFee + serviceFee + tax;

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (promoCodes && promoCodes[code]) {
      setAppliedPromo(code);
      setPromoError("");
      setPromoInput("");
    } else {
      setPromoError("Invalid or expired promo code.");
      setAppliedPromo(null);
    }
  }

  return (
    <aside className="lg:col-span-5">
      <div className="sticky top-24 overflow-hidden rounded-2xl border border-outline-variant dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
        <div className="bg-primary p-6 text-white">
          <h2 className="font-display text-2xl font-bold">Order Summary</h2>
          <p className="text-sm opacity-90">From {currentRestaurant}</p>
        </div>
        <div className="space-y-5 p-6">
          <div className="space-y-4 max-h-[240px] overflow-y-auto custom-scrollbar pr-1">
            {cart.map((item) => (
              <div className="order-item flex gap-3 items-center py-2" key={item.id}>
                <img alt={item.displayName || item.name} src={item.image} className="h-12 w-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <strong className="block text-sm truncate dark:text-white leading-tight">{item.displayName || item.name}</strong>
                  <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-0.5">{item.quantity}x • ${(item.price).toFixed(2)}</p>
                </div>
                <span className="font-semibold text-sm dark:text-zinc-200">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Promo Code Input */}
          <div className="border-t border-outline-variant dark:border-zinc-800 pt-4">
            {appliedPromo ? (
              <div className="flex items-center justify-between bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Icon className="text-green-600 dark:text-green-400 text-base">local_offer</Icon>
                  <div>
                    <p className="text-xs font-black text-green-700 dark:text-green-400 uppercase tracking-wider">{appliedPromo} Applied!</p>
                    <p className="text-xs text-green-600 dark:text-green-500">{discountPct}% off your order</p>
                  </div>
                </div>
                <button
                  onClick={() => setAppliedPromo(null)}
                  className="text-xs text-red-500 hover:text-red-700 font-bold transition"
                >Remove</button>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-zinc-400">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={e => { setPromoInput(e.target.value); setPromoError(""); }}
                    onKeyDown={e => e.key === "Enter" && applyPromo()}
                    placeholder="e.g. CRAVE20"
                    className="flex-1 rounded-xl border border-outline-variant dark:border-zinc-700 bg-transparent dark:text-zinc-200 text-sm px-3 py-2.5 focus:ring-1 focus:ring-primary dark:focus:ring-primary-container focus:outline-none transition"
                  />
                  <button
                    onClick={applyPromo}
                    className="bg-primary-container hover:bg-primary text-white font-bold text-sm px-4 py-2.5 rounded-xl transition"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <Icon className="text-xs">error</Icon> {promoError}
                  </p>
                )}
                <p className="text-[10px] text-on-surface-variant dark:text-zinc-500">Try: CRAVE20 · FIRSTORDER · SAVE10</p>
              </div>
            )}
          </div>

          <div className="space-y-2 border-t border-outline-variant dark:border-zinc-800 pt-4 text-on-surface-variant dark:text-zinc-400 text-sm">
            <PriceRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            {appliedPromo && (
              <PriceRow label={`Promo (${appliedPromo})`} value={`-$${discountAmt.toFixed(2)}`} className="font-bold text-green-600 dark:text-green-400" />
            )}
            <PriceRow label="Delivery Fee" value={deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`} className={deliveryFee === 0 ? "font-bold text-secondary dark:text-green-400" : ""} />
            <PriceRow label="Service Fee" value={`$${serviceFee.toFixed(2)}`} />
            <PriceRow label="Estimated Taxes" value={`$${tax.toFixed(2)}`} />
          </div>
          <PriceRow 
            label="Total" 
            value={`$${total.toFixed(2)}`} 
            className="text-primary dark:text-primary-container" 
            rowClassName="border-t border-outline-variant dark:border-zinc-800 pt-4 font-display text-2xl font-bold text-on-surface dark:text-white" 
          />
          <button 
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-container hover:bg-primary py-4 font-display text-xl font-bold text-white shadow-lg transition duration-150 active:scale-95" 
            onClick={onPlaceOrder}
          >
            Place Order <Icon>arrow_forward</Icon>
          </button>
        </div>
      </div>
    </aside>
  );
}

function PriceRow({ label, value, className = "", rowClassName = "" }) {
  return (
    <div className={`price-row flex justify-between items-center ${rowClassName}`}>
      <span className="dark:text-zinc-350">{label}</span>
      <span className={`font-semibold dark:text-zinc-100 ${className}`}>{value}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="hidden border-t border-outline-variant dark:border-zinc-900 bg-surface-container-lowest dark:bg-zinc-950 py-12 md:block transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-black dark:text-white">CraveDash</span>
          <p className="mt-3 text-on-surface-variant dark:text-zinc-400 text-sm leading-relaxed">The city's best restaurants, delivered to your door in minutes.</p>
        </div>
        <FooterColumn title="Company" links={["About Us", "Partner with Us", "Careers"]} />
        <FooterColumn title="Support" links={["Help Center", "Terms of Service", "Privacy Policy"]} />
        <div>
          <h3 className="font-bold dark:text-white">Social</h3>
          <p className="text-on-surface-variant dark:text-zinc-400 text-sm mt-3 leading-relaxed">Share your favorite meals with friends and family.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-bold dark:text-white">{title}</h3>
      <div className="mt-3 space-y-2.5">
        {links.map((link) => (
          <a key={link} href="#" className="block text-on-surface-variant dark:text-zinc-400 hover:text-primary dark:hover:text-primary-container text-sm transition">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileNav({ route, onRouteChange, cartCount, onCartOpen }) {
  const links = [
    ["home", "home", "Home"],
    ["browse", "search", "Search"],
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around rounded-t-xl bg-surface/90 dark:bg-zinc-950/90 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] border-t dark:border-zinc-900 backdrop-blur-md md:hidden transition-colors duration-300">
      {links.map(([id, icon, label]) => (
        <button key={id} className={`mobile-link flex flex-col items-center px-5 py-2 transition-all ${route === id ? "mobile-active text-white" : "text-on-surface-variant dark:text-zinc-455"}`} onClick={() => onRouteChange(id)}>
          <Icon>{icon}</Icon>
          <span className="text-xs font-semibold">{label}</span>
        </button>
      ))}
      <button className="mobile-link flex flex-col items-center px-5 py-2 relative text-on-surface-variant dark:text-zinc-400" onClick={onCartOpen}>
        <Icon>shopping_bag</Icon>
        <span className="text-xs font-semibold">Cart</span>
        {cartCount > 0 && (
          <span className="absolute top-1.5 right-6 flex h-4 w-4 items-center justify-center rounded-full bg-primary-container text-[9px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
}

/* ==========================================
   Toast Notification System
   ========================================== */
function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 bg-zinc-900 dark:bg-zinc-800 text-white px-4 py-3 rounded-2xl shadow-2xl border border-zinc-700 animate-slide-in-right min-w-[280px] max-w-[340px]"
        >
          {toast.image && (
            <img src={toast.image} alt={toast.name} className="h-10 w-10 rounded-lg object-cover flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-green-400 uppercase tracking-wider">Added to Cart</p>
            <p className="text-sm font-semibold truncate mt-0.5">{toast.name}</p>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-zinc-400 hover:text-white transition flex-shrink-0"
            aria-label="Dismiss"
          >
            <Icon className="text-sm">close</Icon>
          </button>
        </div>
      ))}
    </div>
  );
}

/* ==========================================
   Item Customization Modal
   ========================================== */
function CustomizationModal({ item, restaurantName, onClose, onConfirm }) {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addonTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = (item.addons || []).find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const unitPrice = item.price + addonTotal;
  const totalPrice = unitPrice * quantity;

  function toggleAddon(addonId) {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  }

  function handleConfirm() {
    const enrichedItem = {
      ...item,
      price: unitPrice,
      id: `${item.id}-${Date.now()}`,
      customizations: selectedAddons,
      specialInstructions,
      displayName: item.name + (selectedAddons.length > 0 ? ` (+${selectedAddons.length} add-ons)` : ""),
    };
    onConfirm(enrichedItem, restaurantName, quantity);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Panel */}
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden animate-fade-in border dark:border-zinc-800">
        {/* Hero image */}
        <div className="relative h-52 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition"
            aria-label="Close"
          >
            <Icon className="text-sm">close</Icon>
          </button>
          {item.popular && (
            <span className="absolute top-4 left-4 bg-amber-400 text-amber-900 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full">
              🔥 Popular
            </span>
          )}
          <div className="absolute bottom-4 left-5">
            <h2 className="font-display text-2xl font-black text-white leading-tight">{item.name}</h2>
          </div>
        </div>

        <div className="p-5 space-y-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <p className="text-sm text-on-surface-variant dark:text-zinc-400 leading-relaxed">{item.description}</p>

          {/* Add-ons */}
          {item.addons && item.addons.length > 0 && (
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-on-surface dark:text-zinc-200 mb-3">Customize Your Order</h3>
              <div className="space-y-2">
                {item.addons.map(addon => (
                  <label
                    key={addon.id}
                    className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedAddons.includes(addon.id)
                        ? "border-primary dark:border-primary-container bg-primary/5 dark:bg-primary/10"
                        : "border-outline-variant dark:border-zinc-700 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-5 w-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selectedAddons.includes(addon.id)
                          ? "bg-primary dark:bg-primary-container border-primary dark:border-primary-container"
                          : "border-outline-variant dark:border-zinc-600"
                      }`}>
                        {selectedAddons.includes(addon.id) && (
                          <Icon className="text-white text-[10px]">check</Icon>
                        )}
                      </div>
                      <span className="text-sm font-medium dark:text-zinc-200">{addon.label}</span>
                    </div>
                    <span className="text-sm font-bold text-primary dark:text-primary-container">
                      {addon.price === 0 ? "Free" : `+$${addon.price.toFixed(2)}`}
                    </span>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddon(addon.id)}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-on-surface dark:text-zinc-200 mb-2">Special Instructions</h3>
            <textarea
              className="w-full rounded-xl border border-outline-variant dark:border-zinc-700 bg-transparent dark:text-zinc-200 text-sm p-3 resize-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-container focus:outline-none transition"
              rows={2}
              placeholder="Any allergies or special requests? (e.g., no onions, extra spicy)"
              value={specialInstructions}
              onChange={e => setSpecialInstructions(e.target.value)}
            />
          </div>

          {/* Quantity + Add Button */}
          <div className="flex items-center gap-4 pt-1">
            <div className="flex items-center gap-3 rounded-full border-2 border-outline-variant dark:border-zinc-700 px-3 py-2">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="font-black text-primary dark:text-primary-container hover:text-primary-container text-lg w-6 text-center transition"
              >-</button>
              <span className="font-bold text-base dark:text-white w-5 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="font-black text-primary dark:text-primary-container hover:text-primary-container text-lg w-6 text-center transition"
              >+</button>
            </div>
            <button
              onClick={handleConfirm}
              className="flex-1 bg-primary-container hover:bg-primary text-white font-display font-bold text-base py-3 rounded-xl shadow-md transition duration-150 active:scale-95 flex items-center justify-center gap-2"
            >
              <Icon className="text-sm">add_shopping_cart</Icon>
              Add {quantity > 1 ? `${quantity}x ` : ""}for ${totalPrice.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   Post-Delivery Rating Modal
   ========================================== */
function RatingModal({ restaurantName, onClose }) {
  const [foodRating, setFoodRating] = useState(0);
  const [courierRating, setCourierRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function StarRow({ label, rating, setRating }) {
    return (
      <div>
        <p className="text-sm font-bold dark:text-zinc-200 mb-2">{label}</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl transition-transform hover:scale-110 ${
                star <= rating ? "text-amber-400" : "text-zinc-300 dark:text-zinc-600"
              }`}
              aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-10 text-center shadow-2xl border dark:border-zinc-800 max-w-sm w-full animate-fade-in">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="font-display text-2xl font-black dark:text-white">Thank You!</h2>
          <p className="text-on-surface-variant dark:text-zinc-400 mt-2 text-sm">Your review helps us serve you better. Enjoy your meal!</p>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-primary-container hover:bg-primary text-white font-bold py-3 rounded-xl transition"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border dark:border-zinc-800 animate-fade-in overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary-container p-6 text-white">
          <div className="text-4xl mb-2">🍽️</div>
          <h2 className="font-display text-2xl font-black">Rate Your Experience</h2>
          <p className="text-sm opacity-90 mt-1">Order from {restaurantName}</p>
        </div>
        <div className="p-6 space-y-6">
          <StarRow label="How was the food?" rating={foodRating} setRating={setFoodRating} />
          <StarRow label="How was Carlos R. (Courier)?" rating={courierRating} setRating={setCourierRating} />

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 border border-outline-variant dark:border-zinc-700 dark:text-zinc-300 font-bold py-3 rounded-xl hover:bg-surface-container-low dark:hover:bg-zinc-800 transition"
            >
              Skip
            </button>
            <button
              onClick={() => setSubmitted(true)}
              disabled={foodRating === 0 || courierRating === 0}
              className="flex-2 flex-1 bg-primary-container hover:bg-primary text-white font-bold py-3 rounded-xl transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   Restaurant Menu Component
   ========================================== */
function RestaurantMenu({ restaurantName, onBack, onAddToCart, cart, trendingRestaurants, restaurants, onOpenCustomize }) {
  const menuItems = menusByRestaurant[restaurantName] || [];

  return (
    <div className="mx-auto max-w-5xl px-5 py-8 animate-fade-in">
      <button onClick={onBack} className="mb-6 flex items-center gap-1 font-bold text-primary dark:text-primary-container transition hover:text-primary-container">
        <Icon>arrow_back</Icon> Back to Restaurants
      </button>

      {/* Hero Banner card */}
      <div className="relative h-64 overflow-hidden rounded-2xl mb-8 shadow-xl">
        <img 
          src={
            trendingRestaurants.find(r => r.name === restaurantName)?.image || 
            restaurants.find(r => r.name === restaurantName)?.image ||
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5mX-G2Le9tPpAq-neJvwLArGtT5nrffcvBetdQ1SbPjQuBFJXVL3ykDlpYvoSX1u95YFACfUnCg1jblzqVR_pzQJKjXoJ57jeTh79neDroscXQtEr4wuYCmxpprtv4PDZsQNhp5F8X6SnD5hh8gVnPMeaZupniGAAoids0kk4HQE7vWCPkHnaZR831pRmZt7lQpRB5cEvTkYUsHOTcMrE7OjwosVv-dBbL1h0f4LG2UPiOK4RIVcNylZtamfYwJOVX9dezeCVjw"
          } 
          alt={restaurantName} 
          className="h-full w-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="bg-primary-container text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">Featured Partner</span>
          <h1 className="font-display text-4xl font-black mt-2 leading-none">{restaurantName}</h1>
          <p className="mt-2 text-sm text-gray-200">
            {trendingRestaurants.find(r => r.name === restaurantName)?.meta || 
             restaurants.find(r => r.name === restaurantName)?.meta || 
             "Gourmet Cuisine - $$"} 
            &nbsp;•&nbsp; 
            {trendingRestaurants.find(r => r.name === restaurantName)?.note || 
             restaurants.find(r => r.name === restaurantName)?.note || 
             "4.8 Rating"}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Menu items listing */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-display text-2xl font-black mb-4 dark:text-white flex items-center gap-2">
            <Icon className="text-primary">restaurant_menu</Icon> Full Menu
          </h2>

          <div className="space-y-4">
            {menuItems.map((item) => {
              const cartItems = cart.filter(ci => ci.id === item.id || ci.id.startsWith(`${item.id}-`));
              const count = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
              
              return (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-outline-variant bg-white dark:bg-zinc-900 dark:border-zinc-800 shadow-sm transition-all duration-200 hover:shadow-md hover:border-outline cursor-pointer group" onClick={() => onOpenCustomize(item)}>
                  {/* Food image with floating badges */}
                  <div className="relative h-28 w-28 flex-shrink-0 self-center sm:self-auto">
                    <img src={item.image} alt={item.name} className="h-28 w-28 rounded-xl object-cover ring-1 ring-black/5 group-hover:scale-105 transition-transform duration-200" />
                    {item.popular && (
                      <span className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-[9px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded-full shadow-md">🔥 Hot</span>
                    )}
                    {count > 0 && (
                      <span className="absolute -bottom-2 -right-2 h-6 w-6 bg-primary-container text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg">{count}</span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-base dark:text-white leading-tight">{item.name}</h3>
                        {item.addons && item.addons.length > 0 && (
                          <span className="text-[10px] text-on-surface-variant dark:text-zinc-500 flex items-center gap-0.5 whitespace-nowrap mt-0.5">
                            <Icon className="text-xs">tune</Icon> Customizable
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-1.5 leading-relaxed line-clamp-2">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display text-lg font-extrabold text-primary dark:text-primary-container">${item.price.toFixed(2)}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onOpenCustomize(item); }}
                        className="flex items-center gap-1 rounded-full bg-primary-container hover:bg-primary px-4 py-1.5 text-xs font-bold text-white transition duration-150 shadow-sm"
                      >
                        <Icon className="text-sm">add</Icon> {count > 0 ? `Add More` : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="panel bg-white dark:bg-zinc-900 border dark:border-zinc-800 shadow-sm p-5">
            <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2 dark:text-white border-b dark:border-zinc-800 pb-2">
              <Icon className="text-secondary">info</Icon> Restaurant Details
            </h3>
            <ul className="text-sm space-y-3.5 text-on-surface-variant dark:text-zinc-400">
              <li className="flex items-center gap-2.5">
                <Icon className="text-sm text-primary">schedule</Icon>
                <span>Open Daily: 10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon className="text-sm text-primary">delivery_dining</Icon>
                <span>Standard Delivery: $2.99 (Free over $25)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon className="text-sm text-primary">star</Icon>
                <span>Average rating: 4.8 (850+ reviews)</span>
              </li>
            </ul>
          </div>

          <div className="panel bg-primary/5 dark:bg-zinc-900/60 border border-primary/20 rounded-xl p-5">
            <h4 className="font-bold text-primary dark:text-primary-container text-sm uppercase tracking-wider">CraveDash Guarantee</h4>
            <p className="text-xs text-on-surface-variant dark:text-zinc-400 mt-2 leading-relaxed">
              We coordinate directly with our restaurant partners to guarantee your order is fresh, hot, and prepared precisely to specifications. Live GPS tracking is standard on all orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   Cart Drawer Component
   ========================================== */
function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onCheckout, currentRestaurant }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 25 || subtotal === 0 ? 0 : 2.99;
  const serviceFee = subtotal > 0 ? 1.50 : 0;
  const tax = subtotal * 0.088; // 8.8% tax
  const total = subtotal + deliveryFee + serviceFee + tax;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 h-full flex flex-col shadow-2xl animate-slide-in-right z-10 border-l dark:border-zinc-800 transition-colors duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Icon className="text-primary dark:text-primary-container">shopping_bag</Icon>
            <h2 className="font-display text-2xl font-black dark:text-white">Your Cart</h2>
            <span className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-container px-2.5 py-0.5 rounded-full text-xs font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-surface-container-high dark:hover:bg-zinc-800 text-on-surface-variant dark:text-zinc-400 transition"
            aria-label="Close cart drawer"
          >
            <Icon>close</Icon>
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface-container-low dark:bg-zinc-850 text-on-surface-variant dark:text-zinc-400 text-4xl">
                <Icon className="text-5xl opacity-40">shopping_cart_off</Icon>
              </div>
              <div>
                <h3 className="font-bold text-lg dark:text-white">Your cart is empty</h3>
                <p className="text-sm text-on-surface-variant dark:text-zinc-400 mt-1.5 max-w-[240px] mx-auto">Add delicious meals from your favorite restaurants to get started!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-surface-container-low dark:bg-zinc-800/40 p-3 rounded-lg border dark:border-zinc-800 text-xs">
                <p className="text-on-surface-variant dark:text-zinc-350">Ordering from <span className="font-bold text-primary dark:text-primary-container">{currentRestaurant}</span></p>
              </div>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 py-3 border-b dark:border-zinc-800 last:border-0">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-md object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate dark:text-white">{item.name}</h4>
                      <p className="text-xs text-primary dark:text-primary-container font-bold mt-1">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 rounded-full border dark:border-zinc-750 bg-surface-container-low dark:bg-zinc-800 px-2 py-0.5">
                          <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-xs text-on-surface-variant dark:text-zinc-400 hover:text-primary font-bold px-1.5">-</button>
                          <span className="text-xs font-bold w-4 text-center dark:text-white">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-xs text-on-surface-variant dark:text-zinc-400 hover:text-primary font-bold px-1.5">+</button>
                        </div>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -item.quantity)}
                          className="text-xs text-red-500 hover:text-red-700 flex items-center gap-0.5 transition"
                        >
                          <Icon className="text-sm">delete</Icon> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Billing calculations */}
        {cart.length > 0 && (
          <div className="border-t dark:border-zinc-800 p-6 space-y-4 bg-surface-container-lowest dark:bg-zinc-950">
            <div className="text-sm space-y-2 text-on-surface-variant dark:text-zinc-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-on-surface dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                {deliveryFee === 0 ? (
                  <span className="font-bold text-secondary">FREE</span>
                ) : (
                  <span className="font-medium text-on-surface dark:text-white">${deliveryFee.toFixed(2)}</span>
                )}
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span className="font-medium text-on-surface dark:text-white">${serviceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span className="font-medium text-on-surface dark:text-white">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-baseline pt-3 border-t dark:border-zinc-800">
              <span className="font-bold dark:text-white">Total</span>
              <span className="font-display text-2xl font-black text-primary dark:text-primary-container">${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={() => {
                onClose();
                onCheckout();
              }}
              className="w-full bg-primary-container hover:bg-primary text-white font-display font-bold text-lg py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 active:scale-95"
            >
              Checkout <Icon>arrow_forward</Icon>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================
   Order Tracking Component
   ========================================== */
function OrderTracking({ restaurantName, onGoHome }) {
  const [step, setStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(25);
  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => {
        if (s < 4) {
          return s + 1;
        }
        clearInterval(interval);
        setTimeout(() => setShowRating(true), 1500);
        return s;
      });
      setTimeLeft((t) => Math.max(0, t - 8));
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Order Received", desc: "Your order is being reviewed by the restaurant", icon: "receipt_long" },
    { label: "Preparing Food", desc: "The chef is crafting your gourmet meal", icon: "cooking" },
    { label: "On the Way", desc: "Our courier Carlos is cycling to your address", icon: "delivery_dining" },
    { label: "Delivered", desc: "Enjoy your hot meal! Bon appétit!", icon: "sports_bar" }
  ];

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 animate-fade-in">
      <div className="mb-6 flex items-center justify-between border-b dark:border-zinc-800 pb-4">
        <div>
          <span className="text-sm font-bold text-primary dark:text-primary-container uppercase tracking-wider">Live Tracking</span>
          <h1 className="font-display text-4xl font-black mt-1 dark:text-white">Track Your Cravings</h1>
          <p className="text-on-surface-variant dark:text-zinc-400 text-sm mt-1">Order from <span className="font-semibold text-primary dark:text-primary-container">{restaurantName}</span></p>
        </div>
        <button 
          onClick={onGoHome}
          className="rounded-full bg-surface-container-high dark:bg-zinc-850 dark:text-zinc-200 hover:bg-primary-container hover:text-white px-4 py-2 text-sm font-bold transition flex items-center gap-1 shadow-sm"
        >
          <Icon className="text-sm">home</Icon> Go Home
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Left column: Status & driver */}
        <div className="space-y-6 md:col-span-7">
          <div className="panel bg-white dark:bg-zinc-900 border dark:border-zinc-800 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-on-surface-variant dark:text-zinc-400 uppercase font-bold tracking-wider">Estimated Delivery</p>
                <h3 className="font-display text-3xl font-black text-secondary dark:text-green-400 mt-1">{timeLeft} mins remaining</h3>
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container/20 text-secondary dark:text-green-400">
                <span className="absolute inset-0 rounded-full border-2 border-secondary dark:border-green-400 animate-ping opacity-25"></span>
                <Icon className="text-2xl">schedule</Icon>
              </div>
            </div>

            {/* Timeline Progress */}
            <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-highest dark:before:bg-zinc-800">
              {steps.map((s, idx) => {
                const currentIdx = idx + 1;
                const isCompleted = step > currentIdx;
                const isActive = step === currentIdx;
                
                return (
                  <div key={idx} className="relative group">
                    {/* Circle marker */}
                    <div className={`absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-all duration-300 ${
                      isCompleted 
                        ? "bg-secondary border-secondary text-white dark:bg-green-600 dark:border-green-600" 
                        : isActive 
                          ? "bg-primary-container border-primary-container text-white scale-110 shadow-lg" 
                          : "bg-white dark:bg-zinc-900 border-outline-variant dark:border-zinc-700 text-on-surface-variant dark:text-zinc-500"
                    }`}>
                      {isCompleted ? <Icon className="text-[10px]">check</Icon> : currentIdx}
                    </div>

                    <div className={`${isActive ? "translate-x-1" : ""} transition-all duration-300`}>
                      <h4 className={`font-bold font-display ${isActive ? "text-primary dark:text-primary-container text-lg" : isCompleted ? "text-on-surface dark:text-zinc-300" : "text-on-surface-variant dark:text-zinc-500"}`}>
                        {s.label}
                      </h4>
                      <p className="text-sm text-on-surface-variant dark:text-zinc-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Courier profile */}
          <div className="panel bg-white dark:bg-zinc-900 border dark:border-zinc-800 shadow-md flex items-center gap-4 p-5">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtrRPLA_IzyP5hgp3N1FgFeXOA1YVGFlSK3AZtIxvryTMswUagk72xgkn0UGG2mkC2I7pvUkE4DeokAo_dAiFUvBlbMaAqJDc8sgr99Z-B0tLqHeucLVCiXrJ2r6s8gNb0P-QcsbQSP3NPIkEW3vzJfE9xYixlPs5WJ2LcsQ5PJUPHgNgF7xOU5EpED0CUEzVfHjZLkLCVKideigYImQ0QIWKttv8KnmMALjTcHhjQngqJI3MWE9uhAIwEC7_cdTiATqKVuwnAog" 
              alt="Courier" 
              className="h-14 w-14 rounded-full object-cover ring-2 ring-primary-container"
            />
            <div className="flex-1">
              <span className="text-[9px] font-bold uppercase text-primary dark:text-primary-container tracking-wide">Your Courier</span>
              <h4 className="font-display font-black text-lg text-on-surface dark:text-white leading-tight">Carlos R.</h4>
              <p className="text-xs text-on-surface-variant dark:text-zinc-400 flex items-center gap-1 mt-0.5">
                <Icon className="text-amber-500 text-sm">star</Icon> 4.9 (420+ deliveries)
              </p>
            </div>
            <div className="flex gap-2">
              <button className="h-10 w-10 rounded-full bg-surface-container-low dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 flex items-center justify-center transition" aria-label="Call driver">
                <Icon className="text-primary dark:text-primary-container">call</Icon>
              </button>
              <button className="h-10 w-10 rounded-full bg-surface-container-low dark:bg-zinc-800 hover:bg-surface-container-high dark:hover:bg-zinc-700 flex items-center justify-center transition" aria-label="Message driver">
                <Icon className="text-primary dark:text-primary-container">chat_bubble</Icon>
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Animated delivery map */}
        <div className="md:col-span-5">
          <div className="panel bg-slate-100 dark:bg-zinc-950 border dark:border-zinc-800 h-[380px] relative overflow-hidden rounded-xl shadow-md flex flex-col justify-between p-4 transition-colors duration-300">
            {/* Map styling background */}
            <div className="absolute inset-0 bg-cover opacity-90 dark:opacity-30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQeVVtvmDL1Q-7iEzZ7CLhuinqiqOmkQhuGHz9XibLZSSNY5tM1iWCJ_pt2g_v8Me25BAHYL_3ecz86DntqRY8pr-E7mBe_8fxoMN9vlLeoHANhWIoIU3vijMfCjubH4TFolqFPpUE5voCncSgyxP6XNyu9Ylrwj5U6gLrZw3z8qpdMmy9eO1uyx9Y5Yz6y_iDPTrwNsUkTeXrhbgGFXrKS7E_4cmYKAZfb46afaYIiTuy1XQE8m0Zd4v4XOHRh75L6ssb3buaaw')" }}></div>

            <div className="relative z-10 bg-white/95 dark:bg-zinc-900/95 p-3 rounded-lg shadow-sm border dark:border-zinc-800 text-xs w-fit max-w-[220px]">
              <strong className="block text-on-surface dark:text-white">Active Route</strong>
              <span className="text-on-surface-variant dark:text-zinc-400">Courier is {step === 4 ? "arrived" : "en route"}.</span>
            </div>

            {/* Animation path & moving car/bike */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 300" fill="none">
                {/* Dashed Route Path */}
                <path d="M 50,220 Q 120,90 180,180 T 260,80" stroke="#ff5c00" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" className="opacity-80" />
                
                {/* Restaurant Marker */}
                <g transform="translate(50, 220)">
                  <circle r="12" fill="#ff5c00" className="animate-ping opacity-30" />
                  <circle r="6" fill="#ff5c00" />
                </g>

                {/* Destination Marker */}
                <g transform="translate(260, 80)">
                  <circle r="12" fill="#006d37" className="animate-ping opacity-30" />
                  <circle r="6" fill="#006d37" />
                </g>

                {/* Driver icon moving along path */}
                {step < 4 && (
                  <g className="animate-drive absolute">
                    <foreignObject x="60" y="110" width="36" height="36">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white dark:bg-zinc-800 border border-primary dark:border-primary-container shadow-lg text-primary dark:text-primary-container animate-pulse-ring">
                        <Icon className="text-lg">delivery_dining</Icon>
                      </div>
                    </foreignObject>
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom status badge */}
            <div className="relative z-10 mt-auto bg-white/95 dark:bg-zinc-900/95 p-3 rounded-lg shadow-sm border dark:border-zinc-800 text-xs w-full flex items-center justify-between">
              <div>
                <p className="font-bold text-on-surface dark:text-white">Carlos R. (Courier)</p>
                <p className="text-on-surface-variant dark:text-zinc-400 text-[10px]">On bicycle - Speed 12mph</p>
              </div>
              <span className="bg-secondary/15 text-secondary dark:bg-green-950/40 dark:text-green-400 px-2.5 py-0.5 rounded-full font-bold uppercase text-[9px] tracking-wider">
                {step === 4 ? "Delivered" : "On the way"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showRating && (
        <RatingModal restaurantName={restaurantName} onClose={() => { setShowRating(false); onGoHome(); }} />
      )}
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState("home");
  const [cart, setCart] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [activeRestaurant, setActiveRestaurant] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);
  const [orderPlacedRestaurant, setOrderPlacedRestaurant] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [customizingItem, setCustomizingItem] = useState(null);
  const [customizingRestaurant, setCustomizingRestaurant] = useState(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeToggle() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  function handleRouteChange(nextRoute) {
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSelectRestaurant(name) {
    setActiveRestaurant(name);
    handleRouteChange("menu");
  }

  function addToast(item) {
    const id = Date.now();
    setToasts(prev => [...prev.slice(-2), { id, name: item.displayName || item.name, image: item.image }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3500);
  }

  function handleOpenCustomize(item, restaurantName) {
    setCustomizingItem(item);
    setCustomizingRestaurant(restaurantName);
  }

  function handleCustomizeConfirm(enrichedItem, restaurantName, quantity) {
    if (cart.length > 0 && currentRestaurant !== restaurantName) {
      const confirmClear = window.confirm(
        `You have items from "${currentRestaurant}" in your cart. Start fresh from "${restaurantName}"?`
      );
      if (!confirmClear) return;
      setCart([{ ...enrichedItem, quantity }]);
      setCurrentRestaurant(restaurantName);
    } else {
      setCart(prev => [...prev, { ...enrichedItem, quantity }]);
      setCurrentRestaurant(restaurantName);
    }
    addToast(enrichedItem);
    setCartBump(true);
    setTimeout(() => setCartBump(false), 400);
  }

  function handleAddToCart(item, restaurantName, change = 1) {
    if (cart.length > 0 && currentRestaurant !== restaurantName) {
      const confirmClear = window.confirm(
        `You currently have items from "${currentRestaurant}" in your cart. Start a new order from "${restaurantName}" instead?`
      );
      if (!confirmClear) return;
      setCart([{ ...item, quantity: 1 }]);
      setCurrentRestaurant(restaurantName);
    } else {
      setCart((currentCart) => {
        const existingItem = currentCart.find((ci) => ci.id === item.id);
        let nextCart;
        if (existingItem) {
          nextCart = currentCart
            .map((ci) =>
              ci.id === item.id ? { ...ci, quantity: ci.quantity + change } : ci
            )
            .filter((ci) => ci.quantity > 0);
        } else if (change > 0) {
          nextCart = [...currentCart, { ...item, quantity: 1 }];
        } else {
          nextCart = currentCart;
        }
        if (nextCart.length === 0) setCurrentRestaurant(null);
        else setCurrentRestaurant(restaurantName);
        return nextCart;
      });
    }
    if (change > 0) {
      setCartBump(true);
      setTimeout(() => setCartBump(false), 400);
    }
  }

  function handlePlaceOrder() {
    setOrderPlacedRestaurant(currentRestaurant);
    setCart([]);
    setCurrentRestaurant(null);
    handleRouteChange("tracking");
  }

  useEffect(() => {
    document.title = `CraveDash | ${
      route === "browse"
        ? "Restaurants"
        : route === "checkout"
          ? "Checkout"
          : route === "menu"
            ? activeRestaurant
            : route === "tracking"
              ? "Track Order"
              : "Food Delivery App"
    }`;
  }, [route, activeRestaurant]);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background dark:bg-zinc-950 text-on-surface dark:text-zinc-100 transition-colors duration-300 pb-24 md:pb-0">
      <Header 
        route={route} 
        onRouteChange={handleRouteChange} 
        cartCount={totalCartItems}
        cartBump={cartBump}
        onCartOpen={() => setIsCartOpen(true)}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <main className="pb-8">
        {route === "home" && (
          <Home 
            onRouteChange={handleRouteChange} 
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
        {route === "browse" && (
          <Browse 
            onRouteChange={handleRouteChange} 
            onSelectRestaurant={handleSelectRestaurant}
          />
        )}
        {route === "menu" && (
          <RestaurantMenu 
            restaurantName={activeRestaurant}
            onBack={() => handleRouteChange("browse")}
            onAddToCart={handleAddToCart}
            cart={cart}
            trendingRestaurants={trendingRestaurants}
            restaurants={restaurants}
            onOpenCustomize={(item) => handleOpenCustomize(item, activeRestaurant)}
          />
        )}
        {route === "checkout" && (
          <Checkout 
            cart={cart}
            currentRestaurant={currentRestaurant}
            onPlaceOrder={handlePlaceOrder}
            onRouteChange={handleRouteChange}
            promoCodes={{ CRAVE20: 20, FIRSTORDER: 15, SAVE10: 10 }}
          />
        )}
        {route === "tracking" && (
          <OrderTracking 
            restaurantName={orderPlacedRestaurant}
            onGoHome={() => handleRouteChange("home")}
          />
        )}
      </main>
      <Footer />
      <MobileNav 
        route={route} 
        onRouteChange={handleRouteChange} 
        cartCount={totalCartItems}
        onCartOpen={() => setIsCartOpen(true)}
      />
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={(itemId, change) => {
          const item = cart.find(ci => ci.id === itemId);
          if (item) handleAddToCart(item, currentRestaurant, change);
        }}
        onCheckout={() => handleRouteChange("checkout")}
        currentRestaurant={currentRestaurant}
      />
      <ToastContainer toasts={toasts} onDismiss={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
      {customizingItem && (
        <CustomizationModal
          item={customizingItem}
          restaurantName={customizingRestaurant}
          onClose={() => { setCustomizingItem(null); setCustomizingRestaurant(null); }}
          onConfirm={handleCustomizeConfirm}
        />
      )}
    </div>
  );
}
