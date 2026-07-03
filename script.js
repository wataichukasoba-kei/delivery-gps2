const DB_NAME = "RouteMind";
const DB_VERSION = 1;
const STORE_NAME = "gpslogs";

let db;
function initDB(){

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = function(event){

        db = event.target.result;

        if(!db.objectStoreNames.contains(STORE_NAME)){

            db.createObjectStore(STORE_NAME,{
                keyPath:"id",
                autoIncrement:true
            });

        }

    };

    request.onsuccess=function(event){

        db=event.target.result;

        console.log("RouteMind DB 接続成功");

    };

    request.onerror=function(){

        console.log("DB接続失敗");

    };

}
initDB();