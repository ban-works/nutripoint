Partie théorique (15 min)

- Qu'est-ce qu'Express.js et comment fonctionne-t-il ?
Express.js est un Framewwork node.js permettant de créer des applications web.
Il fournit tout un lot de fonctionnalités pour gérer des routes, des vues, des sessions, des cookies et des requêtes HTTP.
Ce framework est très populaire pour créer des API REST en javascript

- Comment définir une route dans Express ?
Il faut utiliser les méthodes fournies get(), post(), put(), delete() qui correspondent aux requêtes HTTP.
Ces fonctions prennent au minimum 2 paramètres : req (request) et res (response).

- Comment passer des paramètres de requête et de corps (body) dans Express ?
On se base su l'objet req, contenant plusieurs clés dont :
req.bod (corps), req.query(paramètres), req.params(variables), req.files(fichiers), req.headers(headers de la requête), etc...

- Comment gérer les erreurs dans Express ?
Nous pouvons utiliser les middlewares d'erreur et/ou inclure des try{}catch{}.

- Quelles sont les différences entre une application Node.js mono-thread et multi-thread ?
Dans une application mono-thread, toutes les requêtes sont traitées par le même thread, ce qui peut provoquer des latences lorsque des opérations lourdes sont effectuées.
Dans une application multi-thread, les tâches peuvent être réparties sur différents thread, résulant en moins de latence.