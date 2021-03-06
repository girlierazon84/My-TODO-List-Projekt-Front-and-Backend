# My-TODO-List-Front-and-Backend

##### Inlämningsuppgift Webbserverprogrammering 1
##### Inlämningsdatum: 2021-September-26

## Lösningar:

### Backend
#### På det här projektet använder jag dessa följande:
1. `Node.js`, som är en öppen källkod och plattformskörningstid som används vid körning av JavaScript-kod på serversidan.
2. `Express`. Det är ett "Node.js" webbramverk för routing och mellanprogram som har minimal egen funktionalitet. Det låter man strukturera en webbapplikation för att hantera flera olika "http requests" på en specifik webbadress. Det låter man konfigurera och hantera en HTTP-server för att komma åt resurser från samma domän. Till exempel, i början har jag skapat dessa följande:
   - `app.listen()` funktion, som jag har lagt till i sist i "Server.js" fil för att andra funktioner som t.ex. "app.post(), app.get(), app.put() och app.delete()" ska fungera. "App.listen()" funktionen används för att binda och lyssna på anslutningarna på den angivna värden och porten.
        - t.ex. `app.listen ( port, () => {
          console.log ( `The server is running on port ${ port }` )
          } )`
   - `app.get()` funktion för att kontrollera att mitt API lever.
        - t.ex. `app.get ( '/', function ( req, res ) {
          res.send ( 'My API is Alive!' )
          } )`
   ### Problem:
        - "Request" om externt ursprung misslyckades.
   ### Lösning: 
        - Installera "cors" och konfigurera det med express
4. `Cors`. Det menar "Cross-Origin Resource Sharing". Det låter man göra förfrågningar från en webbplats till en annan webbplats i webbläsaren, vilket normalt är förbjudet av en annan webbläsarpolicy som kallas "Same-Origin Policy (SOP)". Genom att implementera det i "Node.js" får man tillgång till många funktioner i webbläsaren.
    - Jag har använt ett speciellt värde, stjärna `*` i `Access-Control-Allow-Origin`, vilket innebär att tillåta alla ursprung att få tillgång resursen.
    - Sen har jag specificerat vilka metoder som jag ska använda. I detta fall har jag använt `GET, POST, PUT, DELETE`.
        - t.ex. `app.use ( cors ( {
          origin: '*',
          methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
          } ) )`
5. `DotEnv`. Det är ett säkert sätt att hantera privata data eftersom det låter dig skilja hemligheter från din källkod. Detta är användbart i en samarbetsmiljö där du kanske inte vill dela dina inloggningsuppgifter för databasen med andra människor. Istället kan du dela källkoden samtidigt som andra människor kan skapa sin egen. Det skjuts inte till din repo, d.v.s. github eller bitbucket eller någonstans där du lagrar din kod. På så sätt avslöjas det inte.

### Frontend 
#### På det här projektet har jag använt dessa följande "dependencies":
1. `React`. Det är ett JavaScript-bibliotek med öppen källkod som används för att bygga användargränssnitt specifikt för enkelsidiga applikationer. Det används för att hantera visningsskiktet för webb-och mobilappar. Det låter man också skapa återanvändbara UI - komponenter.
2. `useState`. Det är en "Hook" som låter man lägga till "React state" variabler i funktionskomponenter.
    - t.ex. `const [ toDo, setToDo ] = useState ()`
3. `Axios`. Det är ett Javascript-bibliotek som används för att göra enkelt att skicka asynkrona "HTTP-förfrågningar" till "REST-slutpunkter" och utföra CRUD-operationer. Det serialiserar `put()` objekt till JSON med hjälp av `JSON.stringify()` - funktionen. 
    - t.ex. `function updateMyToDoList ( listId, listTodo, listStatus, listAssignedTo ) {
      console.log ( listId, listTodo, listStatus, listAssignedTo )
      const payload = {
      "id": listId,
      "todo": listTodo,
      "status": listStatus,
      "assignedTo": listAssignedTo,
      }
      console.log ( payload )
      http.put ( '/MyToDoLists', payload )
      .then ( function ( response ) {
      console.log ( response.data )
      } )
      .catch ( function ( error ) {
      console.log ( error )
      } )
      }`
4. `react-json-to-table`. Det är en "React-bibliotek" som används för att konvertera JSON till HTML table. Jag har använts den för att minska tiden på kodning tråkiga "`<tr>, <td>`".
    - t.ex. `import { JsonToTable } from 'react-json-to-table';`
    
### Test API
#### Jag har använt `Insomnia` som min "REST client" för att testa mitt `API` eftersom det har minimalistisk, söt och enkel användargränssnitt och den kan dra svarsdata för en begäran och mata in den i nästa förfrågan.
1. 



