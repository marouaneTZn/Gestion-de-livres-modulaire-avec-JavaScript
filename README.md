# Book Manager | Gestion de Livres

## Présentation du projet

**Book Manager** est une application web de gestion de livres développée avec **HTML, CSS et JavaScript ES6+**.

Cette application permet aux utilisateurs de gérer leur collection personnelle de livres à travers une interface simple, intuitive et responsive.

Le projet repose sur une architecture JavaScript modulaire et fonctionne entièrement côté client, sans backend ni base de données externe. Les données sont sauvegardées localement grâce à l'API **localStorage**.

Ce projet est réalisé dans le cadre de la formation **Développement Web et Web Mobile à YouCode**.

## 🎯 Objectifs du projet

- Développer une Single Page Application (SPA).
- Maîtriser la manipulation du DOM et la gestion des événements.
- Implémenter les opérations CRUD en JavaScript.
- Utiliser les fonctionnalités modernes de JavaScript ES6+.
- Organiser le code en modules réutilisables.
- Assurer la persistance des données avec localStorage.
- Appliquer un workflow Git professionnel avec des branches et des Pull Requests.

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| ➕ Ajouter un livre | Ajouter un nouveau livre à la collection. |
| 📖 Afficher les livres | Consulter tous les livres enregistrés. |
| ✏️ Modifier un livre | Mettre à jour les informations d'un livre. |
| 🗑️ Supprimer un livre | Supprimer un livre après confirmation. |
| 🔍 Rechercher | Rechercher un livre par titre ou auteur. |
| 🔃 Trier | Trier les livres par titre, auteur ou année. |
| 💾 Sauvegarder | Conserver les livres grâce à localStorage. |
| 📱 Responsive | Adapter l'interface aux différents écrans. |

## 📋 Informations d'un livre

Chaque livre possède les propriétés suivantes :

| Propriété | Type | Description |
|---|---|---|
| `id` | String | Identifiant unique du livre. |
| `title` | String | Titre du livre (obligatoire). |
| `author` | String | Auteur du livre (obligatoire). |
| `year` | Number | Année de publication (optionnelle). |
| `genre` | String | Genre littéraire (optionnel). |
| `description` | String | Description du livre (optionnelle). |
| `status` | String | Statut de lecture. |

**Statuts disponibles :**

- 📌 `to-read` : À lire
- 📖 `reading` : En cours de lecture
- ✅ `read` : Terminé

## 🛠️ Technologies utilisées

- **HTML5** : Structure de l'application.
- **CSS3** : Mise en page et design responsive.
- **JavaScript ES6+** : Logique et fonctionnalités de l'application.
- **ES6 Modules** : Organisation et modularité du code.
- **localStorage** : Stockage persistant des livres.
- **Git & GitHub** : Gestion des versions.
- **GitHub Projects** : Organisation des tâches avec Kanban.
- **GitHub Pages** : Hébergement de l'application.

## 🏗️ Architecture du projet

```text
book-manager/
│
├── index.html
├── style.css
│
├── js/
│   ├── main.js
│   ├── books.js
│   ├── ui.js
│   ├── storage.js
│   └── utils.js
│
└── README.md
```

### Organisation des modules

- **main.js** : Initialisation de l'application et gestion des événements.
- **books.js** : Gestion des données et opérations CRUD.
- **ui.js** : Manipulation du DOM et affichage dynamique des livres.
- **storage.js** : Sauvegarde et récupération des données dans localStorage.
- **utils.js** : Fonctions utilitaires et validation des données.

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/VOTRE-USERNAME/book-manager.git
```

### 2. Accéder au dossier du projet

```bash
cd book-manager
```

### 3. Lancer l'application

Ouvrir le projet dans Visual Studio Code, puis démarrer un serveur local, par exemple avec l'extension **Live Server**.

L'application fonctionne directement dans le navigateur et ne nécessite aucune installation de dépendances.

## 💾 Persistance des données

L'application utilise **localStorage** afin de conserver les livres ajoutés par l'utilisateur.

Les données sont :

1. Converties au format JSON avec `JSON.stringify()`.
2. Sauvegardées dans le navigateur avec `localStorage.setItem()`.
3. Récupérées avec `localStorage.getItem()`.
4. Converties en objets JavaScript avec `JSON.parse()`.

Les livres restent disponibles après l'actualisation de la page ou la fermeture du navigateur, tant que les données locales ne sont pas effacées.

## 🌿 Workflow Git

Le développement du projet suit un workflow basé sur les branches de fonctionnalités.

**Branches principales :**

```text
main
│
├── feature/us-01-add-book
├── feature/us-02-list-books
├── feature/us-03-search-sort
├── feature/us-04-edit-book
├── feature/us-05-delete-book
└── feature/us-06-storage
```

Chaque fonctionnalité est développée dans une branche dédiée, puis intégrée à la branche `main` à travers une Pull Request.

Le suivi des tâches est effectué sur un tableau Kanban.

## 🧪 Tests fonctionnels

Les tests manuels permettent de vérifier :

- La validation des champs obligatoires.
- L'ajout et l'affichage des livres.
- La modification des informations.
- La confirmation avant suppression.
- Le fonctionnement de la recherche et du tri.
- La conservation des données après actualisation.
- Le bon fonctionnement sur différentes tailles d'écran.

## 🔗 Démonstration

**Application en ligne :** [Voir le projet](https://VOTRE-USERNAME.github.io/book-manager/)

**Dépôt GitHub :** [Code source](https://github.com/VOTRE-USERNAME/book-manager)

## 👨‍💻 Auteur

**Marouane Touzani**

Étudiant en Développement Web et Web Mobile à **YouCode, Nador**.

## 📄 Licence

Projet pédagogique réalisé dans le cadre de la formation YouCode.
