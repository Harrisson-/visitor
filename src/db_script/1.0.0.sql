CREATE DATABASE visitor_artwork;

CREATE TABLE artwork (
    id SERIAL,
    ark_id VARCHAR(40),
    titre: VARCHAR(40),
    Description VARCHAR(40)
    creation_date Date | string,
    discover_place INTEGER REFERENCES place(id),
    date_update: Date,

    /* TODO START */
    inscription écriture: [] => renvoit à une table écriture
    inscription nature: [] => renvoit à une table Nature du texte 
    
    numéro principal : string
    numéro ancienne collection: string
    
    "Noms et titres" (deep description maybe)
    hauteur:
    largeur:
    profondeur?:

    matériau: [] => renvoit à une table materiaux
    Couleur: [] => renvoit à une table couleur

    détenteur précédent / commenditaire/dédicataire: [] => renvoit à une table propriétaire
    Mode d’acquisition: string | enum
    Date d’acquisition Date

    Emplacement actuel: VARCHAR(40),

    catégories INTEGER[] REFERENCES category(id),
    notice lié INTEGER[] REFERENCES artwork(id),

    Lieux et dates : {
        Date de création / fabrication:
        Lieu de découverte:
    }
    Index: {
        les autre informations (iconographie..ect ) on l’air d’être généré via des sous ensemble avec des liens envoyant des recherche avec une query standard q=””, soit font parties, soit sont entré manuellement. mis à part relancer des recherche, aucun lien avec d’autres tables.
    }
    bibliography : {
        à voir plus tard: juste du text dans un accordéons mais possibilité d’avoir une table dédié pour relier les oeuvres d’un même livre entre elles
    }
    /* TODO END */

);

CREATE TABLE écriture (
    id SERIAL,
    name: VARCHAR(40)
)

CREATE TABLE Nature du texte (
    id SERIAL,
    name: VARCHAR(40)
)

CREATE TABLE materiaux (
    id  SERIAL,
    name: VARCHAR(40)
)

CREATE TABLE couleur (
    id SERIAL,
    name: VARCHAR(40)
)

CREATE TABLE lieu (
    id SERIAL,
    name: VARCHAR(40),
    coordinate_lat INTEGER,
    coordinate_lon INTEGER
)

CREATE TABLE propriétaire (
    id SERIAL,
    name: VARCHAR(40)
)

CREATE TABLE category (
    id SERIAL,
    name: VARCHAR(40)
)
