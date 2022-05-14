/* Scripts des Compendiums FR de Toc pour le système CoC7 pour Foundry VTT */

// auto réduit la barre de macros
function collapse(toggleId) {
  let target = document.getElementById(toggleId);
  if (target) {
    target.click()
  }
}


Hooks.on('renderJournalSheet', (app, html, options) => {
  // lien direct vers un compendium
  html.on('click', 'a.pack-link', (event) => {
    const anchorElem = event.currentTarget;
    const packName = anchorElem?.dataset?.packName;
    const pack = game.packs.get(packName);
    if ( pack ) {
      pack.render(true);
    }
  })
})