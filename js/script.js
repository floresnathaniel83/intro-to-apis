//https://congress.api.sunlightfoundation.com/legislators?apikey=f91d0c7eb80b49519bac4b46eaa1da5e



var congressionalPromise = $.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=f91d0c7eb80b49519bac4b46eaa1da5e")

var bodyNode = document.querySelector("body")
//var divNode = document.querySelector(".legislatorContainer")


var handleData = function (data) {

	console.log(data)

	legislatorArray = data.results	
	
	var htmlString = " " 
	

	for(var i = 0; i < data.results.length; i++) {


		
		var legObject = legislatorArray[i]

		htmlString += "<div class = 'legislatorContainer'>" 
		htmlString += "<h1 class ='name'>" + legObject.first_name + " " + legObject.last_name + "</h1>"
		htmlString += "<h2 class = 'title'>" + legObject.title + "--" + legObject.party + "-" + legObject.state_name + "</h2>"
		htmlString += 	"<ul class = 'contactList'>" + 
						"<li id = 'email'>" + "email:" + " " + legObject.oc_email + "</li>" + 
						"<li id = 'website'>" + "website:" + " " + legObject.website + "</li>" + 
						"<li id = 'facebook'>" + "facebook:" + " " + legObject.facebook_id + "</li>" + 
						"<li id = 'twitter'>" + "twitter:" + " " + legObject.twitter_id + "</li>" + 
						"</ul>"
		htmlString += "<p class = 'term'>" + "term end:" + " " + legObject.term_end + "</p>"
		htmlString += "</div>"

		/*first line
		var h1Node = document.createElement("h1")
		var firstName = data.results[i].first_name
		var lastName = data.results[i].last_name
		h1Node.textContent = firstName + " " + lastName
		var divNode = document.createElement("div")
		divNode.appendChild(h1Node)
		bodyNode.appendChild(divNode)

		second line 

		var h2Node = document.createElement("h2")
		var titleName = data.results[i].title
		var partyName = data.results[i].party
		var stateName = data.results[i].state_name
		h2Node.textContent = titleName + "--" + partyName + "-" + stateName
		var divNode = document.createElement("div")
		divNode.appendChild(h2Node)
		bodyNode.appendChild(divNode)

		create a list
		
		var ulNode = document.createElement("ul")
		var email = data.results[i].oc_email
		
		var facebook = data.results[i].facebook_id
		var twitter = data.results[i].twitter_id
		
		liNode.textContent = email
		ulNode.appendChild(liNode)
		bodyNode.appendChild(ulNode)

		var ulNode = document.createElement("ul")
		var website = data.results[i].website
		var liNode = document.createElement("li")
		liNode.textContent = website
		ulNode.appendChild(liNode)
		bodyNode.appendChild(ulNode)

		var ulNode = document.createElement("ul")
		*/
		
	}
	
	bodyNode.innerHTML = htmlString
	

}

congressionalPromise.then(handleData)