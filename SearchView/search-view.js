!function(){"use strict";function e(e,t,o,c){function n(){""!==r.query&&t({method:"GET",url:"https://api.vk.com/method/newsfeed.search?q="+r.query+"&extended=1&count=10&access_token=69e59a8669e59a866955a1a68569bd0750669e569e59a86315db2ec80d566f1231a3c27"}).then(function(e){e=e.data.response,console.log(e),c.posts=e,o.path("/results")},function(e){console.log(e)})}var r=this;r.searchPosts=n,r.query=""}angular.module("ngVkNewsfeedSearch").config(["$routeProvider",function(e){e.when("/",{templateUrl:"SearchView/search-view.html",controller:"SearchViewCtrl",controllerAs:"vm"})}]).controller("SearchViewCtrl",["$scope","$http","$location","Database",e])}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaFZpZXcvc2VhcmNoLXZpZXcuanMiXSwibmFtZXMiOlsiU2VhcmNoVmlld0N0cmwiLCIkc2NvcGUiLCIkaHR0cCIsIiRsb2NhdGlvbiIsIkRhdGFiYXNlIiwic2VhcmNoUG9zdHMiLCJ2bSIsInF1ZXJ5IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInBhdGgiLCJ0aGlzIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyJdLCJtYXBwaW5ncyI6IkNBR0MsV0FDRyxZQWVBLFNBQVNBLEdBQWVDLEVBQVFDLEVBQU9DLEVBQVdDLEdBTTlDLFFBQVNDLEtBQ1ksS0FBYkMsRUFBR0MsT0FDUEwsR0FDSU0sT0FBUSxNQUNSQyxJQUFLLCtDQUFpREgsRUFBR0MsTUFBUSw4R0FDbEVHLEtBQUssU0FBeUJDLEdBQzdCQSxFQUFXQSxFQUFTQyxLQUFLRCxTQUV6QkUsUUFBUUMsSUFBSUgsR0FFWlAsRUFBU1csTUFBUUosRUFDakJSLEVBQVVhLEtBQUssYUFDaEIsU0FBdUJMLEdBQ3RCRSxRQUFRQyxJQUFJSCxLQWxCcEIsR0FBSUwsR0FBS1csSUFFVFgsR0FBR0QsWUFBY0EsRUFDakJDLEVBQUdDLE1BQVEsR0FqQmZXLFFBQVFDLE9BQU8sc0JBRVZDLFFBQVEsaUJBQWtCLFNBQVNDLEdBQ2hDQSxFQUFlQyxLQUFLLEtBQ2hCQyxZQUFhLDhCQUNiQyxXQUFZLGlCQUNaQyxhQUFjLFVBSXJCRCxXQUFXLGtCQUFtQixTQUFVLFFBQVMsWUFBYSxXQUFZeEIiLCJmaWxlIjoiU2VhcmNoVmlldy9zZWFyY2gtdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBydXN0YW1zYWlkb3Ygb24gMDIuMDMuMTcuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ25nVmtOZXdzZmVlZFNlYXJjaCcpXG5cbiAgICAgICAgLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdTZWFyY2hWaWV3L3NlYXJjaC12aWV3Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdTZWFyY2hWaWV3Q3RybCcsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfV0pXG5cbiAgICAgICAgLmNvbnRyb2xsZXIoJ1NlYXJjaFZpZXdDdHJsJywgWyckc2NvcGUnLCAnJGh0dHAnLCAnJGxvY2F0aW9uJywgJ0RhdGFiYXNlJywgU2VhcmNoVmlld0N0cmxdKTtcblxuXG4gICAgZnVuY3Rpb24gU2VhcmNoVmlld0N0cmwoJHNjb3BlLCAkaHR0cCwgJGxvY2F0aW9uLCBEYXRhYmFzZSkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZtLnNlYXJjaFBvc3RzID0gc2VhcmNoUG9zdHM7XG4gICAgICAgIHZtLnF1ZXJ5ID0gJyc7XG5cbiAgICAgICAgZnVuY3Rpb24gc2VhcmNoUG9zdHMoKSB7XG4gICAgICAgICAgICBpZiAodm0ucXVlcnkgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS52ay5jb20vbWV0aG9kL25ld3NmZWVkLnNlYXJjaD9xPScgKyB2bS5xdWVyeSArICcmZXh0ZW5kZWQ9MSZjb3VudD0xMCZhY2Nlc3NfdG9rZW49NjllNTlhODY2OWU1OWE4NjY5NTVhMWE2ODU2OWJkMDc1MDY2OWU1NjllNTlhODYzMTVkYjJlYzgwZDU2NmYxMjMxYTNjMjcnXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UuZGF0YS5yZXNwb25zZTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIERhdGFiYXNlLnBvc3RzID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9yZXN1bHRzJyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KCkpOyJdfQ==
