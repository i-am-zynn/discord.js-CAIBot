module.exports = class Hsl {
    static match(message) {
        return message.content.startsWith('DetectionHSL');
    }
    static action(message) {
        message.channel.send('Pour facilité de dépannage, Woomy4680_exe#6538 a créer un script qui récupère les informations de votre ordinateur. Il est en téléchargement sur GitHub : \nhttps://github.com/Woomy4680-exe/DetectionHSL \n \nIl suffit de lancer `Start_hsl.cmd` en tant qu\'administrateur et d\'attendre que le script fasse son travail. \nA la fin du processus, il faut nous envoyer le ZIP contenant les dossiers créés par le script. \n \n__**/!\ Si vous êtes sous Windows, il se peut que Windows Defender vous bloque le fichier en vous disant qu\'il n\'est pas décurisé. \nCela a déjà été vérifier par le staff, votre ordinateur n\'aura aucun problème. Vous devrez vous diriger dans "Informations complémentaires" et passer la sécurité de Windows Defender. /!\**__')

        .then(console.log('Commande hsl exécutée par' + ' ' + message.author.username))
        .catch(console.error(error) && console.error(message.author.username + ' ' + 'a tenté d\'exécuter la commande hsl mais cela n\'a pas fonctionné'))
    }
}