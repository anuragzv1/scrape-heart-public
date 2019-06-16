ScrapeHeart
==============

ScrapeHeart -  scrapes results from various search engines, results of custom tasks and returns the status of API's to Scrape-mind.

Before running:

1. Make sure Scrape-Mind is running else the app will exit.

RUN APP:
```
npm install 
node app.js

```

SEARCH API ENDPOINTS :
```
GOOGLE :http://container_address/se/google
BING: http://container_address/se/bing
INFOSPACE:http://container_address/se/infospace
BAIDU:http://container_address/se/baidu
DUCKSUCKGO:http:http://container_address/se/duckduckgo
```

FORMAT OF SEARCH REQUEST:
Contnent Type : ```application/json```
Request body : 
```
{
	"debug":"false",
	"verbose":"false",
	"keywords":"_____keywords_here_____",
	"pages":1
	
}
```
Custom task API : ``` http://machine_address/custom ```
Custom api request body : 
```
{
	"query":"pwd"
}
```
Content Type : ``` application/json```

System resource API : ```http://machine_address/systemres```
Content type : ``` Application/json ```
request body : empty