## Steg:

#### GIT

1. Skapa ett nytt github repository med namn `My-TODO-List-Projekt-Front-and-Backend`
2. Skapa en `README` och `gitignore` filer
3. Skapa en generad gitignore fil från `https://www.toptal.com`
4. Klona `My-TODO-List-Projekt-Front-and-Backend` github repository på github desktop


#### BACKEND

1. Öppna `My-TODO-List-Projekt-Front-and-Backend` mappen på `Webstorm` och skapa en mapp med namn `backend`
2. Ändra `local terminal` namn till `Backend`
3. Skriv `cd backend` i lokal terminalen för att ändra directory till backend
4. Skriv `npm init -y` i lokal terminalen för att skapa `package.json` fil
5. Öppna `package.json` och redigera `name`, `description`, `type`, `keywords` och `author`
6. Installera Express genom att skriva `npm install express` i terminalen
7. Installera Nodemon genom att skriva `npm install -D nodemon` i terminalen
8. Installera Dotenv genom att skriva `npm install dotenv` i terminalen
9. Installera Cors genom att skriva `npm install cors` i Backend terminalen
10. `Commit` och `Push` alla ändringar på github
11. Skapa en javascript fil som kallas `Server.js`
12. Skapa en `.env` fil och skriv portens nummer som ska användas som t.ex. "PORT=3001"
13. Skapa `.env_template` fil
14. Importera `express` i `Server.js` fil
15. Importera `dotenv` i `Server.js` fil
16. Importera `cors` i `Server.js` fil
17. Konfigurera Express genom att skriva `const app = express ()` i Server.js fil
18. Konfigurera Dotenv genom att skriva den följande i Sever.js fil:
    - `dotenv.config ()`
    - `const port = process.env.PORT`
19. Konfigurera och aktivera Cors genom att skriva den följande i Sever.js fil:
    - `app.use ( cors ( {
      origin: '*',
      methods: [ 'GET', 'POST', 'PUT', 'DELETE' ]
      } ) )`
    - `app.use ( express.urlencoded ( { extended: false } ) )`
    - `app.use ( express.json () )`
20. Skapa en funktion som kallas `app.listen` i Server.js och lägg till i sist
21. Skriv `npx nodemon Server.js` för att starta eller öppna servern till porten som ska användas
22. Kontrollera att APIet lever genom att göra en "request", en "app.get" funktion som ska skicka ett meddelande `My API is Alive!` 
23. Skriv `npx nodemon Server.js` för att öppna porten
24. "Commit" och "Push" alla som har gjort och ändrats
25. Skapa funktioner som baserad på CRUD operationer: Create - POST `app.post ('/MyToDoLists')` för att skapa ny TODO list
26. Read - GET - `app.get('/MyToDoLists')` och `app.get ( '/MyToDoLists/:id' )` för att hämta alla TODO listor samt hämta bara en list med användning av id
27. Update - PUT - `app.put ('/MyToDoLists')` för att uppdatera en list
28. Delete - DELETE - `app.delete ('/MyToDoLists/:id')` för att radera en list med användning av id
29. "Commit" och "Push" alla som har gjorts och ändrats
30. Skapa en global variabel `let currentId = 5`. Det menar att det kommande ID nummret är 5.
31. Skapa `incrementCurrentIdByOne ()` funktion
32. Skapa en global variabel för egen databas som t.ex. `let myToDoListsDatabase [{....}]`
33. Skapa en fel meddelande funktion som t.ex. `messageMyToDoListNotFound ()`
34. Skapa en godkänd meddelande funktion med parameter "message" som t.ex. `messageMyToDoListSuccess ( message )`
35. Skapa `getMyToDoListIndex ( id )` funktion med parameter "id" och använd for loop på denna
36. Skapa `createNewMyToDoList ( listData )` funktion med parameter "listData" från "let list {}" variablen inne funktion.
37. Skapa `getAllMyToDoLists ()` funktion som ska returnera data från "myToDoListsDatabase"
38. Skapa `getMyToDoListById ( id )` funktion med parameter "id" med local variabel "index" och använd `if - else statement`
39. Skapa `updateMyToDoList (listData)` funktion med en parameter listData och inne funktionen skapa en variabel som kallas "index" och använd `if - else statement`
40. Skapa `deleteMyToDoList (index)` funktion med en parameter "index" och använd `splice` för att radera en data
41. "Commit" och "Push" alla som har gjorts och ändrats på github


#### TEST API med INSOMNIA

