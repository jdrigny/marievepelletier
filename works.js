const WORKS = [
  {src:`images/01_Mille_portraits_pour_le_Millenaire.webp`,alt:`Mille portraits pour le Millénaire`,title:`Mille portraits pour le Millénaire`,fr:`2025, Abbaye aux Hommes, Caen, collectif Surface Sans Cible — artiste choisie pour représenter le millénaire de la ville de Caen`,en:`2025, Abbaye aux Hommes, Caen, Surface Sans Cible collective — artist chosen to represent the city of Caen's millennium`,year:2025},
  {src:`images/02_Installation_au_salon.webp`,alt:`Installation au salon`,title:`Installation au salon`,fr:`2014, installation photosensible au cyanotype sur tissu fleuri, fleurs de colza, roses et oranger du Mexique, 100 × 180 cm`,en:`2014, cyanotype photosensitive installation on floral fabric, rapeseed flowers, roses and Mexican orange blossom, 100 × 180 cm`,year:2014},
  {src:`images/04_Ode_au_printemps.webp`,alt:`Ode au printemps`,title:`Ode au printemps`,fr:`2017, installation photosensible au papier salé et fleurs printanières, 130 × 800 cm, ésam Caen/Cherbourg`,en:`2017, salted-paper photosensitive installation with spring flowers, 130 × 800 cm, ésam Caen/Cherbourg`,year:2017},
  {src:`images/03_Ode_au_printemps_detail.webp`,alt:`Ode au printemps (détail)`,title:`Ode au printemps (détail)`,fr:`2017, installation photosensible au papier salé et fleurs printanières, 130 × 800 cm, ésam Caen/Cherbourg`,en:`2017, salted-paper photosensitive installation with spring flowers, 130 × 800 cm, ésam Caen/Cherbourg (detail)`,year:2017},
  {src:`images/05_Gloves.webp`,alt:`Gloves`,title:`Gloves`,fr:`2016, peinture à l'huile sur toile, 30 × 30 cm`,en:`2016, oil on canvas, 30 × 30 cm`,year:2016},
  {src:`images/06_Fashion_Gloves.webp`,alt:`Fashion Gloves`,title:`Fashion Gloves`,fr:`2017, gants latex usés, fil et tissus (taille XS), dimensions variables`,en:`2017, worn latex gloves, thread and fabric (size XS), dimensions variable`,year:2017},
  {src:`images/07_Vue_expo_table_et_Fashion_Gloves.webp`,alt:`Vue d'exposition`,title:`Vue d'exposition`,fr:`table photographique (panneau de polystyrène au cyanotype) et Fashion Gloves, dimensions variables, ésam Caen/Cherbourg, 2017`,en:`photographic table (cyanotype on polystyrene panel) and Fashion Gloves, dimensions variable, ésam Caen/Cherbourg, 2017`,year:2017},
  {src:`images/08_Ninfa_Fluida.webp`,alt:`Ninfa Fluida`,title:`Ninfa Fluida`,fr:`2017, draps de coton photosensibles, bâche, rideau dentelle, baguette en bois, dimensions variables`,en:`2017, photosensitive cotton sheets, tarpaulin, lace curtain, wooden rod, dimensions variable`,year:2017},
  {src:`images/09_Bain_de_soleil.webp`,alt:`Bain de soleil`,title:`Bain de soleil`,fr:`2017, performance sur serviette photosensible, Playground, ésam Caen/Cherbourg, commissaire Jung Huh`,en:`2017, performance on photosensitive towel, Playground, ésam Caen/Cherbourg, curated by Jung Huh`,year:2017},
  {src:`images/10_Le_drape_photosensible_a.webp`,alt:`Le drapé-photosensible`,title:`Le drapé-photosensible`,fr:`2017, capture d'écran, vidéo de recherche en lien avec Ninfa fluida, essai sur le drapé-désir de Georges Didi-Huberman (Gallimard, 2015). Tissu de coton photosensibilisé au cyanotype, 75 × 300 cm`,en:`2017, screenshot, research video linked to Georges Didi-Huberman's Ninfa fluida (Gallimard, 2015). Cyanotype-sensitized cotton fabric, 75 × 300 cm`,year:2017},
  {src:`images/11_Le_drape_photosensible_b.webp`,alt:`Le drapé-photosensible`,title:`Le drapé-photosensible`,fr:`2017, capture d'écran, vidéo de recherche en lien avec Ninfa fluida, essai sur le drapé-désir de Georges Didi-Huberman (Gallimard, 2015). Tissu de coton photosensibilisé au cyanotype, 75 × 300 cm`,en:`2017, screenshot, research video linked to Georges Didi-Huberman's Ninfa fluida (Gallimard, 2015). Cyanotype-sensitized cotton fabric, 75 × 300 cm`,year:2017},
  {src:`images/12_Anthotype_Dress_a.webp`,alt:`Anthotype Dress`,title:`Anthotype Dress`,fr:`Performance pour les Journées européennes du patrimoine, Archives du Calvados, Caen, 2023. La robe « essuie-main » a servi durant trois journées d'ateliers anthotype avec le public`,en:`Performance for European Heritage Days, Archives du Calvados, Caen, 2023. The "hand-towel" dress was used over three days of anthotype workshops with the public`,year:2023},
  {src:`images/13_Anthotype_Dress_b.webp`,alt:`Anthotype Dress`,title:`Anthotype Dress`,fr:`Performance pour les Journées européennes du patrimoine, Archives du Calvados, Caen, 2023. La robe « essuie-main » a servi durant trois journées d'ateliers anthotype avec le public`,en:`Performance for European Heritage Days, Archives du Calvados, Caen, 2023. The "hand-towel" dress was used over three days of anthotype workshops with the public`,year:2023},
  {src:`images/14_It_took_too_long.webp`,alt:`It took too long`,title:`It took too long`,fr:`2017, installation photosensible d'anthotypes, jus de betterave sur tissu de coton, végétaux collés sur deux fenêtres, 75 × 250 cm, ésam Caen/Cherbourg`,en:`2017, anthotype photosensitive installation, beetroot juice on cotton fabric, plants glued to two windows, 75 × 250 cm, ésam Caen/Cherbourg`,year:2017},
  {src:`images/15_A_laube.webp`,alt:`À l'aube`,title:`À l'aube`,fr:`2018, installation d'anthotypes, jus de betterave sur tissu de coton, dimensions variables, en partenariat avec l'association Le Dit de l'Eau, forêt de Grimbosq`,en:`2018, anthotype installation, beetroot juice on cotton fabric, dimensions variable, in partnership with the association Le Dit de l'Eau, Grimbosq forest`,year:2018},
  {src:`images/16_Burn_Baby_Burn.webp`,alt:`Burn Baby Burn`,title:`Burn Baby Burn`,fr:`2017, installation anthotype au jus de framboise sur soie Chanel, néons ultraviolets, dimensions variables. Présentée lors du diplôme de DNSEP, ésam Caen/Cherbourg — l'une de ses installations favorites`,en:`2017, anthotype installation, raspberry juice on Chanel silk, UV neon lights, dimensions variable. Shown at her DNSEP diploma, ésam Caen/Cherbourg — one of her favourite installations`,year:2017},
  {src:`images/17_Obscurus.webp`,alt:`Obscurus`,title:`Obscurus`,fr:`2017, robe de protection pour papiers photosensibles, tissu occultant, dentelle au crochet, fil`,en:`2017, protective dress for photosensitive papers, blackout fabric, crocheted lace, thread`,year:2017},
  {src:`images/18_Obscurus_detail.webp`,alt:`Obscurus (détail)`,title:`Obscurus (détail)`,fr:`2017, robe de protection pour papiers photosensibles, tissu occultant, dentelle au crochet, fil`,en:`2017, protective dress for photosensitive papers, blackout fabric, crocheted lace, thread (detail)`,year:2017},
  {src:`images/19_La_Montagne.webp`,alt:`La Montagne`,title:`La Montagne`,fr:`2017, huile sur toile de coton, 120 × 120 cm`,en:`2017, oil on cotton canvas, 120 × 120 cm`,year:2017},
  {src:`images/21_Transvidage.webp`,alt:`Transvidage`,title:`Transvidage`,fr:`2017, huile sur toile de coton, 30 × 30 cm`,en:`2017, oil on cotton canvas, 30 × 30 cm`,year:2017},
  {src:`images/22_Vue_datelier_huile_tempera.webp`,alt:`Vue d'atelier`,title:`Vue d'atelier`,fr:`2017, huile et tempera sur toile de lin, 120 × 120 cm`,en:`2017, oil and tempera on linen canvas, 120 × 120 cm`,year:2017},
  {src:`images/23_Le_rideau.webp`,alt:`Le rideau`,title:`Le rideau`,fr:`2020, cyanotype sur drap de coton fleuri, 45 × 75 cm`,en:`2020, cyanotype on floral cotton sheet, 45 × 75 cm`,year:2020},
  {src:`images/24_Anthotype_Bag.webp`,alt:`Anthotype Bag`,title:`Anthotype Bag`,fr:`2025, broderies sur sac de toile de coton, fils de coton, 7 × 12 cm`,en:`2025, embroidery on cotton canvas bag, cotton thread, 7 × 12 cm`,year:2025},
  {src:`images/25_Vue_datelier_autoportrait.webp`,alt:`Vue d'atelier, autoportrait`,title:`Vue d'atelier, autoportrait`,fr:`2019, huile sur toile de coton, 30 × 30 cm`,en:`2019, oil on cotton canvas, 30 × 30 cm`,year:2019},
  {src:`images/26_Au_jardin_vue_de_latelier.webp`,alt:`Au jardin, vue de l'atelier`,title:`Au jardin, vue de l'atelier`,fr:`2026, photographie numérique`,en:`2026, digital photograph`,year:2026},
  {src:`images/27_Into_the_woods.webp`,alt:`Into the woods`,title:`Into the woods`,fr:`2018, cyanotype sur coton, branches d'arbres, 120 × 150 cm`,en:`2018, cyanotype on cotton, tree branches, 120 × 150 cm`,year:2018},
  {src:`images/28_Diffractions.webp`,alt:`Diffractions`,title:`Diffractions`,fr:`2021, installation, collectif À Venir, Art au Centre, Liège, Belgique`,en:`2021, installation, À Venir collective, Art au Centre, Liège, Belgium`,year:2021},
  {src:`images/29_Diffractions_detail.webp`,alt:`Diffractions (détail)`,title:`Diffractions (détail)`,fr:`2021, procédé au bleach sur coton teint, 200 × 350 cm`,en:`2021, bleach process on dyed cotton, 200 × 350 cm (detail)`,year:2021},
  {src:`images/30_Lilas.webp`,alt:`Lilas`,title:`Lilas`,fr:`2020, étude d'image en insolation (procédé au lumen), châssis-presse 1850`,en:`2020, insolation study (lumen process), 1850 press-frame`,year:2020},
  {src:`images/31_Les_petites_mains_a.webp`,alt:`Série Les petites mains`,title:`Série Les petites mains`,fr:`2025, huile sur toile de coton, 30 × 30 cm`,en:`2025, oil on cotton canvas, 30 × 30 cm`,year:2025},
  {src:`images/32_Les_petites_mains_b.webp`,alt:`Série Les petites mains`,title:`Série Les petites mains`,fr:`2025, huile, vernis à ongles sur toile de coton, 30 × 30 cm`,en:`2025, oil and nail polish on cotton canvas, 30 × 30 cm`,year:2025},
  {src:`images/33_Vue_datelier_photo_numerique.webp`,alt:`Vue d'atelier`,title:`Vue d'atelier`,fr:`2026, photographie numérique`,en:`2026, digital photograph`,year:2026},
  {src:`images/34_Apparition_disparition.webp`,alt:`Apparition/disparition`,title:`Apparition/disparition`,fr:`workshop réalisé avec l'artiste Pierre Tatu, ésam Caen/Cherbourg, hiver 2017`,en:`workshop with artist Pierre Tatu, ésam Caen/Cherbourg, winter 2017`,year:2017},
  {src:`images/35_Its_over.webp`,alt:`It's over`,title:`It's over`,fr:`2023, huile sur toile, 30 × 30 cm`,en:`2023, oil on canvas, 30 × 30 cm`,year:2023}
];

