# Alkalmazások fejlesztése 3. beadandó (ember rész)
- [Leírás](https://github.com/bebe11/beadando-ember#leírás)
- [Követelmények](https://github.com/bebe11/beadando-ember#követelmények)
- [Technológiák](https://github.com/bebe11/beadando-ember#technológiák)
- [Végpontok](https://github.com/bebe11/beadando-ember#végpontok)
- [Modellek](https://github.com/bebe11/beadando-ember#modellek)
- [Folyamatok](https://github.com/bebe11/beadando-ember#folyamatok)
- [Felhasználói interfész](https://github.com/bebe11/beadando-ember#interfész)
- [Adatok ellenőrzése](https://github.com/bebe11/beadando-ember#Adatok ellenőrzése)


##Leírás
Ezt a projektet az ELTE-IK programtervező informatikus Bsc szak Alkalmazások fejlesztése tárgy harmadik
beadandójaként készítettem. Egy tárgyfelvétel nyilvántartó programot készítettem, ahol meglehet nézni az 
aktuális tárgyainkat, illetve profilunkat.


##Követelmények

Funkcionális elvárások

    Felhasználóként szeretnénk felvenni egy tárgyat --> új tárgy felvétel
    Felhasználóként szeretnénk megtekinteni, szerkeszteni, törölni a tárgyakant

Nem funkcionális követelmények

    Felhasználóbarát, ergonomikus elrendezés és kinézet.
    Gyors működés.
    Funkciókhoz való hozzáférés.


##Technológiák
A project javascript-ben azon belül pedig ember.js-es technológiával valósítottam meg, a megjelenítéshez
a handlebars fájlok felelnek az adatbázist pedig egy restapi-s workspace biztosítja.
 

##Végpontok

 * főoldal: http://beadando-ember-bebe11.c9users.io:8080/
 * tárgylista: /subjects/list
 * tárgy megtekintése: /subjects/subject_id
 * tárgy szerkesztése: /subjects/edit/subject_id
 * tárgy felvétele: /subjects/new
 * profil: /profile
 


##Modellek
![Adatbázis modell](https://github.com/bebe11/beadando-ember/blob/master/nomnoml.png)

Itt egy kép látható az adatbázis modellről. Az subject modell tükrözi a user akinek egy egyedi adattagja van,
az id-ja, tehát két ugyanolyan objektum nem lehet az adatbázisban. Lehet sok user , mindegyikhez lehetnek
tárgyak hozzárendelve, ez a subject adattag, egy tárgyakat tartalmazó tömb, ezeket látja a felhasználó kilistázva a
subjects/list oldalon. 

##Folyamatok
![Adatbázis modell](https://github.com/bebe11/beadando-ember/blob/master/Névtelen1.png)


##Interfész
![Adatbázis modell](https://github.com/bebe11/beadando-ember/blob/master/Névtelen.png)

Röviden a felhasználói interfészről. A jobb felső sarokban vannak a linkek, a főoldal link értelemszerüen az index.html-re visz,
a tárgyak link a tárgyak listázó oldalára, a profil pedig a user oldalra.


##Adatok ellenőrzése
Mikor új adatokat akarunk felvinni, a validator mindig figyeli, hogy az input mezők ne legyenek üresek, figyelmeztet az esetleges
hibákra, és ajánlott értékeket ír az üres input mezőkre.

##Fejlesztés és felhasználás


Én a cloud9 webes felüleletet használtam a projekt megírásához Windows-on. Ha valaki folytatni szeretné,
akkor egyszerüen csak le kell töltenie, és a saját cloud9 projektjébe importálnia. Cloud9 használata esetén az npm install utasítás bash-beli futtása kell először a működéshez, majd a ./node_modules/.bin/ember serve parancs és a restapi-s projektben pedig, a server.js futtaására van szükség.

A fejlesztés zökkenőmentes menetéhez szükség lesz 2GB memóriára és valamilyen 2 magos processzorra minimum.


##Funkció lista 


- user, subject egyedi az id alapján, csak egy lehet mindegyikből
- tárgylistázó oldal müködik
- Szerkesztés/Törlés/Hozzáadás funkció müködik

További fejlesztési lehetőség:
- többféle tesztelési és validációs lehetőség implementálása
- login, regisztráció implementálása