1. Skapa en ny `Design Document` och redigera titels namn till projekts namn men spara dokumentets "extension - .yaml" som t.ex. `My-TODO-List-Inlämning.yaml`
2. Kontrollera servern om det lever genom att skapa en GET request i "DEBUG" med namn  "My API is Alive!" 
3. I mitten av GET och knappen "Send" klistra in webbadressen eller url med portnumret som används för servern
4. Tryck på "Send" knappen och då synas ett meddelande "My API is alive!" i "preview"
5. Då testa denna genom att trycka på `TEST` knappen vid "DEBUG" och skapa en `New Test Suite` med namn "Test my API", efteråt tryck på `New Test` knappen och lägg till eget "test" namn som t.ex. "GET API is Alive!" då välj vilken "request" ska testa som t.ex. `[GET] My API is Alive!` och tryck på `Run Tests` knappen. Om "request" har inga fel så skulle bli den godkänd eller "Passed"
6. Skapa två tester för "GET AllToDoLists" som skickas rätt information (200) samt fel (404) om förväntas "fail" när det kommer felaktig request
7. Skapa två tester för "GET ToDoListById" som skickas rätt information (200) samt fel (404) om förväntas "fail" när det kommer felaktig request
8. Skapa två tester för "POST ToDoList" som skickas rätt information (200) samt fel (404) om förväntas "fail" när det kommer felaktig request
9. Skapa två tester för "PUT ToDoList" som skickas rätt information (200) samt fel (404) om förväntas "fail" när det kommer felaktig request
10. Skapa två tester för "DELETE ToDoListById" som skickas rätt information (200) samt fel (404) om förväntas "fail" när det kommer felaktig request
11. Exportera Insomnia json data till projektsmappen


#### FRONTEND