function plateHTML(w){
  return `<div class="plate">
    <img onclick="openLightbox(this)" src="${w.src}" alt="${w.alt}">
    <div class="plate-cap"><span class="t">${w.title}</span> — <span data-fr>${w.fr}</span><span data-en>${w.en}</span></div>
  </div>`;
}

function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderCatalogue(){
  const el = document.getElementById('catalogue-plates');
  const sorted = WORKS.slice().sort((a,b) => (b.year||0) - (a.year||0));
  let html = '';
  let currentYear = null;
  sorted.forEach(w => {
    if(w.year !== currentYear){
      currentYear = w.year;
      html += `<div class="year-marker">${currentYear || ''}</div>`;
    }
    html += plateHTML(w);
  });
  el.innerHTML = html;
}

let _carouselItems = [];
let _carouselIdx = 0;

function renderHomeCarousel(year){
  const track = document.getElementById('carousel-track');
  const capEl = document.getElementById('carousel-cap');
  const items = WORKS.filter(w => w.year === year);
  if(items.length === 0){
    capEl.innerHTML = '';
    return;
  }
  _carouselItems = items;
  _carouselIdx = 0;
  track.innerHTML = items.map(w =>
    `<div class="c-slide"><img style="cursor:pointer;" src="${w.src}" alt="${w.alt}"></div>`
  ).join('');
  const imgs = track.querySelectorAll('img');
  imgs.forEach(img => img.addEventListener('click', () => {
    stepCarousel(1);
  }));
  updateCarousel();
}

function updateCarousel(){
  const track = document.getElementById('carousel-track');
  const capEl = document.getElementById('carousel-cap');
  if(!track || !capEl || _carouselItems.length === 0) return;
  const w = _carouselItems[_carouselIdx];
  capEl.innerHTML = `<span class="t">${w.title}</span> — <span data-fr>${w.fr}</span><span data-en>${w.en}</span>`;
  track.style.transform = `translateX(-${_carouselIdx * 100}%)`;
}

function stepCarousel(direction){
  if(_carouselItems.length === 0) return;
  _carouselIdx = (_carouselIdx + direction + _carouselItems.length) % _carouselItems.length;
  updateCarousel();
}
