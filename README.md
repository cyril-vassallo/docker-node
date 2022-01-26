#Étapes pour débuter sur docker
(Retour d’expérience)

En résumé, la documentation de docker est probablement la source la plus utile pour faire ses premiers pas dans docker assorti de quelque tuto vidéo de votre choix. Le seul requis est d’être familiarisé avec un l’environnement Linux.
Je recommande dans un premier temps de se familiariser avec les commandes docker et les Dockerfile avant d’entamer la compréhension du manager de container avec docker-compose.

Voici étapes que j’ai réalisées pour découvrir docker :

    • J’ai installé docker en ligne de commande puis docker-compose (docker desktop pour window et mac)

    • J’ai visionné cette vidéo d’introduction à docker https://youtu.be/iqqDU2crIEQ que j’ai refait à l’identique pour être sûr que rien n’est mal installé sur mon host.

    • Je me suis familiarisé avec la documentation notamment en utilisant la partie Get started et Reference.

    • À partir de ça, j’ai créé ma propre image qui embarque un fichier Javascript qui démarre un petit serveur express  grâce à un Dockerfile  (infinitydevops/express :1.0.3). 

    • Une fois une simple image opérationnelle, je me suis familiarisé avec les lignes de commande docker build et run et leurs paramètres pour construire et mettre en service le container. Je recommande de ne pas hésiter à effacer les container  et les images sans vergogne pour vous aider pour comprendre le mécanisme du build et du run en fonction des paramètres du cli de docker.

    • J’ai ensuite mis mon image en ligne en créant mon compte sur hub.docker.com puis avec la cli docker avec notamment les commande docker login, docker push, docker pull. Le nom de l’image doit être identique au nom du repo sur hub.docker.

    • Une fois une version satisfaisante, j’ai créé un repos github pour versionner le code source de l’image (branche : Tag-1.0.3).

    • J’ai aussi documenté l’utilisation de l’image sur hub.docker  pour m’assurer d’avoir bien compris les étapes du run et du build.  

    • Puis j’ai créé une nouvelle branche git TAG-1.0.6 et une nouvelle image infinitydevops/express:1.0.6 pour faire évoluer l’image, comme: 
        ◦ la réorganisation des fichiers de l’image dans un sous-dossier.
        ◦ l’orchestration du conteneur avec un docker-compose.yml

    • Je me suis reporté à la section Reference  de la doc de docker pour découvrir la syntaxe de docker-compose qui peut être utile pour manager mon image via un docker-compose-yml ou j’y ai ajouté les notions de volume, build, network qui automatise le processus de build et run de l’image

    • Puis j’ai essayé de faire la même chose en intégrant un framework comme Nuxt.js à la place d'express.

    • Maintenant, que je suis familiarisé avec les deux fichiers Dockerfile et docker-compose.yml. L’étape suivante consiste a créer du multi-service en utilisant des images disponibles sur le hub. Comme par exemple un gestionnaire de bases de données, un serveur sql, une version de php. Voir par exemple le repo git public de Laure Christol pour le montage d’une stack symfony4.3  et son environnement dans un container.

    • Enfin, pour poursuivre, je recommande de suivre la section Language-specific getting started guides pour aller plus loin pour un environnement spécifique à un langage

Liens utiles :
• https://github.com/cyril-vassallo/docker-node.git
• https://github.com/cyril-vassallo/docker-node/tree/main/dockerize-express
• https://hub.docker.com/r/infinitydevops/express
• https://github.com/LaureCh/Symfony5.3-Docker
• https://hub.docker.com/
• https://docs.docker.com/get-docker/
• https://docs.docker.com/engine/reference/commandline/
• https://docs.docker.com/reference/
• https://docs.docker.com/language/