1. Skapa en "wireframe" and "prototype"
2. Skapa egen "favicon" och lägg till i react och lägg till egen "favicon.ico" i "public" mappen
3. Skapa en ny terminal och redigera namn till `Frontend`
4. Skapa en "frontend" mapp genom att skriva `npx create-react-app frontend` i frontend terminalen
5. Skriv `cd frontend` i frontend terminalen för att ändra directory mapp till frontend
6. Skriv `npm start` för att starta porten
7. Rensa bort onödiga filer och koder
8. "Commit" och "Push" ändringar till github
9. Installera `Axios` genom att skriva `npm install axios` i terminalen
10. Installera `react-json-to-table` genom att skriva `npm install react-json-to-table` i terminalen.
11. "Commit" och "Push" alla som har gjorts och ändrats
12. Redigera `App.js` och `index.html`
13. Skapa en mapp med namn `img` under "frontend" mapp och klistra in "Wireframe" och "Prototype" under "img" mapp
14. Strukturera genom att skapa följande mappar; `components` och `utils` inom "src" mapp
15. Inom "utils" mapp, skapa mappar med namn `global` och `images`
16. Lägg till TODO list logo och annan bild som "copyright" i "images" mapp
17. Skapa `css` mapp samt `fonts` inom "global" mapp
18. Under "css" mapp, skapa `global.css`
19. Under "fonts" mapp, klistra in de typsnitten som ska användas
20. Under utils, skapa en `api` mapp och inom den skapa en javascript fil med namn `TODOsApi`
21. Importera `Axios` till "TODOsApi.js" fil
22. Installera "fontawesome icons"
23. "Commit" och "Push" alla som har gjorts och ändrats
24. Skapa en javascript fil som kallas `Navbar.js` under components
25. Importera `global.css` från `utils/global/css` i "Navbar.js"
26. Importera logo från `utils/images` i "Navbar.js"
27. I Navbar.js, skapa `Navbar ()` funktion och lägg till `export default` innan funktionen och returnera med egen logo
28. Skapa en javascript som kallas `SocialMedias` under components och importera `React` från react, `FontAwesomeIcon` samt `global.css`
29. I SocialMedias fil, skapa en funktion med samma namn som filen och exportera det genom att skriva export default innan funktionen
30. Importera alla tillgängliga social medias som t.ex. Facebook, och de andra
31. Skapa `Footer.js` fil under components mapp och gör en funktion med samma namn som filen
32. I `Footer.js` fil, importera `React`, `SocialMedias`, `copyright image` and `global css`
33. Exportera Footer.js fil genom att skriva export default innan funktionen
34. Skapa en `Input.js` fil under components och importera `React`, `JsonToTable`, `TODOsApi` och `global css`
35. Skapa en funktion med samma namn som filen och exportera det genom att lägga till export default innan funktionen
36. Ordna "useState" variabler och "funktioner" utifrån `CRUD` operationer
37. "Commit" och "Push" alla som har gjorts och ändrats till github
38. `C - Create - POST`: Skapa useState variabler för egenskaper som `TODO`, `STATUS` och `ASSIGNED TO`
39. Skapa en funktion med ett namn och parameters som följande: `createMyToDoList (listToDo, listStatus, listAssignedTo)`
40. De nämnda parametrarna ovan ska hämtas från en lokal variabel med namn `payload` som behöver skapas inne funktionen.
41. Sen lägg till `http.post ( '/MyToDoLists', payload )` efter variabeln inne funktionen för att addera data och skicka denna till serverns databas till användarens webbläsare.
42. Skapa en `div` med className `create__list__container` och skapa three input taggar för egenskaper "TODO", "STATUS" och "ASSIGNED TO".
43. Skapa en "button" med namn `CREATE` med onClick som lika med en anonym funktion som ska returnera den följande: `createMyToDoList (toDo, status, assignedTo)`
44. `R - Read - GET`: Skapa en useState variabel för att hämta alla listor, två variabler för att hämta en list med användning av id
45. Skapa en funktion för att hämta alla TODO listor med namn `getAllMyToDoLists()`, efteråt lägg till `http.get ('/MyToDoLists')` för att hämta alla listors uppgifter från serverns databas till användarens webbläsare
46. Skapa en "div" med className `get__container__list` och en input tag
47. Skapa en button med namn `OPEN TODO LISTS` med onClick som lika med funktionens namn utan parentes och lägg till `<JsonToTable json={ displayAllToDos }/>` efter button
48. Skapa en funktion med namn och en parameter som t.ex. `getMyToDoListById (listId)` och lägg till `http.get (`/MyToDoLists/${listId}` )` för att hämta en list data med användning av id från serverns databasen till användarens webbläsare
49. Skapa en input tag och en button med namn `CHECK` med onClick som lika med en anonym funktion och ska returnera det själva funktions namnet `getMyToDoListById` med parameter `toDoId` som hämtades från useState ovan
50. Skapa en `JsonToTable` tag som t.ex. `<JsonToTable json= { displayOneToDo }>` och lägg till i sist efter "button"
51. `U - Update - PUT`: Skapa fyra useState variabler för egenskaper som .t.ex. `const [ updateId, setUpdateId ] = useState ()`, `const [ updateToDo, setUpdateToDo ] = useState ()`, `const [ updateStatus, setUpdateStatus ] = useState ()`, `const [ updateAssignedTo, setUpdateAssignedTo ] = useState ()`
52. Skapa en funktion med namn `updateMyToDoList` med parametrar `(listId, listToDo, listStatus, listAssignedTo)`
53. Skapa en lokal variabel `payload` med objekt som har den följande data `id: listId, todo: listTodo, status: listStatus, assignedTo: listAssignedTo` och de "datas" ska lägga till som parametrar i funktionen
54. Sen lägg till `http.put ( '/MyToDoLists', payload )` efter `console.log (payload)` inne funktionen för att uppdatera en list data i databasen till användarens webbläsare.
55. Skapa en "div" med className `update__list__container` och inne skapa input taggar för de fyra egenskaperna `ID, TODO, STATUS, ASSIGNED TO`
56. Skapa en button med namn `UPDATE` med onClick som lika med en anonym funktion som ska returnera den själva funktionen med parametrar `updateId, updateToDo, updateStatus, updateAssignedTo`
57. `D - Delete - DELETE`: Skapa en useState variabel som t.ex. `const [ id, setId ] = useState ()`
58. Skapa en funktion för delete med namn och parameter som t.ex. `deleteMyToDoListById (listId)`
59. Efteråt lägg till `http.delete ( `/MyToDoLists/${listId}` )` för att radera en list data från serverns databasen till användarens webbläsare
60. Då skapa en "div" med className `delete__container__list` och en input tag för delete
61. Skapa en "button" med `DELETE` namn och onClick som är lika med en anonym funktion som ska returnera den själva funktion med parameter `id` som t.ex. `deleteMyToDoListById (id)`
62. Skapa en useState variabel for rensa button som t.ex. `const [ resetInput, setResetInput ] = useState ()`
63. Skapa en arrow funktion med namn `handleResetInput` med parameter `(event)` som ska rensa alla "inputs data"
64. Skapa en "div" med className `clear__btn__container` och en "button" med namn `CLEAR` och onClick som är lika med en anonym funktion med en parameter `(event)` och returnera den själva funktion med en parameter `resetInput` som t.ex. `handleResetInput (resetInput)`
65. "Push" och "Commit" alla som har gjorts och ändrats till github
66. I `App.js` importera `React, Navbar, Input, Footer, och global css` från deras respektiva mappar.
67. I funktion App, returnera en "div" med de alla filerna som importerades från components map
68. "Commit" och "Push" alla som har gjorts och ändrats till github