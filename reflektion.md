#Reflektion labb 3
####Vad finns det för krav du måste anpassa dig efter i de olika API:erna?
I Google Maps API var jag främst tvungen att använda mig av en API-nyckel som jag kunde få ut från googles api-konsol i mitt Google-konto.
I SRs API fanns det användarvillkor som sa att materialet som jag använder inte får “användas på ett sådant sätt att det skulle kunna skada Sveriges Radios oberoende eller trovärdighet”. 

####Hur och hur länga cachar du ditt data för att slippa anropa API:erna i onödan?
I nuläget har jag cachningstiden inställd på 5 minuter. Cachningen fungerar som så att jag vid varje anrop mot SR:s API även inkluderar en tidsstämpel i json-filen som sparas undan med all data. När ett anrop sedan görs från en klient kontrollerar servern för vilket värde tidsstämpeln har i den cachade filen. Om detta värde inte överskrider cachningstiden, så presenteras den redan sparade filen för användaren, i annat fall görs ett nytt anrop mot SR:s API.

####Vad finns det för risker med din applikation?
Ur användningssynpunkt: I nuläget finns det en potentiell risk att användaren antar att nya händelser kommer att poppa upp konstant. Då man ju måste uppdatera för att få en ny trafikhändelse, kan detta missförstånd möjligtvis ställa till problem då alla användaren inte är uppdaterade med de senaste händelserna.

####Hur har du tänkt kring säkerheten i din applikation?
Jag gör nödvändig filtrering av utdata, med hjälp ut av strip_tags i mitt php-script. Utan detta riskerar man att illasinnade individer på andra sidan APIet skickar ut kod istället för text-strängar, som sen exempelvis kan bete sig som länkar och dirigera om användaren till helt andra webbplatser.
I min Google-konsol har jag även begränsat användningen av min API-nyckel till att bara användas från domänen bigmachine.se. Detta för att inte någon ska kunna kopiera api-nyckeln från min html-kod för att själv använda den.

####Hur har du tänkt kring optimeringen i din applikation?
Jag har valt att göra det mesta av jobbet med hämtning av data från SR, samt soretering och JSON-arbete, på servern. Detta då vi inte vill att klienten ska behöva jobba detta, utan ska få serverat datan för att smidigast kunna användas.
Jag använder mig även av CDN inlänkning av exempelvis Bootstrap, för att göra snabbare anrop.
