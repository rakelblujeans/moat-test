From: <input type="text" placeholder="airport name"
		ng-model="data.fromAirport"
		ng-keyup="$event.keyCode == 13 && doSearch()" />

To: <input type="text" placeholder="airport name"
		ng-model="data.toAirport"
		ng-keyup="$event.keyCode == 13 && doSearch()" />
