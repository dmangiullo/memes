<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/dexie@latest/dist/dexie.js"></script>
        <script>
            var db = new Dexie("friend_database");
            db.version(1).stores({
                friends: 'name, shoeSize'
            });
            db.friends.put({name: "Nicolas", shoeSize: 8});
            db.friends.put({name: "Maria", shoeSize: 6}).then (function(){
                return db.friends.get('Maria');
            }).then(function (friend) {
                alert (friend.name + " has shoe size " + friend.shoeSize);
            }).catch(function(error) {
                alert ("Error code:" + error);
            });
        </script>
    </head>
</html>