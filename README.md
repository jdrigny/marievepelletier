# Site — Mariève Pelletier

## Structure du projet

```
index.html
favicon.svg
images/
  portrait.webp
  dit-de-leau-1.webp
  dit-de-leau-2.webp
  the-mountain.webp
  chimigramme.webp
  top-skirt.webp
  etude-atelier.webp
  sans-titre-teinture.webp
  og-image.jpg   (image d'aperçu pour le partage sur les réseaux sociaux)
```

Site 100% statique — aucune installation, aucune dépendance, aucun serveur requis.

## Mettre en ligne : GitHub + Vercel

### 1. Créer le dépôt GitHub

1. Sur [github.com](https://github.com), cliquer sur **New repository**.
2. Nom suggéré : `marieve-pelletier-site` (ou ce que vous voulez).
3. Laisser le dépôt public ou privé, peu importe pour Vercel.
4. Ne pas cocher "Add a README" (on en a déjà un).

Puis, dans ce dossier, en ligne de commande :

```bash
git init
git add .
git commit -m "Site initial"
git branch -M main
git remote add origin https://github.com/VOTRE-NOM/marieve-pelletier-site.git
git push -u origin main
```

(Remplacer l'URL par celle donnée par GitHub après la création du dépôt.)

### 2. Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com) et se connecter avec le compte GitHub.
2. Cliquer sur **Add New → Project**.
3. Choisir le dépôt `marieve-pelletier-site`.
4. Vercel détecte automatiquement un site statique — **ne rien changer** dans les réglages de build (pas de "build command", pas de "output directory" à préciser).
5. Cliquer sur **Deploy**.

Le site est en ligne en moins d'une minute, sur une adresse du type
`marieve-pelletier-site.vercel.app`.

### 3. Brancher le nom de domaine (marievepelletier.com)

Dans le projet Vercel : **Settings → Domains → Add**, entrer `marievepelletier.com`.
Vercel indique alors les enregistrements DNS à ajouter (un enregistrement A ou
CNAME) chez le registrar du domaine (là où le domaine a été acheté). Une fois
les DNS mis à jour (propagation : quelques minutes à quelques heures), le
certificat HTTPS est généré automatiquement par Vercel.

### 4. Mises à jour futures

Toute modification poussée sur la branche `main` (`git push`) redéploie le
site automatiquement — aucune action supplémentaire sur Vercel.

## Modifier le contenu plus tard

- **Texte** : tout est directement dans `index.html`, repéré par des
  balises `data-fr` / `data-en` pour chaque langue.
- **Images** : remplacer le fichier correspondant dans `/images/` en gardant
  le même nom, ou changer le chemin dans `index.html` si le nom change.
- **og-image.jpg** : à mettre à jour si vous voulez une autre image d'aperçu
  pour les partages sur les réseaux sociaux — dimensions recommandées
  1200 × 630 px.
